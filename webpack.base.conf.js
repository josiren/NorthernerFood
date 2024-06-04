const path = require('path');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageJSON = require('./package');

const yandexApi = '21ecd16b-29a1-42e7-ae0e-9efa979ba5a6';

const PATHS = {
  src: path.join(__dirname, './src'),
  static: path.join(__dirname, './src/static'),
  dist: path.join(__dirname, './dist'),
  cache: path.join(__dirname, './cache'),
};

const PAGES_DIR = `${PATHS.src}/templates/pages/`;
const PAGES = glob.sync(`${PAGES_DIR}**/*.twig`).map((page) => path.relative(PAGES_DIR, page).replace(/\\/g, '/'));

module.exports = {
  externalsType: 'script',
  externals: {
    paths: PATHS,
    ymaps: [`https://api-maps.yandex.ru/2.1/?apikey=${yandexApi}&lang=ru_RU`, 'ymaps'],
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    path: PATHS.dist,
    filename: 'js/[name].bundle.js',
    pathinfo: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules|vendor/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules|vendor/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.twig$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: false,
              minimize: false,
            },
          },
          {
            loader: 'njk-html-loader',
            options: {
              root: [
                `${PATHS.src}/templates`,
                `${PATHS.src}/data`,
              ],
              configuration: {
                autoescape: false,
                trimBlocks: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        resourceQuery: /inline/,
        use: [
          'vue-loader',
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateParameters: {
        PROJECT_NAME: packageJSON.name,
        PAGES: PAGES.map((page) => page.replace(/\.twig/, '.html')),
      },
      template: `${PATHS.src}/index.ejs`,
      filename: 'page-list.html',
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${PATHS.src}/static`,
          to: `${PATHS.dist}`,
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/.gitkeep'],
          },
        },
      ],
    }),
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./html/${page.replace(/\.twig/, '.html')}`,
      scriptLoading: 'blocking',
      minify: false,
      hash: true,
    })),
  ],
};
