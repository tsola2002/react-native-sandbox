package com.smkngun.dealership.service;

import com.smkngun.dealership.domain.Customer;
import com.smkngun.dealership.dto.request.LoginRequest;
import com.smkngun.dealership.dto.request.RegisterRequest;
import com.smkngun.dealership.dto.response.AuthResponse;
import com.smkngun.dealership.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final CustomerService customerService;
    private final AuthenticationManager authManager;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {
        Customer customer = customerService.register(request);
        String token = jwtService.generateToken(customer);
        return new AuthResponse(token, customer.getEmail(),
                customer.getFullName(), customer.getRole().name());
    }

    public AuthResponse login(LoginRequest request) {
        var auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        Customer customer = (Customer) auth.getPrincipal();
        String token = jwtService.generateToken(customer);
        return new AuthResponse(token, customer.getEmail(),
                customer.getFullName(), customer.getRole().name());
    }
}