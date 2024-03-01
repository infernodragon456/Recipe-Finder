import { Router } from "express";

const ingredientRouter = Router();
ingredientRouter.get("/", (req, res, next) => {
  res.send("ingredients");
});
export default ingredientRouter;
