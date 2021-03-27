const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

var SqlString = require("sqlstring");

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

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

const server = app.listen(8081, function () {
  console.log("server running on port 8081");
});

app.post("/register", (req, res) => {
  let sql = `insert into signup value('${req.body.email}','${req.body.password}') `;
  db.query(sql, (err, result) => {
    if (err) throw err;
  });
});

app.post("/login", (req, res) => {
  let sql = `select password from signup where email = '${req.body.email}' `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (req.body.password == result[0].password) {
      res.send(true);
    } else res.send(req.body);
  });
});

app.get("/Articles", (req, res) => {
  let sql = `select * from article `;
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/Doctors", (req, res) => {
  let sql = `select * from doctor `;
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/Hospitals", (req, res) => {
  let sql = `select * from hospital `;
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/ViewArticle/:ArticleId", (req, res) => {
  let sql = `select * from article where id = ${req.params.ArticleId}`;
  console.log(sql);
  db.query(sql, (err, result) => {
    console.log(result);

    if (err) throw err;
    res.send(result);
  });
});

app.get("/ViewArticle/:ArticleId", (req, res) => {
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

app.get("/ViewHospital/:HospitalId", (req, res) => {
  //let id = JSON.stringify(req.params);
  //res.send(req.params);
  let sql = `select * from hospital where id = ${req.params.HospitalId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/ViewDoctor/:DoctorId", (req, res) => {
  //let id = JSON.stringify(req.params);
  //res.send(req.params);
  let sql = `select * from doctor where id = ${req.params.DoctorId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  console.log(socket.id);
  socket.on("SEND_MESSAGE", function (data) {
    io.emit("MESSAGE", data);
  });
});
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}
