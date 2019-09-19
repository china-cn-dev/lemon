const pool = require('../db');

function fn_query() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            const sql = 'SELECT buy.id,buy.title,LEFT(buy.expire_date,10) as expire_date,buy.amount,industry.name_cn FROM buy LEFT JOIN industry ON buy.industry=industry.industry_id';
            connection.query(sql, (err, results, fields) => {
                connection.release();
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    });
}

module.exports = {
    query: fn_query
}
