---
title: How to Build CLI Tool in Nodejs
slug: build-cli-tool-nodejs
date: 2021-01-26T13:24:12+07:00
lastmod: 2021-01-26T13:24:12+07:00
description: "I'll cover up the process how do I create cli tool in nodejs"
tags: ["nodejs"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
In my deepest heart saying to myself that I was a beginner in this
programming world and remind me that to **Stay hungry, and curious**, I got
my new idea when I use cli tool called **cra (create-react-app)**.

Begin thinking how this thing was developed, I'm sure that it has been written with JavaScript 
because I install this tool through npm/yarn.

## My Simple and First CLI Tool

So, I started new cli tool project and it's really simple command line
tool, just printing out a sentence 'Hello World'. So embarassed, but it's
good starting point as really beginner of making cli tool with node.js

Want to know how I create it? I will give step-by-step this simple cli tool produced by myself, 
and hoping you will understand, because it's very basic you must to
remember each steps.

### Initialize The Project
First of all, we'll create new folder _for example `hello-cli`_ and
run the initialization with  `npm` or `yarn`.
{{< code name="npm" >}}
{{< highlight bash >}}
$ npm init -y
{{< /highlight >}}
{{< /code >}}

As I said above you may want to use `yarn`.
{{< code name="yarn" >}}
{{< highlight bash >}}
$ yarn init -y
{{< /highlight >}}
{{< /code >}}

Inside that directory create file called `index.js` and fill this with a
simple code shown below.
{{< code name="index.js" >}}
{{< highlight javascript >}}
console.log('Hello World');
{{< /highlight >}}
{{< /code >}}

And run it, with this command.

{{< code name="terminal" >}}
{{< highlight bash >}}
$ node .
Hello World
{{< /highlight  >}}
{{< /code >}}
As you can see above we receive an output 'Hello World'. 
> How ashamed is it? Says Patrick

Well, okay if you can create it why don't you tell me about the guide to
making such thing, so I would never go to search engine and looking for it
on the internet.

**Arrgghh, Let's forget about patrick!** and continue the project,
everything will be fine.

### Make The File as Regular Shell Command
To achieve this thing, we must to add `#!/usr/bin/env node` at the top of
out `index.js`.

And make it possible to executable even without `node` command.
{{< code name="index.js" >}}
{{< highlight javascript >}}
#!/usr/bin/env node
console.log('Hello World');
{{< /highlight >}}
{{< /code >}}

### Update our `package.json`
Next we need to updating our `package.json` by adding new property called `bin`.

`bin` property basically specify command name for node project, but in this
case we only have single file in our project, so the `name` property will
be used as shell command name.
{{< code name="package.json (before)" >}}
{{< highlight json >}}
{
  "name": "hello-cli",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
{{< /highlight >}}
{{< /code >}}

{{< code name="package.json (after)" >}}
{{< highlight json >}}
{
  "name": "hello-cli",
  "bin": "./index.js",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
{{< /highlight >}}
{{< /code >}}

### Make Package Globally Available
For now, our app not globally available, that means we cannot run it with
`hello-cli` command.

But, in this case also we don't want to run our application
as `hello-cli`. 

Instead, we want to run this application by typing only `hello`, so to
do this we also update the `name` property.

Updated `package.json` as shown below.
{{< code name="package.json" >}}
{{< highlight json >}}
{
  "name": "hello",
  "bin": "./index.js",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
{{< /highlight >}}
{{< /code >}}

We must change the `index.js` file permission by doing `chmod +x index.js`.
Otherwise , you will received `permission denied` message when trying to run it.

Then, after that we run command `npm link` or `yarn link` on the project directory.
Since you run the command above you make symbolic link, and now hello
package available as global package.

Let's start to run our application, by running `hello` command in our
shell/cmd.

{{< code name="terminal" >}}
{{< highlight bash >}}
$ hello
Hello World
{{< /highlight >}}
{{< /code >}}

**Boom!** your CLI application work properly. For now we just get started
the basic how to build CLI tool with nodejs.

Thanks for reading, see ya.
