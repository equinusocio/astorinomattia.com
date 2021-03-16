module.exports = {
  /**
   * Site data
   */
  name: 'Mattia Astorino',
  shortDesc: "I'm Mattia Astorino, UX Engineer in Milan and member of Open Source Design.",
  url: 'https://xity-starter.netlify.app',
  lang: 'en',
  /**
   * Socials and monetisation
   */
  authorHandle: '@equinusocio',
  authorName: 'Mattia Astorino',
  paymentPointer: '$ilp.uphold.com/9ebKEYaNiGUf',
  /**
   * Content settings
   */
  syntaxTheme: 'prism-mono.css',
  permalinkClass: ['Permalink'],
  iframeClass: ['IframesWrapper'],
  codeClass: ['CodeWrapper'],
  figureClass: ['Figure'],
  /**
   * Main navigation items.
   * Used by components/header.njk
   */
  navigation: [
    {
      "text": "Blog",
      "url": "/blog/",
      "external": false
    },
    {
      "text": "Art",
      "url": "/art/",
      "external": false
    }
  ],
}
