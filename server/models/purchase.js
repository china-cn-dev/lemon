const DBManager = require('../db');

async function fn_query() {
    try {
        const sql = 'SELECT buy.id,buy.title,LEFT(buy.expire_date,10) as expire_date,buy.amount,industry.name_cn FROM buy LEFT JOIN industry ON buy.industry=industry.industry_id';
        let results = await DBManager.getInstance().query(sql);
        return results;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    query: fn_query
}
