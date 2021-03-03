---
title: "CSS Tips: Centering Element"
slug: css-tips-centering-element
date: 2021-02-03T06:24:28+07:00
lastmod: 2021-02-03T06:24:28+07:00
description: "This is some methods for css beginner how to centering
elements the correct way"
tags: ["css"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
Nowadays there are some website using centered content
on their specific layout for example header known as hero.

What actually CSS `property` they used to do that? Maybe you and I feel
wondering as Beginner at Cascading StyleSheet (CSS).

Umm, wait that's why I write this article, I know how to
do it with some different methods.

## Initialization
Before that, we create the initial css style such as resetting the css,
styling `.center` and `.child` selector.
{{< code name="style.css" >}}
{{< highlight css >}}
body {
  margin: 0px;
  padding: 10px;
  background-color: #434343;
}
*,*::before,*::after {
  box-sizing: border-box;
}
.center {
  display: block;
  width: 100%;
  height: 400px;
  background-color: #434343;
  border: 5px dotted #cff9df;
  margin-bottom: 10px;
}

.child {
  padding: 10px;
  background-color: rgba(0,0,0,0.1);
}
{{< /highlight >}}
{{< /code >}}

## Methods Centering Element With CSS
### 1. Grid
The first method is with CSS Grid Layout, you may have heard about how
amazing CSS Grid. We have the HTML code below.
{{< code name="index.html" >}}
{{< highlight html >}}
<div class="center with-grid">
  <div class="child">
        With Grid
  </div>
</div>
{{< /highlight >}}
{{< /code >}}

Next, we'll write some CSS rules, to make it displaying properly as we have
been expected.
{{< code name="style.css" >}}
{{< highlight css >}}
.with-grid {
  display: grid;
  place-content: center;
}
{{< /highlight >}}
{{< /code >}}

### 2. Flexbox
There were 4 layout modes before CSS Flexbox Module exist, other people
called it "Flexible Box Module". We can centering element with flexbox as
follow.

This is example code for our `HTML` file.
{{< code name="index.html" >}}
{{< highlight html >}}
<div class="center with-flexbox">
  <div class="child">
        With Flexbox
  </div>
</div>
{{< /highlight >}}
{{< /code >}}

After that, let's put some rules to the selector that we bind to the class
attribute of our HTML code above.
{{< code name="style.css" >}}
{{< highlight css >}}
.with-flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
{{< /highlight >}}
{{< /code >}}

### 3. Alternative Flexbox
This is an alternative of flexbox, the example above show that we control
its child element with the `align-items: center` and `justify-content: center` declarations.

Write down this HTML code below.
{{< code name="index.html" >}}
{{< highlight html >}}
<div class="center with-alternative-flexbox">
  <div class="child">
        With Alternative Flexbox
  </div>
</div>
{{< /highlight >}}
{{< /code >}}

And then, write some css code below, notice that we centering the children element
with `margin: auto` declaration.
{{< code name="style.css" >}}
{{< highlight css >}}
.with-alternative-flexbox {
  display: flex;
}

.with-alternative-flexbox > .child {
  margin: auto;
}
{{< /highlight >}}
{{< /code >}}

### 4. CSS Position
I can say that this method **Old but gold**, with css position and
we can centering the children element by putting `transform: translate`
declaration. Let's take a look the HTML structure below, and write it down
on your text editor if you wanna try it.
{{< code name="index.html" >}}
{{< highlight html >}}
<div class="center with-position">
  <div class="child">
        With Position
  </div>
</div>
{{< /highlight >}}
{{< /code >}}

Then let's do some styling, we use `position: relative` for the parent
element. But for children element we use `position: absolute` and transform
it.

{{< code name="style.css" >}}
{{< highlight css >}}
.with-position {
  position: relative;
}
.with-position > .child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
{{< /highlight >}}
{{< /code >}}

Thanks for reading, if you want to see the complete code you can [visit my
codepen](https://codepen.io/nurofsun/pen/MWjvxbM)
