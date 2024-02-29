const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: './myReact.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  "module": {
    "rules": [{
      "test": /\.js$/,
      "exclude": /node_modules/,
      "use": {
        "loader": "babel-loader",
        "options": {
          "presets": ["@babel/preset-react",],
          "plugins": [
            ["@babel/plugin-transform-react-jsx", {
              "pragma": "MyReact.createElement"
            }]
          ]
        }
      }
    },
    ],
  },
  plugins: [
  
    new HtmlWebpackPlugin({
      template:'index.html',
    }),
  
]
};

