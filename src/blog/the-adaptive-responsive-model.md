---
title: The Adaptive Responsive model
date: '2019-02-12'
metaDesc: "What do we get if we combine the adaptive and the responsive approaches? Introducing the A+R model."
socialImage: true
tags:
  - css
  - html
  - performance
---

You can call it **Adansive** or **Resaptive**.

Responsive and Adaptive design are two design methodologies with the goal of making  a product accessible on any devices or screen size, providing the best experience to all users. Both of them try to make the most of the available screen space and the user interaction mode. Before talking about the **A+R** model we need to break down both  approaches.

While the **responsive** design makes use of CSS and/or JS to adapt layouts and contents based on predefined breakpoints, the **adaptive** approach provides pre-structured templates that will be served based on the user agent and the device type. The main difference between them is the DOM structure, when approaching with a responsive mindset we have the same HTML code for all situations (unless you use JS to remove some DOM nodes), while in adaptive we have a different code structure and potentially different experiences.

Both design mindsets are valid, just ask yourself how many components and complexities you have in your project and if one experience can fit all of your users. Developing web applications the responsive design is frequently used, such as building specific experiences through an adaptive development, like Twitter and Facebook mobile do.



## Responsive Design Techniques

While building a responsive experience we have three approaches to handle our layouts and content:


**Reflow**: We can change the layout structure to better fit the viewport area. Most of time this results in content being stacked (that's not always good).

![5c61879965585](//images.ctfassets.net/gz0sygvqczyz/65UW1zPCu13qSmdatPZlhS/601e3a5f2bdc5ba347f3d08c45317235/5c61879965585.gif)

**Resize:** Some of the UI components are fluid like most of html elements. They fill the available space and reflow if necessary.

![5c618ef61271a](//images.ctfassets.net/gz0sygvqczyz/3958w8EeBmawW9fxqZXfUC/b008d45133ac7f03b1eb8e927f4f05e4/5c618ef61271a.gif)


**Show/Hide:** Some UI parts are hidden from the viewport (but they still exist) or showed up to fill the space.

![5c629b5ec96d8](//images.ctfassets.net/gz0sygvqczyz/7ECGrNclFOLOYPO12yNlOa/6cd743d8e07ad6238462fdef2423d5f0/5c629b5ec96d8.gif)


**Restructuring:** With this approach we can develop and deliver different layouts to provide the best experience for a specific environment like a touch-only mobile device, or hybrid-touch devices.

![5c619176816f9](//images.ctfassets.net/gz0sygvqczyz/3Ykv98R1ejIg0AFGzmjfsB/1ecefef84320cf91b81486556dbce506/5c619176816f9.png)



## Introducing the A+R model

Both approaches have pro and cons, but what do we get if we want to use both of them? The **A+R** model combines both the responsive and adaptive approaches based on a single major breakpoint.

### A stands for Adaptive

As mentioned above, the adaptive approach allows us to differentiate the user experience, contents and even functionalities based on the user device. Considering a **960px** as major adaptive breakpoint ([defined based on global stats](http://gs.statcounter.com/screen-resolution-stats/tablet/worldwide)), we have something similar:

![5c61a09419d77](//images.ctfassets.net/gz0sygvqczyz/5qvXnLZ4VK7rAko5IWQ0VP/e2b53e5dd86381b7eb05b8c3afb03e0a/5c61a09419d77.png)

- The viewport area on the left represent all the screens under a 960px  with a specific layout/content

- The viewport area on the right represent all the screens with a 960px or greater with another layout.



### R stands for Responsive

The major breakpoint we have defined create two exprience contexts that may be different from each other, in which we can apply the responsive techniques. Inside each experience we can define minor breakpoints to adapt the layout based on the available space. For example, users which use a tablet will may see a touch-optimised experience (adaptive), but we can still adapt the layout based on the device orientation (responsive).

![5c62a707337cd](//images.ctfassets.net/gz0sygvqczyz/41vr70gcIuTyC12VMlrrSC/1594a240a1a6bf171ce87b19608c38df/5c62a707337cd.png)


## Adaptive + Responsive

Combining Adaptive and Responsive approaches we get the **A + R model**. With the adaptive technique we will work on experiences and functionalities, making two different contexts. Withe the responsive one we handle the UI components and layouts which stand inside the contexts.

![5c62a992ae5af](//images.ctfassets.net/gz0sygvqczyz/4IfXMr6udDCdhGge4E0JTz/6daae93d3abbbe04b6184e76f84156d6/5c62a992ae5af.png)

## Who is using this model?

You can notice that this pattern is being used by __Twitter__, __Facebook__ and __GitHub__ for their mobile apps and websites. If you navigate these sites on your mobile device you can check how they change the user experience based on mobile users expectations.

## When to choose the A + R model

This design approach require designers to really understand the experiences they want to provide in order to define what model to follow. This model fit well for large applications that must be accessible from small mobile devices with less functionalities or with a completely different structure. As you can see you will get a lot of flexibility, but also complexity because you may have to handle different codebases and environments (not mandatory).

With the A+R model mindset, designers and developers (but also product owners) can be focused to improve all the experiences the product can offers, instead to provide a "good" experience only on one environment.

_All the images are made by me and the Contactlab UX guys._
