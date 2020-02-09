const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlMinTransform = require('./utils/transforms/htmlmin.js')
const contentParser = require('./utils/transforms/contentParser.js')
const postHtml = require('./utils/transforms/postHtml.js')
const htmlDate = require('./utils/filters/htmlDate.js')
const rssPlugin = require('@11ty/eleventy-plugin-rss')
const date = require('./utils/filters/date.js')
const fs = require('fs')

/**
 * Import site configuration
 */
const siteConfig = require('./src/_data/config.json')

module.exports = function(eleventyConfig) {
  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./assets/')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ './static': '.' })
  eleventyConfig.addPassthroughCopy(`./assets/css/${siteConfig.syntaxTheme}`)

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  // human friendly date format
  eleventyConfig.addFilter('dateFilter', date)
  // robot friendly date format for crawlers
  eleventyConfig.addFilter('htmlDate', htmlDate)

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }
  eleventyConfig.addTransform('contentParser', contentParser)
  // eleventyConfig.addTransform('postHtml', postHtml)

  /**
   * Add Plugins
   */
  // Add rss generation: https://github.com/11ty/eleventy-plugin-rss
  eleventyConfig.addPlugin(rssPlugin)
  // Add code syntax highlight: https://github.com/11ty/eleventy-plugin-syntaxhighlight
  eleventyConfig.addPlugin(syntaxHighlight)

  /**
   * Create custom data collections
   * for blog and feed
   * Code from https://github.com/hankchizljaw/hylia
   */
  // Blog posts collection
  const now = new Date()
  const livePosts = post => post.date <= now && !post.data.draft
  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection
        .getFilteredByGlob(
          `./${siteConfig.paths.src}/${siteConfig.paths.blogdir}/*.md`
        )
        .filter(livePosts),
    ].reverse()
  })

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    open: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  /**
   * Eleventy configuration object
   */
  return {
    dir: {
      input: siteConfig.paths.src,
      includes: siteConfig.paths.includes,
      layouts: `${siteConfig.paths.includes}/layouts`,
      output: siteConfig.paths.output,
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
