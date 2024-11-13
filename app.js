import express, { urlencoded } from "express";
import "dotenv/config";
import indexRouter from "./routes/indexRouter.js";
import categoriesRouter from "./routes/categoriesRouter.js";

const app = express();

app.set("view engine", "ejs");
app.use(urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
