import { Router } from "express";
import {
  itemCreateGet,
  itemCreatePost,
  itemDeletePost,
  itemUpdateGet,
  itemUpdatePost,
} from "../controllers/itemsController.js";

const itemsRouter = Router();
itemsRouter.get("/new", itemCreateGet);
itemsRouter.post("/new", itemCreatePost);
itemsRouter.get("/:id/update", itemUpdateGet);
itemsRouter.post("/:id/update", itemUpdatePost);
itemsRouter.post("/:id/delete", itemDeletePost);

export default itemsRouter;
