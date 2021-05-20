const express = require("express");
const app = express();

const route = require("./routes/route1");

app.use(express.json());

const libDataMobel = require("./models/user.model");

app.use("/", route);

// app.listen(8000);

module.exports = app;
