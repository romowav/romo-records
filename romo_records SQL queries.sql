-- Comandos para la DB
ALTER DATABASE romo_records SET TIMEZONE TO 'America/Mexico_City';

SELECT * FROM pg_timezone_names;

-- Comandos creacion de Tablas
CREATE TABLE records (
	id_record INT PRIMARY KEY, 
	band VARCHAR (30) NOT NULL CHECK (band != ''), 
	record_title VARCHAR(50) NOT NULL,
	release_year SMALLINT NOT NULL CHECK (release_year > 0), 
	sale_prize SMALLINT NOT NULL CHECK (sale_prize > 0),
	purchase_prize SMALLINT NOT NULL CHECK (purchase_prize >= 0),
	storage_quantity SMALLINT NOT NULL CHECK (storage_quantity >= 0),
	CONSTRAINT unique_title UNIQUE (band, record_title)
);

CREATE TABLE tickets (
	id_ticket INT PRIMARY KEY,
	ticket_date TIMESTAMP DEFAULT current_timestamp CHECK (ticket_date >= '2023-12-16'),
	successful BOOLEAN NOT NULL,
	total SMALLINT NOT NULL CHECK (total > 0)
);

CREATE TABLE sales (
	id_sale INT PRIMARY KEY,
	id_record SMALLINT,
	FOREIGN KEY (id_record) REFERENCES records(id_record),
	id_ticket SMALLINT,
	FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket),
	piece_quantity INT NOT NULL CHECK (piece_quantity > 0),
	CONSTRAINT no_duplicate_record_on_ticket UNIQUE (id_record, id_ticket)
);

-- Creacion de sequenciaS
CREATE SEQUENCE id_para_records
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
	OWNED BY records.id_record;
	
CREATE SEQUENCE id_para_tickets
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
	OWNED BY tickets.id_ticket;
	
CREATE SEQUENCE id_para_sales
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
	OWNED BY sales.id_sale;


-- Comandos para tabla "records"
ALTER TABLE records ADD 

INSERT INTO records (id_record, band, record_title, release_year, sale_prize, purchase_prize, storage_quantity)
VALUES 
(NEXTVAL('id_para_records'), 'La Vida Bohème', 'Caribe Caribe', 2023, 950, 350, 30),
(NEXTVAL('id_para_records'), 'La Vida Bohème', 'Nuestra', 2011, 1200, 350, 30),
(NEXTVAL('id_para_records'), 'La Vida Bohème', 'Será', 2013, 1050, 350, 30),
(NEXTVAL('id_para_records'), 'Carolina Durante', 'Cuatro Chavales', 2022, 750, 350, 30),
(NEXTVAL('id_para_records'), 'Carolina Durante', 'Carolina Durante', 2019, 950, 350, 30),
(NEXTVAL('id_para_records'), 'Carolina Durante', 'Los Chavales', 2001, 550, 350, 30),
(NEXTVAL('id_para_records'), 'Triángulo de Amor Bizarro', 'Triángulo de Amor Bizarro', 2020, 1050, 350, 30),
(NEXTVAL('id_para_records'), 'Triángulo de Amor Bizarro', 'Victoria Mística', 2013, 950, 350, 30),
(NEXTVAL('id_para_records'), 'Triángulo de Amor Bizarro', 'Año Santo', 2010, 800, 350, 30),
(NEXTVAL('id_para_records'), 'Anderson .Paak', 'Malibu', 2016, 1200, 350, 30),
(NEXTVAL('id_para_records'), 'Anderson .Paak', 'Ventura', 2019, 900, 350, 30),
(NEXTVAL('id_para_records'), 'Ash Walker', 'Aquamarine', 2019, 1400, 350, 30),
(NEXTVAL('id_para_records'), 'Darkhouse Family', 'The Offering', 2017, 750, 350, 30),
(NEXTVAL('id_para_records'), 'Kali Uchis', 'Isolation', 2018, 1250, 350, 30),
(NEXTVAL('id_para_records'), 'Kali Uchis', 'Sin Miedo (del Amor y Otros Demonios)', 2018, 1250, 350, 30),
(NEXTVAL('id_para_records'), 'Kali Uchis', 'Red Moon in Venus', 2023, 1500, 350, 30);

DELETE FROM records WHERE id_record = 16;

-- Comandos para Tickets
INSERT INTO tickets (id_ticket, successful, total) 
VALUES 
(NEXTVAL('id_para_tickets'), true, 1200),
(NEXTVAL('id_para_tickets'), true, 3000),
(NEXTVAL('id_para_tickets'), true, 2500),
(NEXTVAL('id_para_tickets'), false, 2500),
(NEXTVAL('id_para_tickets'), true, 2100),
(NEXTVAL('id_para_tickets'), true, 1700),
(NEXTVAL('id_para_tickets'), false, 1200),
(NEXTVAL('id_para_tickets'), true, 1200);

-- Comandos para Tabla sales
INSERT INTO sales (id_sale, id_record, id_ticket, piece_quantity) VALUES 
(NEXTVAL('id_para_sales'), 4, 2, 2),
(NEXTVAL('id_para_sales'), 7, 3, 1),
(NEXTVAL('id_para_sales'), 10, 3, 1),
(NEXTVAL('id_para_sales'), 5, 4, 1),
(NEXTVAL('id_para_sales'), 7, 5, 1),
(NEXTVAL('id_para_sales'), 8, 5, 2),
(NEXTVAL('id_para_sales'), 12, 1, 2);

-- Comandos para SEQUENCE 'id_para_records'
SELECT SETVAL('id_para_records', COALESCE((SELECT MAX(id_record) FROM records), 0) + 1);

-- TEST para NOT NULL validations
INSERT INTO records (id_record, record_title)
VALUES (DEFAULT, 'Caribe Caribe');

INSERT INTO tickets (total) VALUES (1);


-- TEST para CHECK validations
INSERT INTO records (id_record, band, record_title, release_year, sale_prize, purchase_prize, storage_quantity)
VALUES (NEXTVAL('id_para_records'), 'Kali Uchis', 'Isolation', 2018, 1250, 350, 30);

INSERT INTO tickets (successful, total) VALUES (true, 5);

INSERT INTO sales (id_record, id_ticket, piece_quantity) VALUES (5, 2, 1);

-- TEST para FK validations
INSERT INTO records (id_record, storage_quantity, purchase_prize)
VALUES (99, 100, 1475);

-- TEST para CONSTRAINTS
INSERT INTO sales (id_record, id_ticket, piece_quantity) VALUES (5, 3, 2);

DELETE FROM records WHERE id_record = 18;


-- Comandos Generales
SELECT * FROM records;
SELECT * FROM tickets;
SELECT * FROM sales;

DROP TABLE records;
DROP TABLE tickets;
DROP TABLE sales;
DROP SEQUENCE id_para_records;
DROP SEQUENCE id_para_tickets;