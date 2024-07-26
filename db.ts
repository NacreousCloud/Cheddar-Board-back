const InitDataBase = () => {
  const mysql = require('mysql2');

  const connection = mysql.createConnection({
    host: 'localhost', // e.g., 'localhost'
    port: '3306',
    user: 'root', // e.g., 'root'
    password: 'test12341!',
    database: 'cheddar_back',
  });

  connection.connect((err: any) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database.');
  });
};

export { InitDataBase };
