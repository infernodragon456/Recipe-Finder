import bodyParser from 'body-parser';
import { Router } from "express";
import recipeModel from '../models/recipes.js';

var urlencodedParser = bodyParser.urlencoded({ extended: true })
const queryRouter = Router();
queryRouter.get("/", urlencodedParser ,(req, res, next) => {
    const body_text = req.query
    let page = req.query.page_number || 0
    page = +page
    const recipesPerPage = 10
    // console.log(body_text)
    // console.log(page)
    let ingredients = []
    ingredients.push(body_text.searchquery1)
    ingredients.push(body_text.searchquery2)
    ingredients.push(body_text.searchquery3)
    ingredients.push(body_text.searchquery4)
    ingredients.push(body_text.searchquery5)
    console.log(ingredients)
    function removeNull (value){
      return value != 'null'
    }
    ingredients = ingredients.filter(removeNull)
    console.log(ingredients)
    
    async function fetchRecipes(ingredients, page, recipesPerPage) {
      try {
        const recipes = await recipeModel.find({
          Ingredients: {
            $all: ingredients.map(ingredient => new RegExp(ingredient, 'i'))
          }
        })
        .sort({ Votes: -1 })
        .skip(page * recipesPerPage)
        .limit(recipesPerPage);
        // console.log(recipes[0])
        res.render('main', { recipe: recipes });
        //console.log("hi");
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecipes(ingredients, page, recipesPerPage)
});
export default queryRouter;
