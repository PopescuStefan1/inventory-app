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

async function getCategoryName(categoryId) {
  const { rows } = await pool.query("SELECT name FROM categories WHERE id = ($1)", [categoryId]);
  return rows[0].name || null;
}

async function createNewCategory(name) {
  const { rowCount } = await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);
  return rowCount > 0;
}

async function updateCategory(id, name) {
  await pool.query("UPDATE categories SET name = ($1) WHERE id = ($2)", [name, id]);
}

export default { getCategories, getItemsByCategoryId, getCategory, getCategoryName, createNewCategory, updateCategory };
