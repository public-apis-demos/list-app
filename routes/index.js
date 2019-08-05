const express = require("express");
const routes = express.Router();
const User = require("../model/emp");

routes.get("/list", async (req, res) => {
  // console.log(User);
  //  User.findAll().then(users => {
  //   let data = JSON.stringify(users, null, 4);

  //   console.log("All users:", JSON.stringify(users, null, 4));

  // });
  let data = await User.findAll();
  res.send(data);
});

module.exports = routes;
