import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { Configuration as DevelopmentConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

// config
import { version } from '../package.json';

// constants
import { APP_TITLE, DIST_PATH, SRC_PATH } from './constants';

// enums
import { EnvironmentEnum } from './enums';

// types
import { IWebpackEnvironmentVariables } from './types';

// utils
import { createCommonConfig } from './utils';

const config: (
  env: IWebpackEnvironmentVariables
) => Configuration | DevelopmentConfiguration = ({
  environment = EnvironmentEnum.Development,
}: IWebpackEnvironmentVariables) => {
  const commonConfig: Configuration = createCommonConfig();
  const definePlugin: DefinePlugin = new DefinePlugin({
    __APP_TITLE__: JSON.stringify(APP_TITLE),
    __ENV__: JSON.stringify(environment),
    __VERSION__: JSON.stringify(version),
  });
  let devServer: DevelopmentConfiguration | undefined;
  let devtool: string | false | undefined;
  let htmlWebpackPlugin: HtmlWebpackPlugin;
  let optimization: Record<string, unknown>;
  let output: Record<string, unknown>;
  let tsLoaderRule: RuleSetRule;

  switch (environment) {
    case EnvironmentEnum.Production:
      devtool = 'source-map';
      htmlWebpackPlugin = new HtmlWebpackPlugin({
        favicon: resolve(SRC_PATH, 'favicon.png'),
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
        template: resolve(SRC_PATH, 'index.hbs'),
        title: APP_TITLE,
      });
      optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              enforce: true,
              name: 'vendor',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            },
          },
        },
      };
      output = {
        filename: '[name].js',
        path: DIST_PATH,
      };
      tsLoaderRule = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(process.cwd(), 'tsconfig.json'),
            },
          },
        ],
      };
      break;
    case EnvironmentEnum.Development:
    default:
      devServer = {
        port: 8080,
        watchFiles: [`${SRC_PATH}/**/*`],
      };
      devtool = 'cheap-module-source-map';
      htmlWebpackPlugin = new HtmlWebpackPlugin({
        favicon: resolve(SRC_PATH, 'favicon.png'),
        filename: 'index.html',
        inject: 'body',
        minify: false,
        template: resolve(SRC_PATH, 'index.hbs'),
        title: APP_TITLE,
      });
      optimization = {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
      output = {
        filename: '[name].js',
        path: DIST_PATH,
        pathinfo: false,
      };
      tsLoaderRule = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(process.cwd(), 'tsconfig.json'),
              transpileOnly: true,
            },
          },
        ],
      };
      break;
  }

  return merge(commonConfig, {
    devtool,
    devServer,
    mode: environment,
    module: {
      rules: [tsLoaderRule],
    },
    optimization,
    output,
    plugins: [definePlugin, htmlWebpackPlugin],
  });
};

export default config;
