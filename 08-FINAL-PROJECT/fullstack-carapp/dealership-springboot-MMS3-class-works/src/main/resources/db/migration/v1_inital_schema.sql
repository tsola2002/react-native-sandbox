CREATE TABLE customers (
    id           BIGSERIAL PRIMARY KEY,
    email        VARCHAR(255) NOT NULL UNIQUE,
    password     VARCHAR(255) NOT NULL,
    full_name    VARCHAR(255) NOT NULL,
    phone        VARCHAR(50),
    address      VARCHAR(500),
    role         VARCHAR(20) NOT NULL DEFAULT 'CUSTOMER',
    created_at   TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE cars (
    id           BIGSERIAL PRIMARY KEY,
    make         VARCHAR(100) NOT NULL,
    model        VARCHAR(100) NOT NULL,
    year         INTEGER NOT NULL,
    price        NUMERIC(12,2) NOT NULL,
    mileage      INTEGER NOT NULL,
    fuel_type    VARCHAR(30) NOT NULL,
    transmission VARCHAR(30) NOT NULL,
    color        VARCHAR(50) NOT NULL,
    body_type    VARCHAR(50) NOT NULL,
    vin          VARCHAR(50) NOT NULL UNIQUE,
    description  TEXT,
    image_url    VARCHAR(500),
    available    BOOLEAN NOT NULL DEFAULT TRUE,
    featured     BOOLEAN NOT NULL DEFAULT FALSE,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_cars_available ON cars(available);
CREATE INDEX idx_cars_body_type ON cars(body_type);
CREATE INDEX idx_cars_fuel_type ON cars(fuel_type);
CREATE INDEX idx_cars_price ON cars(price);

CREATE TABLE orders (
    id               BIGSERIAL PRIMARY KEY,
    customer_id      BIGINT NOT NULL REFERENCES customers(id),
    total_amount     NUMERIC(12,2) NOT NULL,
    status           VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    shipping_address VARCHAR(500) NOT NULL,
    order_date       TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_orders_customer ON orders(customer_id);

CREATE TABLE order_items (
    id                 BIGSERIAL PRIMARY KEY,
    order_id           BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    car_id             BIGINT NOT NULL REFERENCES cars(id),
    car_description    VARCHAR(300) NOT NULL,
    price_at_purchase  NUMERIC(12,2) NOT NULL,
    quantity           INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE payments (
    id              BIGSERIAL PRIMARY KEY,
    order_id        BIGINT NOT NULL REFERENCES orders(id),
    amount          NUMERIC(12,2) NOT NULL,
    card_last4      VARCHAR(4),
    card_holder     VARCHAR(255),
    status          VARCHAR(20) NOT NULL,
    transaction_id  VARCHAR(100),
    payment_date    TIMESTAMP NOT NULL DEFAULT NOW()
);