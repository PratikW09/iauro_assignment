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

## 📂 **Folder Structure**

📁 iauro-assignment ├── 📁 backend │ ├── 📁 config │ │ └── 📄 db.js │ ├── 📁 controllers │ │ ├── 📄 authController.js │ │ └── 📄 expenseController.js │ ├── 📁 middleware │ │ └── 📄 authMiddleware.js │ ├── 📁 models │ │ ├── 📄 User.js │ │ └── 📄 Expense.js │ ├── 📁 routes │ │ ├── 📄 authRoutes.js │ │ └── 📄 expenseRoutes.js │ ├── 📁 services │ │ ├── 📄 authService.js │ │ └── 📄 expenseService.js │ ├── 📁 utils │ │ └── 📄 generateToken.js │ └── 📄 server.js ├── 📁 client │ ├── 📁 public │ ├── 📁 src │ │ ├── 📁 assets │ │ ├── 📁 components │ │ │ ├── 📄 Navbar.jsx │ │ │ ├── 📄 ExpenseTable.jsx │ │ │ ├── 📄 ExpenseChart.jsx │ │ │ └── 📄 PrivateRoute.jsx │ │ ├── 📁 pages │ │ │ ├── 📄 Login.jsx │ │ │ ├── 📄 Signup.jsx │ │ │ ├── 📄 Dashboard.jsx │ │ │ └── 📄 Expenses.jsx │ │ ├── 📁 services │ │ │ └── 📄 api.js │ │ ├── 📄 App.jsx │ │ ├── 📄 index.css │ │ └── 📄 main.jsx │ ├── 📄 package.json │ └── 📄 tailwind.config.cjs ├── 📄 .env └── 📄 README.md

---

## 🔐 **Admin Credentials for Testing**

Admin Credentials:

Name: John Doe
Email: john@example.com
Password: 123456

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
git clone https://github.com/pratikwalale/finance-tracker.git
cd finance-tracker/backend
2️⃣ Install Dependencies

npm install
3️⃣ Create .env File

PORT=5000
MONGO_URI=mongodb://localhost:27017/finance_tracker
JWT_SECRET=your_jwt_secret
4️⃣ Start the Backend Server

npm run dev
✅ API runs at http://localhost:5000

🎨 Frontend Setup
1️⃣ Move to Client Directory
bash
Copy
Edit
cd ../client
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start Frontend Server
bash
Copy
Edit
npm run dev
✅ React App runs at http://localhost:5173

🔑 Admin Credentials for Testing
makefile
Copy
Edit
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
📊 Expense Dashboard Preview
jsx
Copy
Edit
<PieChart width={400} height={300}>
  <Pie data={data} cx={200} cy={150} outerRadius={120} fill="#8884d8" dataKey="value">
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>
✅ Category-wise expense visualization with Pie Chart.

🛠️ Troubleshooting
❌ MongoDB Connection Error
🔹 Check if MongoDB is running

bash
Copy
Edit
mongod --dbpath=/data/db
🔹 Ensure .env has correct MONGO_URI

❌ CORS Error
🔹 Enable CORS in server.js

javascript
Copy
Edit
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
❌ Vite Pre-transform Error
🔹 Ensure correct import in React:

javascript
Copy
Edit
import axios from '../services/api';
🤝 Contributing
Want to improve this project?

Fork the repo
Create a new branch (feature-xyz)
Make your changes
Submit a pull request
🎉 Project is Live
🔗 GitHub Repo
📌 Demo Video: Coming Soon 🎥

✅ Bhai, ab interviewer bhi impress ho jayega! 🚀🔥
Agar kuch aur changes chahiye ho toh bata dena! 😎

yaml
Copy
Edit

---

## 🎯 **Why This README is Perfect?**
✅ **Easy for Interviewer** – Covers everything **clearly**.  
✅ **Setup Guide** – Step-by-step **backend & frontend setup**.  
✅ **Admin Credentials** – **Interviewer directly test** kar sakta hai.  
✅ **API Documentation** – **CRUD Routes** clear hai.  
✅ **Code Examples** – Charts and Features properly **highlighted**.  

---