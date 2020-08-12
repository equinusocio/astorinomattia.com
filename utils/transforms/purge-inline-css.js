const { PurgeCSS } = require('purgecss');

/**
 * Remove any CSS not used on the page and inline the remaining CSS in the
 * <head>.
 *
 * @see {@link https://github.com/FullHuman/purgecss}
 */
module.exports = async function(content, outputPath) {
  if (process.env.ELEVENTY_ENV !== 'production' || !outputPath.endsWith('.html')) {
    return content;
  }

  const purgeCSSResults = await new PurgeCSS().purge({
    content: [{ raw: content }],
    css: ['dist/assets/css/app.css'],
    keyframes: true,
  });

  return content.replace('<!-- INLINE CSS-->', purgeCSSResults[0].css);
}
