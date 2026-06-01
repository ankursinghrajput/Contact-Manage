# Contact Manager Backend API

A robust, secure, and production-ready RESTful API for managing personal contacts, built with Node.js, Express, and MongoDB. This project includes user authentication and authorization using JSON Web Tokens (JWT), along with full CRUD operations for contacts tailored to individual users.

## 🚀 Features

- **User Authentication & Authorization**:
  - Secure user registration and login with passwords hashed using `bcrypt`.
  - Route protection using JWT (JSON Web Tokens).
- **Contact Management (CRUD)**:
  - Create, read, update, and delete contacts.
  - Contacts are private and only accessible to the authenticated user who created them.
- **Robust Error Handling**:
  - Centralized middleware to handle diverse HTTP errors (e.g., 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error) and return clean, structured JSON responses.
- **Database Integration**:
  - Seamless integration with MongoDB using Mongoose schemas.

---

## 📁 Project Structure

```text
Contact-Manage/
├── config/
│   └── dbConnection.js     # Database connection setup using Mongoose
├── Controller/
│   ├── contactController.js # Logic for contact operations
│   └── userController.js    # Logic for user authentication
├── middleware/
│   ├── errorHandler.js      # Centralized error handler
│   └── validateToken.js     # JWT verification middleware
├── model/
│   ├── contactModel.js      # MongoDB Mongoose schema for Contacts
│   └── userModel.js         # MongoDB Mongoose schema for Users
├── Routes/
│   ├── contactRoute.js      # Routes for contact endpoints
│   └── userRoute.js         # Routes for user endpoints
├── .env.example             # Template for environment variables
├── constant.js              # HTTP status code constants
├── server.js                # Application entry point
└── package.json             # Project dependencies and scripts
```

---

## 🛠️ Setup and Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) and [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas cluster) installed.

### 1. Clone the Repository
```bash
git clone https://github.com/ankursinghrajput/Contact-Manage.git
cd Contact-Manage
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to a new file named `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in your configuration:
```env
PORT=5001
CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/mycontacts
ACCESS_TOKEN_SECRET=your_super_secret_jwt_key
```

### 4. Run the Server
* **Development Mode (with Nodemon):**
  ```bash
  npm run dev
  ```
* **Production Mode:**
  ```bash
  npm start
  ```

The server will run on the port specified in your `.env` file (default: `5001`).

---

## 🛰️ API Endpoints

### 🔑 User Authentication
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users/register` | Register a new user | No |
| `POST` | `/api/users/login` | Login user and receive a JWT token | No |
| `GET` | `/api/users/current` | Get current user's details | Yes (Bearer Token) |

### 📇 Contact Management
*All contact endpoints require a valid JWT token passed in the Authorization header (`Authorization: Bearer <token>`).*

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/contacts` | Retrieve all contacts for the authenticated user |
| `POST` | `/api/contacts` | Create a new contact |
| `GET` | `/api/contacts/:id` | Get details of a specific contact |
| `PUT` | `/api/contacts/:id` | Update an existing contact |
| `DELETE` | `/api/contacts/:id` | Delete a specific contact |

---

## 🔒 Security and Authorization
To access protected endpoints, pass the JWT token in the request header as follows:
```text
Authorization: Bearer <your-jwt-token>
```

---

## 📦 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT), Bcrypt for hashing
- **Development Tooling:** Nodemon, Dotenv
