import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';

// constants
import { DIST_PATH, SRC_PATH } from '../constants';

export default function createCommonConfig(): Configuration {
  return {
    entry: {
      ['index']: resolve(SRC_PATH, 'index.ts'),
    },
    module: {
      rules: [
        // templates
        {
          loader: 'handlebars-loader',
          test: /\.hbs$/,
        },

        // styles
        {
          test: /\.css$/i,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'styleTag',
              },
            },
            {
              loader: 'css-loader',
              options: {
                url: true,
              },
            },
          ],
        },

        // assets
        {
          test: /\.(ttf?.+|woff?.+|woff2?.+)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.(png?.+|jpeg?.+|svg?.+)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]',
          },
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(SRC_PATH, 'data'),
            to: resolve(DIST_PATH, 'assets', 'data'),
          },
          {
            from: resolve(SRC_PATH, 'CNAME'),
            to: resolve(DIST_PATH, 'CNAME'),
            toType: 'file',
          },
        ],
      }),
    ],

    resolve: {
      alias: {
        ['@app/components']: resolve(SRC_PATH, 'components'),
        ['@app/config']: resolve(SRC_PATH, 'config'),
        ['@app/constants']: resolve(SRC_PATH, 'constants'),
        ['@app/data']: resolve(SRC_PATH, 'data'),
        ['@app/enums']: resolve(SRC_PATH, 'enums'),
        ['@app/features']: resolve(SRC_PATH, 'features'),
        ['@app/fonts']: resolve(SRC_PATH, 'fonts'),
        ['@app/hooks']: resolve(SRC_PATH, 'hooks'),
        ['@app/images']: resolve(SRC_PATH, 'images'),
        ['@app/pages']: resolve(SRC_PATH, 'pages'),
        ['@app/selectors']: resolve(SRC_PATH, 'selectors'),
        ['@app/styles']: resolve(SRC_PATH, 'styles'),
        ['@app/theme']: resolve(SRC_PATH, 'theme'),
        ['@app/translations']: resolve(SRC_PATH, 'translations'),
        ['@app/types']: resolve(SRC_PATH, 'types'),
        ['@app/utils']: resolve(SRC_PATH, 'utils'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },

    stats: {
      assetsSpace: 100,
      modules: false,
    },
  };
}
