const path = require('path');
module.exports = {
  mode: "production",
  entry: './myReact.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // devServer: { 
  //   contentBase: path.join(__dirname, 'dist') 
  // }, 
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
    ]
  }
};

