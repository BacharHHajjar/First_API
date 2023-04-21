const express = require("express");
const cors = require("cors");
const { log } = require("console");
const parser = require("body-parser");

const app = express();
app.use(parser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(5000);
