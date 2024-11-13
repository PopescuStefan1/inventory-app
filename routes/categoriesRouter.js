import { Router } from "express";
import { getCategories } from "../controllers/categoriesController.js";
import { getItemsByCategoryId } from "../controllers/itemsController.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:id", getItemsByCategoryId);

export default categoriesRouter;
