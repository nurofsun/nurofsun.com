// collect element image with .injectable
SVGInject(document.querySelectorAll("img.injectable"));
document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadImages = () => {
        // make a promise to get all images with a class "lazy"
        return new Promise((resolve, reject) => {
            let images = document.querySelectorAll("img.lazy");
            if (images.length <= 0) {
                reject(Error("No Images has been Found"));
            }
            resolve(images);
        })
    }

    lazyLoadImages()
        .then(images => {
            document.addEventListener("scroll", function() {
                images.forEach(function(image) {
                    if (image.getBoundingClientRect().top <= 20) {
                        image.src = image.dataset.src;
                        if (image.classList.contains("lazy")) image.classList.remove("lazy");
                    }
                })
            })
        })
        .catch(error => console.error(error));


    let searchToggle = document.querySelector('#searchToggle'),
        searchClose = document.querySelector('#searchClose'),
        searchInputContainer = document.querySelector('#searchInputContainer'),
        searchInput = document.querySelector('#searchInput'),
        searchResult = document.querySelector('#searchResult');

    let dataJSON;

    searchClose.addEventListener('click', function() {
        document.documentElement.classList.toggle('overflow-hidden')
        searchInputContainer.classList.toggle('hidden')
    })
    searchToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('overflow-hidden')
        searchInputContainer.classList.toggle('hidden')
    });

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
        query = new RegExp(query, 'i')
        result = dataJSON.filter(item => query.test(item.title))
        itemsWithElement = result.map(item => (
            `<li>
            <a class="block mb-2 px-2 py-4 border-b-1 border-gray-200 hover:bg-gray-800 overflow-hidden rounded-lg hover:text-white" href="${item.url}">
                ${item.title}
            </a>
        </li>`
        ))
        element.classList.add('block')
        itemsWithElement.unshift(`<p class="p-2 mb-2 text-sm text-gray-800 text-opacity-50">click outside the input to cancel search.</p>`)
        element.innerHTML = itemsWithElement.join('')
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
    searchInputAction('click', (event) => { 
        event.stopPropagation();
        getPostsJSON().then(data => dataJSON = data) 
    })
    /**
     * filtering result with the query that user given on search input.
     */
    searchInputAction('keyup', (event) => filterPostsJSON(event.target.value, searchResult))

    document.addEventListener('click', function() {
        searchResult.innerHTML = '';
        searchInput.value = '';
        searchInput.blur();
    }, false);


    function tocFeature() {
        return new Promise((resolve, reject) => {
            let elements = {
                toc: document.querySelector('#toc'),
                tocControl: document.querySelector('#tocControl'),
                tocItems: document.querySelectorAll('#TableOfContents a'),
            }
            if (elements) {
                resolve(elements)
            } else {
                reject('Cannot find any table of contents in this page')
            }
        })
    }
    tocFeature()
        .then(({toc, tocControl, tocItems}) => {
            tocControl.addEventListener('click', function() {
                document.documentElement.classList.toggle('overflow-hidden')
                toc.classList.toggle('hidden');
            });
            toc.addEventListener('click', function() {
                if (!toc.classList.contains('hidden'))
                {
                    toc.classList.add('hidden')
                }
                document.documentElement.classList.toggle('overflow-hidden');
            })
            tocItems.forEach(item => item.addEventListener('click', function(event) {
                event.stopPropagation();
                toc.classList.add('hidden');
                if (document.documentElement.classList.contains('overflow-hidden')) {
                    document.documentElement.classList.remove('overflow-hidden')
                }
            }))
        })
        .catch(err => console.log(err));

})

