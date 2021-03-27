const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

const db = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected...");
});

router.post("/register", (req, res) => {
  let sql = `insert into signup value('${req.body.email}','${req.body.password}') `;
  db.query(sql, (err, result) => {
    if (err) throw err;
  });
});

router.post("/login", (req, res) => {
  console.log("login reached");
  let sql = `select password from signup where email = '${req.body.email}' `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (req.body.password == result[0].password) {
      res.send(true);
    } else res.send(req.body);
  });
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

router.get("/ViewArticle/:ArticleId", (req, res) => {
  let sql = `select * from article where id = ${req.params.ArticleId}`;
  console.log(sql);
  db.query(sql, (err, result) => {
    console.log(result);

    if (err) throw err;
    res.send(result);
  });
});

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
  let sql = `select * from hospital where id = ${req.params.HospitalId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get("/ViewDoctor/:DoctorId", (req, res) => {
  //let id = JSON.stringify(req.params);
  //res.send(req.params);
  let sql = `select * from doctor where id = ${req.params.DoctorId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
