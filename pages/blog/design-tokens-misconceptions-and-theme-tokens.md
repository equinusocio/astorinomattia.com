---
title: Design tokens misconceptions and theme tokens
date: 2022-11-20
metaDesc: Learn how to work with design tokens in real multi-platforms design systems.
socialImage: false
tags:
- design systems

---

Nowadays, there needs to be more clarity about design tokens, what they are, and how to manage and apply them in multiplatform design systems.

Most misconceptions exist because of famous design tools like Figma plugins and online services that push on the wrong way.

## Design token's core principles

Design systems with solid and scalable design-tokens implementations follow and never violate the following core principles:

- Design tokens don't change across implementations. They are constants.
- Design tokens are platform-agnostic raw data; you must transform them into specific formats used by destination platforms, like the web, iOS, and Android.
- Design tokens are non-semantic. They hold an absolute value.
- Design tokens are the single source of truth to keep consistency across the system and platforms. Read the first point.

This image should be clear enough to explain where to place design tokens in a design system.

<img title="Design tokens structures and placement inside a design system" data-src="/images/stories/ds-structure.png">

There are many tools to transform your raw design tokens into platform-specific values, like Style Dictionary and Theo (by Salesforce), and we are not focusing on how to convert tokens in this article. Instead, we'll make clear why the core values are essential and must be respected to avoid issues in large design systems and applications, focusing on the first one.

## Keep token values and names the same across the system.

Let's take a design system that supports web, ios, and android platforms. It defines the raw design tokens designers use to create and style applications on those platforms.

We know platforms support different ways to style UI, and each has its own design rule. I'll give you two questions:

- What do we do if the web application has three styles to match accessibility requirements, like dark, light, and high contrast styles, but Android and iOS only have light and dark styles?
- Or, what happens if each application has different styles on each platform?

Suppose you're going to use design tokens directly to style your applications.

<img data-src="/images/stories/ds-apps.svg">

In that case, if iOS application is going to implement a darker yellow theme/style. If you change the value of `color-yellow` at tokens level you're going to change that color everywhere is used, causing unpredicatble issues (contrast, brightness, wrong color combinations...).

That means you can use design tokens only when you want the same value across platforms and never pretending it to change its value based on the platform/style requirements. To avoid this limitation, you need to decouple system-wide design tokens from platform-specific ones using themes.

## Introducing themes


Themes are an additional platform-specific layer you can use to create different shared UI styles using semantic keys. Themes are raw data containing semantic keys with specific purposes. Still, as raw data, you need to transform them as you do for design tokens because the web uses CSS, but iOS and Android use different languages to create user interfaces.

Let's create three different themes to use across platforms. You can ship these themes as NPM packages or CSS files or build them on each platform, but this last option will likely bring inconsistency since different teams may work on them.

```json
// Light theme
{
  "global-foreground": "#000",
  "global-background": "#fff",
  // Can also be a color design token.
  "interactive-text": "${color.blue.50}"
}
```

```json
// Dark theme
{
  "global-foreground": "#fff",
  "global-background": "#000",
  // Can also be a color design token.
  "interactive-text": "${color.blue.50}"
}
```

```json
// Yellow theme
{
  "global-foreground": "#000",
  "global-background": "#FDE68A",
  // #0096EA can also be a color design token.
  "interactive-text": "${color.red.90}"
}
```

<img data-src="/images/stories/frame-6.svg">

You can swap the themes in your applications without violating the design-tokens mutability principle and without touching the code because — sticking to the web as an example — the theme-ready interface will use something like this in the code:

```css
body {
  background: var(--global-background);
  color: var(--global-foreground);
}

a {
  color: var(--interactive-text);
}
```

The only requirement that still exists is that all the themes must declare the same key names to make the theme swap effortless.

## Conclusion

Consider design tokens as a vocabulary from which you can take and use consistent values on every platform/implementation. In contrast, themes are the way to make themeable UIs using their keys that may have different values based on the theme.
