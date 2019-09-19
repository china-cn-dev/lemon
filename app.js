const Koa = require('koa');
const app = new Koa();
const controller = require('./server/controller');
const server = require('koa-static');

app.use(server(__dirname + '/build/'));
app.use(controller());

app.listen(10088);

console.log('server start listen 10088...');
