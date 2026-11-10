package com.smkngun.dealership.service;

import com.smkngun.dealership.domain.*;
import com.smkngun.dealership.dto.request.CheckoutRequest;
import com.smkngun.dealership.dto.response.OrderResponse;
import com.smkngun.dealership.exception.BusinessException;
import com.smkngun.dealership.exception.ResourceNotFoundException;
import com.smkngun.dealership.mapper.OrderMapper;
import com.smkngun.dealership.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;
    private final CarService carService;
    private final CartService cartService;
    private final PaymentService paymentService;
    private final OrderMapper orderMapper;

    @Transactional
    public OrderResponse placeOrder(Customer customer, CheckoutRequest request) {
        List<CartItem> cartItems = cartService.getItems(customer.getId());
        if (cartItems.isEmpty()) {
            throw new BusinessException("Your cart is empty");
        }

        // Re-check availability
        for (CartItem item : cartItems) {
            Car fresh = carService.findEntityById(item.getCar().getId());
            if (!fresh.getAvailable()) {
                throw new BusinessException(fresh.getDisplayName() + " was just sold.");
            }
        }

        Order order = Order.builder()
                .customer(customer)
                .shippingAddress(request.shippingAddress())
                .status(Order.OrderStatus.PENDING)
                .build();

        for (CartItem ci : cartItems) {
            OrderItem oi = OrderItem.builder()
                    .car(ci.getCar())
                    .carDescription(ci.getCar().getDisplayName())
                    .priceAtPurchase(ci.getCar().getPrice())
                    .quantity(ci.getQuantity())
                    .build();
            order.addItem(oi);
        }
        order.recalculateTotal();

        Payment payment = paymentService.charge(order, request.cardNumber(),
                request.cardHolderName());

        if (payment.getStatus() != Payment.PaymentStatus.SUCCESS) {
            throw new BusinessException("Payment failed. Please check your card details.");
        }
        order.setPayment(payment);
        order.transitionTo(Order.OrderStatus.PAID);

        for (CartItem ci : cartItems) {
            carService.markAsSold(ci.getCar().getId());
        }

        Order saved = orderRepository.save(order);
        cartService.clear(customer.getId());

        log.info("Order placed: id={}, customer={}, total={}",
                saved.getId(), customer.getId(), saved.getTotalAmount());
        return orderMapper.toResponse(saved);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> ordersFor(Customer customer) {
        return orderRepository.findByCustomerIdWithItems(customer.getId())
                .stream()
                .map(orderMapper::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public OrderResponse findByIdForCustomer(Long orderId, Customer customer) {
        Order order = orderRepository.findByIdWithDetails(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        if (!order.getCustomer().getId().equals(customer.getId())) {
            throw new ResourceNotFoundException("Order not found");
        }
        return orderMapper.toResponse(order);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> allOrders() {
        return orderRepository.findAll().stream()
                .map(orderMapper::toResponse)
                .toList();
    }

    @Transactional
    public void markReady(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        order.transitionTo(Order.OrderStatus.READY_FOR_PICKUP);
        log.info("Order {} marked ready", orderId);
    }

    @Transactional
    public void markDelivered(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        order.transitionTo(Order.OrderStatus.DELIVERED);
        log.info("Order {} delivered", orderId);
    }
}