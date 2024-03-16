const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'gamzein_mravi',
    password: 'gamzein_mravi',
    database: 'gamzein_mravi'
});

module.exports = connection;
