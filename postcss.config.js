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
      stage: 0,
      insertAfter: {
        'custom-media-queries': require('postcss-mixins')(),
      },
    },
    // github.com/seaneking/postcss-responsive-type */
    'postcss-responsive-type': {},
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
    /* More info at https://github.com/postcss/postcss-reporter */
    'postcss-reporter': {
      clearReportedMessages: true,
      throwError: true,
    },
  },
};
