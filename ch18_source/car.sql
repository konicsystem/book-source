CREATE TABLE car (
car_no INT  AUTO_INCREMENT PRIMARY KEY,
car_name VARCHAR(20) NOT NULL,
car_price INT NOT NULL,
car_company VARCHAR(20),
car_year VARCHAR(4)
);

INSERT INTO car(car_name,car_price,car_company,car_year)
VALUES('SM5',1000,'SAMSUNG','2012');
INSERT INTO car(car_name,car_price,car_company,car_year)
VALUES('BMW',10000,'BMW','2000');
INSERT INTO car(car_name,car_price,car_company,car_year)
VALUES('Sonata',2000,'HYUNDAI','2013');
INSERT INTO car(car_name,car_price,car_company,car_year)
VALUES('K7',4000,'KIA','2011');

SELECT * FROM car;