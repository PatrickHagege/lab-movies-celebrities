const express = require("express");
const router = express.Router();

const Celebrity = require("./../models/Celebrity.model");
const Movie = require("./../models/Movie.model");

/* GET home page. */

router.get("/", (req, res) => {
  res.render("index");
});

/* GET dashboard page  */

module.exports = router; // MANDATORY
