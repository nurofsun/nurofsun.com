---
title: "Building Node.js Rest API With Express and PostgreSQL"
slug: nodejs-rest-api-express-postgresql
date: 2021-02-05T17:14:59+07:00
lastmod: 2021-02-05T17:14:59+07:00
description: "node.js is a platform for javascript to work with back-end, 
we can create REST API with express and postgresql"
tags: ["nodejs", "javascript", "express"]
featured: "./cover.png"
author: Nurahmat
draft: true
---
JavaScript has grown nowadays, it doesn't stop just running on a browser but
everywhere. Back to the time when JS neither running on the server-side nor a mobile, with Node.js you could actually use 
this programming language for building a server, even REST API.

{{< toc >}}

In this article I'll give a clue how to building REST API server
using JavaScript, I want to create a REST API for products list and adding
CRUD functionality.

## Preparation
Creating project folder is the first step, then we initialize this with
`yarn init` or `npm init`. After that, we'll install the dependencies as well.
**Oh, this is the project structure that we have**.
{{< code name="terminal" >}}
{{< highlight bash >}}
.
├── app.js
├── node_modules
├── db
│   └── index.js
├── package.json
├── routes
│   ├── index.js
│   └── product.router.js
└── yarn.lock

3 directories, 6 files
{{< /highlight >}}
{{< /code >}}

### Installing Dependencies
Before we get started to coding, let's install some package dependencies
for this project. We must to install express, morgan, and node-postgres (pg).

{{< code name="terminal" >}}
{{< highlight bash >}}
$ npm install express morgan pg
# or with yarn
$ yarn add express morgan pg
{{< /highlight >}}
{{< /code >}}


### Perfect Development By Monitoring Source Files
I suggest you to install `nodemon` for restarting
the server every changes has been made in your source files. To do this
let's install this amazing package as `Devdependencies`.
{{< code name="terminal" >}}
{{< highlight bash >}}
$ npm install -D nodemon
# or if you use yarn
$ yarn add -D nodemon
{{< /highlight >}}
{{< /code >}}

## Begin To Write The Code
You already done the preparations, now we'll start to write a code. For
starting point I will make a simple a server with a route at
`http://localhost:3000/api`/.

Create new file called `app.js` inside the root project folder, and then
put this code.

{{< code name="app.js" >}}
{{< highlight javascript >}}
const express = require('express');
const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json())

app.get('/api', (req, res) => {
    res.json({
        message: 'Index API endpoint'
    })
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
{{< /highlight >}}
{{< /code >}}

And then run the code with these following commands (depends package
manager you use).
{{< code name="bash" >}}
{{< highlight bash >}}
$ npx nodemon app.js
# or if you use yarn
$ yarn run nodemon app.js
{{< /highlight >}}
{{< /code >}}

The following output will be like this.
{{< code name="terminal" >}}
{{< highlight bash >}}
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server started on port: 3000
{{< /highlight >}}
{{< /code >}}

## Testing API Server With HTTPie
I prefer using cli tool to testing my REST API rather than postman, I think
it's more simple and I spend less energy to do that.

If you want to try this amazing tool, you can see the [installation
instruction on the official website](https://httpie.io/).

Well, let's start to testing the URL endpoint I mentioned above.

{{< image src="httpie-testing.gif" lazy="true" >}}

## Setting Up PostgresSQL as Database
