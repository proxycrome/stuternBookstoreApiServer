import client from '../database/index.js';

client.query("CREATE TABLE books(id SERIAL PRIMARY KEY, name varchar(255) NOT NULL, author varchar(255) NOT NULL, year varchar(10) NOT NULL)")