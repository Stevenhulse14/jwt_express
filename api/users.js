const express = require("express");
const jwt = require("jsonwebtoken");
// import dotenv you can also use process.env.JWT_SECRET

const { client, createNewUsers } = require("../client");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
  } catch (error) {
    console.error(error);
  }
});

router.post("/login", (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
  }
});
client.connect();
module.exports = router;
