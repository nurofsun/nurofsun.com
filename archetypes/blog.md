---
title: {{ replace .Name "-" " " | title }}
slug: {{ .Name }}
date: {{ .Date }}
lastmod: {{ .Date }}
description: ""
tags: []
featured: "./cover.png"
author: {{ .Site.Params.Author }}
draft: true
---
