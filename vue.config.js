module.exports = {
    lintOnSave: false,
    configureWebpack: config => {
        config.entry.app = './test/src/main.js'
    }
}