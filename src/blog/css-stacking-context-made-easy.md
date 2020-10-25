---
title: CSS stacking contexts and z-index made easy
date: 2020-10-25
metaDesc: If you have troubles with z-index and positioning, this is for you. Let's
  see how to understand the CSS stacking context.
socialImage: false
tags: []
external_url: ''
permalink: ''

---
If `z-index: 99999;` is something you write often when you work with CSS, this story is for you. We will see how to handle the stacking context and the `z-index` property in your CSS.

## Stacking context

This term indicates a three-dimensional conceptualization of the HTML elements that are stacked across the imaginary z-axis, based on some attributes these elements can stack on top of each or inherit properties from their parents.

A practical and common example of this is the CSS `opacity` property. When you apply this property to an element, every child element, at any level, will be rendered with the same opacity level. This property will cause the element to create a stacking context.

Let's see what CSS properties and HTML elements trig a stacking context:

* The `<html>` element
* Element with `position` set to `relative` or `absolute`
* Element with `position` set to `fixed` or `sticky`
* Element that is a child of a `flexbox` or `grid` container
* Element with `opacity` value less than **1**
* Element with `mix-blend-mode` different from `normal`
* Element with `transform`, `filter`, `perspective`, `clip-path`, `mask`, `mask-image`, `mask-border` with a value different from `none`
* Element with `isolation` set to `isolate`
* Element with `-webkit-overflow-scrolling` set to `touch`
* Element with `contain` set to `layout` or `paint`, or keywords that include them, like `contain: strict` and `contain: content`
* Element with `will-change` that specify one of the above properties

While most of the above conditions can be rare, let's take the most common one: an absolute-positioned element inside a container. When we want to set the coordinates of an absolute element and make them relative to a parent boundary we add `position: relative` on that parent element, creating in fact a stacking-context (see the second point above)

You can consider the stacking-context as a **virtual cardboard box** seen from the top, that stacks elements inside it, but without any solid boundaries.

## z-index and voodoo magic

The `z-index` property let you define the position of the element across the Z-axis, inside a stacking context — from here referenced as "_box"_. If you take two real cardboard boxes, you know that you can put one on top of each other, and you can put many elements inside each of them. The elements that are inside the upper box will be positioned (or rendered speaking of CSS) above the elements that are inside the underlying box. The only difference is that in CSS, these boxes haven't "solid" boundaries, and elements can overflow outside them.

Let's take this markup structure:

```html
<div class="A">
  <div class="One"></div>
  <div class="Two"></div>
</div>
<div class="B">
  <div class="Three"></div>
</div>
```

Here the visual representation of these two boxes, with some `CSS` applied:

![Side view of a visual representation of the CSS stacking-context](/images/uploads/z-index-side.svg)

Are you still there? Now, follow me.

In the above image, `.A` and `.B` are our two boxes (stacking-contexts) and they are siblings inside the same HTML parent. The `.B` element is projected and rendered above `.A` cause its `z-index` property, in this case our `<HTML>` element is the container and the main context holder as stated in the first point of the above list.

Now, you can notice that `.B` is not the only element rendered above `.A`, but also his content. You can imagine `.One` and `.Two` as a books inside our cardboard boxes. `.Two` is above `.One` but they still are inside the box `.A`, and so rendered under the box `.B`.

Here is the visual representation of the same structure, but from the top view, or in other words, from the user point of view.

![](/images/uploads/z-index-top.svg)

For this reason, putting an [over 9000](https://i.imgur.com/Okh8Z8i.gif) z-index on the element `.Two` doesn't make it rendered above `.Three`, because it's inside a stacking context that has a lower priority compared to sibling elments and contexts.

## Handling indexes

The stacking-context system is pretty easy once you get it, the hard part is managing your `CSS` code and keep it organized. My approach is to define one big document scope in which define a bunch of layers, and multiple smaller scopes when required inside each components.

### Document scope

I define 3 `z-index` levels to use across the whole project, like for dropdowns, fixed headers, modals, and contextual popups.

Supposing to write a correct HTML structure, every elements will be start from level `0` (initial) by default, popups and contextual dialogs will use the level `1`, fixed headers will use the level `2` while modal dialogs will use the level `3`. With just 3 level of `z-index` you can probably handle 99.9% of the use cases. The key is to assign the appropriate level to UI elements based on their role and usage inside the whole UI.

### Smaller scopes

Each UI component are placed on the level `0` but they can define as many levels as required inside them. So if needed, each component can create a "private" stacking context in which handle its elements and z-indexes, al starting from the level `0` of the document scope.
