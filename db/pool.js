import pkg from "pg";
const { Pool } = pkg;

export default new Pool({
  host: process.env.DB_HOST,
  user: process.env.USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: 5432,
});
