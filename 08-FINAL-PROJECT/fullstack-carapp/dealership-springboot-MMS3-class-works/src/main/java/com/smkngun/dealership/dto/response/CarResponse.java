package com.smkngun.dealership.dto.response;

import lombok.Builder;

import java.math.BigDecimal;

/**
 * So guys, here is what our API returns about a car.
 *
 * Note the custom display fields (displayName, formattedPrice), they are not
 * declared in car.java they've come from the Car entity's @Transient methods. 
 * We include them here so the front-end doesn't have to re-format.
 * 
 * In my village, that is called professional stuff
 */

@Builder
public record CarResponse(
        Long id,
        String make,
        String model,
        Integer year,
        BigDecimal price,
        String formattedPrice,
        Integer mileage,
        String formattedMileage,
        String fuelType,
        String transmission,
        String color,
        String bodyType,
        String vin,
        String description,
        String imageUrl,
        boolean available,
        boolean featured,
        boolean isNew,
        String displayName
) {}