import pool from "./pool.js";

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getItemsByCategoryId(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = ($1)", [categoryId]);
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

async function updateCategory(id, name) {
  await pool.query("UPDATE categories SET name = ($1) WHERE id = ($2)", [name, id]);
}

async function createItem(name, price, categoryId) {
  console.log(name, price, categoryId);
  await pool.query("INSERT INTO items (name, price, category_id) VALUES ($1, $2, $3)", [name, price, categoryId]);
}

export default {
  getCategories,
  getItemsByCategoryId,
  getCategory,
  createNewCategory: createCategory,
  updateCategory,
  createItem,
};
