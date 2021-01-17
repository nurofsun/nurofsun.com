---
title: {{ replace .Name "-" " " | title }}
slug: {{ .Name }}
date: {{ .Date }}
lastmod: {{ .Date }}
description: ""
tools: []
demourl: ""
featured: "./cover.png"
author: {{ .Site.Params.AuthorName }}
draft: true
---
