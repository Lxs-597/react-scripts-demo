process.env.NODE_ENV = 'production'

const fs = require('fs-extra')
const webpacck = require('webpack')
const configFactory = require('../config/webpack.config')
const paths = require('../config/paths')
const chalk = require('chalk')

const config = configFactory('production')

fs.emptyDirSync(paths.appBuild)

copyPublicFolder()

build()


function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    filter: file => file !== paths.appHtml
  })
}

function build() {
  const compiler = webpacck(config)

  return new Promise((resolve, reject) => {
    compiler.run((err, states) => {
      if (err) {
        console.log(err)
        return reject(err)
      }

      console.log(chalk.green('compiler success'))
    })
  })
}
