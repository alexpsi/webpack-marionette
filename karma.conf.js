var webpackConf = require('./webpack-dev.config.js');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'app/tests/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'app/tests/**/*.js': ['webpack']
    },
    webpack: {
      module: webpackConf.module,
      resolve: webpackConf.resolve,
      plugins: webpackConf.plugins
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
