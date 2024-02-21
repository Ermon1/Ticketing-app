const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("hi there");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!!!!!!!");
});
