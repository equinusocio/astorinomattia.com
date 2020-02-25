---
title: How to handle web fonts in 2018
date: '2018-12-16'
metaDesc: "How to correctly load web fonts to avoid performance issues and speed up page loading."
socialImage: true
tags:
  - css
  - tips
  - performance
---

Custom web fonts are used everywhere around the world, but many (many and many) sites load them improperly causing a lot of problems during the page loading, like performance issues, very long loading time, blocked render and font swapped during navigation.

I see many developers ignoring this argument or maybe they do the same error over and over just because "they have always done so", maybe they don't know that are working on a constantly changing environment.

I just think we should break this loop and start doing the right thing in 2018 because there are just four steps to consider when loading a custom web font:

- Use the correct font format
- Preload fonts
- Correct font-face declaration
- Avoid invisible text during font loading (FOUT)

Let's start breaking down these points to face them one at a time.


## Use the correct font format

There are many font formats that can be used on web, but only two formats are really needed if you don't have to support IE 8 or lower ([wtf?!](https://inception.davepedu.com/)): **[woff](https://caniuse.com/#search=woff)** and **[woff2](https://caniuse.com/#search=woff2)**. These are the only two file types you should use because they are gziped by default (so they are very small) and optimised for the web, and as you can see, they are fully supported by IE 9+ and all other ever green browsers.

## Preload fonts

When using custom fonts you should tell the browser to preload them using the appropriate `rel=""` tag and attributes:

```html
  <link rel="preload" as="font" href="fonts/cicle_fina-webfont.woff2" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" as="font" href="fonts/zantroke-webfont.woff2" type="font/woff2" crossorigin="anonymous">
```
> Note that the use of crossorigin here is `important`; without this attribute, the preloaded font is ignored by the browser, and a new fetch takes place. This is because fonts are expected to be fetched anonymously by the browser, and the preload request is only made anonymous by using the this attribute.

In the above example, the `rel="preload" as="font"` attributes will ask the browser to start downloading the *required* resource as soon as possible. They also tells the browser that this is a font, so it can appropriately prioritise it in its resource queue. Using the [preload hints](https://developers.google.com/web/fundamentals/performance/resource-prioritization?hl=en#preload) will have a dramatic impact on web font performance and initial page load. Browsers that support preload and prefetch hints will start downloading web fonts as soon as they have seen the hint in the HTML file and no longer need to wait for the CSS.

You can instead use the `rel="prefetch"` attribute to tell the browser to prepare the download of the resources that may be required lately during page load or user actions so it will assign a low priority to the resource.

__CAUTION:__
If you’re using a CDN like Google Fonts, be sure that the font files you’re preloading match the ones in the CSS. Fonts can also be regularly updated, and if you’re preloading an old version while using the CSS for a newer one, you may end up downloading two versions of the same font and wasting your users’ bandwidth. Consider using [`<link rel="preconnect">`👨🏼‍🔬](https://developers.google.com/web/fundamentals/performance/resource-prioritization?hl=en#preconnect) instead for easier maintenance.

## Correct font-face declaration

Declaring a font-face family is very simple but we must care about some things when we do it. Here a correct example declaring a custom font family:

```css
@font-face {
  font-family: 'Custom Font';
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Read next point */
  unicode-range: U+000-5FF; /* Download only latin glyphs */
  src:
    local('Custom Font'),
    url('/fonts/custom-font.woff2') format('woff2'),
    url('/fonts/custom-font.woff') format('woff');
}
```

>>> Unicode range from [Google Web Fundaments](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=en#unicode-range_subsetting)

As you can see we use only optimised fonts (**woff** and **woff2**) and we tell the browser to download only the required glyphs range (from `U+000` to `U+5FF`). There are also two more things to notice, the `local()` function and the fonts order. The first one allows users to use their local copy of the font if present (eg. think about the Roboto fonts that are pre-installed on android) instead of downloading it. The fonts declaration order is also important because the browser will start to fetching the resources following the declaration order. If it support the woff2 format it will download the font, instead if it doesn't recognise the resource format it will proceed to the next one, and so on. _If you really want to use also `eot` and `ttf` fonts make sure to add them at the end of the `src` declaration._

### Resources
- [Glyphs range generator](https://codepen.io/elifitch/pen/Ljqway) by Eli Fitch
- [Modern Font Face generator](https://transfonter.org)


## Avoid invisible text during font loading

Fonts are often large files that take awhile to load even when gziped. To deal with this, some browsers hide text until the font loads (the "flash of invisible text"). You can avoid the "flash" and show content to users immediately using a system font then replace it.

In the previous `@font-face` example you can notice the [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) declaration. The `swap` value tells the browser that text using this font should be displayed immediately using a system font. Once the custom font is ready, the system font is swapped out.

If a [browser does not support](https://caniuse.com/#search=font-display) `font-display` it continues to follow its default behaviour for loading fonts.

| Browser          | Default behaviour if font is not ready…  |
|------------------|:-----------------------------------------|
|__Edge__          | Uses a system font until font is ready. Swaps out font.|
|__Chrome__        | Will hide text for up to 3 seconds. If text is still not ready, uses a system font until font is ready. Swaps out font.  |
|__Firefox__       | Will hide text for up to 3 seconds. If text is still not ready, uses a system font until font is ready. Swaps out font.  |
|__Safari__        | Hides text until font is ready.  |


## Testing
Here the link to test the "standard version" and the optimised one:

- [Standard](https://fontface-test.glitch.me)
- [Optimised](https://fontface-test.glitch.me/index-cool.html)

### Result

![standard](//images.ctfassets.net/gz0sygvqczyz/Jj9itpvLMI6WC2m0gGEy0/2aeaef6adc66f7f769e3e4e23cb68970/standard.png) ![opt](//images.ctfassets.net/gz0sygvqczyz/12OTKvbLRyoEsYSq8KqcKe/96ded21bde16f3f2d94d32a76e3c9e7a/opt.png)

