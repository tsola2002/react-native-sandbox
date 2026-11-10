package com.smkngun.dealership.service;

import com.smkngun.dealership.domain.Order;
import com.smkngun.dealership.domain.Payment;
import com.smkngun.dealership.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class PaymentService {

    private final PaymentRepository paymentRepository;

    /**
     * Simulated charge. If you guys learn services right and implement your service
     * classes correctly, I'll teach you web payment integration + how to verify payments
     * and creating balance sheets for backend payment records.
     */
    @Transactional
    public Payment charge(Order order, String cardNumber, String cardHolderName) {
        Payment payment = Payment.builder()
                .order(order)
                .amount(order.getTotalAmount())
                .cardHolder(cardHolderName)
                .cardLast4(extractLast4(cardNumber))
                .build();

        if (isValidCard(cardNumber)) {
            payment.setStatus(Payment.PaymentStatus.SUCCESS);
            payment.setTransactionId("TXN-" +
                    UUID.randomUUID().toString().substring(0, 8).toUpperCase());
            log.info("Payment SUCCESS: order={}, amount={}",
                    order.getId(), order.getTotalAmount());
        } else {
            payment.setStatus(Payment.PaymentStatus.FAILED);
            log.warn("Payment FAILED: order={}", order.getId());
        }

        return paymentRepository.save(payment);
    }

    private boolean isValidCard(String cardNumber) {
        if (cardNumber == null) return false;
        String digits = cardNumber.replaceAll("\\D", "");
        return digits.length() == 16;
    }

    private String extractLast4(String cardNumber) {
        if (cardNumber == null) return "****";
        String digits = cardNumber.replaceAll("\\D", "");
        return digits.length() < 4 ? "****" : digits.substring(digits.length() - 4);
    }
}