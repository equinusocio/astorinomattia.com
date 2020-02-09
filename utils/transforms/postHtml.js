const posthtml = require('posthtml');
const posthtmlCssModules = require('posthtml-css-modules');

module.exports = function(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    posthtml([
      posthtmlCssModules('./.cssModules/cssClasses.json')
    ])
    .process(content)
    .then((result) => {
      // console.log(result.html)
      return result.html
    });
  }
  return content
}
