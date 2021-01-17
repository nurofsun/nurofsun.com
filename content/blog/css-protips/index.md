---
title: Css Protips
slug: css-protips
date: 2021-01-16T07:40:55+07:00
lastmod: 2021-01-16T07:40:55+07:00
description: "curated list of tips related with cascading stylesheet (css)"
tags: ["css", "webdevelopment", "frontend"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
You may wondering how to get the best result of your css code, how to optimize them as well. 
In this *article* I will help you to do it as well so keep reading!

I recently used this tricks for almost my projects related with front-end development, so
this is something new for me.

{{< toc >}}

## Use CSS Reset
This is popular opinion and almost developer out there using this way to enforce the style consistency on different
browsers with a clean and slate for styling an elements. You may want to use *css reset library* which is you can find
it on the internet as well, or you prefer do it by yourself with this simple code snippet.
{{< code name="css" >}}
{{< highlight css >}}
body {
  margin: 0px;
  padding: 0px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
{{< /highlight >}}
{{< /code >}}

## Inherit `box-sizing`
Rather than applying `box-sizing` for element as above code, you may want to make it more flexible by inheriting
the value from `html` selector. Take a look to the example code below.

{{< code name="css" >}}
{{< highlight css >}}
html {
  box-sizing: border-box;
}
/* Inheriting box-sizing value, to all elements */
*,
*::before,
*::after {
  margin: 0px;
  padding: 0px;
  box-sizing: inherit;
}
/* if you want .card selector has different value */
.card {
  box-sizing: content-box;
}
{{< /highlight >}}
{{< /code >}}

## Use `all: unset;` instead to resetting all element's properties
Resetting the style of elements such as `button`, and `input` kind of difficult, and you
will do it if you write your css style for your website by yourself. Instead you modify all the properties like this.

{{< code name="css" >}}
{{< highlight css >}}
button {
  background: none;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  padding: 0px;
  margin: 0px;
}
{{< /highlight >}}
{{< /code >}}

Try this, more simple and reduce time-consuming. but before you decide to use this method, be sure it is support for the browsers
target of your website. _**Currently, it is doesn't support IE 11**_.

{{< code name="css">}}
{{< highlight css >}}
button {
  all: unset;
}
{{< /highlight >}}
{{< /code >}}

## Apply/Unapply CSS Rules With `:not()`
For example I have navigation links, and I want to apply declaration `margin-right: 10px;` to them except for
the last item. Instead you doing it.

{{< code name="css" >}}
{{< highlight css >}}
.nav-link {
  margin-right: 10px;
}
.nav-link:last-child {
  margin-right: 0px;
}
{{< /highlight >}}
{{< /code >}}

You should use this way.

{{< code name="css" >}}
{{< highlight css >}}
.nav-link:not(:last-child) {
  margin-right: 10px;
}
{{< /highlight >}}
{{< /code >}}

## Checking Font Installed Locally
Actually you can check, wheter the font that you use installed locally in user's computer or not
1. **first** our browser looking up the font on your system, 
2. if unavailable download it.
it's recommended, which is a good performance tip! Take a look for the example code below.

{{< code name="css" >}}
{{< highlight css >}}
@font-face {
  font-family: "Open Sans",
  src: 
      /* full name*/
      local("Open Sans"),
      /* Postscript name */
      local("Open Sans")
      /* Download it, if unavailable */
      url("//server.fonts/Open-Sans.ttf");
}

body {
  font-family: "Open Sans", sans-serif;
}
{{< /highlight >}}
{{< /code >}}

## Add `line-height` to `body`
You don't need to apply `line-height` to each `p`, `h*`, and etc separately, put it on the `body` selector.

{{< code name="css" >}}
{{< highlight css >}}
body {
  line-height: 1.5;
}
{{< /highlight >}}
{{< /code >}}

## Set `:focus` State to These Elements
It's necessary to do this, don't make the users confuse because they cannot determine where the keyboard 
events go in the page.

{{< code name="css" >}}
{{< highlight css >}}
a:focus,
button:focus,
input:focus,
textarea:focus,
select:focus {
  /* css ruleset goes here */
}
{{< /highlight >}}
{{< /code >}}

