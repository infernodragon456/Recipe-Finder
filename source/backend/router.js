import { Router } from "express";
import recipeRouter from "./routes/recipeRouter.js";
import homeRouter from "./routes/homeRouter.js";
import ingredientRouter from "./routes/ingredientRouter.js";

const router = Router();

router.use("/", homeRouter);

router.use("/recipes", recipeRouter);

router.use("/ingredients", ingredientRouter);

export default router;
