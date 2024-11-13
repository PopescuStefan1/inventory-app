import db from "../db/queries.js";

export const categoriesGet = async (req, res) => {
  const categories = await db.getCategories();
  res.render("categories", { categories });
};

export const categoryCreateGet = (req, res) => {
  res.render("createCategory");
};

export const categoryCreatePost = async (req, res) => {
  await db.createNewCategory(req.body.name);
  res.redirect("/");
};

export const categoryUpdateGet = async (req, res) => {
  const categoryId = req.params.id;
  const category = await db.getCategory(categoryId);
  res.render("updateCategory", { category });
};

export const categoryUpdatePost = async (req, res) => {
  const categoryId = req.params.id;
  const newCategoryName = req.body.name;
  await db.updateCategory(categoryId, newCategoryName);
  res.redirect("/");
};
