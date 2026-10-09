
package com.aarthi.mart.service;

import com.aarthi.mart.dao.CartDAO;
import com.aarthi.mart.dao.ProductDAO;
import com.aarthi.mart.model.CartItem;
import com.aarthi.mart.model.Product;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ChatService {

    private final ProductDAO productDAO = new ProductDAO();
    private final CartDAO cartDAO = new CartDAO();

    public String getReply(String message) {
        return getReply(message, null);
    }

    public String getReply(String message, Integer userId) {
        String text = message.trim().toLowerCase(Locale.ROOT);

        if (text.matches(".*\\b(hi|hello|hey|hiya)\\b.*")) {
            return "Hii! 🌷 I'm Weirdo, your Aarthi Mart shopping buddy! "
                    + "Ask me to find products, recommend items within "
                    + "your budget, or help with your cart.";
        }

        if (text.contains("help") || text.contains("what can you do")) {
            return "Here's what I can help with! 🛍️\n"
                    + "• Show or search products\n"
                    + "• Recommend products under a budget\n"
                    + "• Add a product to your cart\n"
                    + "• Remove a product from your cart\n"
                    + "• Show your cart and its total\n\n"
                    + "Try: \"Show products under 500\"";
        }

        if (text.matches(".*\\b(cart|basket)\\b.*")
                && (text.contains("show") || text.contains("view")
                || text.contains("what") || text.contains("my")
                || text.contains("total") || text.contains("items")
                || text.equals("cart") || text.equals("basket"))) {
            return showCart(userId);
        }

        if (text.contains("remove") || text.contains("delete")
                || text.contains("take out")) {
            return removeProduct(message, userId);
        }

        if (text.contains("add") && (text.contains("cart")
                || text.contains("basket"))) {
            return addProduct(message, userId);
        }

        BigDecimal budget = findBudget(text);

        if (budget != null) {
            return recommendWithinBudget(budget);
        }

        if (text.contains("product") || text.contains("shop")
                || text.contains("search") || text.contains("find")
                || text.contains("show me") || text.contains("browse")
                || text.startsWith("i want") || text.startsWith("looking for")) {
            return searchProducts(message);
        }

        return "Hey! 🌷 I'm ready to help you shop at Aarthi Mart.\n\n"
                + "Try \"show products\", \"find bags\", "
                + "\"products under 500\", or \"show my cart\".";
    }

    private String searchProducts(String message) {
        String keyword = message.toLowerCase(Locale.ROOT)
                .replaceAll("\\b(show me|show|find|search for|search|"
                        + "browse|products|product|items|item|"
                        + "i want|looking for|please|shop)\\b", " ")
                .trim();

        List<Product> products = keyword.isBlank()
                ? productDAO.getAllProducts()
                : productDAO.searchProducts(keyword);

        return formatProducts(products,
                keyword.isBlank() ? "Here are some products! 🛍️"
                        : "Here's what I found! 🔎");
    }

    private String recommendWithinBudget(BigDecimal budget) {
        if (budget.signum() <= 0) {
            return "Please give me a budget greater than zero. 💗";
        }

        List<Product> affordable = new ArrayList<>();

        for (Product product : productDAO.getAllProducts()) {
            if (product.getPrice() != null
                    && product.getPrice().compareTo(budget) <= 0
                    && product.getStockQty() > 0) {
                affordable.add(product);
            }
        }

        if (affordable.isEmpty()) {
            return "I couldn't find any in-stock products within ₹"
                    + budget.toPlainString()
                    + ". Try increasing your budget a little. 🌷";
        }

        return formatProducts(affordable,
                "Lovely! Here are in-stock products within ₹"
                        + budget.toPlainString() + ": 💸");
    }

    private String addProduct(String message, Integer userId) {
        if (userId == null) {
            return "Please log in first so I can add items to your cart. 💗";
        }

        String query = cleanProductQuery(message, true);
        int quantity = 1;

        Matcher quantityMatcher = Pattern.compile(
                "\\b(\\d+)\\s*(?:x\\s*)?(?:of\\s+)?")
                .matcher(query);

        if (quantityMatcher.find()) {
            try {
                quantity = Integer.parseInt(quantityMatcher.group(1));
                query = query.substring(quantityMatcher.end()).trim();
            } catch (NumberFormatException e) {
                return "Please give me a valid quantity.";
            }
        }

        if (quantity < 1 || quantity > 100) {
            return "Please choose a quantity between 1 and 100.";
        }

        if (query.isBlank()) {
            return "Which product would you like to add? "
                    + "Tell me its name. 🛍️";
        }

        List<Product> matches = productDAO.searchProducts(query);
        Product product = chooseProduct(matches, query);

        if (product == null) {
            return matches.isEmpty()
                    ? "I couldn't find that product. Try its full name "
                      + "or ask me to show products. 🌷"
                    : formatProducts(matches,
                      "I found a few matches. Which one did you mean?");
        }

        if (product.getStockQty() < quantity) {
            return "Sorry, only " + product.getStockQty()
                    + " units of " + product.getName()
                    + " are currently in stock.";
        }

        int existingQuantity = 0;

        for (CartItem item : cartDAO.getCartItems(userId)) {
            if (item.getProductId() == product.getId()) {
                existingQuantity = item.getQuantity();
                break;
            }
        }

        if (existingQuantity + quantity > product.getStockQty()) {
            return "Your cart already has " + existingQuantity
                    + " of " + product.getName() + ". Only "
                    + product.getStockQty()
                    + " are in stock, so I can't add that many.";
        }

        boolean added = cartDAO.addToCart(
                userId, product.getId(), quantity);

        return added
                ? "Done! 🛒 Added " + quantity + " × "
                  + product.getName() + " to your cart."
                : "I couldn't update your cart. Please try again.";
    }

    private String removeProduct(String message, Integer userId) {
        if (userId == null) {
            return "Please log in first to manage your cart. 💗";
        }

        String query = cleanProductQuery(message, false);

        if (query.isBlank()) {
            return "Which product should I remove? Tell me its name.";
        }

        List<CartItem> items = cartDAO.getCartItems(userId);
        List<CartItem> matches = new ArrayList<>();

        for (CartItem item : items) {
            if (item.getProductName() != null
                    && item.getProductName().toLowerCase(Locale.ROOT)
                    .contains(query)) {
                matches.add(item);
            }
        }

        if (matches.isEmpty()) {
            return "I couldn't find that item in your cart. "
                    + "Try \"show my cart\" to see your items.";
        }

        if (matches.size() > 1) {
            StringBuilder reply = new StringBuilder(
                    "I found more than one matching item:\n");

            for (CartItem item : matches) {
                reply.append("• ").append(item.getProductName())
                        .append('\n');
            }

            return reply + "Please tell me the exact product name.";
        }

        CartItem item = matches.get(0);

        boolean removed = cartDAO.removeFromCart(
                userId, item.getProductId());

        return removed
                ? "Done! 🧺 Removed " + item.getProductName()
                  + " from your cart."
                : "I couldn't remove that item. Please try again.";
    }

    private String showCart(Integer userId) {
        if (userId == null) {
            return "Please log in to view your personal cart. 💗";
        }

        List<CartItem> items = cartDAO.getCartItems(userId);

        if (items.isEmpty()) {
            return "Your cart is empty for now! 🌷 "
                    + "Let's find something you love.";
        }

        StringBuilder reply = new StringBuilder("Your cart 🛒\n");
        BigDecimal total = BigDecimal.ZERO;

        for (CartItem item : items) {
            BigDecimal price = item.getPrice() == null
                    ? BigDecimal.ZERO : item.getPrice();

            BigDecimal subtotal = price.multiply(
                    BigDecimal.valueOf(item.getQuantity()));

            total = total.add(subtotal);

            reply.append("• ").append(item.getProductName())
                    .append(" × ").append(item.getQuantity())
                    .append(" — ₹").append(subtotal.toPlainString())
                    .append('\n');
        }

        reply.append("\nCart total: ₹").append(total.toPlainString());
        return reply.toString();
    }

    private String formatProducts(List<Product> products, String heading) {
        if (products == null || products.isEmpty()) {
            return "I couldn't find matching products. "
                    + "Try another name or category. 🌷";
        }

        StringBuilder reply = new StringBuilder(heading).append('\n');
        int count = 0;

        for (Product product : products) {
            if (count++ == 5) {
                reply.append("And more products are available on the site!");
                break;
            }

            reply.append("• ").append(product.getName())
                    .append(" — ₹")
                    .append(product.getPrice() == null
                            ? "Price unavailable"
                            : product.getPrice().toPlainString());

            if (product.getStockQty() <= 0) {
                reply.append(" (out of stock)");
            }

            reply.append('\n');
        }

        return reply.toString().trim();
    }

    private Product chooseProduct(List<Product> matches, String query) {
        if (matches == null || matches.isEmpty()) {
            return null;
        }

        for (Product product : matches) {
            if (product.getName() != null
                    && product.getName().equalsIgnoreCase(query.trim())) {
                return product;
            }
        }

        return matches.size() == 1 ? matches.get(0) : null;
    }

    private String cleanProductQuery(String message, boolean adding) {
        String query = message.toLowerCase(Locale.ROOT);

        query = query.replaceAll(
                "\\b(please|can you|could you|would you|"
                + "add|remove|delete|take out|from|my|the|"
                + "cart|basket|to|of|product|item)\\b", " ");

        query = query.replaceAll("\\b\\d+\\b", " ");
        query = query.replaceAll("\\s+", " ").trim();

        return query;
    }

    private BigDecimal findBudget(String text) {
        Matcher matcher = Pattern.compile(
                "(?:under|below|within|less than|budget of)"
                + "\\s*(?:₹|rs\\.?\\s*)?(\\d+(?:\\.\\d{1,2})?)"
                + "|₹\\s*(\\d+(?:\\.\\d{1,2})?)"
        ).matcher(text);

        if (matcher.find()) {
            try {
                String amount = matcher.group(1) != null
                        ? matcher.group(1) : matcher.group(2);
                return new BigDecimal(amount);
            } catch (NumberFormatException ignored) {
                return null;
            }
        }

        return null;
    }
}