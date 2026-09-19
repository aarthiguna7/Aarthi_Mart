package com.aarthi.mart.dao;

import com.aarthi.mart.model.Product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO extends BaseDAO {

    public List<Product> getAllProducts() {

        List<Product> products = new ArrayList<>();

        String sql = """
                SELECT id, seller_id, name, description,
                       price, stock_qty, category, image_url
                FROM products
                ORDER BY id DESC
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql);
                ResultSet result =
                        statement.executeQuery()
        ) {

            while (result.next()) {
                products.add(mapProduct(result));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return products;
    }

    public List<Product> getProductsBySeller(int sellerId) {

        List<Product> products = new ArrayList<>();

        String sql = """
                SELECT id, seller_id, name, description,
                       price, stock_qty, category, image_url
                FROM products
                WHERE seller_id = ?
                ORDER BY id DESC
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setInt(1, sellerId);

            try (ResultSet result =
                         statement.executeQuery()) {

                while (result.next()) {
                    products.add(mapProduct(result));
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return products;
    }

    public Product getProductById(int id) {

        String sql = """
                SELECT id, seller_id, name, description,
                       price, stock_qty, category, image_url
                FROM products
                WHERE id = ?
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setInt(1, id);

            try (ResultSet result =
                         statement.executeQuery()) {

                if (result.next()) {
                    return mapProduct(result);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    public List<Product> getProductsByCategory(
            String category) {

        List<Product> products = new ArrayList<>();

        String sql = """
                SELECT id, seller_id, name, description,
                       price, stock_qty, category, image_url
                FROM products
                WHERE category = ?
                ORDER BY id DESC
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setString(1, category);

            try (ResultSet result =
                         statement.executeQuery()) {

                while (result.next()) {
                    products.add(mapProduct(result));
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return products;
    }

    public boolean addProduct(Product product) {

        String sql = """
                INSERT INTO products
                (seller_id, name, description, price,
                 stock_qty, category, image_url)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setInt(1, product.getSellerId());
            statement.setString(2, product.getName());
            statement.setString(3, product.getDescription());
            statement.setBigDecimal(4, product.getPrice());
            statement.setInt(5, product.getStockQty());
            statement.setString(6, product.getCategory());
            statement.setString(7, product.getImageUrl());

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean updateProduct(Product product) {

        String sql = """
                UPDATE products
                SET name = ?,
                    description = ?,
                    price = ?,
                    stock_qty = ?,
                    category = ?,
                    image_url = ?
                WHERE id = ?
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setString(1, product.getName());
            statement.setString(2, product.getDescription());
            statement.setBigDecimal(3, product.getPrice());
            statement.setInt(4, product.getStockQty());
            statement.setString(5, product.getCategory());
            statement.setString(6, product.getImageUrl());
            statement.setInt(7, product.getId());

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean updateProductBySeller(
            Product product,
            int sellerId) {

        String sql = """
                UPDATE products
                SET name = ?,
                    description = ?,
                    price = ?,
                    stock_qty = ?,
                    category = ?,
                    image_url = ?
                WHERE id = ?
                  AND seller_id = ?
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setString(1, product.getName());
            statement.setString(2, product.getDescription());
            statement.setBigDecimal(3, product.getPrice());
            statement.setInt(4, product.getStockQty());
            statement.setString(5, product.getCategory());
            statement.setString(6, product.getImageUrl());
            statement.setInt(7, product.getId());
            statement.setInt(8, sellerId);

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean deleteProduct(int id) {

        String sql = """
                DELETE FROM products
                WHERE id = ?
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setInt(1, id);

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean deleteProductBySeller(
            int id,
            int sellerId) {

        String sql = """
                DELETE FROM products
                WHERE id = ?
                  AND seller_id = ?
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setInt(1, id);
            statement.setInt(2, sellerId);

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean reduceStock(
            int productId,
            int quantity) {

        if (quantity <= 0) {
            return false;
        }

        String sql = """
                UPDATE products
                SET stock_qty = stock_qty - ?
                WHERE id = ?
                  AND stock_qty >= ?
                """;

        try (
                Connection connection = getConnection();
                PreparedStatement statement =
                        connection.prepareStatement(sql)
        ) {

            statement.setInt(1, quantity);
            statement.setInt(2, productId);
            statement.setInt(3, quantity);

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Product mapProduct(
            ResultSet result) throws Exception {

        return new Product(
                result.getInt("id"),
                result.getInt("seller_id"),
                result.getString("name"),
                result.getString("description"),
                result.getBigDecimal("price"),
                result.getInt("stock_qty"),
                result.getString("category"),
                result.getString("image_url")
        );
    }
}