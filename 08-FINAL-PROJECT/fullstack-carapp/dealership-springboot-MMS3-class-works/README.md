# Dealership E-Commerce Platform - Spring Boot

A comprehensive e-commerce platform for dealership management built with Spring Boot. This repository contains course work and implementation files for a class project focused on building a dealership-based online commerce system.

## Project Overview

This project aims to create an online platform for a dealership where users can browse vehicles, view product details, add items to a cart, place orders, and manage inventory. It is designed as a practical class project to demonstrate e-commerce functionality, backend engineering, and application architecture in Java and Spring Boot.

## Features

- Vehicle or product catalog display
- Product search and category filtering
- Shopping cart functionality
- Checkout and order placement flow
- User registration and login
- Admin inventory management
- Order tracking and status management
- RESTful API structure
- Database-backed persistence

## Tech Stack

- Java
- Spring Boot
- Maven
- Spring Data JPA
- MySQL or PostgreSQL
- HTML/CSS/JavaScript
- Thymeleaf or REST frontend integration

## Prerequisites

Before running this project, ensure you have:

- Java 17 or newer
- Maven 3.8+
- MySQL 8.x or PostgreSQL
- Git

## Getting Started

### Clone the repository

```bash
git clone https://github.com/bola-badejo/dealership-springboot-MMS3-class-works.git
cd dealership-springboot-MMS3-class-works
```

### Configure the database

Update `src/main/resources/application.properties` with your database credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/dealership_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### Build the project

```bash
mvn clean install
```

### Run the application

```bash
mvn spring-boot:run
```

Then open:

```text
http://localhost:8080
```

## Project Structure

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── dealership/
│   │           ├── controller/
│   │           ├── model/
│   │           ├── repository/
│   │           ├── service/
│   │           ├── dto/
│   │           └── config/
│   └── resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
└── test/
```

## Learning Objectives

This project demonstrates how to:

- design and build a Spring Boot application
- connect a Java application to a relational database
- implement ecommerce logic in a backend service layer
- structure a multi-layered MVC application
- manage orders, products, and users in a business application

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributors

- Bola Badejo

## Notes

This repository is intended for educational and class-project purposes. It can be expanded with additional features such as payment integration, authentication improvements, and a richer frontend experience.

---

Project status: In development / class project
