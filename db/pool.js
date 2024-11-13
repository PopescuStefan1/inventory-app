import pkg from "pg";
const { Pool } = pkg;

export default new Pool({
  user: process.env.USERNAME, // Add your role_name here
  password: process.env.PASSWORD, // Add your role_password to here
  host: process.env.HOST, // Add your host here ("localhost" if running locally)
  database: "inventory_management",
  port: 5432,
});
