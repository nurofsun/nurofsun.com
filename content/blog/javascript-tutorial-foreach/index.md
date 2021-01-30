---
title: "Javascript Tutorial: forEach Loop Through Array"
slug: javascript-tutorial-foreach
date: 2021-01-30T07:12:04+07:00
lastmod: 2021-01-30T07:12:04+07:00
description: "Looping an array with forEach() method in javascript quite
easy because by default it will return the actual element not an index"
tags: ["javascript"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
Are you feel confuse how to iterate and looping an Array on JavaScript?
this post will tell you how to do it with `forEach()` method, this is
built-in method this programming language provided.

{{< toc >}}

In this article I'll give you a brief description and tutorial how to use
this method properly.

## forEach() Array Method
Firstly I'll tell you that this is an array method, so it only works and
available in Array type data.
#### Usage
This method call the provided function a.k.a `callback` for each element in
an Array.

> Note ! the callback will not execute when Array is empty

#### Basic Syntax

{{< code name="javascript" >}}
{{< highlight javascript >}}
Array.forEach(function(element, index, arr) {
    // code to execute
})
{{< /highlight >}}
{{< /code >}}

- `element` - **required** return an current element of array.
- `index` - **optional** return an index of current element of array.
- `arr` - **optional** return the array object.

### Iterate Element From Array
Let's take a look for an example below, we have `tags` variable that
consist with some strings.
{{< code name="example.js" >}}
{{< highlight javascript >}}
let tags = ["javascript", "nodejs", "reactjs", "angular"]

tags.forEach(function(tag) {
    console.log(tag);
});

{{< /highlight >}}
{{< /code >}}

It will produce this following output below.
{{< code name="output" >}}
{{< highlight txt >}}
javascript
nodejs
reactjs
angular
{{< /highlight >}}
{{< /code >}}

### Getting an Index for Each Element
as I said above, we only need to pass argument `element` to get the actual
element/value of an array, but you could also get the index of each element
by providing `index` argument.
{{< code name="example.js" >}}
{{< highlight javascript >}}
let tags = ["javascript", "nodejs", "reactjs", "angular"]

tags.forEach(function(tag, index) {
    console.log("[" + index + "] " + tag);
});
{{< /highlight >}}
{{< /code >}}

It will produce output below.
{{< code name="output" >}}
{{< highlight txt >}}
[0] javascript
[1] nodejs
[2] reactjs
[3] angular
{{< /highlight >}}
{{< /code >}}

### Show The Array Itself
Less necessary, but still it maybe used in the future, if you want to show
the array itself, you can pass `arr` as the last argument. 
{{< code name="example.js" >}}
{{< highlight javascript >}}
let tags = ["javascript", "nodejs", "reactjs", "angular"]

tags.forEach(function(tag, index, arr) {
    console.log(arr);
});
{{< /highlight >}}
{{< /code >}}

Give it try to your web console on a browser if you want to more
understand.

## Conclusion
If you intended to get the actual element on Array you can use it, more
readable. Personally I often use this method when I was working with DOM
Manipulation.
