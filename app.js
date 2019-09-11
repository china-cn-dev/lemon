const Koa = require('koa');
const app = new Koa();
const server = require('koa-static')

app.use(server(__dirname + '/build/'))

app.listen(3000)

console.log('server start listen 3000...')
