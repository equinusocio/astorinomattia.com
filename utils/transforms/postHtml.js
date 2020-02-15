const posthtml = require('posthtml');
const posthtmlCssModules = require('posthtml-css-modules');

module.exports = function(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    /**
     * Process files content with PostHTMl to
     * transpile css-modules classes
     */
    const result = posthtml()
      .use(posthtmlCssModules('./dist/.cssModules/cssClasses.json'))
      .process(content, { sync: true })
      .html

      return result
  }
  return content
}
