const cors = require("cors");
const express = require("express");
const bodyParserer = require("body-parser");
const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//middleware
app.use(express.json());
app.use(bodyParserer.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
