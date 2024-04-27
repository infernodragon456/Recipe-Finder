import app from "./app.js";
import { connectToDatabase, disconnectFromDatabase } from "./connection.js";
import recipeModel from "./models/recipes.js";
import router from "./router.js";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import bodyParser from "body-parser";
import jsdom from "jsdom";
import express from "express";
const { JSDOM } = jsdom;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3001;

config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server opened and connected to database!")
    );
  })
  .catch((err) => console.log(err));

app.get("/getRecipes", (req, res) => {
  recipeModel
    .find()
    .then((indianfoodrecipes) => res.json(indianfoodrecipes))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// app.get("/about", (req, res) => {
//   res.render("about");
// });

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

//
app.use("/", router);
