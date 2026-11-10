package com.smkngun.dealership.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.smkngun.dealership.dto.response.OrderItemResponse;
import com.smkngun.dealership.dto.response.OrderResponse;
import com.smkngun.dealership.dto.response.PaymentResponse;
import com.smkngun.dealership.model.OrderItem;
import com.smkngun.dealership.model.Payment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mapping(target = "customerId", source = "customer.id")
    @Mapping(target = "customerName", source = "customer.fullName")
    @Mapping(target = "status", expression = "java(order.getStatus().name())")
    @Mapping(target = "items", source = "items")
    @Mapping(target = "payment", source = "payment")
    OrderResponse toResponse(Order order);

    List<OrderResponse> toResponseList(List<Order> orders);

    @Mapping(target = "carId", source = "car.id")
    @Mapping(target = "subtotal", expression = "java(item.getSubtotal())")
    OrderItemResponse toItemResponse(OrderItem item);

    @Mapping(target = "status", expression = "java(payment.getStatus().name())")
    PaymentResponse toPaymentResponse(Payment payment);
}
