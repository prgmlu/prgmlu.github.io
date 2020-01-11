(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{58:function(n,t,s){"use strict";s.r(t),s.d(t,"readingTime",function(){return i}),s.d(t,"default",function(){return d}),s.d(t,"tableOfContents",function(){return b}),s.d(t,"frontMatter",function(){return m});var a=s(13),e=(s(0),s(19)),p=s(59),o=s.n(p),l=s(60),c=s.n(l),i={text:"1 min read",minutes:.56,time:33600,words:112},r={},u="wrapper";function d(n){var t=n.components,s=Object(a.a)(n,["components"]);return Object(e.b)(u,Object.assign({},r,s,{components:t,mdxType:"MDXLayout"}),Object(e.b)("h2",{id:"how-to-delete-a-file-or-folder-with-python"},"how to delete a file or folder with python"),Object(e.b)("p",null,"We\u2019ll first try using the os module:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> os\n<span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">\'example.txt\'</span><span class="token punctuation">,</span><span class="token string">\'w\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\nos<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">\'example.txt\'</span><span class="token punctuation">)</span>\n'}}))),Object(e.b)("p",null,"it works with files."),Object(e.b)("p",null,"let\u2019s try it with an empty directory"),Object(e.b)("p",null,"let\u2019s first create an empty directory:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">\'empty_dir\'</span><span class="token punctuation">)</span>\nos<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">\'empty_dir\'</span><span class="token punctuation">)</span>\n'}}))),Object(e.b)("p",null,"It gives an error this time."),Object(e.b)("img",{src:o.a}),Object(e.b)("p",null,"we\u2019ll need another module for this task.\nwe\u2019ll use the shutil module."),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> shutil\nshutil<span class="token punctuation">.</span>rmtree<span class="token punctuation">(</span><span class="token string">\'empty_dir\'</span><span class="token punctuation">)</span>\n'}}))),Object(e.b)("p",null,"This time it works, and no error."),Object(e.b)("img",{src:c.a}),Object(e.b)("p",null,"It even works with non-empty directories:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">\'non_empty\'</span><span class="token punctuation">)</span>\n<span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">\'non_empty/example.txt\'</span><span class="token punctuation">,</span><span class="token string">\'w\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\nshutil<span class="token punctuation">.</span>rmtree<span class="token punctuation">(</span><span class="token string">\'non_empty\'</span><span class="token punctuation">)</span>\n\n'}}))),Object(e.b)("p",null,"A video Tutorial:"),Object(e.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/AoOIYJDfjh8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0;var b=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"how-to-delete-a-file-or-folder-with-python",level:2,title:"how to delete a file or folder with python",children:[]}]},m={}},59:function(n,t,s){n.exports=s.p+"static/media/error.3c67ed44.png"},60:function(n,t,s){n.exports=s.p+"static/media/noerror.e6085057.png"}}]);
//# sourceMappingURL=6.c858bca0.chunk.js.map