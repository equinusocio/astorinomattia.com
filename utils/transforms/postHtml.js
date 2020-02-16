const posthtml = require('posthtml');
const posthtmlCssModules = require('posthtml-css-modules');
const siteConfig = require('../../src/_data/config.json')

module.exports = function(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    /**
     * Process files content with PostHTMl to
     * transpile css-modules classes
     */
    const result = posthtml()
      .use(posthtmlCssModules(`${siteConfig.paths.modulesPath}/cssClasses.json`))
      .process(content, { sync: true })
      .html

      return result
  }
  return content
}
