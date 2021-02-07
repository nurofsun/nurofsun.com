---
title: Simple Ways to Reverse String in JavaScript (No Need Loop)
slug: reverse-string-javascript
date: 2021-02-07T10:04:29+07:00
lastmod: 2021-02-07T10:04:29+07:00
description: "There are methods how to do reverse string in JavaScript, but
did you get the simplest way to get the same result, without doing for
loop?"
tags: ["javascript", "tips"]
featured: "./cover.png"
author: "Nurahmat"
draft: false
---
JavaScript reverse string you probably heard it before. Especially during 
interview, I know you are looking for the answer or maybe you already 
get it but the way to solve that problem is not the one that could be most effective.

_Yeah absolutely, I can deal to this problem with JavaScript `for loop`._ But that's
not the only one and effective way.

In this article I'll show you how to do it properly, I prefer using
built-in Array **function or method**.

## The Ways Reverse String in JavaScript
These are built-in function of an `Array`.
- `reverse()` 
- `reduce(callback)` 

### Use Case
Before we get started, take a look to the following code below. I wanna make
the value of variable `me` reversed (it's my name).
{{< code name="javascript" >}}
{{< highlight javascript >}}
let me = "Nurahmat";
{{< /highlight >}}
{{< /code >}}

### With `reverse()` method
We first convert a value of variable `me` to an `Array` as we know
that the default was `string` value.
> try this on the browser console.

{{< code name="javascript" >}}
{{< highlight javascript >}}
let me = "Nurahmat";
me.split('').reverse().join('');
// tamharuN
{{< /highlight >}}
{{< /code >}}

More simple, isn't? Even, we don't need to write more than one line of code.

### With `reduce()` method
Another array built-in function, with reduce method we could also get the
same result as well.
> try this on the browser console.

{{< code name="javascript" >}}
{{< highlight javascript >}}
let me = "Nurahmat";
me.split('').reduce(function(a,b) {
    return b + a;
})
// tamharuN
{{< /highlight >}}
{{< /code >}}

The flow is similar with the `reverse()` method, we should first 
convert **string** to Array, and see the additional callback of `reduce()`
method.

### Performance Testing
Now, let's start do performance measurement between those methods, it's a
good idea if I include for loop to give you an answer **Why you shouldn't
using `for loop` to reverse string in JavaScript?**.

I created a simple code that wrap one goal, each method has different way to
do it.

- #method 1 **Using for loop**
- #method 2 **reverse() built-in method**
- #method 3 **reduce() built-in method**

It's time for testing.

{{< image src="performance-test.gif" lazy="true" caption="Perfomance Testing between those methods" >}}

As you can see above, the 2-3 method are more fast than the first method
that use `for loop`. So, that's all.

## Conclusion
You can choose which one is the best fit for you, performance is quite
important to consider.

Thanks, and see ya.
