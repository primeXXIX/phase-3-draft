DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	price DECIMAL NOT NULL,
	section VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
	id int PRIMARY KEY,
	first_name VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
	order_id int,
	order_date DATE,
	name VARCHAR(40) NOT NULL,
	section VARCHAR(40) NOT NULL
);
Contact GitHub API Training Shop Blog About
