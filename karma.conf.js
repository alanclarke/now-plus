var path = require('path')
module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [ 'test/**/test-*' ],
    preprocessors: {
      'test/**/test-*': ['webpack', 'sourcemap']
    },
    webpack: {
      watch: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          include: [ path.resolve('lib') ],
          loader: 'isparta'
        }]
      }
    },
    webpackServer: {
      quiet: true,
      noInfo: true
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [{ type: 'text' }, { type: 'html' }]
    }
  })
}
