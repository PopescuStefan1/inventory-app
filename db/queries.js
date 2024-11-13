import pool from "./pool.js";

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getItemsByCategoryId(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = ($1)", [categoryId]);
  return rows;
}

async function getCategoryName(categoryId) {
  const { rows } = await pool.query("SELECT name FROM categories WHERE id = ($1)", [categoryId]);
  return rows[0].name || null;
}

export default { getCategories, getItemsByCategoryId, getCategoryName };
