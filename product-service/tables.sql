-- create extension if not exists "uuid-ossp";

-- create table products (
-- 	id uuid primary key default uuid_generate_v4(),
--     title text not null,
--     description text,
--     price integer
-- )

-- create table stocks (
-- 	product_id uuid,
--     count integer,
--     foreign key ("product_id") references "products" ("id")
-- )

-- insert into products (title, price, description) values
-- ('Iphone 5s', 400, 'Iphone 5s'),
-- ('Iphone 6s', 500, 'Iphone 6s'),
-- ('Macbook Pro', 600, 'Macbook Pro'),
-- ('Macbook Air', 700, 'Macbook Air'),
-- ('Iphone 12', 800, 'Iphone 12'),
-- ('Iphone 11', 900, 'Iphone 11')

-- insert into stocks (product_id, count) values
-- ('95c12abb-361a-4a53-8bdf-42c73bf831de', 1),
-- ('38383bcb-d987-47bb-96df-b7d6838cdb45', 2),
-- ('d9335ac1-b0ac-48db-a399-c7cee26b78b8', 3),
-- ('1a96fa00-5f02-4a67-89aa-6f248b60a2ac', 4),
-- ('3703f5ab-0684-4f18-9662-f772fb7095ab', 5),
-- ('437a6641-f626-49b9-891e-97bc2900738c', 6)

--SELECT p.id, p.description, p.price, p.title, s.count FROM products p LEFT JOIN stocks s 
--on p.id=s.product_id