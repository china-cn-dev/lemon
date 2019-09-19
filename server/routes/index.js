const PurchaseModel = require('../models/purchase')
const MerchantModel = require('../models/merchant')
async function fn_purchases(ctx, next) {
    try {
        let results = await PurchaseModel.query();
        let data = [];
        results.forEach(item => {
            data.push({ id: item.id, title: item.title, industry: item.name_cn, quote: item.amount, date: item.expire_date });
        });
        ctx.body = { code: 200, data: data };
    } catch (error) {
        ctx.body = { code: 500, error };
    }
}

async function fn_merchants(ctx, next) {
    try {
        let results = await MerchantModel.query();
        let data = [];
        results.forEach(item => {
            data.push({ id: item.id, url:'',companyName: item.cname, business:item.business,addr:item.addr,total:item.goods,vip:item.type});
        });
        ctx.body = { code: 200, data: data };
    } catch (error) {
        ctx.body = { code: 500, error };
    }
}

module.exports = {
    'GET /api/purchases': fn_purchases,
    'GET /api/merchants': fn_merchants
}
