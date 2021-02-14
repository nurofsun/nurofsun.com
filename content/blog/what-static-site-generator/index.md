---
title: What is Static Site Generator?
date: 2021-02-10T06:09:43+07:00
lastmod: 2021-02-10T06:09:43+07:00
description: "the answer about static site generator, should you use it for build a blog."
tags: ["ssg"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
Static Site Generator (SSG) is hybrid approach of web development that allow you to build capable website locally but you must generate it before deployment.  

{{<image src="cover.png" alt="What's static site generator?" lazy="true">}}
  
It's different with dynamic [CMS](https://en.wikipedia.org/wiki/Content_management_system) like [WordPress](https://wordpress.org/), static site generator takes the source files and generate entirely a static website.  
  
This is will be suitable to used for all sorts of purposes. Some are for creating photo gallery websites, blog, portfolio and many more.  

Explanation how static site generator work.
-------------------------------------------

When we're setting up on server, we take the generated static site by the generator and deploy it to our server. When user make an request , the server referring us to the particular file of the static website that match with your request.  

{{<image src="ssg-work.png" alt="How Static Site Generator Work" lazy="true">}}

Why We use Static Site Generator?
---------------------------------

You already understand how the static site generator, and it is absolutely different with dynamic CMS. There are some reason that you would consider to use static site generator.  

The advantages of static site generator.
----------------------------------------

- Less Complex/Simple.
- Speed.
- High Security.

### 1. Simple

Dynamic CMS site like wordpress or drupal are too complex for website blogging purposes and any other quite small website, they needs back-end system for managing database, for example save the article to database and call the query to retrieving the content for end-user.  
  
Static site generator doesn't need such things, this is more simple and less complex for you to build blog.  

### 2. Speed

When user make a requests on certain page of the website that built with back-end system and database such as those CMS that already I mentioned above. it will be little bit slow, because they need to retrieve the page data from database and generate it to end-user.  

### 3. Security

It also make our website more secure because we don't use database and Impossible certain attacker to make an SQL Injection attack to our website.  

List of static site generators
------------------------------

### [1. Jekyll](https://jekyllrb.com/)

{{<image src="jekyll.png" alt="Jekyll SSG" lazy="true">}}

[Tom Preston-Werner](https://en.wikipedia.org/wiki/Tom_Preston-Werner) has been released Jekyll in 2008. Jekyll is simple blog-aware, static site generator for personal, project, or organization sites. Jekyll written in [Ruby Programming Language](https://www.ruby-lang.org/en/).  

### [2. Hexo](https://hexo.io/)

{{<image src="hexo.png" alt="Hexo" lazy="true">}}

A fast, simple, and powerful blog framework powered by [Node.js](https://nodejs.org/), it is absolutely Javascipt-based. Hexo has features that maybe tempting you to use this generator. Hexo is blazing fast at generating, Support for github flavored markdown and most Octopress plugins, one-command deploy to github pages, heroku, and etc, Powerful API for Limitless extensibility, There are hundreds of themes and plugins.  

### [3. Hugo](https://gohugo.io/)

{{<image src="hugo.png" alt="Hugo" lazy="true">}}

It's open-source static site generator and most popular among people on the internet, it's Written in [Go programming language](https://golang.org/) and use [Go's html/template](https://golang.org/pkg/html/template/) and text/template libraries.  

### [4. Gatsby.js](https://www.gatsbyjs.org/)

{{<image src= "gatsby.png" alt="Gatsby" lazy="true">}}

Modern, and fast static site generator for [React](https://reactjs.org/). Personally i use this static site generator for my portfolio page. You can build blog, ecommerce sites, full-blown apps, and more with Gatsby.js  
  
So, would you want to build a website with those static site generator today?
