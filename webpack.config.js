const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode:'development',
  entry:{
    app:'./src/index.js',
    print:'./src/print.js'
  },
  output:{
    filename:'[name].bunlde.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'开发环境'
    })
  ]
}