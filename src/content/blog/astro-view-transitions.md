---
author: Sigurður Kalman Oddsson
publishedAt: 2023-10-05T15:22:00Z
title: How I Added View Transitions Using Astro 3.0
postSlug: astro-view-transitions
featured: true
draft: false
tags:
  - astro
  - typescript
ogImage: ""
description:
  The story of how I upgraded to Astro 3.0 and added their new feature, View Transitions,
  to my website.
---

If you opened this blog post from my website in a modern browser you may have noticed a fancy sliding animation wherein the title on the card seemlessly transitioned to the heading of this page. This is a feature called *View Transitions* in Astro 3.0.

## Upgrading to Astro 3.0

A month ago, as of the time of writing, [Astro 3.0 released](https://astro.build/blog/astro-3/). This website, however, is built from the [Astro Paper template](https://github.com/satnaing/astro-paper), which was based on an older version. When I cloned this template, I immediately envisioned how well this new feature would fit the site so I promptly updated Astro by running:
```bash
npm install astro@latest
npm install @astrojs/react@latest @astrojs/tailwind@latest
```
The updating process was super smooth and I don't recall anything breaking.

## Adding View Transitions

Implementing this feature was easier than I thought. Following the documentation I began by adding the `<ViewTransitions />` component into the `<head>` tag of my shared layout component.

Now all I had to do was add the `transition:name` attribute to the appropriate elements. In my case, I added it to the title in the `<Card />` component and the heading in the `<PostDetails />` component. As long as there exists a single element on a source page and a destination page with the same `transition:name` value, the text will glide smoothly.

## Caveats

I ran into a few issues when implementing this feature. This feature is obviously new so it was hard to find resources online beyond the brand new documentation.

My first issue was that the transition will not render if there exist more than one element on a page with the same `transition:name` value. This is obvious in hindsight but was quite hard to debug at the time.

The second issue was that this feature can only be used in *Astro* components and such components cannot be nested inside of *React* components. Astro prides itself on allowing a mixing of frameworks but one of the limitations of this "islands architecture" is that framework-specific functionality may not work everywhere. For this reason, the [search page](../search) does not include view transitions.

## Conclusion

Working with Astro has been super nice so far. Upgrading the framework and adding brand new functionality in just a few lines of code is the epitome of good DX. If you've been contemplating trying Astro out after the 3.0 release, I urge you to pull the trigger.

The source code for this website can be found on [github](https://github.com/kalmanodds/astro-blog).