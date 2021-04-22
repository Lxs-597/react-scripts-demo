const path = require('path')

const appDirectory = process.cwd()
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appSrc: resolveApp('src'),
  appHtml: resolveApp('public/index.html'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appIndexJs: resolveApp('src/index.js'),
}