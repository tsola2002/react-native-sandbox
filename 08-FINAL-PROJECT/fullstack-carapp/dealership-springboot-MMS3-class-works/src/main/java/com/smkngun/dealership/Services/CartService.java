package com.smkngun.dealership.service;

import com.smkngun.dealership.domain.Car;
import com.smkngun.dealership.domain.CartItem;
import com.smkngun.dealership.exception.BusinessException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CarService carService;
    private final Map<Long, List<CartItem>> carts = new ConcurrentHashMap<>();

    public List<CartItem> getItems(Long customerId) {
        return carts.getOrDefault(customerId, List.of());
    }

    public CartItem add(Long customerId, Long carId) {
        Car car = carService.findEntityById(carId);
        if (!car.getAvailable()) {
            throw new BusinessException("This car has already been sold");
        }
        List<CartItem> items = carts.computeIfAbsent(customerId, k -> new ArrayList<>());
        boolean alreadyIn = items.stream()
                .anyMatch(i -> i.getCar().getId().equals(carId));
        if (alreadyIn) {
            throw new BusinessException("This car is already in your cart");
        }
        CartItem item = new CartItem(car);
        items.add(item);
        return item;
    }

    public void remove(Long customerId, Long carId) {
        List<CartItem> items = carts.get(customerId);
        if (items != null) {
            items.removeIf(i -> i.getCar().getId().equals(carId));
        }
    }

    public void clear(Long customerId) {
        carts.remove(customerId);
    }

    public int count(Long customerId) {
        return getItems(customerId).size();
    }

    public BigDecimal total(Long customerId) {
        return getItems(customerId).stream()
                .map(CartItem::getSubtotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
