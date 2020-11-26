module.exports = app => {
  app.get("/showtable", (req, res) => {
    let sql = "select * from signup";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("table created...");
    });
  });
};
