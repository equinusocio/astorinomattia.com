const OpenProps = require('open-props');

module.exports = {
  plugins: [
    require('postcss-dark-theme-class')({
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    }),
    require('autoprefixer'),
    require('postcss-jit-props')({
      ...OpenProps
    }),
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'cascade-layers': false,
      },
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    })
  ],
};