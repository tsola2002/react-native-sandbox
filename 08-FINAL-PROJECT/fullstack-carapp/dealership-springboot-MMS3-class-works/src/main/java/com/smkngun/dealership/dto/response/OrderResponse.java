package com.smkngun.dealership.dto.response;

import lombok.Builder;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Builder
public record OrderResponse(
        Long id,
        Long customerId,
        String customerName,
        List<OrderItemResponse> items,
        BigDecimal totalAmount,
        String status,
        String shippingAddress,
        LocalDateTime orderDate,
        PaymentResponse payment
) {}
