# PassVault

PassVault is a full-stack password manager built with React, Node.js,
and MongoDB. It allows users to securely save, view, edit, delete, and
copy password entries. The UI is built with React (using Vite) and
styled with Tailwind CSS, while the backend uses Node.js with Express.
Data is stored in a MongoDB database, and React-hot-toast provides
in-app notifications.

## Features

- **Credential Management:** Save, view, edit, delete, and copy password
  entries.
- **Password Toggle:** Show/hide passwords with an eye icon for better
  usability.
- **Form Validation:** Enforces minimum lengths (username ≥ 4
  characters, password ≥ 8 characters).
- **Responsive Design:** Tailwind CSS ensures the UI is responsive upto tablet width.
- **Notifications:** Toast messages (via react-hot-toast) inform the
  user of successful actions.

## Tech Stack

- **Frontend:** React (Vite) for building the user interface, styled
  with Tailwind CSS. Uses **react-hot-toast** for notification toasts.
- **Backend:** Node.js with the Express framework, providing a RESTful
  API.
- **Database:** MongoDB (managed via MongoDB Compass as a GUI tool).

## Folder Structure

    Password_Manager - api storage/
    ├── public/
    │   ├── icons/
    │   │   ├── eye.png
    │   │   └── eyecross.png
    │   └── vite.svg
    │
    ├── server/
    │   ├── .env
    │   ├── package.json
    │   ├── package-lock.json
    │   └── server.js
    │
    ├── src/
    │   ├── assets/
    │   │   └── react.svg
    │   │
    │   ├── components/
    │   │   ├── Footer.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── PassManager.jsx
    │   │   ├── SemiNav.jsx
    │   │   └── test.jsx
    │   │
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── vite.config.js

## Installation

### Backend

1.  Navigate to the `server/` directory.
2.  Install dependencies: `npm install`.
3.  Create a `.env` file (if not present) and configure environment
    variables (e.g. `MONGO_URL` for the MongoDB connection string).
4.  Start the server with `node server.js` (or `npm run start` if
    configured). The backend will run on the port specified in `.env`
    (default is typically 5000).

### Frontend

1.  From the project root directory, install dependencies:
    `npm install`.
2.  Start the development server: `npm run dev`. This launches the Vite
    dev server (commonly at `http://localhost:5173`).
3.  Open your browser to the local URL to access the app.

### Database Setup (MongoDB Compass)

1.  Install **MongoDB** (Community Edition) and **MongoDB Compass** on
    your machine.
2.  Launch MongoDB Compass and connect to your local MongoDB instance
    (default URI is `mongodb://localhost:27017`).
3.  Create a new database (e.g. `passvault`) and a collection (e.g.
    `passwords`) if they do not already exist. The server will use these
    to store password entries.
4.  Ensure your backend `.env` file's `MONGO_URL` matches the database
    you created.

## API Endpoints

- **GET** `/api/passwords` -- Retrieve all password entries.
- **POST** `/api/passwords` -- Create a new password entry (expects
  `username` and `password` in the request body).
- **GET** `/api/passwords/:id` -- Retrieve a specific entry by ID.
- **PUT** `/api/passwords/:id` -- Update an existing entry by ID.
- **DELETE** `/api/passwords/:id` -- Delete an entry by ID.

## Notes

- ⚠️ **Educational Purpose:** This project is intended for learning and
  demonstration only. Security measures are simplified for clarity.
- **Security Disclaimer:** Passwords are stored in plain text in the
  database. **Do not** use this application to store real sensitive
  data. In a production system, passwords should be encrypted or hashed
  and access should be properly authenticated.

