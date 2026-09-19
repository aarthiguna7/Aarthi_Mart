package com.aarthi.mart.dao;

import com.aarthi.mart.util.DBUtil;

import java.sql.Connection;

public class BaseDAO {

    protected Connection getConnection() throws Exception {
        return DBUtil.getConnection();
    }
}