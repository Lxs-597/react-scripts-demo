const paths = require("./paths")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackEnv => {
  const isEnvDevelopment = webpackEnv === 'development'
  const isEnvProduction = webpackEnv === 'production'

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    output: {
      path: paths.appBuild,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx)$/,
          include: paths.appSrc,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml
      })
    ]
  }
}