
package com.aarthi.mart.service;

import com.aarthi.mart.dao.OrderDAO;

public class OrderService {

    private final OrderDAO orderDAO;

    public OrderService() {
        this.orderDAO = new OrderDAO();
    }

    public int checkout(int userId) {
        return orderDAO.checkoutCart(userId);
    }
}