import pkg from "pg";
const { Pool } = pkg;

export default new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: "localhost",
  database: "inventory_management",
  port: 5432,
});
