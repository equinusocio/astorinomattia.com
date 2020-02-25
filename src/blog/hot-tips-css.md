---
title: Hot CSS tips
date: '2018-06-21'
metaDesc: "Here a curated collection of css snippets that you can use in specific situations or just for fun and exploring."
socialImage: true
tags:
  - css
  - tips
---

Here a curated collection of css snippets that you can use for determinate situations or just for fun. Let's start.

## Image rendering

```css
img.QRcode {
  image-rendering: pixelated;
}
```

This property is useful to render QR codes and image thumbnails to increase their quality.

## Check empty nodes

```css
element:empty {
  display: none;
}
```

Hide your element when have no content inside. `Returns` and `white spaces` are considered as content.

## Shape your text

```css
p {
  shape-outside: polygon(0 0, 0 200px, 300px 600px);
}
```

Change the way how content will wrap around your floated elements.


## Plain SVG as background

```css
element {
  background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
}
```

Use `<svg>` as css background without convert it to base64.

## Disable all user interactions

```css
[data-untouchable] {
  pointer-events: none;
}
```

Disable all user interactions, even js events, with just one property.

## Cleaned and self-contained component

```css
element {
  all: initial;
  contain: content;
}
```
Create a style-cleaned and self-contained component with two properties. With `contain: content` will be created a new stacking-context and position fixed coordinates will reference to this property.

## Overflow snapping

```css
element {
  scroll-snap-type: mandatory;
  scroll-snap-align: center;
}
```
Control scroll snapping for elements with overflow.

## System Font Stack

```css
element {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Helvetica,
    Arial,
    Ubuntu,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
}
```
Use the system font to provide a consistent typography experience.

## Check if input has value

```css
.Note {
  opacity: 0;
  transition: opacity 200ms ease-out;
}

input:not(:placeholder-shown) + .Note {
  opacity: 1;
}
```
This pseudo class allows you to check if the input have a value. <a href="https://jsfiddle.net/equinusocio/9hdm3fLc/embedded/result/" target="_blank">Live demo.</a>


## Repeat Gradients

```css
.RepeatLinear {
  background:
    repeating-linear-gradient(
      45deg,
      lime,
      lime 10px,
      pink 10px,
      pink 20px
    );
}

.RepeatRadial {
  background:
    repeating-conic-gradient(
      circle at 0 0,
      tomato,
      limegreen 50px
    );
}
```
You can repeat gradients instead of going mess with mixins.

## Vector icons as mask

```css
button {
  background: linear-gradient(to right, #d2ff52 0%, #30a85a 100%);
  height: 40px;
  width: 100px;
  mask: url('https://cdn.onlinewebfonts.com/svg/img_529012.svg');
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 24px;
}
```
Use svg icons as mask and keep color manipilation. <a href="https://jsfiddle.net/equinusocio/2jekbdas/embedded/result/" target="_blank">Live demo.</a>


## Float based on document direction

```css
img {
  float: inline-start; /* ...or inline-end */
}
```
Float an element based on the text direction (`rtl` or `ltr`). More about [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)


## Target default form element

```css
input:default {
  opacity: 0.2;
}
```
Target the default selected input in a gruop. <a href="https://jsfiddle.net/equinusocio/kn231bx9/embedded/result/" target="_blank">Live demo.</a>

## Import your css when you need it

```css
@import url('portrait.css') screen and (orientation: portrait);
```
You can conditionally import your css like you can do inline with the `<link>`. Please consider that vanilla css imports are a bad thing in terms of performance because they start an potentially <a href="https://image.ibb.co/mZOcBd/Screen_Shot_2018_07_02_at_11_37_16.png" target="_blank">infinite calls chain.</a>

## Target devices by pointer precision

```css
@media (any-pointer: fine) { /* I'm default */ }
@media (any-pointer: coarse) { /* I'm a bit larger. I have a less precise pointer method */ }
```
Improve your touchable elements if the main pointer input is `precise` (mouse) or `less precise` (touch).

## Prevent over-scroll

```css
.ScollingContent {
  overscroll-behavior: contain;
}
```
Prevent over-scroll when the scroll reach the end of the element

## Environment variables for edge screens

```css
my-component {
  padding-bottom: env(safe-area-inset-bottom, 24px); /* 24px as fallback */
}
```

You need to enable `env` variables with:

```html
<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>
```

## Prevent outline overlapping

```css
button:focus {
  transform: rotate(0); /* rotate(0) is just an example */
}
```

By creating a new stacking context with the `transform` property you can fix the outline overlapping. <a href="https://jsfiddle.net/equinusocio/ytjk4rwo/embedded/result/" target="_blank">Live demo.</a>

## Anchor scroll padding and margins

```css
body {
  scroll-padding: 100px;
  scroll-margin-top: 10em;
}
```

Set the offset for in-page anchors links. <a href="https://codepen.io/pawelgrzybek/pen/rbMrRY" target="_blank">Live demo.</a>. More info about [`scroll-padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) and [`scroll-margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin).
