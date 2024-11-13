import { Router } from "express";
import { itemCreateGet, itemCreatePost, itemUpdateGet, itemUpdatePost } from "../controllers/itemsController.js";

const itemsRouter = Router();

itemsRouter.get("/new", itemCreateGet);
itemsRouter.post("/new", itemCreatePost);
itemsRouter.get("/:id/update", itemUpdateGet);
itemsRouter.post("/:id/update", itemUpdatePost);

export default itemsRouter;
