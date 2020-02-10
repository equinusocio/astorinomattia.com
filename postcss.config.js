const fs = require('fs');
const modulesPath = './.cssModules';

module.exports = {
  plugins: [
    require('postcss-modules')({
      getJSON: function(cssFileName, json, outputFileName) {
        !fs.existsSync(modulesPath) && fs.mkdirSync(modulesPath);
        fs.writeFileSync('./.cssModules/cssClasses.json', JSON.stringify(json));
      }
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
