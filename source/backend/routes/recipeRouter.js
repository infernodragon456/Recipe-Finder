import { Router } from "express";

const recipeRouter = Router();
recipeRouter.get("/", (req, res, next) => {
  res.send("Recipes");
});
export default recipeRouter;
