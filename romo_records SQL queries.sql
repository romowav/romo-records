-- Comandos creacion de Tablas
CREATE TABLE records (
	id_record SERIAL PRIMARY KEY 
	-- CHECK (band != '' AND release_year > 0 AND sale_prize > 0 AND band != NULL AND release_year != NULL AND sale_prize != NULL)
	, 
	band VARCHAR (30) NOT NULL CHECK (band != ''), 
	record_title VARCHAR(50) NOT NULL,
	release_year SMALLINT NOT NULL CHECK (release_year > 0), 
	sale_prize SMALLINT NOT NULL CHECK (sale_prize > 0)
);

CREATE TABLE tickets (
	id_ticket SERIAL PRIMARY KEY,
	id_record SMALLINT,
	FOREIGN KEY (id_record) REFERENCES records(id_record),
	ticket_date TIMESTAMP NOT NULL CHECK (ticket_date >= '2023-12-16'), 
	piece_quantity INT NOT NULL CHECK (piece_quantity > 0)
);

CREATE TABLE record_storage (
	id_storage SERIAL PRIMARY KEY, 
	id_record SMALLINT, 
	storage_quantity SMALLINT NOT NULL CHECK (storage_quantity >= 0),
	purchase_prize SMALLINT NOT NULL CHECK (purchase_prize >= 0),
	FOREIGN KEY (id_record) REFERENCES records(id_record)
);
 
CREATE TABLE total_income (
	id_income SERIAL PRIMARY KEY,
	id_ticket SMALLINT,
	total SMALLINT NOT NULL CHECK (total > 0),
	FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket)
);

-- Comandos para tabla "record_storage"
INSERT INTO record_storage (id_record, storage_quantity, purchase_prize)
SELECT id_record, 30, 350 FROM records;


-- Comandos para tabla "records"
ALTER TABLE records ADD CONSTRAINT unique_title UNIQUE (band, record_title);

INSERT INTO records (id_record, band, record_title, release_year, sale_prize)
VALUES 
(DEFAULT, 'La Vida Bohème', 'Caribe Caribe', 2023, 950),
(DEFAULT, 'La Vida Bohème', 'Nuestra', 2011, 1200),
(DEFAULT, 'La Vida Bohème', 'Será', 2013, 1050),
(DEFAULT, 'Carolina Durante', 'Cuatro Chavales', 2022, 750),
(DEFAULT, 'Carolina Durante', 'Carolina Durante', 2019, 950),
(DEFAULT, 'Carolina Durante', 'Los Chavales', 2001, 550),
(DEFAULT, 'Triángulo de Amor Bizarro', 'Triángulo de Amor Bizarro', 2020, 1050),
(DEFAULT, 'Triángulo de Amor Bizarro', 'Victoria Mística', 2013, 950),
(DEFAULT, 'Triángulo de Amor Bizarro', 'Año Santo', 2010, 800),
(DEFAULT, 'Anderson .Paak', 'Malibu', 2016, 1200),
(DEFAULT, 'Anderson .Paak', 'Ventura', 2019, 900),
(DEFAULT, 'Ash Walker', 'Aquamarine', 2019, 1400),
(DEFAULT, 'Darkhouse Family', 'The Offering', 2017, 750),
(DEFAULT, 'Kali Uchis', 'Isolation', 2018, 1250),
(DEFAULT, 'Kali Uchis', 'Sin Miedo (del Amor y Otros Demonios)', 2018, 1250),
(DEFAULT, 'Kali Uchis', 'Red Moon in Venus', 2023, 1500);

-- TEST para NOT NULL validations
INSERT INTO records (id_record, record_title)
VALUES (DEFAULT, 'Caribe Caribe');

-- TEST para CHECK validations
INSERT INTO records (id_record, band, record_title, release_year, sale_prize)
VALUES (DEFAULT, 'H', 'Caribe Caribe', 1, 0);

-- TEST para FK validations
INSERT INTO record_storage (id_record, storage_quantity, purchase_prize)
VALUES (99, 100, 1475);


-- Comandos Generales
SELECT * FROM records;
SELECT * FROM record_storage;
SELECT * FROM total_income;
SELECT * FROM tickets;

DROP TABLE records;
DROP TABLE record_storage;
DROP TABLE total_income;
DROP TABLE tickets;