const fs = require('fs');
const siteConfig = require('./src/_data/config.json')

module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['.pcss']
    }),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-modules')({
      generateScopedName: "[name]-[local]-[hash:base64:5]",
      getJSON: function(cssFileName, json, outputFileName) {
        !fs.existsSync(siteConfig.paths.modulesPath) && fs.mkdirSync(siteConfig.paths.modulesPath);
        fs.writeFileSync(`${siteConfig.paths.modulesPath}/cssClasses.json`, JSON.stringify(json));
      }
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
