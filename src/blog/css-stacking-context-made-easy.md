---
title: CSS stacking context made easy
date: 2020-10-29T00:00:00+01:00
metaDesc: If you have roubles with z-index and positioning, this is for you. Let's
  see how to understand the CSS stacking context.
socialImage: false
tags: []
external_url: ''
permalink: ''

---
If `z-index: 99999;` is something that you face often when you work with CSS, this article is for you. We will see how to handle the `z-index` and the stacking context in your CSS.

## Stacking context

This term indicates a three-dimensional conceptualization of the HTML elements that are stacked across the imaginary z-axis, based on some attributes these elements can stack on top of each or inherit properties from their parents.

A practical and common example of this is the CSS `opacity` property. When you apply this property to an element, every child element, at any level, will be rendered with the same opacity level. This property will cause the element to create a stacking context.

Let's see what CSS properties and HTML elements trig a stacking context:

* The `<html>` element
* Element with `position` set to `relative` or `absolute`
* Element with `position` set to `fixed` or `sticky` with `z-index` other than `auto`
* Element that is a child of a `flexbox` or `grid` container, with `z-index` other than `auto`
* Element with `opacity` value less than **1**
* Element with `mix-blend-mode` different from `normal`
* Element with `transform`, `filter`, `perspective`, `clip-path`, `mask`, `mask-image`, `mask-border` with value different from `none`
* Element with `isolation` set to `isolate`
* Element with `-webkit-overflow-scrolling` set to `touch`
* Element with `contain` set to `layout` or `paint`, or keywords that include them, like `contain: strict` and `contain: content`
* Element with `will-change` that specify one of the above properties

While most of the above conditions are really rare, let's take the most common one: an absolute-positioned element inside a container. When we want to set coordinates of an absolute element and make them relative to a parent boundary we add `position: relative` on that parent element, creating in fact a stacking-context (see the second point above)

## Why you don't need high z values