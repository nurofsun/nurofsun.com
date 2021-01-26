---
title: "Typescript Tutorial: The Handbook For Beginner"
slug: typescript-tutorial
date: 2021-01-23T09:49:03+07:00
lastmod: 2021-01-23T09:49:03+07:00
description: "the handbook for people who just start to learn typescript"
tags: ["typescript", "tutorial"]
featured: "./cover.png"
author: Nurahmat
draft: true
---

{{< toc >}}

## Installation
Official documentation of typescript offering 3 installation routes, but I
will take only one in this tutorial, I will install typescript through
package manager either `npm`, or `yarn`.

{{< code name="npm (node package manager)" >}}
{{< highlight bash >}}
$ npm install -D typescript
{{< /highlight >}}
{{< /code >}}

{{< code name="yarn" >}}
{{< highlight bash >}}
$ yarn add -D typescript
{{< /highlight >}}
{{< /code >}}

## Basic Data Type
in the typescript you would expect the same data type as in JavaScript as
well such as `number`, `string`, `array`, `object`, `boolean`, and etc. Typescript
actually also offer additional data types that you would never seen in JS.

In variable declaration you must to include the data type of the value. The
basic syntax as shown below.
**Syntax**
{{< code name="typescript" >}}
{{< highlight typescript >}}
let variableName: dataType = Value
{{< /highlight >}}
{{< /code >}}

### Boolean
Now, let's just take a look how to declare variable that has value boolean data
type aka `true/false`.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let isUserExist: boolean = true;
{{< /highlight >}}
{{< /code >}}

### Number and BigInt
For data that has `number` and `bigint` type, you can declare it as shown below.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
{{< /highlight >}}
{{< /code >}}

### String
Another fundamental data type is `string` to create set of characters on
your program then become a word and sentence.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let myName: string = "Nurahmat"
{{< /highlight >}}
{{< /code >}}

That's the basic, now let's make a variable `sentence` with string and `myAge` that has number data type.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let myName: string = "Nurahmat"
let myAge: number = 20

let sentence: string = `Hello my name is ${myName} and I ${myAge} years old.`
{{< /highlight >}}
{{< /code >}}

### Array
Typescript also allowing you to use Array data type with these following
methods.

This first method, you should write `Array` keyword followed by the **data
type** for example below `number`.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let theirPoints: Array<number> = [100, 75, 80]
{{< /highlight >}}
{{< /code >}}

Or you may prefer this syntax, we write the **data type** first, then
followed by `[]`.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let theirPoints: number[] = [100, 75, 80]
{{< /highlight >}}
{{< /code >}}

### Tuple
Allow you to express an array with fixed (number of elements) length, but
not need be the same type. So, this data type should use on the correct
case.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let userDetails: [ string, number ] = [ "Nurahmat", 20 ];
{{< /highlight >}}
{{< /code >}}

If you do this, you will receive **an error**.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let userDetails: [ number, number ] = [ "Nurahmat", 20 ];
// Type 'string' is not assignable to type 'number'.
{{< /highlight >}}
{{< /code >}}

> Tips ! If you have the same data type, instead of using tuple I recommend
you to use _Array_ instead.

I mean, instead you do this.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let theirPoints: [number,number,number] = [100, 75, 80]
// Type 'string' is not assignable to type 'number'.
{{< /highlight >}}
{{< /code >}}

It's more simple and readable if you prefer using Array.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let theirPoints: Array<number> = [100, 75, 80]
// Type 'string' is not assignable to type 'number'.
{{< /highlight >}}
{{< /code >}}

#### Accesing Tuple Receive The Real Data Type
{{< code name="typescript" >}}
{{< highlight typescript >}}
console.log(userDetails[0].substring(1));
// urahmat
console.log(userDetails[1].substring(1));
// Property 'substring' does not exist on type 'number'
{{< /highlight >}}
{{< /code >}}

#### Access Element Outside the index length will cause an error
{{< code name="typescript" >}}
{{< highlight typescript >}}
console.log(userDetails[3]);
// Tuple type '[string, number]' of length '2' has no element at index '3'.
{{< /highlight >}}
{{< /code >}}

### Enum
as in `C#` Language like, This is sets of numeric values that has more friendly name. 
{{< code name="typescript" >}}
{{< highlight typescript >}}
enum Color {
    Red,
    Green,
    Blue,
    Pink,
    Black,
}
let textGreen: Color = Color.Green;
console.log(textGreen);
// 1
{{< /highlight >}}
{{< /code >}}

