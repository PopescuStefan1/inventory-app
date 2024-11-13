import { Router } from "express";
import { itemCreateGet, itemCreatePost } from "../controllers/itemsController.js";

const itemsRouter = Router();

itemsRouter.get("/new", itemCreateGet);
itemsRouter.post("/new", itemCreatePost);

export default itemsRouter;
