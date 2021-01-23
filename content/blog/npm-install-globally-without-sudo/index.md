---
title: Npm Install Globally Without Sudo on Linux
slug: npm-install-globally-without-sudo
date: 2021-01-23T08:15:43+07:00
lastmod: 2021-01-23T08:15:43+07:00
description: "Guide how to install npm packages globally without sudo on
linux operating system"
tags: ["npm"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
If you currently playing with node package manager you may facing this
problem when you want to install a package that has binary you would do
it globally with additional argument `g` or `global` and you need superuser
privileges to preventing error notification.

## You Can Do it Without Sudo
You start thinking how to do it right now, do you? In this article I will
give you step by step guide to fix the problem.
### Step-by-Step
First, we create new directory to place our global packages.
{{< code name="terminal" >}}
{{< highlight bash >}}
$ mkdir "${HOME}/.npm-packages"
{{< /highlight >}}
{{< /code >}}

Then, let's configure where we want to store the global packages by telling
`npm` with this following command.
{{< code name="terminal" >}}
{{< highlight bash >}}
$ npm config set prefix "${HOME}/.npm-packages"
{{< /highlight >}}
{{< /code >}}

The last step, make sure npm will find the binaries and the man pages.
add this code below in your `.bashrc` or `.zshrc` 
{{< code name=".bashrc/.zshrc" >}}
{{< highlight bash >}}
NPM_PACKAGES="${HOME}/.npm-packages"

export PATH="$PATH:$NPM_PACKAGES/bin"

# Preserve MANPATH if you already defined it somewhere in your config.
# Otherwise, fall back to `manpath` so we can inherit from `/etc/manpath`.
export MANPATH="${MANPATH-$(manpath)}:$NPM_PACKAGES/share/man"
{{< /highlight >}}
{{< /code >}}

> **Note !** If you already delete MANPATH by mistake or accidentally, you
can restore it with this simple command `set -Ux MANPATH (manpath -g)
$MANPATH` just once.

Thanks, hope you enjoying this article and good luck.
