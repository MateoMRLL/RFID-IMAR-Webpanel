const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "mateo",
  password: "password123",
  database: "data_logs",
});

app.use(cors());
app.use(express.json());

// Get all logs
app.get("/logs", (req, res) => {
  const sql = "SELECT * FROM serial_logs";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

// Get logs by antenna
app.get("/logs/antenna/:antenna", (req, res) => {
  const { antenna } = req.params;
  const sql = "SELECT * FROM serial_logs WHERE antenna = ?";

  db.query(sql, [antenna], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

// Get logs by tag (data field)
app.get("/logs/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const sql = "SELECT * FROM serial_logs WHERE data = ?";

  db.query(sql, [tag], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
