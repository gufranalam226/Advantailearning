***ACID Property***
A - Atomicity - Tnx either complete or not
C - Concistency - A transaction must bring the database from one valid state to another, following all rules (constraints, triggers, etc.).(If a rule says balance can’t be negative, no transaction should leave it that way.)
I - Isolation - Concurrent transactions should not interfere with each other
D - Durability - Once a transaction is committed, it will remain even after system failures.



***SELECT {what-to-select} FROM {where-to}***

SELECT * FROM user

* used to select all
to select multiple column use comas seperated values

SELECT DISTINCT * FROM user
Distinct - return the unique entrie form the table

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
ORDER BY rental_id DESC

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
_ match only one character, ___ multiple underscore equal number of charecure to underscore

SELECT * FROM film
WHERE title LIKE '_att%'

***Aggregation function ***
min(), max(), count(), sum(), avg()

SELECT SUM(amount) FROM payment
