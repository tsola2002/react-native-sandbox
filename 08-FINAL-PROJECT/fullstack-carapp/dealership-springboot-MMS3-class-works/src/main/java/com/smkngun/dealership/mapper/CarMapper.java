package com.smkngun.dealership.mapper;

import com.smkngun.dealership.model.Car;
import com.smkngun.dealership.dto.request.CarCreateRequest;
import com.smkngun.dealership.dto.response.CarResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

/**
 * MapStruct generates the implementation at compile time.
 * No reflection, no runtime cost — just straight Java.
 *
 * Notice we don't write a single line of "car.setMake(request.make())".
 * The generator handles it.
 */

@Mapper(componentModel = "spring")
public interface CarMapper {

    @Mapping(target = "formattedPrice", expression = "java(car.getFormattedPrice())")
    @Mapping(target = "formattedMileage", expression = "java(car.getFormattedMileage())")
    @Mapping(target = "isNew", expression = "java(car.isNew())")
    @Mapping(target = "displayName", expression = "java(car.getDisplayName())")
    CarResponse toResponse(Car car);

    List<CarResponse> toResponseList(List<com.smkngun.dealership.model.Car> cars);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "available", constant = "true")
    Car toEntity(CarCreateRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "available", ignore = true)
    void updateEntity(CarCreateRequest request, @MappingTarget Car car);
}
