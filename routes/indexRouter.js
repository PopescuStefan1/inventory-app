import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.redirect("/categories");
});

export default indexRouter;
