let express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("*", (req, res) => {
  burger.all((data) => {
    let burgObj = {
      burgers: data,
    };
    console.log(burgObj);
    res.render("index", burgObj);
  });
});

module.exports = router