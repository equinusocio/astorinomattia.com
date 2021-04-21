module.exports = {
  /**
   * Site data
   */
  name: 'Mattia Astorino',
  shortDesc: "I'm Mattia Astorino, UX Engineer in Milan and member of Open Source Design.",
  url: 'https://equinusocio.dev',
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
  iframeClass: ['IframesWrapper', "Bleeding"],
  codeClass: ['CodeWrapper', "Bleeding"],
  figureClass: ['Figure', "Bleeding"],
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
    // {
    //   "text": "Art",
    //   "url": "/art/",
    //   "external": false
    // }
  ],
}
