import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { Configuration } from 'webpack';

const devServer = ({
  contentBase: `${__dirname}/public`,
  compress: true,
  publicPath: 'public',
  port: process.env.PORT || 1234,
  writeToDisk: true,
  historyApiFallback: true,
  overlay: {
    errors: true,
    warnings: true,
  },
  open: true,
});

const config: Configuration & { devServer: typeof devServer } = ({
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/public`,
    filename: '[id][hash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: ['.ts', '.tsx', '.js', ',jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](@tiptap\/core)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        vendorb: {
          test: /[\\/]node_modules[\\/](prosemirror-view)[\\/]/,
          name: 'vendorb',
          chunks: 'all',
        },
        vendorc: {
          test: /[\\/]node_modules[\\/](prosemirror-model)[\\/]/,
          name: 'vendorc',
          chunks: 'all',
        },
        vendord: {
          test: /[\\/]node_modules[\\/](@tiptap\/extension-character-count)[\\/]/,
          name: 'vendord',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React TS',
      template: `${__dirname}/src/template.html`,
      minify: true,
    }),
    // @ts-ignore
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
  devServer,
});

export default config;
