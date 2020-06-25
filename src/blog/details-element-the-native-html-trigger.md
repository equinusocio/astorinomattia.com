---
title: <details> element, the native html trigger
date: '2020-06-20'
metaDesc: "Let's see how to to use the <details> element as a native on/off trigger with an eye to accessibility."
socialImage: true
tags:
  - css
  - html
  - logical properties
---

What the `<details>` element is? Well, generally speaking, this element is made to easily create collapsible content without using Javascript. Let's see the basic HTML structure:

```html
<details>
  <summary>Click to expand</summary>
  Sample content
</details>
```

If you inspect the code, you can notice that there is an `open` attribute that is being added when the content is expanded. Well, this is the key point of this story, with this attribute we can build a lot of UI widgets without using javascript at all (this doesn't mean you don't need js at all)

<img title="The open attribute is added and removed by the browser, based on the state" src="/images/stories/details-devtool.png">

Let's see now how to use the details element to build other widgets. First of all we need to transform the `summary` element and make it looks like a button by adding some CSS:

```css
.Button {
  appearance: none;
  display: inline-flex;
  background-color: #0055FF;
  padding: 1ch 1.4ch;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}

summary.Button::-webkit-details-marker {
  display: none;
}
```

Then we can apply it to the summary element along with accessibility related attributes.

```html
<details>
  <summary class="Button" role="button">
    Click to open ▾
  </summary>
</details>
```

This is what you get with the above CSS and HTML:

<img title="::-webkit-details-marker is used to remove the default arrow" src="/images/stories/details-button.png">

We have now a `<summary>` element dressed as a button. We'll use this class in the following examples.

## Dropdown menu

To build a dropdown menu using the `details` element, we need first to set its positioning to be `relative` because the popup menu will have a `position: absolute`. We also need to add the `aria-haspopup="menu"` to the summary element and `role="menu"` to the custom menu to make them a bit accessible.

```html
<details>
  <summary class="Button" role="button" aria-haspopup="true">
    Click to open ▾
  </summary>
  <ul class="Menu" role="menu">
    <li>Item 1</li>
    <li>This is a super long item 2</li>
    <li>Item 3</li>
  </ul>
</details>
```

We can add now the style for the custom menu element, we will use a simple css class to target

```css
.Menu {
  all: unset;
  position: absolute;
  inset-block-start: calc(100% + 8px);
  inset-inline-start: 0;
  background-color: #fbfbfb;
  padding: 0.5em 1em;
  min-width: 50px;
  list-style: none;
  box-shadow: inset 0 0 0 2px #0055FF;
}

.Menu > li {
  padding: 0.5em 0;
  white-space: nowrap;
}
```

There are some key properties here. With the `all` property we're removing all the default style from the `ul`. The `inset-block-start` and `inset-inline-start` are the logical properties equivalent of `top` and `left` (they change based on the text direction), you can learn more on CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties" target="_blank" rel="noopener noreferrer">logical properties on MDN</a>. The `white-space` on the `li` elements is required to force the menu width to overflow its parent width, which in this case is the width of the fake button.

Here's the final result, without the JS part that update the aria-related attributes based on the state.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/details-element-trigger?path=index.html&previewSize=100"
    title="details element as strigger on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 400px; width: 100%; border: 0;">
  </iframe>
</div>

## Modal

Modal dialogs are complex components that require attention and effort to be fully accessible. For example, you should trap the focus inside the modal when it's open, you should hide underlying content from AT when it's open, it should be closed by pressing esc, and so on. In this examples we'll see only how to use the `details` element to show/hide the modal and what we can do with the `open` attribute.

The core principles are the same of the dropdown menu, create a details and you modal inside it.

```html
<details class="Dropdown">
  <summary class="Button" role="button">
    Open Modal
  </summary>
  <div class="Modal" role="dialog" aria-modal="true">
    ...
  </div>
</details>
```


<!-- <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/details-element-trigger?path=modal.html&previewSize=100"
    title="details element as strigger on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 400px; width: 100%; border: 0;">
  </iframe>
</div> -->
