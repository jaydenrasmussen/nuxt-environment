const path = require('path')
module.exports = function (moduleOptions) {
  const options = {
    stages: this.options.stages,
    ...moduleOptions
  }
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    filename: 'environment.js',
    options
  })
}
module.exports.meta = require('../package')
