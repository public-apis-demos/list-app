const express = require("express");
const Sequelize = require("sequelize");
const exphbs = require("express-handlebars");
const empRotues = require("./routes");

const app = express();
const port = 3000;

// Handlebars Middleware

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// database connction
const sequelize = new Sequelize("emp", "sa", "Password@123", {
  host: "localhost",
  dialect: "mssql"
});
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

app.get("/", (req, res) => {
  res.render("index");
});

// set api emplye
app.use("/api", empRotues);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
