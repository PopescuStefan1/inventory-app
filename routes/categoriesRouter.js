import { Router } from "express";
import {
  categoryCreatePost,
  categoriesGet,
  categoryCreateGet,
  categoryUpdateGet,
  categoryUpdatePost,
  categoryDeletePost,
} from "../controllers/categoriesController.js";
import { getItemsByCategoryId } from "../controllers/itemsController.js";

const categoriesRouter = Router();

categoriesRouter.get("/", categoriesGet);
categoriesRouter.get("/new", categoryCreateGet);
categoriesRouter.post("/new", categoryCreatePost);
categoriesRouter.get("/:id", getItemsByCategoryId);
categoriesRouter.get("/:id/update", categoryUpdateGet);
categoriesRouter.post("/:id/update", categoryUpdatePost);
categoriesRouter.post("/:id/delete", categoryDeletePost);

export default categoriesRouter;
