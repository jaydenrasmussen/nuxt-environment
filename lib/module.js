const path = require('path')
module.export.meta = require('../package')
module.exports = function NuxtEnvironment(moduleOptions) {
  const options = {
    stages: this.options.stages,
    ...moduleOptions
  }
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}
