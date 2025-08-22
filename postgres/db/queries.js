const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) values($1)", [username]);
}

module.exports = {
    getAllUsernames,
    insertUsername,
};
