\# Aarthi Mart



A multi-seller e-commerce marketplace web application built using Java Servlets, JDBC, Apache Tomcat and H2 Database.



\## Project Overview



Aarthi Mart allows sellers to create and manage product listings while buyers can browse products, search and filter products, add products to a cart, place orders using a mock checkout flow, view order history and submit reviews for delivered products.



An administrator can manage users, orders and product listings.



\## Problem Statement



Traditional small-scale online stores often lack a simple marketplace system where multiple sellers can independently manage products while buyers can browse, purchase and review products.



Aarthi Mart provides a centralized marketplace where:



\- Buyers can discover and purchase products.

\- Sellers can manage their listings and incoming orders.

\- Administrators can manage users, products and orders.

\- Customers can provide ratings and reviews after receiving products.



\## Features



\### Buyer



\- User registration and login

\- Browse products

\- Search products by keyword

\- Filter products by category

\- Add products to cart

\- Update cart quantities

\- Remove cart items

\- Mock checkout

\- View order history

\- Track order status

\- Review delivered products

\- Wishlist / save-for-later



\### Seller



\- Seller authentication

\- Add products

\- Edit products

\- Delete products

\- Manage stock

\- View incoming orders

\- Update order status

\- View product count

\- View order count

\- View revenue

\- View customer rating



\### Admin



\- Admin authentication

\- View users

\- View orders

\- View products

\- Remove product listings

\- Update order status



\## Technology Stack



| Component | Technology |

|---|---|

| Language | Java 17 |

| Backend | Java Servlets |

| Server | Apache Tomcat 9 |

| Build Tool | Maven |

| Database | H2 |

| Database Access | JDBC |

| Connection Pool | HikariCP |

| JSON | Gson |

| Password Hashing | jBCrypt |

| Frontend | HTML, CSS, JavaScript |

| Logging | SLF4J + Logback |

| Testing/CI | Maven + GitHub Actions |

| Version Control | Git + GitHub |



\## Architecture



The application follows a layered architecture:



Browser

&#x20;  |

&#x20;  | HTTP / Fetch

&#x20;  v

Servlet Controllers

&#x20;  |

&#x20;  v

Service Layer

&#x20;  |

&#x20;  v

DAO Layer

&#x20;  |

&#x20;  v

JDBC / HikariCP

&#x20;  |

&#x20;  v

H2 Database





\## Package Structure



com.aarthi.mart

|

|-- controller

|     |-- AuthServlet

|     |-- ProductServlet

|     |-- CartServlet

|     |-- OrderServlet

|     |-- AdminServlet

|     |-- ReviewServlet

|     `-- WishlistServlet

|

|-- dao

|     |-- UserDAO

|     |-- ProductDAO

|     |-- CartDAO

|     |-- OrderDAO

|     |-- OrderItemDAO

|     |-- ReviewDAO

|     `-- WishlistDAO

|

|-- model

|     |-- User

|     |-- Product

|     |-- CartItem

|     |-- Order

|     |-- OrderItem

|     `-- Review

|

|-- service

|     `-- OrderService

|

|-- filter

|     `-- AuthFilter

|

|-- listener

|     `-- DbContextListener

|

`-- util

&#x20;     |-- DBUtil

&#x20;     `-- PasswordUtil



\## Database



The application uses H2 Database.



Main entities:



Users

&#x20; |

&#x20; |---- Products

&#x20; |---- Orders

&#x20; |---- Cart Items

&#x20; `---- Reviews



Products

&#x20; |

&#x20; |---- Order Items

&#x20; `---- Reviews



Orders

&#x20; |

&#x20; `---- Order Items



\## Main User Flow



Register

&#x20;  ↓

Login

&#x20;  ↓

Browse Products

&#x20;  ↓

Search / Filter

&#x20;  ↓

Add to Cart

&#x20;  ↓

Checkout

&#x20;  ↓

Mock Payment Confirmation

&#x20;  ↓

Order Created

&#x20;  ↓

Seller Receives Order

&#x20;  ↓

Order Status Updated

&#x20;  ↓

Buyer Receives Product

&#x20;  ↓

Buyer Submits Review



\## Local Setup



\### Requirements



\- JDK 17

\- Maven

\- Apache Tomcat 9

\- Git



\### Build



mvn clean package



\### Deploy



Copy the generated WAR file:



target/aarthi\_mart.war



to the Apache Tomcat webapps folder.



\### Run



http://localhost:8080/aarthi\_mart/index.html



\## Main Pages



| Page | Purpose |

|---|---|

| index.html | Product marketplace |

| login.html | User login |

| register.html | User registration |

| cart.html | Shopping cart |

| checkout.html | Mock checkout |

| orders.html | Buyer orders |

| seller.html | Seller dashboard |

| admin.html | Admin management |

| wishlist.html | Wishlist |



\## Security



The application includes:



\- PreparedStatement-based database queries

\- Password hashing using jBCrypt

\- Session-based authentication

\- Role-based access checks

\- Seller and admin authorization checks

\- Input validation

\- Database foreign-key constraints



\## Continuous Integration



GitHub Actions automatically runs:



mvn -B clean verify



Workflow:



.github/workflows/build.yml



\## Project Status



\### Mandatory Features



\- \[x] F1 Authentication and roles

\- \[x] F2 Seller product management

\- \[x] F3 Product browsing/search/filter

\- \[x] F4 Shopping cart

\- \[x] F5 Checkout

\- \[x] F6 Order history and seller orders

\- \[x] F7 Admin management

\- \[x] F8 Product reviews and ratings



\### Optional Features



\- \[x] O1 Wishlist

\- \[x] O2 Order status workflow

\- \[x] O3 Seller sales dashboard

\- \[ ] O4 AI chatbot



\## Deployment



Public deployment URL:



To be added before deployment review.



\## Future Work



\- AI chatbot integration

\- Public cloud deployment

\- Additional automated testing

\- Performance testing

\- Final UI polish



\## Project Timeline



Checkpoint: July 27, 2026 – October 10, 2026



Final Review: October 10, 2026



\## Developer



Aseela Thayyiba



Computer Science and Engineering



Anna University — R2025

