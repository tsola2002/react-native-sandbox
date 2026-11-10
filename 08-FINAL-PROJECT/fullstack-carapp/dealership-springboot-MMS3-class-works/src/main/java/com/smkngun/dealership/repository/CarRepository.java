package com.smkngun.dealership.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smkngun.dealership.model.Car;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository 
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByAvailableTrue();
    List<Car> findByAvailableTrueAndFeaturedTrue();
    Optional<Car> findByVin(String vin);

    @Query("""
            SELECT c FROM Car c
            WHERE (:includeUnavailable = true OR c.available = true)
              AND (:keyword IS NULL OR LOWER(c.make) LIKE LOWER(CONCAT('%', :keyword, '%'))
                   OR LOWER(c.model) LIKE LOWER(CONCAT('%', :keyword, '%')))
              AND (:bodyType IS NULL OR c.bodyType = :bodyType)
              AND (:fuelType IS NULL OR c.fuelType = :fuelType)
              AND (:minPrice IS NULL OR c.price >= :minPrice)
              AND (:maxPrice IS NULL OR c.price <= :maxPrice)
            """)
    Page<Car> searchCars(
            @Param("keyword") String keyword,
            @Param("bodyType") String bodyType,
            @Param("fuelType") String fuelType,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("includeUnavailable") boolean includeUnavailable,
            Pageable pageable);

    @Query("SELECT DISTINCT c.bodyType FROM Car c ORDER BY c.bodyType")
    List<String> findDistinctBodyTypes();

    @Query("SELECT DISTINCT c.fuelType FROM Car c ORDER BY c.fuelType")
    List<String> findDistinctFuelTypes();

    @Query("SELECT DISTINCT c.make FROM Car c ORDER BY c.make")
    List<String> findDistinctMakes();
}