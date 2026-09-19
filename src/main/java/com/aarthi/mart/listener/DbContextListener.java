package com.aarthi.mart.listener;

import com.aarthi.mart.util.DBUtil;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.Statement;

@WebListener
public class DbContextListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent event) {

        try (Connection connection = DBUtil.getConnection()) {

            executeSqlFile(connection, "schema.sql");
            executeSqlFile(connection, "seed.sql");

            System.out.println(
                    "========== AARTHI MART DATABASE INITIALIZED =========="
            );

        } catch (Exception e) {

            System.err.println(
                    "========== AARTHI MART DATABASE ERROR =========="
            );

            e.printStackTrace();
        }
    }

    private void executeSqlFile(
            Connection connection,
            String fileName) throws Exception {

        try (InputStream input = getClass()
                .getClassLoader()
                .getResourceAsStream(fileName)) {

            if (input == null) {
                throw new RuntimeException(
                        fileName + " not found"
                );
            }

            String sql = new String(
                    input.readAllBytes(),
                    StandardCharsets.UTF_8
            );

            /*
             * Remove SQL comment lines before
             * splitting the file into commands.
             */
            StringBuilder cleanedSql = new StringBuilder();

            for (String line : sql.split("\\R")) {

                String trimmed = line.trim();

                if (!trimmed.startsWith("--")) {
                    cleanedSql.append(line).append('\n');
                }
            }

            String[] commands =
                    cleanedSql.toString().split(";");

            for (String command : commands) {

                command = command.trim();

                if (!command.isEmpty()) {

                    try (Statement statement =
                                 connection.createStatement()) {

                        statement.execute(command);
                    }
                }
            }
        }
    }
}