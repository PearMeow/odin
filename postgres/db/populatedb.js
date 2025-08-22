#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

DB_URL =
    argv[2] === undefined
        ? `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.PORT}/${process.env.DATABASE}`
        : argv[2];
console.log(DB_URL);

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: DB_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
