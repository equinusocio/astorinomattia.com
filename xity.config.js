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
  permalinkClass: ['permalink'],
  iframeClass: ['iframes-wrapper'],
  codeClass: ['code-wrapper'],
  figureClass: ['figure'],
  /**
   * Main navigation items.
   * Used by components/header.njk
   */
  navigation: [
    {
      "text": "Home",
      "url": "/",
      "external": false
    },
    {
      "text": "Blog",
      "url": "/blog",
      "external": false
    },
    {
      "text": "Art",
      "url": "/art/",
      "external": false
    }
  ],
}
