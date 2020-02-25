---
title: Web Components — the right way
date: '2018-04-26'
metaDesc: "We have been heard about web components, here i will explain the technology purpose and what your should avoid."
socialImage: true
tags:
  - web components
  - tips
---

From about two years we have been heard about **web components**, well this article will not explain how they work (for that [there is Google](http://bfy.tw/H9oY
)), but rather we will address the purpose of this technology, when and how use it.

We can consider web components as a tool to **extend HTML, not to replace it**. The available technologies follow the same rules that we are all used to —from always— see in the most famous language markup in the world.

> Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilise them in your web apps.
> **MDN**

## HTML — Accelerated course

Every web developer knows — or at least should — the basics of HTML and how to define the markup of a web element that will be represented by the browser in a certain way and with a specific behaviour.

```html
<select multiple>
  <option disabled hidden>Pick an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

In the above example, like the greatest part of HTML elements, the node can accept a content that will be shown (and stylised) by the browser or by CSS user. But as we all know, there are also elements that can not accept children nodes (well known as void elements) —for example the `<img>` and `<input>` tags — and other tags that require only some types of nodes.

The `<select>` element, like more other, is a node that uses a shadow DOM similar logic; for this reason, if you want, you can see the content of these elements in the same way as per web components:

![enabling-shadow-dom][1]

This is approximately the mechanic beyond this language, so we can define two different HTML element models:

- **Modular elements** — Allow children nodes (normal elements)
- **Self-closing elements** — Does not allow children nodes (void elements)

## Custom elements

As we wrote, the technologies beyond web components aim to **extend HTML**, not to replace it. What does it mean? That we have tools to create new HTML elements that would not naturally exist if not implemented by user-agents (browsers), or to extend the behaviour of those ones already existing by adding [functionalities and custom styles][2].

### When?

The answer is easier than you expect. Define new HTML elements is necessary when the available ones do not meet functionality and design needs.

If we need to create a new `<my-button>` element with a customised style, we must think about the [progressive enhancement][3]. So we should add functionalities and styles, rather than completely recreate the element from scratch.

## The wrong way

If we surf on the Internet, we can find some *pattern libraries* fully composed by custom elements (using or not some frameworks, like [Polymer][4]), *tests*, *examples*, *playgrounds* …and they all have one thing in common, **they are all created using a wrong pattern**. Do you remember? We are extending the HTML, so we should follow its paradigms and its composition. Here some examples:

```html
<my-app>
  #shadow-root
    App content here
```

An entire app inside the shadow root. It’s the same as putting the app inside the `<input>` tag.

```html
<my-button>
  #shadow-root
    <button><slot></slot></button>
```

A native `<button>` element wrapped… inside another custom button. [It’s the same as putting a `<button>` inside another `<button>`][5].

```html
<my-select options="{...}">
  #shadow-root
    <select>
      ...for each opt in options ⮐
      <option></option>
    </select>
```

Does this snippet really need a description? Think about the `<select>` example above.

They are many other wrong examples around, but these are the most misleading that I found, compared to the fundamental HTML principle, the **composition** ([read more about it][6]).

> Composition is one of the least understood features of shadow DOM, but it’s arguably the most important.
> **[Google Web Fundamentals][6]**

## The right way

When we develop a web component, we must consider the two models described above. So we can create custom elements that allow children nodes (through the `<slot>` tag), or create self-closing elements (**void** elements).

For example, let’s consider to create a custom element that shows a tooltip balloon near any element passed as a child, as we would do with the HTML.


```html
<!-- my-tooltip component -->
#shadow-root
  <slot></slot>
  if this.text ?
  <span role="tooltip" aria-label="More info" class="tooltip">${this.tooltip}</span>
```

```html
<!-- usage -->
<my-tooltip class="UserClass" text="Don't click me. I'm serious." position="right">
  <button>CLick Me</button>
</my-tooltip>
```

As we can see, our component will wrap a slotted element that user can pass as child. This element is not encapsulated in the component `#shadow-root` so who consume the component can use any element they want.

The above `<my-tooltip>` element, if we want, can also allow users to customise the tooltip balloon style — that is in the **#shadow-root** —  only through a set of custom properties, if we define them inside the `:host` selector. You can read more about defining CSS api (or style-hooks) here:

> [How to define CSS api][7]

Go on with a more complex example and define a custom element that allows only one type of child node, as per `<ul>` and `<li>` tags to generate a list:

```html
<!-- todo-list -->
#shadow-root
  <slot></slot>
```

```html
<!-- todo-li -->
#shadow-root
  <input type="checkbox" disabled=${this.disabled}>
  <slot></slot>
  <div class="PriorityIndicator"></div>
```

```html
<!-- usage -->
  <todo-list>
    <todo-li priority="low">Buy new shoes</todo-li>
    <todo-li priority="high">Give 100.000$ do Mattia Astorino</todo-li>
  </todo-list>
```

In this example we built a custom todo list using two separated components. The `todo-list` element is just a wrapper that will accept only `todo-li` elements as children (as for ul/ol with li) and the `todo-li` element is used to define the list tasks with a priority indicator and an encapsulated native checkbox.

![Schermata 2018-11-19 alle 17.42.12](//images.ctfassets.net/gz0sygvqczyz/2YhYmaXUWAESI4uQs6Yeqm/602f69c6b349c910d212058fb0c403ea/Schermata_2018-11-19_alle_17.42.12.png)

## In conclusion

Composition. Web Components are useful to create new HTML elements that will compose web interfaces, as we have always done. Custom and native html elements are the ”tree leaves”, so it is an error consider them as a “big” app containers, or as application data containers. For more info, I suggest you to read the [official documentation][8] written by Google guys, in which you will find all about web components, custom elements, shadow DOM and best practices.


[1]: https://cdn-images-1.medium.com/max/1600/1*Ab6dzpZOFBra_jxexg8sQQ.gif
[2]: https://developers.google.com/web/fundamentals/web-components/shadowdom#host
[3]: https://en.wikipedia.org/wiki/Progressive_enhancement
[4]: https://www.polymer-project.org/
[5]: https://inception.davepedu.com/
[6]: https://developers.google.com/web/fundamentals/web-components/shadowdom#composition_slot
[7]: https://equinsuocha.io/blog/how-to-define-css-api/
[8]: https://developers.google.com/web/fundamentals/web-components/
