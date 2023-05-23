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

app.post("/api", (req, res) => {
  console.log(req.body);
  let response = {};
  response.status = "Ok";
  response.body = req.body.nameOnCard;
  res.send(response);
});

app.get("/api", (req, res) => {
  res.send("OK");
});

app.listen(5000, () => console.log("Server running on port 5000"));
