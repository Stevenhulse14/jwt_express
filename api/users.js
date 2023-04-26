const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// import dotenv you can also use process.env.JWT_SECRET

const { client, createNewUsers, fetchByUsername } = require("../client");

const router = express.Router();
// /api/user/register
router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(403).send("Error username or password is invalid");
    } else if (username.length < 8) {
      res
        .status(403)
        .send("Error username is under 8 characters please try again! ");
    } else if (password.length < 8) {
      res
        .status(403)
        .send("Error Password is under 8 characters please try again ;) ");
    } else {
      const JWT_ = jwt.sign(req.body, process.env.JWT_SECRET);
      const response = jwt.verify(JWT_, process.env.JWT_SECRET);
      await createNewUsers(req.body);

      res.send(JWT_);
    }
  } catch (error) {
    console.error(error);
  }
});

router.post("/candidate", async (req, res, next) => {
  try {
    console.log(Object.keys(req));
    const token = req.headers.authorization.split(" ")[1];
    const DecyptedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(DecyptedToken, DecyptedToken.username);
    const user = await fetchByUsername(DecyptedToken.username);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
});

client.connect();
module.exports = router;
