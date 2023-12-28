const express = require("express");
const router = express.Router();

//index - users
router.get("/", (req, res) => {
  res.send("GET for user");
});

//Show - users
router.get("/:id", (req, res) => {
  res.send("GET for user ID");
});

//post - user
router.post("/:id", (req, res) => {
  res.send("POST for users");
});

//delete - user
router.delete("/:id", (req, res) => {
  res.send("DELETE for user ID");
});

module.exports = router;
