---
title: <details> element, the native html trigger
date: '2020-06-20'
metaDesc: "Let's see how to to use the <details> element as a native on/off trigger with an eye to accessibility."
socialImage: true
tags:
  - css
  - html
---

What the `<details>` element is? Well, generally speaking, this element is made to easily create collapsible content without using Javascript. Let's see the basic HTML structure:

```html
<details>
  <summary>Click to expand</summary>
  Sample content
</details>
```

If you inspect the code, you can notice that there is an `open` attribute that is being added when the content is expanded. Well, this is the key point of this story, with this attribute we can build a lot of UI widgets without using javascript at all (this doesn't mean you don't need js at all)

<img title="The open attribute is added and remove by the browser based on the state" src="/images/stories/details-devtool.png">
