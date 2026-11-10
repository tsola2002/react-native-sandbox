package com.smkngun.dealership.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "cars", indexes = {
        @Index(name = "idx_available", columnList = "available"),
        @Index(name = "idx_body_type", columnList = "bodyType"),
        @Index(name = "idx_price", columnList = "price")
})

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String make;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(nullable = false)
    private Integer year;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(nullable = false)
    private Integer mileage;

    @Column(name = "fuel_type", nullable = false, length = 30)
    private String fuelType;

    @Column(nullable = false, length = 30)
    private String transmission;

    @Column(nullable = false, length = 50)
    private String color;

    @Column(name = "body_type", nullable = false, length = 50)
    private String bodyType;

    @Column(nullable = false, unique = true, length = 50)
    private String vin;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "image_url", length = 500)
    private String imageUrl;

    @Column(nullable = false)
    private Boolean available;

    @Column(nullable = false)
    private Boolean featured;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Transient  
    public String getDisplayName() {
        return year + " " + make + " " + model;
    }

    @Transient
    public String getFormattedPrice() {
        return price != null ? "$" + String.format("%,.2f", price) : "$0.00";
    }

    @Transient
    public String getFormattedMileage() {
        return String.format("%,d km", mileage);
    }

    @Transient
    public boolean isNew() {
        return mileage < 100;
    }

    public void markSold() {
        this.available = false;
    }
}
