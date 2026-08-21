# ✅ Task Management App

A full-stack **Task Management Application** that allows users to securely create, manage, update, and track their tasks through a modern and responsive web interface.

The application provides **user authentication, protected routes, task management, and user-specific data isolation**, ensuring that each user can access and manage only their own tasks.

🚀 Live Demo: https://task-management-app-rdhv.vercel.app/


---

## 📌 Overview

The Task Management App is designed to simplify personal task organization by providing users with a centralized platform to manage their daily activities and responsibilities.

Users can register and log in securely, create tasks, update task details, mark tasks as completed, and delete tasks.

The application follows a **client-server architecture**, where the React frontend communicates with a Node.js/Express backend through REST APIs, while MongoDB is used to store application data.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Secure password handling
* Protected API routes
* Persistent login using authentication tokens

### 📝 Task Management

* Create new tasks
* View tasks
* Update existing tasks
* Delete tasks
* Mark tasks as completed
* Track task status
* User-specific task management

### 👤 User-Specific Data

Each authenticated user has access only to their own tasks.

```text
User A
  ↓
Only User A's Tasks

User B
  ↓
Only User B's Tasks
```

This provides data isolation between different accounts.

### 🎨 User Interface

* Modern and clean interface
* Responsive design
* Tailwind CSS styling
* Interactive task controls
* User-friendly navigation
* Dashboard-style task management

---

## 🛠️ Technologies Used

| Technology    | Purpose                             |
| ------------- | ----------------------------------- |
| React.js      | Frontend UI                         |
| Vite          | Frontend development and build tool |
| Tailwind CSS  | Styling and responsive design       |
| Node.js       | Backend runtime                     |
| Express.js    | REST API development                |
| MongoDB Atlas | Cloud database                      |
| Mongoose      | MongoDB object modeling             |
| JWT           | Authentication                      |
| Axios         | API communication                   |
| JavaScript    | Application logic                   |

---

## 🏗️ System Architecture

```text
                    ┌───────────────────┐
                    │       User        │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   React Frontend  │
                    │   + Vite          │
                    │   + Tailwind CSS  │
                    └─────────┬─────────┘
                              │
                         Axios / REST API
                              │
                              ▼
                    ┌───────────────────┐
                    │  Express.js API   │
                    │     Server        │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │ JWT Authentication│
                    │  & Authorization  │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │     Mongoose      │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   MongoDB Atlas   │
                    └───────────────────┘
```

---

## 📂 Project Structure

```text
task-management-app/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

> The exact folder names may vary depending on the final project structure.

---

# 🔐 Authentication Flow

The application uses **JSON Web Tokens (JWT)** for authentication.

The authentication process works as follows:

```text
User
 ↓
Register / Login
 ↓
Backend verifies credentials
 ↓
JWT Token Generated
 ↓
Token Sent to Client
 ↓
Token Stored by Client
 ↓
Token Sent with Protected Requests
 ↓
Backend Verifies Token
 ↓
Authorized Request
```

This prevents unauthorized users from accessing protected resources.

---

# 📝 Task Management Flow

```text
User Login
    ↓
Dashboard
    ↓
Create Task
    ↓
Task Stored in MongoDB
    ↓
Task Displayed in Dashboard
    ↓
User Can:
 ┌──────────────┬──────────────┬──────────────┐
 │    Update    │   Complete   │    Delete    │
 └──────────────┴──────────────┴──────────────┘
```

---

# 🔌 REST API

The backend exposes RESTful API endpoints for authentication and task management.

## Authentication

### Register

```http
POST /api/auth/register
```

Creates a new user account.

### Login

```http
POST /api/auth/login
```

Authenticates an existing user and returns an authentication token.

---

## Tasks

Typical task operations include:

### Create Task

```http
POST /api/tasks
```

### Get Tasks

```http
GET /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

> API route names may differ depending on the final backend implementation.

---

# 🗄️ Database

The application uses **MongoDB Atlas** as its cloud database.

A typical task document may contain information such as:

```text
Task
├── title
├── description
├── completed
├── user
├── createdAt
└── updatedAt
```

The `user` reference associates each task with its owner.

This allows the backend to retrieve tasks belonging only to the authenticated user.

---

# 👤 User Data Isolation

One of the important security features of the application is **account-based data management**.

For example:

```text
User A
 ├── Task 1
 ├── Task 2
 └── Task 3

User B
 ├── Task 4
 └── Task 5
```

User A cannot access User B's tasks.

The backend verifies the authenticated user's identity before performing task operations.

---

# 🌐 Frontend

The frontend is developed using **React.js** and **Vite**.

React is responsible for:

* Creating reusable UI components
* Managing application state
* Handling user interactions
* Displaying tasks
* Communicating with backend APIs

Axios is used for communication between the frontend and backend.

---

# 🎨 Styling

The application uses **Tailwind CSS** for styling.

Tailwind CSS provides:

* Responsive layouts
* Utility-based styling
* Consistent UI
* Faster component development
* Mobile-friendly design

---

# ⚙️ Backend

The backend is developed using **Node.js and Express.js**.

The backend is responsible for:

* User registration
* User authentication
* JWT generation
* Authentication verification
* Task creation
* Task retrieval
* Task updating
* Task deletion
* Database communication

---

# 🔒 Security

The application implements several security practices:

