import pool from "./pool.js";

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getItemsByCategoryId(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = ($1)", [categoryId]);
  return rows;
}

async function getItemsWithoutCategory() {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id IS NULL");
  return rows;
}

async function getCategory(categoryId) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = ($1)", [categoryId]);
  return rows[0] || null;
}

async function createCategory(name) {
  const { rowCount } = await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);
  return rowCount > 0;
}

async function getItem(itemId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = ($1)", [itemId]);
  return rows[0] || null;
}

async function updateCategory(id, name) {
  await pool.query("UPDATE categories SET name = ($1) WHERE id = ($2)", [name, id]);
}

async function deleteCategory(categoryId) {
  await pool.query("DELETE FROM categories WHERE id = ($1)", [categoryId]);
}

async function createItem(name, price, categoryId) {
  await pool.query("INSERT INTO items (name, price, category_id) VALUES ($1, $2, $3)", [name, price, categoryId]);
}

async function updateItem(itemId, name, price, categoryId) {
  await pool.query("UPDATE items SET name = ($1), price = ($2), category_id = ($3) WHERE id = ($4)", [
    name,
    price,
    categoryId,
    itemId,
  ]);
}

async function deleteItem(itemId) {
  await pool.query("DELETE FROM items WHERE id = ($1)", [itemId]);
}

export default {
  getCategories,
  getItemsByCategoryId,
  getItemsWithoutCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