#### Change The Starting Value
By default `enum` begin numbering its member starting at **0** but you can
change it anyway, for example I would change the red value to **1**, so the
following output for this code below would be **2**.
{{< code name="typescript" >}}
{{< highlight typescript >}}
enum Color {
    Red = 1,
    Green,
    Blue,
    Pink,
    Black,
}
let textGreen: Color = Color.Green;
console.log(textGreen);
// 2
{{< /highlight >}}
{{< /code >}}

#### Setting Up Values Manually
Or even, you want to manually set all the values.
{{< code name="typescript" >}}
{{< highlight typescript >}}
enum Color {
    Red = 1,
    Green = 10,
    Blue = 7,
    Pink = 30,
    Black = 100,
}
let textGreen: Color = Color.Green;
console.log(textGreen);
// 10
{{< /highlight >}}
{{< /code >}}

#### Accessible The Name (Key) of Specific Value
With enum you could also go from numeric value to the name of that value,
if you want check up what actually mapped on the `enum` by retrieving the
name of that value you can do it as follow.
> **Note !** the type of the name usually a string.

{{< code name="typescript" >}}
{{< highlight typescript >}}
enum Color {
    Red = 1,
    Green = 10,
    Blue = 7,
    Pink = 30,
    Black = 100,
}
let colorName: string = Color[10];
console.log(colorName);
// 'Green'
{{< /highlight >}}
{{< /code >}}

### Unknown
`unknown` quite helpful if you don't really know what the data type would
be assigned to a variable because it has dynamic content. This type of data
accept all values either it can be `string`, `boolean`, `number`, and
etc.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let dateCreated: unknown = 16273197;
// hmm, maybe it's actually a string.
dateCreated = "24 January 2020"
// or maybe it's just a number.
dateCreated = 24012021

console.log(dateCreated)
// 24012021
{{< /highlight >}}
{{< /code >}}
When I run this code, there's no error output appear.
### Any
this type of data make you take less amount of effort even you don't need
anymore to do **type checking**, this case would be your best choice if you
facing a problem with **type information** that's not available on
particular code that has been written without **typescript**, or 3rd
party.

This time the `any` will work.
{{< code name="typescript" >}}
{{< highlight typescript >}}
function getSomething(name: string): any {
    return `${name}`;
}
// returned value of getSomething() function is not checked
let result = getSomething('Nurahmat');
console.log(result);
{{< /highlight >}}
{{< /code >}}

Unlike `unkwnown`, variable with type `any` allow you access arbitary properties, even if it doesn't exist,
these properties include a functions aka _method_ when the compile time, it
don't send you error message.


But when you run the compiled file, it will send you an error 
that the function doesn't exist.

{{< code name="typescript" >}}
{{< highlight typescript >}}
let whoAmI: any = "Nurahmat";
// no error received, even this method doesn't exist.
whoAmI.toFixed();

console.log(whoAmI);
// Nurahmat

// let's take a look what if I changed the type of whoAmI variable to unknown
let whoAmI: unknown = "Nurahmat";
// at compile time you received an error.
// Property toFixed() does not exist on type 'unknown'.
whoAmI.toFixed();
{{< /highlight >}}
{{< /code >}}

The `any` will continue to propagate through your objects.
{{< code name="typescript" >}}
{{< highlight typescript >}}
let exampleObject: any = {};
let someProperty = exampleObject.a.b.c;
// it will equal with `let someProperty: any`
{{< /highlight >}}
{{< /code >}}

> **Note !** Remember that all the convenience of `any` comes at the cost
of losing type safety. Type safety is one of the motivations for using
Typescript and you should try to avoid using `any` when it's not necessary.

### Void
Well, this type of data usually used for function that doesn't return a
value.
{{< code name="typescript" >}}
{{< highlight typescript >}}
function greeting(): void {
    console.log('Hello World');
}
greeting();
{{< /highlight >}}
{{< /code >}}

### Null and Undefined
Both `undefined` and `null` have their types named `undefined` and `null`
respectively.

{{< code name="typescript" >}}
{{< highlight typescript >}}
let milkOnMarket: undefined = undefined;
let chickenOnHouse: null = null;
{{< /highlight >}}
{{< /code >}}

By default both are subtypes of all other types. That means you can assign
`null` and `undefined` to something like `number`. **However, when using
the --strictNullChecks flag, null and undefined are only assignable to
unknown, any, also void**

### Never
The `never` type is used as return type of functions that never return, 