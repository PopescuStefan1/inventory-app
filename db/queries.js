import pool from "./pool.js";

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getItemsByCategoryId(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = ($1)", [categoryId]);
  return rows;
}

export default { getCategories, getItemsByCategoryId };
