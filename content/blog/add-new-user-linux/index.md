---
title: How to Add User Linux With These Commands
slug: add-user-linux
date: 2021-03-03T11:11:20+07:00
lastmod: 2021-03-03T11:11:20+07:00
description: "This is how you can add a new user on your linux operating
system with simple commands"
tags: ["linux", "tips", "tutorial"]
featured: "./cover.png"
author: Nurahmat
draft: false
---
Linux it's been few years that I used this operating system and I feel
comfortable for my daily activity using linux beside that I'm a programmer.

## Creating New User On Linux
But not for today because I have to make a new user for another things
maybe this profile/user intended only when I do graphic design, yeah I
wanna separated my workspace or environment as well.

I did research on some website and blog, I got very interesting
tutorial to follow in order to get a new user on my lovely linux machine.
Anyway, I use Debian and I don't know for other linux distro so this
article intended only for Debian users.

### With `useradd` Command on Debian
The basic syntax of this command is as follow.
{{< code name="terminal" >}}
{{< highlight bash >}}
$ sudo useradd [options] username
{{< /highlight >}}
{{< /code >}}

> Note ! this command requires superuser privileges so if you wanna make
the command works properly, use `sudo` please.

When invoked, this command will create new user on your operating system,
you can change the `username` to whatever value you want to give.

For example, here I want to add new user called `hugger`, so I have to do
run this command below, if there's no option it will use the default
setting specified in the `/etc/default/useradd`.

By default, when you create new user on linux the `HOME` directory is not
created, so you need to give `-m` option.
{{< code name="terminal" >}}
{{< highlight bash >}}
$ sudo useradd -m hugger
{{< /highlight >}}
{{< /code >}}

### Setting Password For New User
To be able login as newly created user, you must to setting up first its
password, to do this just run this command below.
{{< code name="terminal" >}}
{{< highlight bash >}}
$ sudo passwd [username]
{{< /highlight >}}
{{< /code >}}

Change `username` to the new user you add before.
{{< code name="terminal|output" >}}
{{< highlight bash >}}
New password:
Retype new password:
passwd: password updated successfully
{{< /highlight >}}
{{< /code >}}

As you can see above, now you are ready to go with that new user, just
logout and switch to recently created user.

Thanks, and see ya.
