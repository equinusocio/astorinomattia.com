const siteConfig = require('./src/_data/config.json')

module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['.pcss']
    }),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('cssnano')({
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
        },
      ],
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
}
