const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "http://localhost:3080/",
  },
  devServer: {
    historyApiFallback: true,
    port: 3080,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Menyisipkan CSS ke dalam DOM
          'css-loader',   // Menginterpretasikan @import dan url()
          {
            loader: 'sass-loader',
            options: {
              // Gunakan implementasi modern Dart Sass
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.css$/, // Menangani file dengan ekstensi .css
        use: [
          'style-loader', // Memasukkan CSS ke dalam DOM
          'css-loader',   // Menginterpretasikan @import dan url()
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "parent",
      remotes: {
        toDoApp: "mfe_todo_app@http://localhost:3081/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          // eager: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          // eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          // eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
