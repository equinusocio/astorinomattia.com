---
title: Fieldset, this stranger.
date: '2019-01-31'
metaDesc: "Field..wat?? Let's talk about this old friend and why you should use it to group your form elements."
socialImage: true
tags:
  - css
  - html
  - js
---

Field..wat?? Yep, it still exist but no one seems to remember it. This guy is a [living standard form element](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element) that is made to represent a set of elements inside a form or grouping related elements like labels, inputs, meters, paragraphs etc... and it doesn't end here, it can be nested and can contains any kind of elements.

Are you still interested? So i will tell you just two more things, it can also accept three really useful html attributes that will help you making your beautiful forms aaaand....it's not made to wrap only radio buttons! 😱

## The specification

> The fieldset element represents a set of form controls (*or other content*) grouped together, optionally with a caption. The caption is given by the first [legend](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element) element that is a child of the fieldset element, *if any*.
>
> — [WHATWG](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element)

It's pretty clear what you should do with this element and when using it. As mentioned above it can also accept three attributes: `form`, `name` and `disabled`.

**FORM**

This attribute allows you to associate a group of inputs to a specific form element that is not its ancestor. This means that you can fix the lack of the possibility to nest forms.

**NAME**

The name of the group to use in the [form.elements](https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements) API

**DISABLED**

This is the same global attribute you use on buttons and inputs. It disable at once all the child elements.



## A use case

Let's take a real example making a form with disabled sections controlled by checkboxes. In this form we will use label, inputs and the output element and we can build it by making the most of fieldset attributes and a bit of javascript.

```html
<form id="calculatorForm">
  <fieldset>
    <input type="checkbox" id="enableCalc">
    <label for="enableCalc">Enable calc</label>
  </fieldset>

  <fieldset name="calculator" disabled>

    <!-- Default formula -->
    <fieldset name="defaultcalc">
      <input type="checkbox" id="default" checked>
      <label for="default">Use default calculation</label>
    </fieldset>

    <!-- Custom formula -->
    <fieldset name="customcalc" disabled>
      <label>Use custom calculation</label>
      <input type="number" value="50" id="c">+
      <input type="number" value="50" id="d">=
      <output id="x" for="c d">100</output>
    </fieldset>

  </fieldset>
</form>
```

In this example we have a form with a fieldset named "calculator" which is disabled by default. When clicking the `enableCalc`checkbox the calculator area will be enabled. Here the live demo.

<iframe width="100%" height="300" src="//jsfiddle.net/equinusocio/2fm4Lksc/embedded/result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Apart the javascript integration, the point here is `fieldset` element. It's live, it's standard and it's useful.

## "Bad" examples from...

The following examples are neither wrong or correct, but why not break this loop of "not-so-good practices" and start improving our code the same way we iper-improve our javascript code?

### Twitter Bootstrap

```html
<div class="form-group">
  <label for="formGroupExampleInput">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput">
</div>
```
### ZURB Foundation
```html
<div class="input-group">
  <input class="input-group-field" type="url">
  <div class="input-group-button">
    <input type="submit" class="button" value="Submit">
  </div>
</div>
```
### Material Design Components
```html
<div class="mdc-form-field">
  <div class="mdc-checkbox">
    <input type="checkbox" id="my-checkbox" class="mdc-checkbox__native-control"/>
    <div class="mdc-checkbox__background">
      ...
    </div>
  </div>
  <label for="my-checkbox">This is my checkbox</label>
</div>
```
### Tailwind CSS
```html
<div class="mb-4">
  <label class="block text-grey-darker" for="username">Username</label>
  <input id="username" type="text" placeholder="Username">
</div>
```

As you can see many popular frameworks don't use `fieldset` (bootstrap mention it but nothing more) as form elements container and that's really weird because HTML has all the tools we need to build our webpages and applications. We should not recreate what the platform already provide, instead we just need to learn it and eventually how to extend it, for example with [web components](https://equinusocio.dev/blog/web-components-the-right-way).
