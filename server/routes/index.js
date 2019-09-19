const Model = require('../models/purchase')
async function fn_purchases(ctx, next) {
    try {
        let results = await Model.query();
        let data = [];
        results.forEach(item => {
            data.push({ id: item.id, title: item.title, industry: item.name_cn, quote: item.amount, date: item.expire_date })
        });
        ctx.body = { code: 200, data: data };
    } catch (error) {
        ctx.body = { code: 500, error };
    }
}

module.exports = {
    'GET /api/purchases': fn_purchases
}
