const express = require("express");
const routes = express.Router();
const User = require("../model/emp");

routes.get("/list", (req, res) => {
  console.log(User);
  User.findAll().then(users => {
    let data = JSON.stringify(users, null, 4);

    console.log("All users:", JSON.stringify(users, null, 4));
  });
  res.send([
    {
      firstname: "Srinvias",
      lastname: "k"
    },
    {
      firstname: "sathish",
      lastname: "k"
    }
  ]);
  //res.send(data);
});

module.exports = routes;
