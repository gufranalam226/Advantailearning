***ACID Property***
A - Atomicity - Tnx either complete or not
C - Concistency - A transaction must bring the database from one valid state to another, following all rules (constraints, triggers, etc.).(If a rule says balance can’t be negative, no transaction should leave it that way.)
I - Isolation - Concurrent transactions should not interfere with each other
D - Durability - Once a transaction is committed, it will remain even after system failures.



***SELECT {what-to-select} FROM {where-to}***

SELECT * FROM user

* used to select all
to select multiple column use comas seperated values

* 
SELECT DISTINCT * FROM user
Distinct - return the unique entrie form the table
* 
SELECT COUNT(*) FROM user
Count - it return the number of row present in the table

mixed exapmle
SELECT COUNT(DISTINCT(*)) FROM user

***WHERE clouse***
SELECT * FROM user
WHERE name = 'Gufran Alam' AND age = 25

SELECT * FROM film 
WHERE NOT title != 'Bilko Anonymous';

conditions - <, >, <=, >=, !=, AND, OR, NOT
*do not use double quotes around the string use only single quotes


***ORDER BY***
to order in ascendind or descending, if asc or desc not given default will be as asc

SELECT rental_id,payment_id, staff_id FROM payment
ORDER BY rental_id ASC

*techniclaly order on the basis of rental_id either we select that field or not
SELECT payment_id, staff_id FROM payment
ORDER BY rental_id DESC

***LIMIT***
SELECT rental_id,payment_id, staff_id FROM payment
LIMIT 10;


***BETWEEN***
SELECT rental_id,payment_id, staff_id  FROM payment
WHERE payment_id BETWEEN 18000 AND 21000

***IN***
SELECT * FROM film
WHERE title IN ('Chamber Italian', 'Grosse Wonderful', 'Academy Dinosaur','Backlash Undefeated')
Use IN to find the given values and use NOT IN to find exclusion of the values

***LIKE & ILIKE***
used to match the string, uses two wild cards %, _
% matches any string 
_ match only one character, _ _ _ multiple underscore equal number of character to underscore

SELECT * FROM film
WHERE title LIKE '_att%'

***Aggregation function ***
min(), max(), count(), sum(), avg()

SELECT SUM(amount) FROM payment

***GROUP BY***
TO join two table 

***INNER JOIN***
<!-- Join the table 1 and table 2 which is common in both
INNER JOIN is like inter-section in ven diagram -->
SELECT film.film_id, film.title, film.release_year, film_category.* FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id


***FULL OUTER JOIN***
Like union in ven diagram and can be filter using where clause

SELECT customer.first_name AS csfn, actor.first_name AS acfn, customer_id, actor.actor_id FROM customer
FULL OUTER JOIN actor
ON customer.first_name = actor.first_name



***LEFT OUTER JOIN***

SELECT customer.first_name, actor.first_name, customer_id, actor.actor_id FROM customer
LEFT OUTER JOIN actor
ON customer.first_name = actor.first_name
 <!-- WHERE actor.first_name IS NULL --> 


***RIGHT OUTER JOIN***

SELECT customer.first_name, actor.first_name, customer_id, actor.actor_id FROM customer
LEFT OUTER JOIN actor
ON customer.first_name = actor.first_name
 <!-- WHERE actor.first_name IS NULL --> 



***UNION***
* Required same number of column

SELECT city FROM city
UNION
SELECT country FROM country


***Sub query***
* single value return
SELECT * FROM film
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film)

* multiple value return
SELECT film_id, title FROM film
Where film_id IN(SELECT inventory.film_id FROM rental
INNER JOIN inventory
ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date BETWEEN '2005-05-29' AND '2005-05-30'
)
ORDER BY title

* exist
SELECT first_name, last_name FROM customer AS c
WHERE EXISTS
(SELECT * FROM payment AS p
WHERE p.customer_id = c.customer_id
AND amount > 11)

***Self Join ***
Alias name is required here
SELECT t1.first_name, t2.last_name
FROM customer as t1 
INNER JOIN customer as t2
ON t1.first_name = t2.last_name





***Create Table***
CREATE TABLE_NAME (
    COL_NAME D_TYPE(limit) CONSTRAINTS,
    COL_NAME D_TYPE CONSTRAINTS
)

CREATE TABLE Employee_details (
emp_id SERIAL PRIMARY KEY,
emp_name VARCHAR NOT NULL,
ph_no INTEGER
)




***INSERT***
INSERT INTO employee_details(emp_name, ph_no, last_login)
VALUES ('Gufran', 12562, CURRENT_TIMESTAMP),
('aman', 89245, CURRENT_TIMESTAMP),
('Raman', 42424, CURRENT_TIMESTAMP),
('Sohan', 24424, CURRENT_TIMESTAMP)

***UPDATE***

UPDATE employee_details
SET emp_name = 'Gufran'
Where emp_name = 'aman'

* From another table
UPDATE employee_details
SET emp_name = film.title
FROM film
WHERE employee_details.emp_name = film.title


***DELETE***
* delete to delete the specific row
* drop to delete the complete table
* truncate to delete all the rows from the table keeping the structure of the table

DELETE FROM employee_details
WHERE emp_name = 'Gufran'



***CASE***

SELECT 
SUM(
	CASE rating WHEN 'R' THEN 1
	ELSE 0
END) AS R,
SUM(
	CASE rating WHEN 'PG' THEN 1
	ELSE 0
END) AS PG,
SUM(
	CASE rating WHEN 'PG-13' THEN 1
	ELSE 0
END) AS PG13

FROM film

***COALESCE***

***CAST***
SELECT '5' AS INTEGER
SELECT CHAR_LENGTH(CAST(inventory_id as VARCHAR)) FROM rental


