const express = require("express");
// const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/posts");

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

app.use("/api/", posts);

// const io = require("socket.io")(server);

// io.on("connection", function (socket) {
//   console.log(socket.id);
//   socket.on("SEND_MESSAGE", function (data) {
//     io.emit("MESSAGE", data);
//   });
// });
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Server started on port ${port}!`));
