import pkg from "pg";
const { Pool } = pkg;

export default new Pool({
  user: process.env.USERNAME, // Add your role_name here
  password: process.env.PASSWORD, // Add your role_password to here
  host: "localhost",
  database: "inventory_management",
  port: 5432,
});
