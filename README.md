# 📒 ContactVault – Secure REST API for Contact Management

ContactVault is a secure RESTful API built with Node.js, Express, and MongoDB for managing user-specific contacts. It supports full CRUD operations and includes robust user authentication using JWT.

---

## 🚀 Features

- User registration and login with hashed passwords
- JWT-based authentication and route protection
- Create, Read, Update, Delete (CRUD) contacts
- User-specific contact isolation
- Error handling with middleware
- MongoDB with Mongoose for data modeling

---

## 🛠️ Tech Stack

**Backend**: Node.js, Express.js  
**Database**: MongoDB, Mongoose  
**Authentication**: JSON Web Token (JWT)  
**Other Tools**: bcrypt, dotenv, express-async-handler, nodemon

---

## 📬 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint              | Description           | Request Body (JSON)                                                                 |
|--------|-----------------------|------------------------|--------------------------------------------------------------------------------------|
| POST   | `/api/users/register` | Register new user      | `{ "username": "rithvik", "email": "r@example.com", "password": "pass123" }`        |
| POST   | `/api/users/login`    | Login existing user    | `{ "email": "r@example.com", "password": "pass123" }`                                |
| GET    | `/api/users/current`  | Get current user info  | _None_ (Requires token in headers)                                                  |

---

### 📇 Contact Routes (Protected)

| Method | Endpoint                | Description           | Request Body (JSON)                                                                 |
|--------|-------------------------|------------------------|--------------------------------------------------------------------------------------|
| GET    | `/api/contacts`         | Get all contacts       | _None_                                                                              |
| GET    | `/api/contacts/:id`     | Get a single contact   | _None_                                                                              |
| POST   | `/api/contacts`         | Create new contact     | `{ "name": "John", "email": "john@example.com", "phone": "1234567890" }`            |
| PUT    | `/api/contacts/:id`     | Update a contact       | `{ "name": "Jane", "email": "jane@example.com", "phone": "9876543210" }`            |
| DELETE | `/api/contacts/:id`     | Delete a contact       | _None_                                                                              |

---

### 🔐 Authorization

Add the JWT token in the request headers for all protected routes:

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/contactvault.git
   cd contactvault

2. **Environment Variables**
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_jwt_secret_key
