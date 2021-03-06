let express = require("express");

const router = express.Router();

const burger = require("../models/burgers");

router.get("/", (req, res) => {
  burger.all(data => {
    let burgObj = {
      burgers: data,
    };
    console.log(burgObj);
    res.render("index", burgObj);
  });
});

router.post("/api/burgers", (req, res) => {
    // Column names
  burger.create(["burger_name", "devoured"],
      // Properties from object in POST
      [req.body.burger_name, req.body.devoured], result => {
        // Send back the ID of the new burger
      res.json({ id: result.insertId });
      });
  });
  
  
  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    burgers.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router