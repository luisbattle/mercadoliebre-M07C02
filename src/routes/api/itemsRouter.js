// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const itemController = require("../../controllers/api/itemsController");

router.post("/", itemController.addItem); /* GET - home page */
router.delete("/", itemController.removeItem);

module.exports = router;
