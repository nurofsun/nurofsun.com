---
title: "System Font Stack CSS: How and Why You Should Use It"
slug: css-system-font-stack
date: 2021-04-10T08:01:36+07:00
lastmod: 2021-04-10T08:01:36+07:00
description: "CSS Tips about how to use system font stack, the
advantage you will get after use it and reason why you should use it."
tags: ["css", "tips"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
What is this actually? You may wondered about this. It's simply when you
try to use a font family according to various device that visit your
website instead of using external font css that loaded from somewhere. 

{{< image src="cover.png" lazy="true" alt="CSS System Font Stack" >}}

The main advantages, as I said above we don't need to load external font,
we will use system font based on the user's device visiting your website.
So it can **boost the loading performance.**

You can find out more [CSS pro tips](/css-protips) on my website in order to improve the
way you writing CSS code, now let's back to the topic.

## Best System Font Stack
Code below example of CSS declaration of system font stack and I often use it, anyway the
stack from The new version of Github system font stack. it's suprised me, 
the update offer some extra fallback and emoji.
{{< code name="font.css">}}
{{<highlight css>}}
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
{{</highlight>}}
{{</code >}}

## How to Use System Font Stack?
Simply just put the declaration on `body` selector as shown below.
{{< code name="style.css" >}}
{{< highlight css >}}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
{{< /highlight >}}
{{< /code >}}

**Note! For existing project.** Make sure you remove the old css declaration 
and also remove the external font `<link>` tag or `@import()` in your HTML and CSS file.

After this step, you are ready to go! But wait, I will explain **Why you
should use css system font stack**.

## Why You Should Use System Font Stack?
Of course first as I said above that it could improve the page speed. With
optimized page speed load will improve the [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) also and you can pass the
test on [lighthouse](https://developers.google.com/web/tools/lighthouse/) as well, and preventing user close the tab before seeing
your content.

and another advantage it can be more comfortable for the user to read words 
on your website with font style they are familiar with. The purpose of
system-ui it allow web content to integrate the feel and look of native OS.

Maybe the second one can improve the User Experience too.

### Conclusion
That's it guys, now what are you waiting for? You can use system font stack
if you build not full custom website, I mean if you think that the
performance as the priority.
