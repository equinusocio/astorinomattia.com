---
title: Smart animations with custom properties
date: '2018-10-16'
metaDesc: "What you get by combining css custom properties and keyframes? Smart keyframes!"
socialImage: true
tags:
  - css
  - custom properties
  - animations
---

A few days ago I was talking with a friend about the most popular CSS libraries to integrate simple animations into a project. After a bit of research these names emerged, including the most popular **Animate.css** and **AnimeJS**:

- <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener">animate.css</a>
- <a href="http://animejs.com/" target="_blank" rel="noopener">animejs</a>
- <a href="https://www.minimamente.com/example/magic_animations/" target="_blank" rel="noopener">magic animations</a>
- <a href="http://ianlunn.github.io/Hover/" target="_blank" rel="noopener">hover</a>
- <a href="http://anijs.github.io/" target="_blank" rel="noopener">anijs</a>

What amazed me most is that some of these libraries, especially those CSS, were introduced several years ago. Although CSS now allows us to find better results and write simpler and more efficient code, these libraries seem timeless (do you remember jQuery?) and only few people really give importance to the complexities that these bring with them once included into our project; especially if we have to take into account bytes and performance. For example, a question that we should all ask ourselves is:

> Does it make sense to include the entire library if I need only 3 animations?

The answer is obviously *no*, and to overcome this, some people "copy" (👮🏻) the individual keyframes and use them independently from the library itself. If you use <a href="https://postcss.org/" rel="noopener" target="_blank">PostCSS</a> (and you should) there is <a href="https://github.com/retyui/postcss-animations" rel="noopener" target="_blank">a plugin</a> that allows you to conditionally import the keyframes you want, when you need them.

## The problem

Almost all of these CSS libraries provide a set of classes to which a specific animation is assigned. So, to apply a *fade from bottom* animation we need to add the relative class to the HTML element, then customising it through CSS:

```html
<progress class="fadeFromBottom"></progress>

<style>
  .fadeFromBottom {
    animation-duration: 2s; /* This may require !important 👀 */
    animation-delay: 0.5s;
  }
</style>
```

As is easily to understand, this means that for each imported animation (for example, the direction is managed with a different class) there is a corresponding CSS class and to customise it we must overwrite the code, sometime using the *!important* (❗️) keyword, resulting in a not-so-much scalable code.


How can we therefore evolve this approach using today's tools?


## Keyframes and custom properties

One of the recent innovations introduced in CSS are the <a href="https://www.w3.org/TR/css-variables-1/" rel="noopener" target="_blank">custom properties</a>, keys defined by the developer to which you can assign a value, to be then reused within the code. Do you know how the `variables` of any other language work? Nice, the custom properties, also called *CSS variables* are something similar. Below is an example of a local variable declared within a selector:

```css
.MyComponent {
  --foregroundColor: DodgerBlue;
  color: var(--foregroundColor, SlateBlue);
}
```

We know that the variables follow the **C**ascade, and are therefore accessible by the descending elements. Let's now try to imagine the possibilities we have today by combining this functionality with keyframes animations.

We now define the same animation as above, where a fade animation is performed but without a specific direction:

```css
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

We have our simple animation and we can now try to add the custom properties to make it more dynamic and have the ability to customize it without overwriting the code or generating additional classes:

```css
@keyframes fade {
  from {
    opacity: var(--fromOpacity, 0);
    transform: translate(
      var(--fromX, 0),
      var(--fromY, 0)
    );
  }
  to {
    opacity: var(--toOpacity, 1);
    transform: none;
  }
}
```

By adding some custom properties we have created an animation without a specific direction (by default the element does not move) but we can now change this behavior each time by simply modifying the value of the custom properties:

```css
.MyComponent {
  --fromX: 50px;
  --fromOpacity: 1;
  --toOpacity: 0;

  animation: fade 1s 1;
}
```

<iframe width="100%" height="500" src="//jsfiddle.net/equinusocio/5xk8o2qp/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


By this way it is not necessary to specify a CSS class for each direction and above all it is possible to customize them without overwriting the css and duplicating the code. Can you imagine a library of css animations that uses **smart keyframes** which brings to a next level what for years were "a must"?

Obviously there are always pro and cons, so is really important to well evaluate each use case to get the most out of the technology we decide to use.
