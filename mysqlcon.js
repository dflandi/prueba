const mysql = require('mysql2');

class Database {
  getConnection() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'termo',
      database: 'motricidad'
    });
    return connection;
  }

}
class Database {
  getConnection() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'termo',
      database: 'prueba'
    });
    return connection;
  }

}
module.exports = Database;


