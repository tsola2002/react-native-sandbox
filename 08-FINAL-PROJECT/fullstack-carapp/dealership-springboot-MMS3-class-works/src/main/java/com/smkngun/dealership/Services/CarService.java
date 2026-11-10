package com.smkngun.dealership.Services;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.hibernate.ResourceClosedException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smkngun.dealership.dto.request.CarCreateRequest;
import com.smkngun.dealership.dto.response.CarResponse;
import com.smkngun.dealership.mapper.CarMapper;
import com.smkngun.dealership.model.Car;
import com.smkngun.dealership.repository.CarRepository;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CarService<carMapper> {

    private final CarRepository carRepository;
    private final CarMapper carMapper;

    public Page<CarResponse> search(String keyword, String bodyType, String fuelType,
                                    BigDecimal minPrice, BigDecimal maxPrice,
                                    Pageable pageable) {
        return carRepository
                .searchCars(keyword, bodyType, fuelType, minPrice, maxPrice, false, pageable)
                .map(carMapper::toResponse);
    }

    public Page<CarResponse> searchAdmin(String keyword, String bodyType, String fuelType,
                                          BigDecimal minPrice, BigDecimal maxPrice,
                                          Pageable pageable) {
        return carRepository
                .searchCars(keyword, bodyType, fuelType, minPrice, maxPrice, true, pageable)
                .map(carMapper::toResponse);
    }

    public List<CarResponse> featured() {
        return carMapper.toResponseList(carRepository.findByAvailableTrueAndFeaturedTrue());
    }

    public CarResponse findById(Long id) {
        return carRepository.findById(id)
                .map(carMapper::toResponse)
                .orElseThrow();
    }

    public Car findEntityById(Long id) {
        return carRepository.findById(id)
                .orElseThrow(() -> new ResourceClosedException("Car not found: " + id));
    }

    public List<String> distinctBodyTypes() { return carRepository.findDistinctBodyTypes(); }
    public List<String> distinctFuelTypes() { return carRepository.findDistinctFuelTypes(); }
    public List<String> distinctMakes(){ return carRepository.findDistinctMakes(); }

    @Transactional
    public CarResponse create(CarCreateRequest request) {
        carRepository.findByVin(request.vin()).ifPresent(existing -> {
            throw new IllegalArgumentException("VIN already exists: " + request.vin());
        });
        Car car = carMapper.toEntity(request);
        Car saved = carRepository.save(car);
        log.info("Created car: id={}, vin={}", saved.getId(), saved.getVin());
        return carMapper.toResponse(saved);
    }

    @Transactional
    public CarResponse update(Long id, CarCreateRequest request) {
        Car car = findEntityById(id);
        if (!car.getVin().equals(request.vin())) {
            carRepository.findByVin(request.vin()).ifPresent(existing -> {
                throw new IllegalArgumentException("VIN already exists: " + request.vin());
            });
        }
        carMapper.updateEntity(request, car);
        Car saved = carRepository.save(car);
        log.info("Updated car: id={}", id);
        return carMapper.toResponse(saved);
    }

    @Transactional
    public void delete(Long id) {
        if (!carRepository.existsById(id)) {
            throw new ResourceClosedException("Car not found: " + id);
        }
        carRepository.deleteById(id);
        log.info("Deleted car: id={}", id);
    }

    @Transactional
    void markAsSold(Long carId) {
        Car car = findEntityById(carId);
        car.markSold();
        carRepository.save(car);
        log.info("Car marked as sold: id={}", carId);
    }
}

