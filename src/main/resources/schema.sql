-- ============================================================
-- AARTHI MART DATABASE SCHEMA
-- Amazon-style Multi-Seller E-Commerce Marketplace
-- ============================================================


-- ============================================================
-- USERS
-- ============================================================

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'BUYER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ============================================================
-- PRODUCTS
-- ============================================================

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(500),
    price DECIMAL(10,2) NOT NULL,
    stock_qty INT DEFAULT 10,
    category VARCHAR(50) NOT NULL,
    image_url VARCHAR(1000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (seller_id)
        REFERENCES users(id)
        ON DELETE SET NULL
);


-- ============================================================
-- CART ITEMS
-- ============================================================

CREATE TABLE IF NOT EXISTS cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT user_product_unique
        UNIQUE (user_id, product_id),

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);


-- ============================================================
-- ORDERS
-- ============================================================

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'PLACED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);


-- ============================================================
-- ORDER ITEMS
-- ============================================================

CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);


-- ============================================================
-- DEFAULT SELLER ACCOUNT
-- ============================================================

INSERT INTO users (name, email, password, role)
SELECT
    'Aarthi Mart Admin',
    'admin@aarthimart.com',
    'admin123',
    'SELLER'
WHERE NOT EXISTS (
    SELECT 1
    FROM users
    WHERE email = 'admin@aarthimart.com'
);


-- ============================================================
-- DEFAULT BUYER ACCOUNT
-- ============================================================

INSERT INTO users (name, email, password, role)
SELECT
    'Demo Customer',
    'buyer@aarthimart.com',
    'buyer123',
    'BUYER'
WHERE NOT EXISTS (
    SELECT 1
    FROM users
    WHERE email = 'buyer@aarthimart.com'
);


-- ============================================================
-- AMAZON-STYLE PRODUCTS
-- ============================================================

INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Wireless Bluetooth Headphones',
    'Over-ear wireless headphones with deep bass and long battery life',
    1499.00,
    25,
    'Electronics',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Wireless Bluetooth Headphones'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Smart Watch',
    'Fitness tracking smartwatch with heart rate and activity monitoring',
    2299.00,
    18,
    'Electronics',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Smart Watch'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Mechanical Gaming Keyboard',
    'RGB mechanical keyboard designed for gaming and productivity',
    1899.00,
    20,
    'Electronics',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Mechanical Gaming Keyboard'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Classic Casual Backpack',
    'Spacious everyday backpack suitable for college, travel and work',
    899.00,
    30,
    'Fashion',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Classic Casual Backpack'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Minimal White Sneakers',
    'Comfortable everyday sneakers with a clean minimalist design',
    1599.00,
    22,
    'Fashion',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Minimal White Sneakers'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Ceramic Coffee Mug Set',
    'Set of elegant ceramic mugs for coffee, tea and everyday use',
    599.00,
    35,
    'Home & Kitchen',
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Ceramic Coffee Mug Set'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Aesthetic Table Lamp',
    'Modern decorative table lamp for bedroom, study and workspace',
    999.00,
    16,
    'Home & Kitchen',
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Aesthetic Table Lamp'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Skincare Essentials Set',
    'Daily skincare essentials for a simple self-care routine',
    799.00,
    28,
    'Beauty',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Skincare Essentials Set'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Everyday Notebook Set',
    'Premium ruled notebooks for school, college and journaling',
    349.00,
    40,
    'Books & Stationery',
    'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Everyday Notebook Set'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Programming Fundamentals Book',
    'Beginner-friendly programming reference book for students',
    699.00,
    15,
    'Books & Stationery',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Programming Fundamentals Book'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Yoga Exercise Mat',
    'Non-slip lightweight exercise mat for yoga and home workouts',
    749.00,
    24,
    'Sports',
    'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Yoga Exercise Mat'
);


INSERT INTO products
    (seller_id, name, description, price, stock_qty, category, image_url)
SELECT
    (SELECT id FROM users WHERE email = 'admin@aarthimart.com'),
    'Insulated Water Bottle',
    'Stainless steel reusable bottle with temperature retention',
    649.00,
    32,
    'Sports',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80'
WHERE NOT EXISTS (
    SELECT 1 FROM products
    WHERE name = 'Insulated Water Bottle'
);


-- ============================================================
-- END OF AARTHI MART SCHEMA
-- ============================================================