const { override, fixBabelImports } = require('customize-cra');
const rewrite = (regExp, opts) => config => {
    if (config.mode === 'production') {
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf));
        const loader = loaders.oneOf.find(cfg => cfg.loader.match(regExp));
        Object.keys(opts).forEach(key => {
            loader.options[key] = opts[key];
        });
    }
    return config;
}
module.exports = override(
    fixBabelImports('import', { libraryName: 'antd-mobile', style: 'css' }),
    rewrite(/url-loader/, { limit: 5 * 1024 })
)
