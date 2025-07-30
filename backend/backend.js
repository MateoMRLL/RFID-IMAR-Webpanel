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

app.get("/logs/search", (req, res) => {
  const { tag, antenna } = req.query;

  let sql = "SELECT * FROM serial_logs WHERE 1=1";
  let params = [];

  // Add tag filter if provided (using LIKE for partial matching)
  if (tag && tag !== "") {
    sql += " AND data LIKE ?";
    params.push(`%${tag}%`);
  }

  // Add antenna filter if provided
  if (antenna && antenna !== "All") {
    sql += " AND antenna = ?";
    params.push(antenna);
  }

  console.log("Combined search - SQL:", sql);
  console.log("Combined search - Params:", params);

  db.query(sql, params, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json(err);
    }

    console.log(`Found ${data.length} results for combined search`);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
