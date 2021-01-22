---
title: Javascript Destructuring Assignment
slug: javascript-destructuring-assignment
date: 2021-01-21T19:46:25+07:00
lastmod: 2021-01-21T19:46:25+07:00
description: "Learn about destructuring to producing good and readable code
in javascript"
tags: ["javascript"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
When the first time I coded with JS and understanding how the object works in javascript it makes me happy, I already level up my knowledge as JS learner.

{{< toc >}}

And I do the some thing funny during learn object, for example I create
`Author` object that hold information about me as well, and print it out
`Hello, my name is Nurahmat and I'm Web Developer`.

{{< code name="js" >}}
{{< highlight js >}}
var Author = {
    name: "Nurahmat",
    age: 20,
    job: "Web Developer"
}
console.log("Hello, my name " + Author.name + " and I'm " + Author.job);
{{< /highlight >}}
{{< /code >}}

**I'm so happy with code above, it works !** After a while, I learned about
_destructuring assignment_ on javascript and recognized this code not much
clean and simple.

## What's Destructuring Assignment in JS?
it's just javascript expression that has ability to unpack the values on
an `Array` and properties of an `Object` into disinct variables.

## Array Destructuring
### Basic Array Values Assignment
Let's take a look for this example code, I assign the values `1,2,3` to
specific variable names which are `one,two,three`.

{{< code name="javascipt" >}}
{{< highlight javascript >}}
let myArray = [1,2,3,4,5];
let [one, two, three] = myArray;
console.log(one);
// output 1
console.log(two);
// output 2
console.log(three);
// output 3
{{< /highlight >}}
{{< /code >}}

### Ignoring Values From Array
You can choose that values not according the order of the array. for
example I want to unpack the values `1,2,5`.

{{< code name="javascipt" >}}
{{< highlight javascript >}}
let myArray = [1,2,3,4,5];
let [one, two, , , five ] = myArray;
console.log(one);
// output 1
console.log(two);
// output 2
console.log(five);
// output 5
{{< /highlight >}}
{{< /code >}}

We can skip `3,4` with space separated by comma.

### Default Values
a Variable can be assigned first in order to make it as default value, it
will prevent to receive undefined value from an Array.
{{< code name="javascript" >}}
{{< highlight javascript >}}
let [a=10,b=2] = [20];
console.log(a);
console.log(b);
{{< /highlight >}}
{{< /code >}}

### Declaration first, Then Assignment
You can declare the variable first, and then assign them with the specific values as the example below.
{{< code name="example" >}}
{{< highlight javascript >}}
let myAge, yourAge;

[myAge, yourAge] = [20, 40];
console.log(myAge);
// output 20
console.log(yourAge);
// output 40
{{< /highlight >}}
{{< /code >}}

### Swapping Variables
Without destructuring you need temporary variable to swapping variable in
low-level programming language.
{{< code name="example" >}}
{{< highlight javascript >}}
let myAge = 20;
let yourAge = 40;

[myAge, yourAge] = [yourAge, myAge];
// plain explanation
// myAge = yourAge
// yourAge = myAge

console.log(myAge);
// output 40
console.log(yourAge);
// output 20
{{< /highlight >}}
{{< /code >}}

### Parsing Array Returned By `function`
it's possible to return an array from function, and actually you can
destructure it.
{{< code name="example" >}}
{{< highlight javascript >}}
function myNumbers() {
    return [12,38,10];
}
let [twelve, thirtyEight, ten] = myNumbers();
console.log(twelve);
// output 12
console.log(thirtyEight);
// output 38
console.log(ten);
// output 10
{{< /highlight >}}
{{< /code >}}

## Object Destructuring
### Basic Properties Assignment
Back to the top of this article discussing about the object that I
created while I learning javascript, let's improve the code quality! and do
destructure assignment as below.

{{< code name="example" >}}
{{< highlight js >}}
const Author = {
    name: "Nurahmat",
    age: 20,
    job: "Web Developer"
}

const {name, age, job} = Author;
console.log(name);
// Nurahmat
console.log(age);
// 20
console.log(job);
// Web Developer
{{< /highlight >}}
{{< /code >}}

Much more cleaner right, jump to the next level!

### Assignment Without Declaration
Well, this is not actually **without** declaration, otherwise we declare
the variables first and then assign them with those properties.

{{< code name="example" >}}
{{< highlight js >}}
const Author = {
    name: "Nurahmat",
    age: 20,
    job: "Web Developer"
}
let name, age;

({name, age} = Author)
console.log(name);
// Nurahmat
console.log(age);
// 20
{{< /highlight >}}
{{< /code >}}
> **Note !** `(...)` parentheses around the assignment is required when using
object literal destructuring assignment without declaration.

### Assigning to New Variables Name
We can unpack properties of the object assign them to different variables
name.
{{< code name="example" >}}
{{< highlight javascript >}}
const Author = {
    name: "Nurahmat",
    age: 20,
    job: "Web Developer"
}

const {name: fullName, job: currentJob} = Author;
console.log(fullName);
// Nurahmat
console.log(currentJob);
// Web Developer
{{< /highlight >}}
{{< /code >}}

### Default Values
To prevent received `undefined` values from object that has been
destructured, we can handle it by providing the default value.

{{< code name="example" >}}
{{< highlight javascript >}}
const Author = {
    name: "Nurahmat",
    age: 20,
    job: "Web Developer"
}
const { age = 19, projectsLength = 10 } = Author;
console.log(age);
// 20
console.log(projectsLength);
// 10
{{< /highlight >}}
{{< /code >}}

as we know from code above, the `Author` doesn't have a property `projectsLength` to prevent `undefined`, we assign the default value `10`.

### Unpacking Fields From Objects Passed As a Function Parameter
{{< code name="example" >}}
{{< highlight javascript >}}
const User = {
    id: 78293,
    username: "nurofsun",
    fullName: {
        firstName: "Nur",
        lastName: "Ahmat"
    }
}

function getUserId({id}) {
    return id;
}

function getTheFact({username, fullName: { firstName: name }}) {
    return `${username} is actually ${name}.`
}

console.log(getUserId(User));
console.log(getTheFact(User));
{{< /highlight >}}
{{< /code >}}

First, on the `getUserId` function it will unpack the `id` property, and
for `getTheFact` function will unpack `username` and `fullName` properties.
