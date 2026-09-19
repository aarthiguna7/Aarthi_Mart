package com.aarthi.mart.controller;

import com.aarthi.mart.dao.OrderDAO;
import com.aarthi.mart.model.Order;
import com.aarthi.mart.model.OrderItem;
import com.aarthi.mart.service.OrderService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@WebServlet("/orders")
public class OrderServlet extends HttpServlet {

    private OrderService orderService;
    private OrderDAO orderDAO;
    private Gson gson;

    @Override
    public void init() {

        orderService = new OrderService();
        orderDAO = new OrderDAO();

        gson = new GsonBuilder()
                .registerTypeAdapter(
                        LocalDateTime.class,
                        (com.google.gson.JsonSerializer<LocalDateTime>)
                                (src, typeOfSrc, context) ->
                                        new com.google.gson.JsonPrimitive(
                                                src.format(
                                                        DateTimeFormatter.ISO_LOCAL_DATE_TIME
                                                )
                                        )
                )
                .create();
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session =
                request.getSession(false);

        if (session == null ||
                session.getAttribute("userId") == null) {

            response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Please login first"
            );
            return;
        }

        int userId =
                (Integer) session.getAttribute("userId");

        String action =
                request.getParameter("action");

        /*
         * GET /orders?action=items&orderId=1
         */
        if ("items".equals(action)) {

            getOrderItems(
                    request,
                    response,
                    userId
            );

            return;
        }

        /*
         * GET /orders
         */
        List<Order> orders =
                orderDAO.getOrdersByUser(userId);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write(
                gson.toJson(orders)
        );
    }

    private void getOrderItems(
            HttpServletRequest request,
            HttpServletResponse response,
            int userId)
            throws IOException {

        String orderIdParameter =
                request.getParameter("orderId");

        if (orderIdParameter == null ||
                orderIdParameter.isBlank()) {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Order ID is required"
            );
            return;
        }

        try {

            int orderId =
                    Integer.parseInt(orderIdParameter);

            if (orderId <= 0) {

                response.sendError(
                        HttpServletResponse.SC_BAD_REQUEST,
                        "Invalid order ID"
                );
                return;
            }

            /*
             * Make sure this order belongs to
             * the currently logged-in user.
             */
            List<Order> userOrders =
                    orderDAO.getOrdersByUser(userId);

            boolean ownsOrder = false;

            for (Order order : userOrders) {

                if (order.getId() == orderId) {
                    ownsOrder = true;
                    break;
                }
            }

            if (!ownsOrder) {

                response.sendError(
                        HttpServletResponse.SC_FORBIDDEN,
                        "You cannot view this order"
                );
                return;
            }

            List<OrderItem> items =
                    orderDAO.getOrderItems(orderId);

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            response.getWriter().write(
                    gson.toJson(items)
            );

        } catch (NumberFormatException e) {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Invalid order ID"
            );
        }
    }

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session =
                request.getSession(false);

        if (session == null ||
                session.getAttribute("userId") == null) {

            response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Please login first"
            );
            return;
        }

        int userId =
                (Integer) session.getAttribute("userId");

        String action =
                request.getParameter("action");

        if ("checkout".equals(action)) {

            checkout(userId, response);

        } else if ("status".equals(action)) {

            updateStatus(request, response, session);

        } else {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Invalid order action"
            );
        }
    }

    private void checkout(
            int userId,
            HttpServletResponse response)
            throws IOException {

        int orderId =
                orderService.checkout(userId);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        if (orderId == -1) {

            response.getWriter().write(
                    "{\"success\":false,\"message\":\"Checkout failed\"}"
            );

        } else {

            response.getWriter().write(
                    "{\"success\":true,\"orderId\":" +
                            orderId +
                            ",\"message\":\"Order placed successfully\"}"
            );
        }
    }

    private void updateStatus(
            HttpServletRequest request,
            HttpServletResponse response,
            HttpSession session)
            throws IOException {

        String role =
                (String) session.getAttribute("role");

        if (!"ADMIN".equals(role)) {

            response.sendError(
                    HttpServletResponse.SC_FORBIDDEN,
                    "Only admin can update order status"
            );
            return;
        }

        String orderIdParameter =
                request.getParameter("orderId");

        String status =
                request.getParameter("status");

        if (orderIdParameter == null ||
                status == null ||
                status.isBlank()) {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Order ID and status are required"
            );
            return;
        }

        if (!isValidStatus(status)) {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Invalid order status"
            );
            return;
        }

        try {

            int orderId =
                    Integer.parseInt(orderIdParameter);

            boolean updated =
                    orderDAO.updateOrderStatus(
                            orderId,
                            status
                    );

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            response.getWriter().write(
                    "{\"success\":" +
                            updated +
                            "}"
            );

        } catch (NumberFormatException e) {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Invalid order ID"
            );
        }
    }

    private boolean isValidStatus(String status) {

        return "PENDING".equals(status) ||
                "CONFIRMED".equals(status) ||
                "SHIPPED".equals(status) ||
                "DELIVERED".equals(status) ||
                "CANCELLED".equals(status);
    }
}