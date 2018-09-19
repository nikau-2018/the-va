const rewireEslint = require(‘react-app-rewire-eslint’)

function modifyOptions (opts) {
  delete opts.baseConfig.extends
}

module.exports = (config, env, modifyOptions) => {
  // Deliberately modify arg
  config = rewireEslint(config, env)
  return config
}
