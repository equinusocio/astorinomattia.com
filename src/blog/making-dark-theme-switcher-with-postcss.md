---
title: Making dark theme switcher with PostCSS.
date: '2020-05-06'
metaDesc: "Building a theme switcher that take care of users"
socialImage: true
tags:
  - css
  - accessibility
  - html
  - custom properties
---

You have noticed that there is a new design trend that is floating around web design since 2019, the dark mode. Facebook, Apple, and Google both introduced the dark version of their software.

## Why a dark theme

Most of you probably think this is just a trend that will disappear after some years, well, let me say that this is not like many other trends, dark UI provide different advantages and they are not something just related to the "designer mood". Let's see why a dark mode on your applications and websites are something useful.

### Better for batteries

Pixels on a screen consume more energy to display light colors rather than dark ones. Consequently, devices' batteries can save energy and improve their daily duration while using dark UI.

### Better for dark environments

Most of us use their smartphone and laptops while at home. Such environments are typically not so bright. The dark mode can help the use of the application while indoor, without causing visual disturbances.

### Better for people

Some people with — or without — visual diseases, like epilepsy, can have unfortunate events by being flashed by bright applications. Having a dark mode means being more accessible.

## Preparing styles

A very simple theme switcher should offer at least 3 options:

- Dark theme
- Light theme
- Automatic theme (should be on by default)

Wait, what's the automatic theme? Well, modern operating systems allow users to change the global visual appearance by setting os-wide options that enable the dark or light mode. The automatic option make sure to respect the OS preference if the user has not specified any theme.

To make this even more simple, we'll use PostCSS and a simple but useful plugin called [`postcss-dark-theme-class`](https://github.com/postcss/postcss-dark-theme-class).

```shell
yarn add postcss-dark-theme-class
```

This plugin will do 70% of the work, once installed, add it to your PostCSS config and configure the selectors you want to use to activate the correct theme, which will be used by the plugin to generate the correct CSS:

```js
module.exports = {
  plugins: [
    /* ...other plugins */

    require('postcss-dark-theme-class')({
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    })
  ]
}
```

Once the plugin is up and running, we can start defining our dark and light themes using a CSS specific media query `prefers-color-scheme`. This special media query will handle the automatic part of our themes by applying the correct theme based on the user's OS preferences:

```css
:root {
  --accent-color: hsl(226deg 100% 50%);
  --global-background: hsl(0 0% 100%);
  --global-foreground: hsl(0 0% 0%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: hsl(226deg 100% 50%);
    --global-background: hsl(0 0% 0%);
    --global-foreground: hsl(0 0% 100%);
  }
}
```

If the user is using a dark version of his OS, the set inside the media query will apply, overwriting others, otherwhise the set of properties outside the media query is used. Since it's pure CSS, this behaviour is on by default.

Browsers will now adapt the color scheme automatically based on the users' OS preferences. Nice done! 🚀 Now it's time to make the theme switcher allow users to specify what theme to use, overriding the OS preference.


## Making the theme switcher

As we said, our switcher should have three options, we can use a simple select element, or build a set of buttons:

```html
<button aria-current="true" data-set-theme="auto">Auto</button>
<button aria-current="false" data-set-theme="dark">Dark</button>
<button aria-current="false" data-set-theme="light">Light</button>
```

We'll build the switcher using vanilla JS, but you can do it with any framework you want, the concept is the same: we have to add the selectors we defined inside the PostCSS plugin to the `root` element, based on the clicked button.

```js
const html = document.documentElement
const themeButtons = document.querySelectorAll('[data-set-theme]');

themeButtons.forEach((button) => {
	const theme = button.dataset.setTheme;

	button.addEventListener('click', () => {
		html.dataset.theme = theme;
  })
})
```

Each time we click on a theme button, the value set as `data-set-theme` is applied as value of the `data-theme` attribute on the document root element.

Check it live:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/theme-switcher-with-postcss?path=style.css&previewSize=0"
    title="accessible-icon-button on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 400px; width: 100%; border: 0;">
  </iframe>
</div>

## Where is the magic?

The magic is made by `postcss-dark-theme-class` — which will add our `[data-theme]` custom attribute to the `:root` selectors we wrote — during the CSS transpilation. Here what it generates from our code:

```css

/* Our automatic and user specified light theme */
:root {
  --accent-color: hsl(226deg, 100%, 50%);
  --global-background: hsl(0, 0%, 100%);
  --global-foreground: hsl(0, 0%, 0%);
}

/* Our automatic dark theme */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --accent-color: hsl(226deg, 100%, 50%);
    --global-background: hsl(0, 0%, 0%);
    --global-foreground: hsl(0, 0%, 100%);
  }
}

/* Our dark theme specified by the user */
:root[data-theme="dark"] {
  --accent-color: hsl(226deg, 100%, 50%);
  --global-background: hsl(0, 0%, 0%);
  --global-foreground: hsl(0, 0%, 100%);
}
```

## Bonus tip

You may notice that the `--accent-color` custom property defined inside the themes don't change. If you have colors that will not change based on the theme, you can remove them from the `prefers-color-scheme` at-rule.

In this way, they will not be duplicated and the one defined outside the media query will always apply.

```css
:root {
  --accent-color: hsl(226deg 100% 50%);
  --global-background: hsl(0 0% 100%);
  --global-foreground: hsl(0 0% 0%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --global-background: hsl(0 0% 0%);
    --global-foreground: hsl(0 0% 100%);
  }
}
```
