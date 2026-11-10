package com.smkngun.dealership.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record CheckoutRequest(
        @NotBlank(message = "Card number is required")
        @Pattern(regexp = "\\d{16}", message = "Card number must be 16 digits")
        String cardNumber,

        @NotBlank(message = "Card holder is required")
        String cardHolderName,

        @NotBlank(message = "Shipping address is required")
        @Size(min = 10, message = "Address is too short")
        String shippingAddress
) {}
