import db from "../db/queries.js";

export const getItemsByCategoryId = async (req, res) => {
  const categoryId = req.params.id;
  const categoryName = await db.getCategoryName(categoryId);
  const items = await db.getItemsByCategoryId(categoryId);
  res.render("items", { categoryName, items });
};
