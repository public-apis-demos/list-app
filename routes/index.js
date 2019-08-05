const express = require("express");
const routes = express.Router();
const User = require("../model/emp");

routes.get("/list", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

module.exports = routes;
