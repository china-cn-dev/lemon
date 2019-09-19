const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ii12369',
    database: 'lemon'
});

pool.on('acquire', (connection) => {
    console.log('connection %d acquird', connection.threadId);
});

pool.on('enqueue', () => {
    console.log('Waiting for available connection slot');
});

pool.on('release', (connection) => {
    console.log('Connection %d released', connection.threadId);
});

pool.on('connection', () => {
    console.log('connected');
});

class DBManager {
    constructor() {
        this.instance = null;
        console.log(`DBManager.constructor`)
    }
    query(sql, args = null) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                }
                connection.query(sql, args, (err, results, fields) => {
                    connection.release();
                    if (err) {
                        return reject(err);
                    }
                    resolve(results);
                });
            });
        });
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new DBManager();
        }
        return this.instance;
    }
};

module.exports = DBManager;
