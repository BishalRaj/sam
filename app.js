const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

require("./config/connection");

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const indexRoute = require("./routes/index");

app.use("/", indexRoute);

module.exports = app;
