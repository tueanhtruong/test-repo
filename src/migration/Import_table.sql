-- CREATE TABLE province ( id int PRIMARY KEY, name varchar(50) )
-- select * from public.province
-- delete from public.province where true;
-- COPY public.province FROM 'D:\DA_TN\DA_API_DEV\province.csv' DELIMITER ',' CSV HEADER; 

-- CREATE TABLE district ( id int PRIMARY KEY, name varchar(50), province_id int )
-- select * from public.district
-- COPY public.district FROM 'D:\Learning\DA\DA_API\district.csv' DELIMITER ',' CSV HEADER; 

-- CREATE TABLE ward ( id int PRIMARY KEY, name varchar(50), district_id int, province_id int )
-- select * from public.ward


-- COPY public.ward FROM 'D:\Learning\DA\DA_API\ward.csv' DELIMITER ',' CSV HEADER; 

-- select * from public.account

-- select * from public.profile
-- COPY public.vaccine_type FROM 'D:\Learning\DA\DA_API\vaccine_type.csv' DELIMITER ',' CSV HEADER; 
-- COPY public.vaccine_type FROM '‪D:\DA_TN\DA_API_DEV\vaccine_type.csv' DELIMITER ',' CSV HEADER; 


-- COPY public.item_status FROM 'D:\Learning\DA\DA_API\item_status.csv' DELIMITER ',' CSV HEADER; 
-- select * from item_status

-- COPY public.trip_purposes FROM 'D:\Learning\DA\DA_API\trip_purpose.csv' DELIMITER ',' CSV HEADER; 
-- select * from trip_purposes


-- COPY public.trip_purposes FROM 'D:\Learning\DA\DA_API\trip_purpose.csv' DELIMITER ',' CSV HEADER; 
-- select * from vehicle_type


-- COPY public.test_type FROM 'D:\Learning\DA\DA_API\test_type.csv' DELIMITER ',' CSV HEADER; 
-- select * from trip_status
-- delete from trip_status where true;


-- select * from trip

-- COPY public.permission FROM 'D:\Learning\DA\DA_API\permission.csv' DELIMITER ',' CSV HEADER; 
-- select * from public.permission
-- delete from permission where true;


-- COPY public.application_configs FROM 'D:\Learning\DA\DA_API\app_config.csv' DELIMITER ',' CSV HEADER; 
select * from public.application_configs

