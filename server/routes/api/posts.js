const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
const csrf = require("csurf");
const csrfProtection = csrf();

var db = require("./database_conn");
// const db = mysql.createConnection({
//   host: process.env.RDS_HOSTNAME,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   port: process.env.RDS_PORT,
//   database: process.env.RDS_DB_NAME,
//   multipleStatements: false,
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Mysql connected...");
// });

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // console.log(salt);
    // console.log(hashedPassword);
    let sql = `insert into signup value(?,?) `;
    db.query(sql, [req.body.email, hashedPassword], (err, result) => {
      if (err) throw err;
    });
    let sql2 = `select email from signup where email = ? `;
    db.query(sql2, [req.body.email], (err, result) => {
      if (err) throw err;
      console.log(req.session);
      if (!req.session) {
        req.session.UserId = result[0].email;
      }
    });
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/login", (req, res) => {
  try {
    //console.log("login reached");
    let sql = `select email, password from signup where email = ? `;
    db.query(sql, [req.body.email], async (err, result) => {
      if (err) throw err;
      console.log(req.body.password);
      console.log(result[0].password);
      console.log(bcrypt.compare(req.body.password, result[0].password));
      if (await bcrypt.compare(req.body.password, result[0].password)) {
        console.log(req.session);
        console.log("in here");
        if (!req.session.UserId) {
          req.session.UserId = result[0].email;
          res.send({
            authenticated: true,
            userId: req.session.UserId,
          });
        }
      } else res.send(false);
      //console.log(req.body.password);
      //console.log(result[0].password);
      // console.log(req.csrfToken);
    });
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/Articles", (req, res) => {
  let sql = `select * from article `;
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get("/Doctors", (req, res) => {
  let sql = `select * from doctor `;
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get("/Hospitals", (req, res) => {
  let sql = `select * from hospital `;
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

// router.get("/ViewArticle/:ArticleId", (req, res) => {
//   let sql = `select * from article where id = ${req.params.ArticleId}`;
//   console.log(sql);
//   db.query(sql, (err, result) => {
//     console.log(result);

//     if (err) throw err;
//     res.send(result);
//   });
// });

router.get("/ViewArticle/:ArticleId", (req, res) => {
  let sql = `select * from article where id = ?`;
  console.log(sql);
  db.query(sql, [req.params.ArticleId], (err, result) => {
    console.log(result);

    if (err) throw err;
    res.send(result);
  });
});

// app.get("/ViewArticle/:ArticleId", (req, res) => {
//   var id = req.params.ArticleId;
//   let sql = `select * from article where id = ` + SqlString.escape(id);
//   console.log(sql);
//   db.query(sql, (err, result) => {
//     console.log(result);

//     if (err) throw err;
//     res.send(result);
//   });
// });

router.get("/ViewHospital/:HospitalId", (req, res) => {
  //let id = JSON.stringify(req.params);
  //res.send(req.params);
  let sql = `select * from hospital where id = ?`;
  db.query(sql, [req.params.HospitalId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get("/ViewDoctor/:DoctorId", (req, res) => {
  //let id = JSON.stringify(req.params);
  //res.send(req.params);
  let sql = `select * from doctor where id = ?`;
  db.query(sql, [req.params.DoctorId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/logout", (req, res) => {
  try {
    req.session.destroy(function (err) {
      res.send({
        authenticated: false,
        userId: null,
      });
    });
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/authcheck", (req, res) => {
  try {
    //console.log(!req.session.UserId);
    //console.log("here");
    if (req.session.UserId) {
      res.send({
        authenticated: true,
        userId: req.session.UserId,
      });
    } else {
      res.send({
        authenticated: false,
        userId: null,
      });
    }
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
