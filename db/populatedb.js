#! /usr/bin/env node

import pkg from "pg";
const { Client } = pkg;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS categories ( 
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  name VARCHAR ( 50 )
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  name VARCHAR (50), 
  price NUMERIC(7, 2), 
  category_id INTEGER, 
  CONSTRAINT fk_category 
    FOREIGN KEY(category_id) 
    REFERENCES categories(id)
    ON DELETE CASCADE
);

-- Insert categories
INSERT INTO categories (name) 
VALUES 
    ('vegetables'), 
    ('fruits'), 
    ('dairy'), 
    ('meats'), 
    ('beverages'), 
    ('snacks');

-- Insert items
INSERT INTO items (name, price, category_id) 
VALUES 
    -- Vegetables items
    ('tomato', 2.99, (SELECT id FROM categories WHERE name = 'vegetables')),
    ('carrot', 1.29, (SELECT id FROM categories WHERE name = 'vegetables')),

    -- Fruits items
    ('apple', 1.49, (SELECT id FROM categories WHERE name = 'fruits')),
    ('banana', 0.99, (SELECT id FROM categories WHERE name = 'fruits')),

    -- Dairy items
    ('cheese', 3.99, (SELECT id FROM categories WHERE name = 'dairy')),
    ('milk', 1.89, (SELECT id FROM categories WHERE name = 'dairy')),
    ('yogurt', 2.49, (SELECT id FROM categories WHERE name = 'dairy')),

    -- Meats items
    ('chicken', 5.99, (SELECT id FROM categories WHERE name = 'meats')),
    ('beef steak', 7.99, (SELECT id FROM categories WHERE name = 'meats')),
    ('pork ribs', 6.49, (SELECT id FROM categories WHERE name = 'meats')),

    -- Beverages items
    ('soda', 0.99, (SELECT id FROM categories WHERE name = 'beverages')),
    ('coffee', 4.99, (SELECT id FROM categories WHERE name = 'beverages')),
    ('water', 0.79, (SELECT id FROM categories WHERE name = 'beverages')),

    -- Snacks items
    ('chips', 1.29, (SELECT id FROM categories WHERE name = 'snacks')),
    ('chocolate', 2.49, (SELECT id FROM categories WHERE name = 'snacks')),
    ('cookies', 3.49, (SELECT id FROM categories WHERE name = 'snacks'));

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://<role_name>:<role_password>@<host>:5432/inventory_management`, // Add your role_name, role_password and host here
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
