package com.smkngun.dealership.dto.request;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;

public record CarCreateRequest(

        @NotBlank(message = "Make is required")
        @Size(max = 100, message = "Make must be at most 100 characters")
        String make,

        @NotBlank(message = "Model is required")
        @Size(max = 100, message = "Model must be at most 100 characters")
        String model,

        @NotNull(message = "Year is required")
        @Min(value = 1900, message = "Year must be 1900 or later")
        @Max(value = 2100, message = "Year must be 2100 or earlier")
        Integer year,

        @NotNull(message = "Price is required")
        @DecimalMin(value = "0.01", message = "Price must be greater than 0")
        @DecimalMax(value = "10000000.00", message = "Price is too large")
        @Digits(integer = 10, fraction = 2, message = "Price must have at most 2 decimal places")
        BigDecimal price,

        @NotNull(message = "Mileage is required")
        @Min(value = 0, message = "Mileage cannot be negative")
        @Max(value = 2000000, message = "Mileage is unrealistic")
        Integer mileage,

        @NotBlank(message = "Fuel type is required")
        @Pattern(regexp = "Gasoline|Diesel|Electric|Hybrid",
                 message = "Fuel type must be Gasoline, Diesel, Electric, or Hybrid")
        String fuelType,

        @NotBlank(message = "Transmission is required")
        @Pattern(regexp = "Automatic|Manual",
                 message = "Transmission must be Automatic or Manual")
        String transmission,

        @NotBlank(message = "Color is required")
        @Size(max = 50, message = "Color must be at most 50 characters")
        String color,

        @NotBlank(message = "Body type is required")
        @Pattern(regexp = "Sedan|SUV|Truck|Coupe|Hatchback|Van|Wagon",
                 message = "Invalid body type")
        String bodyType,

        @NotBlank(message = "VIN is required")
        @Size(min = 11, max = 17, message = "VIN must be 11–17 characters")
        @Pattern(regexp = "[A-HJ-NPR-Z0-9]+",
                 message = "VIN may only contain uppercase letters and digits (no I, O, Q)")
        String vin,

        @Size(max = 2000, message = "Description must be at most 2000 characters")
        String description,

        @Size(max = 500, message = "Image URL must be at most 500 characters")
        String imageUrl,

        Boolean featured
) {}
