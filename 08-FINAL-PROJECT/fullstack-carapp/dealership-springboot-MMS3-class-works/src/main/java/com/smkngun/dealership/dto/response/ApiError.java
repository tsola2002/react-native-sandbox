package com.smkngun.dealership.dto.response;

import java.time.LocalDateTime;
import java.util.Map;

public record ApiError(
        int status,
        String message,
        Map<String, String> fieldErrors,
        LocalDateTime timestamp
) {}
