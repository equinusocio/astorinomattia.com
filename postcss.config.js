const fs = require('fs-extra');
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
      generateScopedName: "[local]-[hash:base64:5]",
      getJSON: function(cssFileName, json, outputFileName) {
        const outputFile = `${siteConfig.paths.modulesPath}/cssClasses.json`
        const file = fs.pathExistsSync(outputFile) ? fs.readJsonSync(outputFile) : {};
        const result = {...file, ...json}

        fs.ensureDirSync(siteConfig.paths.modulesPath)
        fs.writeJsonSync(outputFile, result);
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
