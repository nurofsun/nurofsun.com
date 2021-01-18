---
title: How to Create Chart With D3.js
slug: create-chart-d3
date: 2021-01-18T06:05:55+07:00
lastmod: 2021-01-18T06:05:55+07:00
description: ""
tags: ["d3", "javascript"]
featured: "./cover.png"
author: Nurahmat
draft: true
---

So, today I've learned about how to visualize my data with D3 known the
most flexible library nowadays, and it has 95.3k stars on Github.

When I tried this library it's make me overwhelming to understand how each
code I've been written on my lovely code editor.

The problem is why I can't get it quickly as I learn other library because
documentation quite poor, and not structured well.

D3 only provide the example and give it the tutorial of process how it is
made, no another way I decide to learn by doing.

## Why I Use D3.js?
Just because I have related project that need visualize its data on the
dashboard page, and also it would be better to go out from the comfort zone
by learning something new.

{{< toc >}}

## Environment Setup
In this tutorial I will give you how to use this library on your browser
with production build of D3, you can download it from [ D3 Official Website ](https://d3js.org/)

1. First create directory for this project, for example I use
   `d3-playground` take a look for the file structure below
   {{< code name="bash" >}}
   {{< highlight bash >}}.
├── index.html
└── public
├── css
│   └── app.css
└── js
├── API.md
├── app.js
├── CHANGES.md
├── d3.js
├── d3.min.js
├── LICENSE
└── README.md

3 directories, 9 files{{< /highlight >}}
   {{< /code >}}
2. Optional, you could install `live-server` for automatic refresh browser
   when the files change in your project directory.
   {{< code name="terminal" >}}
   {{< highlight bash >}}$ npm install -g live-server{{< /highlight >}}
   {{< /code >}}

## Begin to Code
### We'll Produce This Chart
{{< image src="chart.png" lazy="true" caption="Example Chart We'll Make" >}}

The code of that chart shown below and I write this code manually, it's
static. 
{{< code name="html" >}}
{{< highlight html >}}<div id="chart">
  <span style="background-color: rgb(35, 35, 35); color: white; font-weight: bold; display: block; text-align: right; height: 20px; margin: 1px; padding: 10px; width: 40px;">4</span>
  <span style="background-color: rgb(35, 35, 35); color: white; font-weight: bold; display: block; text-align: right; height: 20px; margin: 1px; padding: 10px; width: 80px;">8</span>
  <span style="background-color: rgb(35, 35, 35); color: white; font-weight: bold; display: block; text-align: right; height: 20px; margin: 1px; padding: 10px; width: 150px;">15</span>
  <span style="background-color: rgb(35, 35, 35); color: white; font-weight: bold; display: block; text-align: right; height: 20px; margin: 1px; padding: 10px; width: 160px;">16</span>
  <span style="background-color: rgb(35, 35, 35); color: white; font-weight: bold; display: block; text-align: right; height: 20px; margin: 1px; padding: 10px; width: 230px;">23</span>
  <span style="background-color: rgb(35, 35, 35); color: white; font-weight: bold; display: block; text-align: right; height: 20px; margin: 1px; padding: 10px; width: 460px;">46</span>
</div>{{< /highlight >}}
{{< /code >}}

The problem is I want to make it automatically with provided that I
have in my pocket, when the data changes it affect the style of the chart.

Let's open the code editor and begin to write some code inside file
`index.html` first.
{{< code name="index.html" >}}
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>D3 Playground - Chart</title>
</head>
<body>
 <div id="app">
   <div id="chart"></div>
 </div> 
 <script src="public/js/d3.min.js"></script>
 <script src="public/js/app.js"></script>
</body>
</html>
{{< /highlight >}}
{{< /code >}}
We load the `d3.min.js` and `app.js` to use d3js on our browser without
installing it through node package manager.

*I created fake data* inside `app.js` as below
{{< code name="app.js" >}}
{{< highlight js >}}
// this is data to display
const data = [ 4, 8, 15, 16, 23, 46 ];
{{< /highlight >}}
{{< /code >}}

Notice that we have `<div id="chart"></div>` element in our `index.html`,
now we have to select that element as container of the chart.
{{< code name="app.js" >}}
{{<highlight javascript>}}
// selecting element
const chart = d3.select('#chart')
{{</highlight>}}
{{< /code >}}
