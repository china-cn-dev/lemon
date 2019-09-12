const Koa = require('koa');
const app = new Koa();
const server = require('koa-static')
const path = require('path')
const fs = require('fs')

app.use(server(__dirname + '/build/'))

app.use(async (ctx, next) => {
    if (ctx.url !== '/') {
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = fs.createReadStream(path.resolve(__dirname, 'build', 'index.html'))
    }
})

app.listen(3000)

console.log('server start listen 3000...')
