---
title: <details> element, the native html trigger
date: '2020-06-26'
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

<iframe
  loading="lazy"
  src="https://details-element-trigger.glitch.me/details.html"
  title="details element as strigger on Glitch"
  style="height: 200px; width: 100%;">
</iframe>

If you inspect the code, you can notice that there is an `open` attribute that is being added when the content is expanded. Well, this is the key point of this story, with this attribute we can build a lot of UI widgets without using javascript at all (this doesn't mean you don't need js at all)

<img title="The open attribute is added and removed by the browser, based on the state" src="/images/stories/details-devtool.png">

Let's see now how to use the details element to build other widgets. First of all we need to transform the `summary` element and make it looks like a button by adding some CSS:

```css
.Button {
  appearance: none;
  display: inline-flex;
  background-color: hsl(220deg 100% 50%);
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

## Dropdown example

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
  box-shadow: inset 0 0 0 2px hsl(220deg 100% 50%);
}

.Menu > li {
  padding: 0.5em 0;
  white-space: nowrap;
}
```

There are some key properties here. With the `all` property we're removing all the default style from the `ul`. The `inset-block-start` and `inset-inline-start` are the logical properties equivalent of `top` and `left` (they change based on the text direction), you can learn more on CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties" target="_blank" rel="noopener noreferrer">logical properties on MDN</a>. The `white-space` on the `li` elements is required to force the menu width to overflow its parent width, which in this case is the width of the fake button.

Here's the final result, without the JS part that update the aria-related attributes based on the state.

<iframe
  loading="lazy"
  src="https://details-element-trigger.glitch.me/index.html"
  title="details element as strigger on Glitch"
  style="height: 400px; width: 100%;">
</iframe>

## Modal example

Modal dialogs are complex components that require attention and effort to be fully accessible. For example, you should trap the focus inside the modal when it's open, you should hide underlying content from AT when it's open, it should be closed by pressing esc and return the focus to the element which opens it. The <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html" target="_blank" rel="noopener noreferrer">WAI ARIA site made a full example</a>, check it to learn more about fully accessible modal.

In this example we'll see only how to use the `details` element to show/hide the modal and what we can do with the `open` attribute. The core principles are the same of the dropdown menu, create a details and your modal inside it, but this time we don't want the modal to be positioned relative to the `details`, so we can remove the `.Dropdown` class. Here the starting markup:

```html
<details>
  <summary class="Button" role="button">
    Open Modal
  </summary>
  <div class="Modal" role="dialog" aria-modal="true">
    ...
  </div>
</details>
```

Now we can add some style to the `.Modal` element to make it look like a classic modal. Code marked as "functional style" is required to positioning the modal, while the "visual style" is just appearance.

```css
.Modal {
  /* Functional style */
  position: fixed;
  inset: 20vh 2vh auto 2vh;
  margin: 0 auto;
  z-index: 2;

  /* Visual style */
  background-color: #fff;
  border: 2px solid hsl(220deg 100% 50%);
  padding: 24px;
  max-width: 448px;
}
```

<iframe
  loading="lazy"
  src="https://details-element-trigger.glitch.me/modal.html"
  title="details element as strigger on Glitch"
  style="height: 400px; width: 100%;">
</iframe>

Now we have our modal, but as you can see something is missing, the interactive overlay which should close the modal when clicked.

Let's add the backdrop layer, which as mentioned above should react to the user click. To do it we'll use the `<summary>` element since it already has that behavior, more precisely we are going to add a `::before` pseudo-element to it, but only when the `details` have the `open` attribute.

```css
details[open] summary::before {
  content: "";
  background: hsl(0 0% 0% / 30%);
  position: fixed;
  inset: 0;
  z-index: 1;
}
```

You have to target only the `summary` element inside the details that contains a modal, but for this simple example, that selector is enough and now we have an interactive overlay.

<iframe
  loading="lazy"
  src="https://details-element-trigger.glitch.me/modal-full.html"
  title="details element as strigger on Glitch"
  style="height: 400px; width: 100%;">
</iframe>

Remember, this is just half of the work you need to do to make a fully accessible modal. You will need javascript to handle the focus trap, the keyboard interactions, and other things, but using the `details` element we can avoid a bit of js and let the browser doing the rest.

## Adding fun

If we want to add a bit of movement we can use the `open` attribute to trigger animations when the content is showed up. Starting from the dropdown example, let's add a keyframe animation and apply it once the dropdown is visible.

```css
details[open] > .Menu {
  animation: fadeIn 200ms cubic-bezier(0, 0.55, 0.45, 1);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: unset;
    transform: none;
  }
}
```

<iframe
  loading="lazy"
  src="https://details-element-trigger.glitch.me/animation.html"
  title="details element as strigger on Glitch"
  style="height: 400px; width: 100%;">
</iframe>

## Conclusion

The `<details>` element can be considered as a native HTML trigger to show hide things without using javascript. You can use it everywhere you have a two-state widget like **visible/hidden** and **open/closed**. The important thing is to remember that the accessibility of interactive elements should be implemented by yourself when using this approach.
