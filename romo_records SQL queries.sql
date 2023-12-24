-- Comandos creacion de Tablas
CREATE TABLE records (
	id_record SERIAL PRIMARY KEY, 
	band VARCHAR (30) NOT NULL CHECK (band != ''), 
	record_title VARCHAR(50) NOT NULL,
	release_year SMALLINT NOT NULL CHECK (release_year > 0), 
	sale_prize SMALLINT NOT NULL CHECK (sale_prize > 0),
	purchase_prize SMALLINT NOT NULL CHECK (purchase_prize >= 0),
	storage_quantity SMALLINT NOT NULL CHECK (storage_quantity >= 0),
	CONSTRAINT unique_title UNIQUE (band, record_title)
);

CREATE TABLE tickets (
	id_ticket SERIAL PRIMARY KEY,
	ticket_date TIMESTAMP DEFAULT current_timestamp CHECK (ticket_date >= '2023-12-16'),
	successful BOOLEAN NOT NULL,
	total SMALLINT NOT NULL CHECK (total > 0)
);

 
CREATE TABLE sales (
	id_sale SERIAL PRIMARY KEY,
	id_record SMALLINT,
	FOREIGN KEY (id_record) REFERENCES records(id_record),
	id_ticket SMALLINT,
	FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket),
	piece_quantity INT NOT NULL CHECK (piece_quantity > 0),
	CONSTRAINT no_duplicate_record_on_ticket UNIQUE (id_record, id_ticket)
);

-- Comandos para tabla "records"
ALTER TABLE records ADD 

INSERT INTO records (id_record, band, record_title, release_year, sale_prize, purchase_prize, storage_quantity)
VALUES 
(DEFAULT, 'La Vida Bohème', 'Caribe Caribe', 2023, 950, 350, 30),
(DEFAULT, 'La Vida Bohème', 'Nuestra', 2011, 1200, 350, 30),
(DEFAULT, 'La Vida Bohème', 'Será', 2013, 1050, 350, 30),
(DEFAULT, 'Carolina Durante', 'Cuatro Chavales', 2022, 750, 350, 30),
(DEFAULT, 'Carolina Durante', 'Carolina Durante', 2019, 950, 350, 30),
(DEFAULT, 'Carolina Durante', 'Los Chavales', 2001, 550, 350, 30),
(DEFAULT, 'Triángulo de Amor Bizarro', 'Triángulo de Amor Bizarro', 2020, 1050, 350, 30),
(DEFAULT, 'Triángulo de Amor Bizarro', 'Victoria Mística', 2013, 950, 350, 30),
(DEFAULT, 'Triángulo de Amor Bizarro', 'Año Santo', 2010, 800, 350, 30),
(DEFAULT, 'Anderson .Paak', 'Malibu', 2016, 1200, 350, 30),
(DEFAULT, 'Anderson .Paak', 'Ventura', 2019, 900, 350, 30),
(DEFAULT, 'Ash Walker', 'Aquamarine', 2019, 1400, 350, 30),
(DEFAULT, 'Darkhouse Family', 'The Offering', 2017, 750, 350, 30),
(DEFAULT, 'Kali Uchis', 'Isolation', 2018, 1250, 350, 30),
(DEFAULT, 'Kali Uchis', 'Sin Miedo (del Amor y Otros Demonios)', 2018, 1250, 350, 30),
(DEFAULT, 'Kali Uchis', 'Red Moon in Venus', 2023, 1500, 350, 30);

DELETE FROM records WHERE id_record = 16;

-- Comandos para Tickets
INSERT INTO tickets (successful, total) 
VALUES 
(true, 1200),
(true, 3000),
(true, 2500),
(false, 2500),
(true, 2100),
(true, 1700),
(false, 1200),
(true, 1200);

-- Comandos para Tabla sales
INSERT INTO sales (id_record, id_ticket, piece_quantity) VALUES 
(4, 2, 2),
(7, 3, 1),
(10, 3, 1),
(5, 4, 1),
(7, 5, 1),
(8, 5, 2),
(12, 1, 2);


-- TEST para NOT NULL validations
INSERT INTO records (id_record, record_title)
VALUES (DEFAULT, 'Caribe Caribe');

INSERT INTO tickets (total) VALUES (1);


-- TEST para CHECK validations
INSERT INTO records (id_record, band, record_title, release_year, sale_prize, purchase_prize, storage_quantity)
VALUES (DEFAULT, 'La Vida Boh', 'Caribe Caribe', 2020, 1200, 200, 1);

INSERT INTO tickets (successful, total) VALUES (true, 5);

INSERT INTO sales (id_record, id_ticket, piece_quantity) VALUES (5, 2, 1);

-- TEST para FK validations
INSERT INTO records (id_record, storage_quantity, purchase_prize)
VALUES (99, 100, 1475);


-- Comandos Generales
SELECT * FROM records;
SELECT * FROM tickets;
SELECT * FROM sales;

DROP TABLE records;
DROP TABLE tickets;
DROP TABLE sales;