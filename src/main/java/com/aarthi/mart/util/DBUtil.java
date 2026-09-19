package com.aarthi.mart.util;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class DBUtil {

    private static final String URL;
    private static final String USERNAME;
    private static final String PASSWORD;

    static {
        try {
            Properties properties = new Properties();

            try (InputStream input = DBUtil.class
                    .getClassLoader()
                    .getResourceAsStream("db.properties")) {

                if (input == null) {
                    throw new RuntimeException(
                            "db.properties not found"
                    );
                }

                properties.load(input);
            }

            URL = properties.getProperty("db.url");
            USERNAME = properties.getProperty("db.username");
            PASSWORD = properties.getProperty("db.password");

            Class.forName(
                    properties.getProperty("db.driver")
            );

        } catch (Exception e) {
            throw new RuntimeException(
                    "Failed to load database configuration",
                    e
            );
        }
    }

    public static Connection getConnection() throws Exception {
        return DriverManager.getConnection(
                URL,
                USERNAME,
                PASSWORD
        );
    }
}