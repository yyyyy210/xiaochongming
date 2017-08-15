// import Path from 'path';
// https://github.com/sorrycc/roadhog/issues/134 [pxtorem不能正常使用解决方法，暂未研究为什么这么用]
const pxtorem = require('postcss-pxtorem')
const pxtorem2 = _interopRequireDefault(pxtorem).default;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/Assets/icon'),  // 业务代码本地私有 svg 存放目录
];

console.log(svgSpriteDirs)

export default {
  "entry": "src/index.js",
  "disableCSSModules": true,
  "publicPath": "/kai/",
  "svgSpriteLoaderDirs": svgSpriteDirs,
  //"multipage": true,//提取公共打开会导致webpackJsonp is not defined
  "autoprefixer": {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  // extraPostCSSPlugins: [
  //   pxtorem({
  //     rootValue: 100,
  //     propWhiteList: [],
  //   }),
  // ],
  // "extraBabelPlugins": [
  //   "transform-runtime",
  //   ["import", { "libraryName": "antd-mobile", "style": true }],
  //   ["module-resolver", {"root": ["./src"],"alias": {"underscore": "lodash"}}]
  // ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "style": "css", "libraryName": "antd-mobile", "libraryDirectory": "lib" }],
        ["module-resolver", { "root": ["./src"], "alias": { "underscore": "lodash" } }]
      ],
      extraPostCSSPlugins: [
        pxtorem2({ rootValue: 100, propWhiteList: [], })
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "style": "css", "libraryName": "antd-mobile", "libraryDirectory": "lib" }],
        ["module-resolver", { "root": ["./src"], "alias": { "underscore": "lodash" } }]
      ],
      extraPostCSSPlugins: [
        pxtorem2({ rootValue: 100, propWhiteList: [], })
      ]
    }
  }
}