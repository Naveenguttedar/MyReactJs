const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "production", //set development while devloping;
  entry: './Example/index.js',//Entry where webpack starts bundling process
  output: {
    path: path.resolve(__dirname+'/Example', 'build'),//output folder
    filename: 'bundle.js',//output file 
  },
  "module": {
    "rules": [
      {
        test: /\.(svg|jpg|gif)$/,//lodes svg and jpg formates
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/i,//lodes css files
        use: ["style-loader", "css-loader"],
      },
      {
        "test": /\.js$/,//lodes js files and let it through bable_loader(JSX)
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": ["@babel/preset-react",],
            "plugins": [
              // This property is the one that ensures the convertion of JSX to js .
              ["@babel/plugin-transform-react-jsx", {
                // this property is used to pass our own createElement ie 'MyReact.createElement'
                "pragma": "MyReact.createElement"// default is 'React.createElement'.
              }]
            ]
          }
        }
      },
    ],
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: 'Example/index.html', //template_path to view web page
    }),

  ]
};

