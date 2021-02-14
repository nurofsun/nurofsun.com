---
title: How To Add Search Feature on Hugo (Without Library)
slug: search-feature-on-hugo
date: 2021-02-10T14:11:02+07:00
lastmod: 2021-02-10T14:11:02+07:00
description: ""
tags: []
featured: "./cover.png"
author: "Nurahmat"
draft: true
---
"It's finally alive!" that's what I said when I finally complete my blog
with amazing Hugo, the most fastest SSG ever! That's my opinion.

Notice that I have search feature on my blog right now, as you know if
you also use Hugo. This SSG doesn't provide built-in search functionality
through the content.

## The Common Way
When I was new in hugo a discovered a guide how to add search feature in
hugo, but unfortunately it is need a library such as elasticsearch, and
etc (I don't remember about them).

I try to follow the recommended tutorial that exist on Official hugo
documentation. In other hand, I was feel uncomfortable with complexity and
it's not flexible according to my opinion.

_Or maybe it's just because I'm new hugo, so I can't implement it well_

I was struggling and the result is good, I can searching through my first
blog built with Hugo, and happy. At the end my website die, and I remove
the code from my github repository.

## Utilize The Custom Format Output
I'm back now with new brand of myself, and built my personal website with
Hugo again.

for the second time I promised to myself to learn about more this
amazing Hugo static site generator, and reading docs throughly.

**I discovered something cool!** that actually I can make custom output
format with Hugo, and an Idea come out accidentally.

My brain said _Why don't you try to create search feature with custom
output format?_. 

Yeah!, **The pattern similar with those third-party, they
consume the data in JSON format.**

In this article I wanna show you step-by-step how to do it.

## Step-by-step Create Search Feature on Hugo
### Page With Custom Format JSON
First of all we need a page that has custom format JSON keep our
contents. 

I'll make the home page of our blog has a JSON format file, but before we
jump to such step. We need to tell hugo in `config.toml` as shown below.
{{< code name="config.toml" >}}
{{< highlight toml >}}
[outputs]
    home = ["HTML", "JSON"]
{{< /highlight >}}
{{< /code >}}

### Contents Generator
Then we create a file on `layouts/` directory called `index.json` and fill
this code.
{{< code name="index.json" >}}
{{< highlight json >}}
[
  {{- with $.Site.GetPage "/posts" }}
    {{- range $index, $data := .Pages }}
    {{- if $index }},{{ end }}
    {
      "title": "{{ $data.Title  }}",
      "url": "{{ $data.RelPermalink }}"
    }
    {{- end }}
  {{- end }}
]
{{< /highlight >}}
{{< /code >}}
Example above get items from "posts" content's directory, if you want to
show specific content on different directory, just change `/posts`.

### Adding Search Input
Now, let's make a deal with HTML, and JavaScript. We want the search result
appear on our page and working properly, to do this we'll make a search input and
container for matches content according to search query.
{{< code name="html" >}}
{{< highlight html >}}
<input class="input" id="searchInput" type="text" placeholder="press '/' to search">
<ul id="searchResult">
  <!-- the search result will appear here -->
</ul>
{{< /highlight >}}
{{< /code >}}

### Fetching Data
After that, we'll make new file called `search.js` and make sure to load
this file for your entire page, basically I just put it on the base
template, and write the following code below.
{{< code name="search.js" >}}
{{< highlight javascript >}}
let searchInput = document.querySelector('#searchInput'),
    searchResult = document.querySelector('#searchResult');

let dataJSON;

// add keydown listener, when user hit '/', it will focus on search input (Desktop)
window.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault()
        searchInput.focus()
    }
})
// add keydown listener, when user hit 'ESC', it will close search result and unfocus search input.
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27)
    {
        searchInput.value = '';
        searchResult.innerHTML = '';
        searchInput.blur()
    }
})
/**
 * Get the posts lists in json format.
 */
const getPostsJSON = async () => {
    let response = await fetch('/index.json')
    let data = await response.json()
    return data
}
/**
 * @param query, element.
 * query: the keyword that user given.
 * element: target element to show the result.
 */
const filterPostsJSON = (query, element) => {
    let result, itemsWithElement;
    query = new RegExp(query, 'ig')
    result = dataJSON.filter(item => query.test(item.title))
    itemsWithElement = result.map(item => (
        `<li class="search-result-item">
            <a href="${item.url}">
                ${item.title}
                <span class="icon">
                    <i class="fas fa-external-link-alt"></i>
                </span>
            </a>
        </li>`
    ))
    element.style.display = 'block';
    itemsWithElement.unshift(`<p class="is-size-7 px-2 py-2 has-text-dark">Press 'ESC' to cancel search.</p>`)
    element.innerHTML = itemsWithElement.join('');
}
/**
 * searchInputAction take two arguments, event and callback
 */ 
const searchInputAction = (event, callback) => {
    searchInput.addEventListener(event, callback)
}
/**
 * When user focus on the search input, function getPostsJSON called.
 */
searchInputAction('focus', () => getPostsJSON().then(data => dataJSON = data))
/**
 * filtering result with the query that user given on search input.
 */
searchInputAction('keyup', (event) => filterPostsJSON(event.target.value, searchResult))
{{< /highlight >}}
{{< /code >}}

Now, just test search input on your blog. It should works and you can see
quite interactive search feature you've been added for your blog.

## Conclusion
The most important is those 2 functions `getPostsJSON()` and
`filterPostsJSON()` I bind for the first one on `focus` event listener, and
the last on `keyup` event which means every time you hit your keyboard this
function invoked.

Notice, I use fetch API to get the JSON data through `index.json` if old
browser is also your target you may want to use `axios` instead.

Thanks, hope you join it.
