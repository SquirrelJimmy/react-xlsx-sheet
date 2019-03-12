const config = {
  babelrc: false,
  presets: [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-transform-typescript", {
      "isTSX": true
    }],
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }]
  ]
};
module.exports = require("babel-jest").createTransformer(config);
