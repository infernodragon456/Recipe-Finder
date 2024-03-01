import { Router } from "express";

const homeRouter = Router();
homeRouter.get("/", (req, res, next) => {
  res.send("Site Home Page");
});
export default homeRouter;
