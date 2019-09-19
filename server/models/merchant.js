const DBManager = require('../db');

async function fn_query() {
    try {
        const sql = 'SELECT c.cid,c.cname,c.goods,c.addr,c.business,c.logo,m.type FROM company c JOIN `member` m on c.cid=m.cid;';
        let results = await DBManager.getInstance().query(sql);
        return results;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    query: fn_query
}