* JWT authentication
* Protected API routes
* User authorization
* User-specific data access
* Secure password handling
* Environment variables for sensitive configuration
* MongoDB connection through environment variables

Sensitive information should never be hard-coded into the source code.

---

# 🔑 Environment Variables

Create an environment configuration file for the backend.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

For the frontend, if required:

```env
VITE_API_URL=your_backend_api_url
```

> Never upload `.env` files containing real credentials to GitHub.

Add them to `.gitignore`:

```text
.env
.env.local
node_modules/
dist/
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-management-app.git
```

## 2. Open the Project

```bash
cd task-management-app
```

---

## 3. Install Backend Dependencies

Navigate to the backend directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 5. Start the Backend

```bash
npm start
```

Or, if the project uses a development script:

```bash
npm run dev
```

---

## 6. Install Frontend Dependencies

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

---

## 7. Start the Frontend

```bash
npm run dev
```

The Vite development server will provide a local URL.

Open that URL in your browser.

---

# 🧪 Testing

The application can be tested using the following scenarios.

### Test Case 1 – User Registration

**Input:** Valid user details

**Expected Result:** New user account should be created.

**Status:** Pass

---

### Test Case 2 – User Login

**Input:** Valid email and password

**Expected Result:** User should be authenticated and redirected to the application.

**Status:** Pass

---

### Test Case 3 – Invalid Login

**Input:** Incorrect credentials

**Expected Result:** Appropriate error message should be displayed.

**Status:** Pass

---

### Test Case 4 – Create Task

**Input:** Valid task details

**Expected Result:** Task should be created and stored in MongoDB.

**Status:** Pass

---

### Test Case 5 – View Tasks

**Input:** Authenticated user opens task dashboard.

**Expected Result:** Only the user's tasks should be displayed.

**Status:** Pass

---

### Test Case 6 – Update Task

**Input:** Modified task information

**Expected Result:** Task should be updated successfully.

**Status:** Pass

---

### Test Case 7 – Complete Task

**Input:** Mark an incomplete task as completed.

**Expected Result:** Task status should change to completed.

**Status:** Pass

---

### Test Case 8 – Delete Task

**Input:** Delete an existing task.

**Expected Result:** Task should be removed from the database and interface.

**Status:** Pass

---

### Test Case 9 – Unauthorized Access

**Input:** Request a protected API without a valid JWT.

**Expected Result:** Server should reject the request.

**Status:** Pass

---

# ✅ Advantages

* Simple task management.
* Secure user authentication.
* User-specific task data.
* RESTful API architecture.
* Cloud database support.
* Responsive interface.
* Modern technology stack.
* Scalable backend architecture.
* Easy to maintain and extend.
* Suitable for real-world productivity use cases.

---

# ⚠️ Limitations

* Requires internet connectivity when using MongoDB Atlas and deployed services.
* Authentication depends on correctly configured JWT settings.
* The current application focuses primarily on basic task management.
* Advanced collaboration features may not be available.
* Notifications and reminders may require additional services.

---

# 🚀 Future Enhancements

The application can be enhanced with:

* 📅 Task due dates
* ⏰ Reminders and notifications
* 🔥 Task priorities
* 🏷️ Task categories and tags
* 🔎 Advanced task search
* 📊 Productivity analytics
* 📈 Dashboard statistics
* 👥 Team collaboration
* 📋 Shared task lists
* 💬 Comments on tasks
* 📎 File attachments
* 🌙 Dark mode
* 📱 Mobile application
* 📧 Email notifications
* 🔔 Push notifications
* 🔄 Task recurring schedules

---

# 🎯 Learning Outcomes

This project helped demonstrate practical knowledge of:

* MERN-style full-stack development
* React.js
* Vite
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
* MongoDB Atlas
* Mongoose
* REST API development
* JWT authentication
* Protected API routes
* Authorization
* User-specific data isolation
* Axios API communication
* Environment variables
* Full-stack application architecture

---

# 🌍 Real-World Applications

The Task Management App can be adapted for:

* Personal productivity
* Student task management
* Team project management
* Employee task tracking
* Academic project planning
* Business workflow management
* Software development task tracking

---

# 📸 Screenshots

Add screenshots of your application here.

Example:

```text
## Login Page

![Login Page](screenshots/login.png)

## Dashboard

![Dashboard](screenshots/dashboard.png)

## Task Management

![Tasks](screenshots/tasks.png)
```

Create a `screenshots` folder in the repository if you want to include them.

---

# 📚 Project Documentation

Detailed project documentation can include:

* Abstract
* Introduction
* Problem Statement
* Objectives
* Scope
* Proposed System
* System Architecture
* Functional Requirements
* Non-Functional Requirements
* Database Design
* API Documentation
* Authentication Flow
* Testing
* Advantages
* Limitations
* Future Enhancements
* Conclusion

---

# 🏁 Conclusion

The Task Management App is a full-stack web application designed to help users efficiently manage their tasks.

The project combines React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT authentication, and REST APIs to create a complete client-server application.

The implementation demonstrates important full-stack development concepts including frontend development, backend API design, database management, authentication, authorization, protected routes, and user-specific data isolation.

The application provides a strong foundation that can be extended with advanced productivity, collaboration, notification, analytics, and mobile features.

---

# 👨‍💻 Author

**Ramesh Netheti**

B.Tech – Computer Science and Engineering

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
