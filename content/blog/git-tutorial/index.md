---
title: Git Tutorial
slug: git-tutorial
date: 2021-01-18T03:57:28Z
lastmod: 2021-01-18T03:57:28Z
description: ""
tags: ["git"]
featured: "./cover.png"
author: Nurahmat
draft: true
---

Tool that every programmer in the world **must have** called _git_ 
because it will make our development process more easy and manageable.

Rather than copying file in the same folder with 
changed the name such as `index.html`, `index-final.html`, and so on.

You actually just need this tool to do it even more.

{{< toc >}}

## What's Git?
it's distributed version control system developed by Linus Torvalds and Junio C Hamano, 
the initial release was on 7th April 2015. Available for Linux, MacOs, and Windows. 

## Installation
You already know what it is git, and want to install this amazing tool, 
don't worry I'll help you dude.
### Linux
Most of linux distributions has include this tool in their official repository, 
I use debian so I can install it with this command.
{{< code name="terminal" >}}
{{< highlight bash >}}
sudo apt install git
{{< /highlight >}}
{{< /code >}}

### Windows
Maybe I will give an external link how to do it, because there's no windows installed on my laptop, 
you can [follow this tutorial for installing git on windows](https://phoenixnap.com/kb/how-to-install-git-windows) instead.

## Configuration
Git already installed on your computer before we start to use this tool, I
recommend you to customize your environment, actually you must to do that.

`git config` comes in order to lets you get and set configuration
variables.

#### There are 3 types of config in Git:
- **System** file located on `/etc/gitconfig` applied to every user in the
    system and all their repositories. you can do it by passing an argument
    `--system` to `git config` command. **Note!** Because such config type
    is system-level you need superuser privileges to make changes on it.
- **Global** it also called user-level configuration because it applied
    only for specific user on the system, the config file located on
    `~/.config/git/config`. You can make this config type by passing an
    argument `--global` to `git config` command.
- **Local** this is a config file that located in a specific repository,
    you can see the file in `.git/config` directory.
    It will overrides any configuration that you declared befor on previous level.
    You can make this type of configuration on the repository by passing an
    argument `--local` to `git config`.

### Setup Your Git
Now, let's setting up your git for this tutorial I want to user user-level
config type. I will configure the user's name, and email.

> **Bonus**, we will specify what the text editor you currently used.

{{< code name="terminal" >}}
{{< highlight bash >}}
git config --global user.name "Your Name"
git config --global user.email "Your Email"
{{< /highlight >}}
{{< /code >}}
