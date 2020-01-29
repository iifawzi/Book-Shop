const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shop-database',
    password: 'rootroot'
})

module.exports = pool.promise();