module.exports = {
    database: {
        host: 'localhost',
        user: 'eygr2',
        password: 'MysqlDataBase1.',
        database: 'video-club'
    }
};
const mysql = require('mysql');

const connection = mysql.createConnection(config.database);

connection.connect(function(error) {
    if (error) throw error;
    console.log('Conexión a la base de datos exitosa!');
});

connection.query('SELECT * FROM directors', function(error, results, fields) {
    if (error) throw error;
    console.log(results);
});
