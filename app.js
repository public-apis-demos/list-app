const express = require("express");
const sequelize = require("./model/connection");
const exphbs = require("express-handlebars");
const empRotues = require("./routes");
const userService = require("./services/UserService");

const app = express();
const port = 3000;

// Handlebars Middleware

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

//sequelize.mode

// connction of db
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// set index.html

app.get("/", async (req, res) => {
  let data = await userService.getAllUser();
  res.render("index", { data: data });
});

// set api emplye
app.use("/api", empRotues);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
