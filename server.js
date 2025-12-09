const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
