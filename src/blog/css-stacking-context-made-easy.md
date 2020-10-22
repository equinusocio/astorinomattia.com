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

This term indicates a three-dimensional conceptualization of the HTML elements that are stacked across the imaginary z-axis, based on some attributes these elements can stack on top of each or hinerit properties from their parents. 

A practical and common example is the CSS `opacity` property. When you apply this property to an element, every child element, at any level, will be rendered with the same opacity level.