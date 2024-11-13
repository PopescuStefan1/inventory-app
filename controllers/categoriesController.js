import db from "../db/queries.js";

export const getCategories = async (req, res) => {
  const categories = await db.getCategories();
  res.render("categories", { categories });
};
