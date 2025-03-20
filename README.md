# 🎯 Full Stack Expense Tracker with React, Node.js, MongoDB & JWT Authentication

---

## 📚 **Project Overview**

This project is a **Full Stack Expense Tracker** that allows users to:  
- ✅ Sign Up and Login using secure JWT Authentication.  
- ✅ Add, Edit, Delete, and View Expenses with categories.  
- ✅ View expense data with a dynamic pie chart for visual insights.  

---

## 🛠️ **Tech Stack Used**

### 🔥 **Frontend:**
- `React.js` — UI and State Management.
- `Vite` — Fast Build System.
- `Tailwind CSS` — Modern CSS Framework.
- `Axios` — API Communication.
- `Recharts` — For Pie Chart Visualization.

### ⚡️ **Backend:**
- `Node.js` + `Express.js` — REST API Backend.
- `MongoDB` + `Mongoose` — Database and ORM.
- `JWT` — Secure Authentication.
- `bcryptjs` — Password Hashing.
- `CORS` — Cross-Origin Resource Sharing.


---

## 🔐 **Admin Credentials for Testing**

## 🔐 **Admin Credentials for Testing**

**Name:** John Doe  
**Email:** john@example.com  
**Password:** 123456 

---

## 🌟 **Key Features**

✅ **User Authentication** (Signup/Login with JWT)  
✅ **Expense Management** (CRUD for expenses)  
✅ **Category-Based Expense Filtering**  
✅ **Expense Summary Dashboard** (Charts & Tables)  
✅ **Secure Routes with JWT Middleware**  
✅ **Fast Frontend with React + Tailwind CSS**  

---

## 📦 **Backend Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/PratikW09/iauro_assignment.git
cd iauro_assignment/backend
2️⃣ Install Dependencies

npm install
3️⃣ Create .env File

PORT=5000
MONGO_URI=your uri
JWT_SECRET=your_jwt_secret
4️⃣ Start the Backend Server

npm run dev
✅ API runs at http://localhost:5000

🎨 Frontend Setup
1️⃣ Move to Client Directory

cd ../client
2️⃣ Install Dependencies

npm install
3️⃣ Start Frontend Server

npm run dev
✅ React App runs at http://localhost:5173

🔑 Admin Credentials for Testing

Email: john@example.com
Password: 123456
✅ Use this admin to test the platform!

📌 API Endpoints
🚀 Auth Routes
Method	Endpoint	Description	Access
POST	/api/auth/register	Register new user	Public
POST	/api/auth/login	Login and get JWT	Public
💰 Expense Routes
Method	Endpoint	Description	Access
POST	/api/expenses	Add a new expense	Private
GET	/api/expenses/my-expenses	Get user expenses	Private
GET	/api/expenses/:id	Get single expense	Private
PUT	/api/expenses/:id	Update expense	Private
DELETE	/api/expenses/:id	Delete expense	Private

🤝 Contributing
Want to improve this project?

Fork the repo
Create a new branch (feature-xyz)
Make your changes
Submit a pull request
🎉 Project is Live
🔗 GitHub Repo
📌 Demo Video: Coming Soon 🎥

---
