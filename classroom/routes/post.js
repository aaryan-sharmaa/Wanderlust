const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
  res.send("GET for post");
});

//Show
router.get("/:id", (req, res) => {
  res.send("GET for post ID");
});

//post
router.post("/:id", (req, res) => {
  res.send("POST for posts");
});

//delete
router.delete(" /:id", (req, res) => {
  res.send("DELETE for post ID");
});

module.exports = router;