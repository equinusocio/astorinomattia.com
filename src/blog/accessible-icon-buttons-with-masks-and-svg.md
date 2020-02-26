---
title: Accessible icon buttons with masks and SVG.
date: '2019-10-20'
metaDesc: "Let's try a new way to make accessible icon buttons with SVG's and CSS masks."
socialImage: true
tags:
  - css
  - accessibility
  - html
---

In this article we'll see how to make fully accessible icon buttons using __SVG__ and __CSS__, without bloating the html with the inline `<svg>` code  but keeping the customization!

But first, let's define what we want to achieve with our code, what we want from the final ouput of our icon button element:

- Interactive
- Keyboard controlled
- Accessible
- Customizable

...and we will achieve all of this points with just __HTML__ and __CSS__! It's magic, isn't it?

## The markup

A `<button>` element is everything we need, you never would have said that, right?

```html
<button aria-label="Download File"></button>
```

If you don't like to use an empty element, you can use your `.sr-only` utility class to hide the inside content from the UI.

```html
<button>
  <span class="sr-only">Download File</span>
</button>
```

You can choose to use the `aria-label` attribute to add a mean to the button or the hidden element readable only by assistive technologies, it's up to you. Using the `button` element we already solved the first three points of our checklist since __it is interactive, keyboard navigable and accessible by default__. No tabindex needed or javascript code to make it keyboard accessibile.

- <del>Interactive</del><ins>✓</ins>
- <del>Keyboard controlled</del><ins>✓</ins>
- <del>Accessible</del><ins>✓</ins>
- Customizable

## Customization

So, how we can change colors, sizes, add gradients using a single SVG image from our CSS? The answer is...using the very wide supported `mask-*` properties!

The only constraint is that __the source icon should be black on a trasparent or white background__. That's because the mask property uses the pure black color to shows the visible part of the background, while the white or transparent color is used to obsfuscale the background layer.

Let's start adding some basic style to our button to set up positioning and box model:

```css
.IconButton {
  width: 56px;
  height: 56px;
  appearance: none;
  border-radius: 50%;
  border: 0;
  background-color: #000;
  cursor: pointer;
  padding: 0;
  position: relative;
}
```

Now, we are going to use a `::pseudo-element` to add the icon. The absolute positioned pseudo element is useful to mathematically centering the icon, but at the same time, it allows us to [optically center](https://medium.muz.li/optical-effects-9fca82b4cd9a) the icon when we need to do it.

```css
.IconButton::before {
  /* Positioning related code */
  content: "";
  display: block;
  width: 50%;
  height: 50%;
  background: #000;
  pointer-events: none;

  /* this allows optical centering if required */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

We can now add our magic code. First of all we need an icon, and we need it as SVG since we want it to scale without loosing quality. We will use [this icon](https://images.ctfassets.net/gz0sygvqczyz/2szA1GJ3YcnW8P0Zxgx8c1/7f6ed208373a28a462143b58b299ebbc/FX9.svg) for this example.

Using the `mask-` properties we can set our icon as element mask, like we do with design tools like Sketch, Figma and others. Let's add these properties:

```css
.IconButton::before {
  /* Previous code... */

  /* Masking code */
  mask-image: url("https://cdn.glitch.com/a10b6199-a788-4cef-8bd8-21f95dbcba93%2Fdownload-cloud.svg?v=1571346192759");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
}
```

As you can see we defined four things here:

- __The mask url:__ our black svg icon
- __The mask position:__ set to be always centered
- __The mask repetition:__ we disbled the tile effect.
- __The mask size:__ we set it to be containd into the available space, so the icon will be alway fully visible.

You might have noticed that these properties are the same (and act like) of the `background-` properties. The main difference here is that the image is used as mask and makes our element "transparent" where the image is black, while the white (or transparent) part of the image is used to hide what's on the background. Our icon here is white because we set `background: #fff;` on the pseudo element and the svg icon is filled with `#000`.

Now, we should see something like this:

![accessible-icon-button](//images.ctfassets.net/gz0sygvqczyz/3ErL4imaIwMa6waWkI3sr0/0dbe9eb935e6a14b2a0f20434b8dd096/Screenshot_2019-10-19_at_20.07.30.png)

This way you can change the background, add gradients ad make fading-out icons by filling them with a gradient from black and to a transparent color.
Inside the `mask-image` you can also use an icon from your [sprite SVG](https://css-tricks.com/icon-fonts-vs-svg/) file! Pretty awesome and scalable!

```css
mask-image: url("path/to/sprite.svg#my-icon-id");
```

Let's see some example using different icons and changing the `::before` background:

![examples](//images.ctfassets.net/gz0sygvqczyz/5ImFRyi2At0EAOuCDTDT4p/30d2ffecc068a53c423639c0489a20e4/examples.png)

The first button uses a full black svg icon, the second one adds a linear gradient to the `::pseudo-element` and the third one uses an icon filled with a gradient from black to a transparent color. As always, you can even animate whatever you want and you can combine custom properties to pass the icon path from the html and handle them easily with javascript using `.setProperty()`, for example:

```js
myelement.style.setProperty("--icon", "...");
```

We can now flag the last step! 🎉

- <del>Interactive</del><ins>✓</ins>
- <del>Keyboard controlled</del><ins>✓</ins>
- <del>Accessible</del><ins>✓</ins>
- <del>Customizable</del><ins>✓</ins>

## Live demo

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/accessible-icon-button?path=style.css&previewSize=0"
    title="accessible-icon-button on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 400px; width: 100%; border: 0;">
  </iframe>
</div>

## Progressive enhancement

The `mask-` properties are well supported by all the modern browser, but if for some weird reason you need to support obsolete browsers that doesn't support these properties, you can progressive enhance the code in order to provide a __minimal UI experience__.

Be aware that when talking about "minimal UI experience" we mean that things may not look the same, but they just work as expected without breaking the user experience. It doesn't mean "add a ton of code for old browsers just to replicate the visual appearance of the element" because that code will be downloaded even by modern browsers, but never used.


## Conclusion

HTML is accessible and semantic by default and CSS provides handy dynamic ways to build our interfaces. If you add some custom properties you can have a really smart component without using javascript or other libs to achieve simple tasks like this one.

Enjoy it! 🎉









