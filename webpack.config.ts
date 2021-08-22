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
    filename: '[id][chunkhash].js',
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
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        tiptap: {
          test: /[\\/]node_modules[\\/](@tiptap[\\/]core)[\\/]/,
          name: 'tiptap',
          chunks: 'all',
        },
        proseMirrorView: {
          test: /[\\/]node_modules[\\/](prosemirror-view)[\\/]/,
          name: 'proseMirrorView',
          chunks: 'all',
        },
        proseMirrorModel: {
          test: /[\\/]node_modules[\\/](prosemirror-model)[\\/]/,
          name: 'proseMirrorModel',
          chunks: 'all',
        },
        proseMirrorTransform: {
          test: /[\\/]node_modules[\\/](prosemirror-transform)[\\/]/,
          name: 'proseMirrorTransform',
          chunks: 'all',
        },
        proseMirrorTables: {
          test: /[\\/]node_modules[\\/](prosemirror-tables)[\\/]/,
          name: 'proseMirrorTables',
          chunks: 'all',
        },
        tiptapCharacterCount: {
          test: /[\\/]node_modules[\\/](@tiptap[\\/]extension-character-count)[\\/]/,
          name: 'tiptapCharacterCount',
          chunks: 'all',
        },
        tiptapTable: {
          test: /[\\/]node_modules[\\/](@tiptap[\\/]extension-table)[\\/]/,
          name: 'tiptapTable',
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
