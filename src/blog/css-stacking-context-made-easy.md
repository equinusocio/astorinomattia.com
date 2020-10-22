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
* Any element with `position` set to `relative` or `absolute` and with `z-index` value other than `auto`
* Any element with `position` set to `fixed` or `sticky` with `z-index` other than `auto`
* Any element that is a child of a `flexbox` or `grid` container, with `z-index` other than `auto`
* Any element with `opacity` value less than **1**
* Any element with `mix-blend-mode` different from `normal`