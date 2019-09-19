const fs = require('fs')
const path = require('path')

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url])
        } else {
            console.info(`invalid url: ${url}`);
        }
    }
}

function addController(router, dir) {
    const files = fs.readdirSync(path.resolve(__dirname, dir));
    const js_files = files.filter(file => {
        return file.endsWith('.js');
    });
    js_files.forEach(fileName => {
        let mapping = require(path.resolve(__dirname, dir, fileName));
        addMapping(router, mapping);
    });
}

module.exports = function (dir = 'routes') {
    const router = require('koa-router')();
    addController(router, dir);
    return router.routes();
}
