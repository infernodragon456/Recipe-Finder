import { Router } from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import recipeModel from "../models/recipes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const homeRouter = Router();
homeRouter.get('/', (req, res, next) => {
  // console.log("get route called");
  // recipeModel.find({}).sort({Votes: -1})
  //   .limit(1)
  //   .then(recipes => {
  //     res.render('main', { recipe: recipes });
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  res.render('home')
});




export default homeRouter;
