package com.smkngun.dealership.dto.response;

import java.math.BigDecimal;

import lombok.Builder;

@Builder
public record OrderItemResponse(
        Long id,
        Long carId,
        String carDescription,
        BigDecimal priceAtPurchase,
        Integer quantity,
        BigDecimal subtotal
) {}
