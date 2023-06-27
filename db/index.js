const { Pool } = require("pg");
// Set Pool information in .env file, pg knows what to look for
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database:'assignment10',
    user: 'postgres',
    password: 'TashiShyangba23',
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}