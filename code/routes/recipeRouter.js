import { Router } from "express";
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const recipeRouter = Router();
recipeRouter.get("/:recipeName", (req, res, next) => {
  let url = "https://www.archanaskitchen.com/" + req.params.recipeName
  fetch(url)
  .then(response => response.text())
  .then(html => {
                const dom = new JSDOM(html);
                const doc = dom.window.document;
                const ingredientsList = Array.from(doc.querySelectorAll('div.recipeingredients > ul > li > span'));
                ingredientsList.forEach(ingre =>{
                    ingre = (ingre.innerHTML)
                    // console.log(ingre)
                })
                const instructions = Array.from(doc.querySelectorAll('div > ol > li > p'));
                instructions.forEach(instruct =>{
                    instruct = (instruct.innerHTML)
                })

                res.render('recipe', {ingredients : ingredientsList, instructions: instructions})
            })
});
export default recipeRouter;
