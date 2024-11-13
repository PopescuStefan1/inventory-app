import express, { urlencoded } from "express";
import "dotenv/config";
import path from "path";
import indexRouter from "./routes/indexRouter.js";
import categoriesRouter from "./routes/categoriesRouter.js";
import itemsRouter from "./routes/itemsRouter.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/items", itemsRouter);

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
