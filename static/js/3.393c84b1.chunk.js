(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{46:function(e,t,a){e.exports={TagIndexPage:"TagIndexPage_TagIndexPage__1KLH1"}},47:function(e,t,a){e.exports={TagPage:"TagPage_TagPage__2Zrai"}},58:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.r(t);var r=a(9),o=a(4),c=a.n(o),u=a(0),s=a.n(u),i=a(2),f=a(6),l=a(8),g=a(3),p=a(46),m=a.n(p);var b=function(e){return s.a.createElement("div",{className:m.a.TagIndexPage},s.a.createElement("h1",null,"Tags"),s.a.createElement("ul",null,e.tags.map(function(e){return s.a.createElement("li",{key:e.href},s.a.createElement(g.Link,{href:e.href},e.name," (",e.count,")"))})))},h=a(21),w=a(47),d=a.n(w);var v=function(e){var t=e.blogRoot,a=e.name,n=e.routes;return s.a.createElement("div",{className:d.a.TagPage},s.a.createElement("h1",null,a," posts"),s.a.createElement("ul",null,n.map(function(e){return s.a.createElement("li",{key:e.url.href},s.a.createElement(h.a,{blogRoot:t,route:e}))})))},x=a(14);function E(e){var t,a;return c.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(E.cache[e]){n.next=8;break}return n.next=3,c.a.awrap(Object(i.c)({context:{crawlingRoutes:!0},root:e,routes:x.a}));case 3:return t=n.sent,a=t.paths,n.next=7,c.a.awrap(Object(i.l)({method:"HEAD",routes:x.a,urls:a}));case 7:E.cache[e]=n.sent;case 8:return n.abrupt("return",E.cache[e]);case 9:case"end":return n.stop()}})}E.cache={};var j=Object(i.b)(Object(i.n)(function(e,t){return Object(r.a)({},t,{tagsRoot:e.mountpath})}),Object(i.o)({"/:tag":function(e,t){return c.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.crawlingRoutes){e.next=7;break}return e.t0=y,e.next=4,c.a.awrap(E(t.blogRoot));case 4:return e.t1=e.sent,e.t2=function(e){return"/"+e},e.abrupt("return",(0,e.t0)(e.t1).map(e.t2));case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}})}}),Object(i.j)({"/":Object(i.m)({title:"Tags",getView:function(e,t){var a,n,r;return c.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,c.a.awrap(E(t.blogRoot));case 2:return a=o.sent,n=y(a),r=Object(l.fromPairs)(n.map(function(e){return[e.toLowerCase(),[]]})),a.forEach(function(e){var t=e.data;t&&t.tags&&t.tags.forEach(function(t){t=t.toLowerCase(),r[t]&&r[t].push(e)})}),o.abrupt("return",s.a.createElement(b,{blogRoot:t.blogRoot,tags:n.map(function(t){return{name:t,href:Object(f.join)(e.mountpath,t.toLowerCase()),count:(r[t]||[]).length}})}));case 7:case"end":return o.stop()}})}}),"/:tag":Object(i.m)({getTitle:function(e){return e.params.tag},getView:function(e,t){var a,n,r;return c.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.params.tag.toLowerCase(),o.next=3,c.a.awrap(E(t.blogRoot));case 3:return n=o.sent,r=[],n.forEach(function(e){(e.data&&e.data.tags||[]).find(function(e){return e.toLowerCase()===a})&&r.push(e)}),o.abrupt("return",s.a.createElement(v,{blogRoot:t.blogRoot,name:e.params.tag,routes:r}));case 7:case"end":return o.stop()}})}})}));function y(e){var t;return Array.from(new Set((t=[]).concat.apply(t,n(e.map(function(e){return e.data&&e.data.tags||[]})))))}t.default=j}}]);
//# sourceMappingURL=3.393c84b1.chunk.js.map