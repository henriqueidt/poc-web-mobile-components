const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

const prodConfig = {
  mode: "production",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.web.js",
    path: path.join(__dirname, "/web/build"),
    library: "component-library",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["module:metro-react-native-babel-preset"],
              plugins: ["react-native-web"],
            },
          },
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};

module.exports = async function (env, argv) {
  if (env.production) {
    return prodConfig;
  }

  const config = await createExpoWebpackConfigAsync(env, argv);

  return config;
};
