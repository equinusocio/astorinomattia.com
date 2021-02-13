/* eslint-disable @typescript-eslint/no-var-requires, global-require */

module.exports = {
  plugins: {
    /* More info at https://github.com/TrySound/postcss-easy-import */
    'postcss-easy-import': {
      extensions: '.css',
    },
    /* More info https://github.com/csstools/postcss-normalize */
    'postcss-normalize': {},
    /* More info at https://github.com/csstools/postcss-preset-env */
    'postcss-preset-env': {
      stage: 0
    },
    'postcss-inset': {},
    /* More info at https://cssnano.co/ */
    cssnano: {
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
        },
      ],
    },
  },
};