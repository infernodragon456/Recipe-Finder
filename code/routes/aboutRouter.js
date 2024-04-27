import bodyParser from 'body-parser';
import { Router } from "express";
import recipeModel from '../models/recipes.js';

var urlencodedParser = bodyParser.urlencoded({ extended: true })
const aboutRouter = Router();
aboutRouter.get("/", urlencodedParser ,(req, res, next) => {
    res.render("about");
});
export default aboutRouter;