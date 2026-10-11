🛍️ Aarthi Mart

A Multi-Seller E-Commerce Marketplace

Aarthi Mart is a multi-seller e-commerce marketplace built using Java Servlets, JDBC, Apache Tomcat, and H2 Database. It enables buyers to browse and purchase products, sellers to manage their listings and orders, and administrators to manage the marketplace.

---

📌 Table of Contents

- "Project Overview" (#-project-overview)
- "Problem Statement" (#-problem-statement)
- "Features" (#-features)
- "Technology Stack" (#-technology-stack)
- "Architecture" (#-architecture)
- "Package Structure" (#-package-structure)
- "Database" (#-database)
- "Main User Flow" (#-main-user-flow)
- "Local Setup" (#-local-setup)
- "Main Pages" (#-main-pages)
- "Security" (#-security)
- "Continuous Integration" (#-continuous-integration)
- "Project Status" (#-project-status)
- "Deployment" (#-deployment)
- "Demo Login Credentials" (#-demo-login-credentials)
- "Future Work" (#-future-work)
- "Project Timeline" (#-project-timeline)
- "Developer" (#-developer)

---

📖 Project Overview

Aarthi Mart allows multiple sellers to independently manage their products while buyers can discover products, search and filter listings, add items to their carts, place orders through a mock checkout flow, track orders, and review delivered products.

Administrators can manage users, products, and orders through an administrative dashboard.

🎯 Problem Statement

Small-scale online stores often lack a centralized marketplace where multiple sellers can independently manage products while buyers can browse, purchase, and review products.

Aarthi Mart addresses this problem by providing:

- A shared marketplace for discovering and purchasing products.
- Product and order management tools for sellers.
- Administrative tools for managing users, products, and orders.
- Ratings and reviews for delivered products.

✨ Features

🛒 Buyer Features

- User registration and login
- Browse products
- Search products by keyword
- Filter products by category
- Add products to cart
- Update cart quantities
- Remove cart items
- Mock checkout
- View order history
- Track order status
- Review delivered products
- Wishlist and save-for-later functionality

🏪 Seller Features

- Seller authentication
- Add, edit, and delete products
- Manage product stock
- View incoming orders
- Update order status
- View product count
- View order count
- View revenue
- View customer ratings

🛡️ Admin Features

- Admin authentication
- View registered users
- View orders
- View product listings
- Remove product listings
- Update order status

🧰 Technology Stack

Component| Technology
Programming Language| Java 17
Backend| Java Servlets
Server| Apache Tomcat 9
Build Tool| Maven
Database| H2 Database
Database Access| JDBC
Connection Pool| HikariCP
JSON Processing| Gson
Password Hashing| jBCrypt
Frontend| HTML, CSS, JavaScript
Logging| SLF4J + Logback
Testing and CI| Maven + GitHub Actions
Version Control| Git and GitHub

🏗️ Architecture

The application follows a layered architecture.

Browser
   |
   | HTTP / Fetch
   v
Servlet Controllers
   |
   v
Service Layer
   |
   v
DAO Layer
   |
   v
JDBC / HikariCP
   |
   v
H2 Database

📂 Package Structure

com.aarthi.mart
├── controller
│   ├── AuthServlet
│   ├── ProductServlet
│   ├── CartServlet
│   ├── OrderServlet
│   ├── AdminServlet
│   ├── ReviewServlet
│   └── WishlistServlet
├── dao
│   ├── UserDAO
│   ├── ProductDAO
│   ├── CartDAO
│   ├── OrderDAO
│   ├── OrderItemDAO
│   ├── ReviewDAO
│   └── WishlistDAO
├── model
│   ├── User
│   ├── Product
│   ├── CartItem
│   ├── Order
│   ├── OrderItem
│   └── Review
├── service
│   └── OrderService
├── filter
│   └── AuthFilter
├── listener
│   └── DbContextListener
└── util
    ├── DBUtil
    └── PasswordUtil

🗄️ Database

The application uses H2 Database.

Main entities and relationships include:

Users
 ├── Products
 ├── Orders
 ├── Cart Items
 └── Reviews

Products
 ├── Order Items
 └── Reviews

Orders
 └── Order Items

🔄 Main User Flow

Register / Login
       ↓
Browse Products
       ↓
Search / Filter
       ↓
Add to Cart
       ↓
Checkout
       ↓
Mock Payment Confirmation
       ↓
Order Created
       ↓
Seller Receives Order
       ↓
Order Status Updated
       ↓
Buyer Receives Product
       ↓
Buyer Submits Review

🚀 Local Setup

Requirements

- JDK 17
- Maven
- Apache Tomcat 9
- Git

Build the Project

Run the following command from the project directory:

mvn clean package

Deploy the Application

Copy the generated WAR file:

target/aarthi_mart.war

Place it inside the Apache Tomcat "webapps" directory.

Run the Application

Start Tomcat and open:

http://localhost:8080/aarthi_mart/index.html

This is the local development URL, not the public deployment URL.

🖥️ Main Pages

Page| Purpose
"index.html"| Product marketplace
"login.html"| User login
"register.html"| User registration
"cart.html"| Shopping cart
"checkout.html"| Mock checkout
"orders.html"| Buyer order history
"seller.html"| Seller dashboard
"admin.html"| Admin management
"wishlist.html"| Wishlist

🔒 Security

The application includes:

- PreparedStatement-based database queries
- Password hashing using jBCrypt
- Session-based authentication
- Role-based access checks
- Seller and admin authorization checks
- Input validation
- Database foreign-key constraints

Security reminder: Never commit production passwords, database credentials, API keys, or real customer information to a public repository. Use dedicated demo accounts for project evaluation.

⚙️ Continuous Integration

GitHub Actions runs the Maven verification workflow:

mvn -B clean verify

Workflow file:

.github/workflows/build.yml

✅ Project Status

Mandatory Features

- [x] F1 — Authentication and roles
- [x] F2 — Seller product management
- [x] F3 — Product browsing, search, and filtering
- [x] F4 — Shopping cart
- [x] F5 — Checkout
- [x] F6 — Order history and seller orders
- [x] F7 — Admin management
- [x] F8 — Product reviews and ratings

Optional Features

- [x] O1 — Wishlist
- [x] O2 — Order status workflow
- [x] O3 — Seller sales dashboard
- [×] O4 — AI chatbot

🌐 Deployment

Live Application URL: https://aarthi-mart.onrender.com

GitHub Repository:
https://github.com/aarthiguna7/Aarthi_Mart

🔐 Demo Login Credentials

The following accounts are intended for project demonstrations and evaluation. Confirm that each account works before sharing these details with evaluators.

Admin Account

Role| Email| Password
Admin| "admin@aarthimart.com"| "admin123"

Buyer Accounts

Name| Email| Password
Demo Customer| "buyer@aarthimart.com"| "Aarthi@123"
Aseela Thayyiba| "aarthi@aarthimart.com"| "Aarthi@123"
aarthi| "aarthig@aarthimart.com"| "Aarthi@123"
bloo| "aarthigg@aarthimart.com"| "Aarthi@123"
Aarthi| "aarthi@gmail.com"| "Aarthi@123"
Aarthi guna| "aarthibuys@gmail.com"| "Aarthi@123"
aarthi| "aarthiidk@gmail.com"| "Aarthi@123"
lol| "new@aarthimart.com"| Confirm before use

Seller Accounts

Name| Email| Password
Demo Seller| "seller@aarthimart.com"| "Aarthi@123"
aarthi| "aarthisells@gmail.com"| "Aarthi@123"
Aarthi| "aaarthisells@aarthimart.com"| "Aarthi@123"
mart| "wesell@gmail.com"| "Aarthi@123"


🔮 Future Work

- AI chatbot integration
- Public cloud deployment
- Additional automated testing
- Performance testing
- Final UI polish

📅 Project Timeline

- Checkpoint: July 27, 2026 – October 10, 2026
- Final Review: October 10, 2026

👩‍💻 Developer

Aarthi G
Computer Science and Engineering
Anna University — R2025

---

Thank you for reviewing Aarthi Mart!