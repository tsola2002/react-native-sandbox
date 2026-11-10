package com.smkngun.dealership.Services;

import com.smkngun.dealership.dto.request.RegisterRequest;
import com.smkngun.dealership.model.Customer;
import com.smkngun.dealership.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CustomerService {

    // ✅ Correct repository
    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public Customer register(RegisterRequest request) {
        // ✅ existsByEmail now resolves on CustomerRepository
        if (customerRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("Email already registered");
        }

        Customer customer = Customer.builder()
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .fullName(request.fullName())
                .phone(request.phone())
                .address(request.address())
                .role(Customer.Role.CUSTOMER)
                .build();

        // ✅ save(Customer) → Customer
        Customer saved = customerRepository.save(customer);
        log.info("Registered customer: id={}, email={}", saved.getId(), saved.getEmail());
        return saved;
    }

    // public Customer findByEmail(String email) {
    //     // ✅ findByEmail now resolves; orElseThrow returns Customer
    //     return customerRepository.findByEmail(email)
    //             .orElseThrow(() -> new ResourceNotFoundException(
    //                     "Customer not found: " + email));
    // }

    // public Customer findById(Long id) {
    //     return customerRepository.findById(id)
    //             .orElseThrow(() -> new ResourceNotFoundException(
    //                     "Customer not found: " + id));
    // }
}