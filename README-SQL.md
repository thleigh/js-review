# Node Readme

## How to make a SQL project

1. In terminal, type psql
2. Create a database by CREATE DATABASE testdb;
3. Connect to the database by \connect testdb;
4. Create a table:
```
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone VARCHAR(15),
        email TEXT
    );
```
5. Inserting the data:
```
    INSERT INTO students
    (name, phone, email)
    VALUES
    ('William Smith', '(415)555-5555', 'bill@example.com');
```
6. Selecting data:
```
    SELECT * FROM students;

    SELECT * FROM students WHERE name = 'Bob Jones';

    SELECT id, name FROM students;
```

7. Updating data:
```
    UPDATE students SET email='bobby@example.com' WHERE name = 'Bob Jones';
```

8. Deleting data:
```
    DELETE FROM students WHERE name = 'Mary';
```

## Useful SQL Commands
```
 - \? - to view all commands
 - \q - to quit psql
 - \dt - checks present databases
 - \d table - replace table with desired table.

 - Inserting Data
```


## Useful selectors 
```

- LIKE - SELECT * FROM customers WHERE name LIKE '%';
- DISTINCT - SELECT DISTINCT name FROM customers;
- ORDER BY - SELECT * FROM customers ORDER BY name DESC;
- COUNT - SELECT count(*) FROM customers;
- MAX - SELECT max(age) FROM customers;
- MIN - SELECT min(age) FROM customers;
- AND - SELECT * from customers WHERE name = 'Kaushik' AND age = 25;
- OR - SELECT * from customers WHERE name = 'Silvana' OR name = 'Bira';
- IN - SELECT * FROM customers WHERE name IN ('Amelia', 'Ramesh');
- NOT IN - SELECT * FROM customers WHERE name NOT IN ('Amelia', 'Ramesh');
- LIMIT - SELECT * FROM customers LIMIT 2;
- OFFSET - SELECT * FROM customers OFFSET 1;
- LIMIT + OFFSET - SELECT * FROM customers LIMIT 2 OFFSET 1;
- % - SELECT * FROM customers WHERE name LIKE '%a';
```