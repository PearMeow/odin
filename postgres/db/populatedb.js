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

DB_URL = "postgresql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}";

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${argv[2]}:${process.env.PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
