// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const itemController = require("../../controllers/api/itemsController");

router.post("/", itemController.addItem); /* GET - home page */
router.get("/version", function (req, res) {
  res.send({
    message: "API VERSION 1.0",
  });
}); /* GET - search results */

module.exports = router;
