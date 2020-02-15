const fs = require('fs');
const modulesPath = './dist/.cssModules';

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
        !fs.existsSync(modulesPath) && fs.mkdirSync(modulesPath);
        fs.writeFileSync('./dist/.cssModules/cssClasses.json', JSON.stringify(json));
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
