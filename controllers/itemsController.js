import db from "../db/queries.js";

export const getItemsByCategoryId = async (req, res) => {
  const categoryId = req.params.id;
  const category = await db.getCategory(categoryId);
  const items = await db.getItemsByCategoryId(categoryId);
  res.render("items", { category, items });
};

export const itemCreateGet = async (req, res) => {
  const categories = await db.getCategories();
  res.render("createItem", { categories });
};

export const itemCreatePost = async (req, res) => {
  const { name, price, categoryId } = req.body;
  await db.createItem(name, Number(price), categoryId ? Number(categoryId) : null);
  res.redirect("/");
};

export const itemUpdateGet = async (req, res) => {
  const itemId = req.params.id;
  const item = await db.getItem(itemId);
  const categories = await db.getCategories();
  res.render("updateItem", { item, categories });
};

export const itemUpdatePost = async (req, res) => {
  const itemId = req.params.id;
  const { name, price, categoryId } = req.body;
  await db.updateItem(itemId, name, Number(price), categoryId ? Number(categoryId) : null);
  res.redirect("/");
};

export const itemDeletePost = async (req, res) => {
  const itemId = req.params.id;
  await db.deleteItem(itemId);
  res.redirect("/");
};
