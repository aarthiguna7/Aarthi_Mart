package com.aarthi.mart.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PasswordUtilTest {

    @Test
    void hashAndMatchShouldWork() {
        String password = "admin123";

        String hash = PasswordUtil.hash(password);

        assertNotNull(hash);
        assertNotEquals(password, hash);
        assertTrue(PasswordUtil.matches(password, hash));
        assertFalse(PasswordUtil.matches("wrongPassword", hash));
    }

    @Test
    void nullValuesShouldNotMatch() {
        assertFalse(PasswordUtil.matches(null, null));
        assertFalse(PasswordUtil.matches("admin123", null));
    }
}
