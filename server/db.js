const Pool = require("pg").Pool;

const pool = new Pool({
    user: "rohankonnur",
    password: "",
    host: "localhost",
    post: 5432,
    database: "list"
});

module.exports = pool;