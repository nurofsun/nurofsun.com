"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var dataJSON,searchInput=document.querySelector("#searchInput"),searchResult=document.querySelector("#searchResult");window.addEventListener("keydown",function(a){"/"===a.key&&(a.preventDefault(),searchInput.focus())}),window.addEventListener("keydown",function(a){27===a.keyCode&&(searchInput.value="",searchResult.innerHTML="",searchInput.blur())});/**
 * Get the posts lists in json format.
 */var getPostsJSON=/*#__PURE__*/function(){var a=_asyncToGenerator(function*(){var a=yield fetch("/index.json"),b=yield a.json();return b});return function(){return a.apply(this,arguments)}}(),filterPostsJSON=(a,b)=>{var c,d;a=new RegExp(a,"i"),c=dataJSON.filter(b=>a.test(b.title)),d=c.map(a=>"<li>\n            <a class=\"block mb-2 px-2 py-4 border-b-1 border-gray-200 hover:bg-gray-800 overflow-hidden rounded-lg hover:text-white\" href=\"".concat(a.url,"\">\n                ").concat(a.title,"\n            </a>\n        </li>")),b.classList.add("block"),d.unshift("<p class=\"p-2 mb-2 text-sm text-gray-800 text-opacity-50\">click outside the input to cancel search.</p>"),b.innerHTML=d.join("")},searchInputAction=(a,b)=>{searchInput.addEventListener(a,b)};/**
 * @param query, element.
 * query: the keyword that user given.
 * element: target element to show the result.
 */ /**
 * When user focus on the search input, function getPostsJSON called.
 */ /**
 * filtering result with the query that user given on search input.
 */searchInputAction("click",a=>{a.stopPropagation(),getPostsJSON().then(a=>dataJSON=a)}),searchInputAction("keyup",a=>filterPostsJSON(a.target.value,searchResult)),document.addEventListener("click",function(){searchResult.innerHTML="",searchInput.value="",searchInput.blur()},!1);