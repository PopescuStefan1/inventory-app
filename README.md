# Inventory Management App

A simple, yet powerful Inventory Management application built using Node.js, Express, and PostgreSQL. It follows the MVC pattern and uses EJS for the frontend views. The app allows users to manage items by categories, providing full CRUD functionality for both categories and items.

![image](https://github.com/user-attachments/assets/0910f321-6e72-4e94-8e75-0c705c48f16d)

![image](https://github.com/user-attachments/assets/5bfd0f16-3a00-4695-b812-5a9128f7fcc6)

![image](https://github.com/user-attachments/assets/b9a9da68-661a-4b66-a322-45e2ae81d13b)

## Features
- **Home Page:** Users can choose a category to view, which then displays all items within that category.
- **CRUD Operations:** Full CRUD (Create, Read, Update, Delete) functionality for both items and categories.
- **Environment Variables:** Uses dotenv to manage environment variables securely.
- **Deployed on Railway:** Easily accessible online with the production version deployed on Railway.

## Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** EJS templates
- **Database:** PostgreSQL
- **Environment Management:** dotenv

## Live Demo

Check out the live version of the app hosted on Railway:  
[Live Demo on Railway](https://inventory-app-production-c3a1.up.railway.app)

## Local Installation
1. **Clone the repository:**
```
git clone https://github.com/PopescuStefan1/inventory-app.git
cd inventory-app
```
2. **Install dependencies:**
```
npm install
```
4. **Environment Variables:** Create a ```.env``` file in the root directory and set up the following environment variables:
```
USERNAME=your_database_user
PASSWORD=your_database_password
HOST=your_database_host
DB=your_database_name
```
5. **Database Setup:** Create a PostgreSQL database (This app assumes you will use the default database port 5432. If you use a different port, you will need to edit [pool.js](db/pool.js)):
```
psql
CREATE DATABASE your_database_name;
```
6. **Populate Database:** Run the [Database population script](db/populatedb.js). Make sure to replace the connection string with your own credentials.
```
node db/populatedb.js
```
7. **Start the Server:**
```
npm start
```
8. **Access the App:** Open your browser and go to http://localhost:5000.

## Usage
1. **View Categories:** On the homepage, view the available categories.
2. **Browse Items:** Click on a category to see a list of items within it.
3. **Manage Inventory:** Use the CRUD options to add, edit, or delete categories and items as desired.
