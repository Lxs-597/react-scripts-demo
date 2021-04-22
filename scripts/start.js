process.env.NODE_ENV = 'development'

const configFactory = require('../config/webpack.config')
const config = configFactory('development')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const createDevServerConfig = require('../config/webpackDevServer.config')
const chalk = require('chalk')

const devServerConfig = createDevServerConfig()

const compiler = webpack(config)

const devServer = new WebpackDevServer(compiler, devServerConfig)

devServer.listen(3000, () => {
  console.log(chalk.cyan('dev server start'))
})