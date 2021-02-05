---
title: "Data Structure With Javascript: Linked List"
slug: data-structure-javascript-linked-list
date: 2021-01-29T08:12:20+07:00
lastmod: 2021-01-29T08:12:20+07:00
description: ""
tags: ["datastructure"]
featured: "./cover.png"
author: Nurahmat
draft: true
---
I've been learn and use a framework/library of JavaScript but I never
intend to put my time to the basic of programming world, data structure and
algorithm.

The fact is that these things are very important to every programmer in
this world, now I decided to put my time to learn about them.

{{< toc >}}

This is the first of data structure with javascript, I'll talk about Linked
List datastructure in this article.

## What's Linked List?
Linked List is linear data structure **similar** with an array. it doesn't
mean both are the same, because elements are not stored in particular
memory location or index.

Element (commonly called _node_) contains:
- the data stored, it can be any valid type data.
- and the link to next element/node.

Below is the illustration of linked list.
{{< image lazy="true" src="illustration-node.png" >}}

### Implementation With JavaScript
This time to convert the illustration (linked list) above to actual code,
we want to have the structure code like this.
{{< code name="Example Structure" >}}
{{< highlight javascript >}}
const list = {
    data: 10,
    next: {
        data: 11,
        next: {
            data: 12,
            next: null
        }
    }
}
{{< /highlight >}}
{{< /code >}}

And let's break down what we need as I said above to produce such data
structure.

### Element
First, we want to make a `class Element`.
{{< code name="index.js" >}}
{{< highlight javascript >}}
class Element {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let node = new Element(10)
console.log(node);

// output
// Element { data: 10, next: null }
{{< /highlight >}}
{{< /code >}}

See, this `class` will return an object with properties `data` and `next`
which have default value `null`.

### Linked List
Then, we create `class LinkedList` to store our linked list data structure.
and I'll give it with some methods:
- append(value)
- prepend(value)
- find(value)
- delete(value)

Here's the initial `LinkedList` we have, there are 2 properties `head` and
`tail`.

{{< code name ="index.js" >}}
{{< highlight javascript >}}
class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
}

const list = new LinkedList()
console.log(list)
// output
// LinkedList { head: null, tail: null }
{{< /highlight >}}
{{< /code >}}

### Method of `LinkedList` class
#### 1. `append(value)`
Inside `class LinkedList` put code below after the `constructor()`. Yeah
it's a method.
> This method intended/has functionality for adding new element at the end of linked list. 

{{< code name ="index.js" >}}
{{< highlight javascript >}}
class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    append(value) {
        // First, we create new element (node)
        let newElement = new Element(value);

        // if head is null
        if (!this.head) {
            // assign `newElement` variable to `head` and `tail` properties.
            this.head = newElement;
            this.tail = newElement;

            return this;
        }
        // otherwise, if head not null
        // assign `newElement` to tail.next property
        this.tail.next = newElement;
        // and assign the tail property with `newElement`
        this.tail = newElement;
    }
}

// create new instance
const list = new LinkedList()

// run append() method
list.append(11);

console.log(list);

{{< /highlight >}}
{{< /code >}}


{{< code name="Output" >}}
{{< highlight bash >}}
LinkedList {
  head: Element { data: 11, next: null },
  tail: Element { data: 11, next: null }
}
{{< /highlight >}}
{{< /code >}}

Boom, we already fill out the empty linked list with new node, let's add
new node again.

{{< code name="index.js" >}}
{{< highlight javascript >}}
// ...
// create new instance
const list = new LinkedList()

// run append() method
list.append(11);
list.append(12);

console.log(list);
{{< /highlight >}}
{{< /code >}}

{{< code name="Output" >}}
{{< highlight bash >}}
LinkedList {
  head: Element { data: 11, next: Element { data: 12, next: null } },
  tail: Element { data: 12, next: null }
}
{{< /highlight >}}
{{< /code >}}
