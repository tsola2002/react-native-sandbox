package com.smkngun.dealership.dto.response;

import lombok.Builder;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Builder
public record PaymentResponse(
        Long id,
        BigDecimal amount,
        String cardLast4,
        String cardHolder,
        String status,
        String transactionId,
        LocalDateTime paymentDate
) {}
