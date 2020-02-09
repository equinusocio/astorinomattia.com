const path = require('path');
const fs = require('fs');
const modulesPath = '.cssModules';

module.exports = {
  plugins: [
    require('postcss-modules')({
      camelCase: true,
      getJSON: function(cssFileName, json, outputFileName) {
        !fs.existsSync(modulesPath) && fs.mkdirSync(modulesPath);
        fs.writeFileSync(`./${modulesPath}/cssClasses.json`, JSON.stringify(json));
      }
      // getJSON: function(cssFileName, json, outputFileName) {
      //   !fs.existsSync(modulesPath) && fs.mkdirSync(modulesPath);
      //   const cssName = path.basename(cssFileName, '.pcss');
      //   const jsonFileName = path.resolve(`./${modulesPath}/${cssName}.json`);
      //   fs.writeFileSync(jsonFileName, JSON.stringify(json));
      // }
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
