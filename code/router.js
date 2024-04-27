import { Router } from "express";
import recipeRouter from "./routes/recipeRouter.js";
import homeRouter from "./routes/homeRouter.js";
import queryRouter from "./routes/queryRouter.js";
import aboutRouter from "./routes/aboutRouter.js";

const router = Router();

router.use("/", homeRouter);

router.use("/recipe", recipeRouter);

router.use("/query", queryRouter);

router.use("/about", aboutRouter);

export default router;
