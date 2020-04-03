const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    outputDir: 'docs',
    publicPath: '/',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        // host: "127.0.0.1", // can be overwritten by process.env.HOST
        port: 7000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        proxy: {
            '/agent': {
                target: 'http://192.168.0.173:14000',
                secure: false,
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
};
