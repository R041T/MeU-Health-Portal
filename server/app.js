const express = require("express");
// const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const helmet = require("helmet");
const csrf = require("csurf");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
const app = express();

//app.use(morgan("combined"));

// var corsOptions = {
//   origin: "http://localhost:8080",
//   optionsSuccessStatus: 200,
// };
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const posts = require("./routes/api/posts");

var db = require("./routes/api/database_conn");
// const db = mysql.createConnection({
//   host: process.env.RDS_HOSTNAME,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   port: process.env.RDS_PORT,
//   database: process.env.RDS_DB_NAME,
//   multipleStatements: true,
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Mysql connected...");
// });

// db.end();

const IN_PROD = process.envNODE_ENV === "production";
TWO_HOURS = 1000 * 60 * 60 * 2;
SESS_LIFETIME = TWO_HOURS;

var options = {
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: process.env.RDS_PORT,
};

var sessionStore = new MySQLStore(options, db);
app.use(
  session({
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: false,
    },
    store: sessionStore,
    name: process.env.SESS_NAME,
    secret: process.env.SESS_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
//const csrfProtection = csrf();
//app.use(csrfProtection);

app.use("/api/", posts);

const port = process.env.PORT || 8081;
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}!`)
);

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  console.log("connected");
  socket.on("SEND_MESSAGE", function (data) {
    console.log("message sent");
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
