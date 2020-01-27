(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(n,a,e){"use strict";e.r(a),e.d(a,"readingTime",function(){return k}),e.d(a,"default",function(){return y}),e.d(a,"tableOfContents",function(){return f}),e.d(a,"frontMatter",function(){return O});var t=e(15),s=(e(0),e(21)),o=e(74),p=e.n(o),c=e(75),l=e.n(c),i=e(76),r=e.n(i),u=e(77),b=e.n(u),d=e(78),m=e.n(d),k={text:"2 min read",minutes:1.615,time:96900,words:323},h={},g="wrapper";function y(n){var a=n.components,e=Object(t.a)(n,["components"]);return Object(s.b)(g,Object.assign({},h,e,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"how-to-make-a-python-init-file"},"How to make a python ",Object(s.b)("strong",{parentName:"h1"},"init")," file"),Object(s.b)("p",null,"If you\u2019ve used Python programming language for long enough, you undoubtedly must\u2019ve came across a file named ",Object(s.b)("strong",{parentName:"p"},"init"),".py\nIn this quick guide we will give a practical example of the usage of such a file."),Object(s.b)("h2",{id:"practical-example"},"Practical example:"),Object(s.b)("p",null,"lets say you have a couple of functions that you use in your code, and you wanted to move these functions to another file and import them in your code.\nlet\u2019s say that you put this code in a file called main_file.py"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-python",metastring:"live=true",live:"true","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">def</span> <span class="token function">helper_function1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> a <span class="token operator">+</span> b\n\n<span class="token keyword">def</span> <span class="token function">helper_function2</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> a <span class="token operator">-</span> b\n\nx <span class="token operator">=</span> helper_function1<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\ny <span class="token operator">=</span> helper_function2<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>\n'}}))),Object(s.b)("p",null,"and your project folder now contains only this file like the following image"),Object(s.b)("img",{src:p.a}),Object(s.b)("p",null,"You want to change the code by putting helper_function1 and helper_function2 in a separate file and import them like the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">from</span> another_file <span class="token keyword">import</span> helper_function1<span class="token punctuation">,</span>helper_function1\n\nx <span class="token operator">=</span> helper_function1<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\ny <span class="token operator">=</span> helper_function2<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>\n'}}))),Object(s.b)("p",null,"and our files structure would become:"),Object(s.b)("img",{src:l.a}),Object(s.b)("p",null,"and you can import the needed functions like so:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">from</span> another_file <span class="token keyword">import</span> helper_function1<span class="token punctuation">,</span>helper_function1\n\nx <span class="token operator">=</span> helper_function1<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\ny <span class="token operator">=</span> helper_function2<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n'}}))),Object(s.b)("h2",{id:"a-probable-scenario"},"A probable scenario:"),Object(s.b)("p",null,"Imagine you wanted to organize your files by making a directory that you put some helper modules in like the following images:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"a directory for the helper modules"),":"),Object(s.b)("img",{src:r.a}),Object(s.b)("img",{src:b.a}),Object(s.b)("p",null,"in that case you need to create an empty ",Object(s.b)("strong",{parentName:"p"},"init"),".py file inside the helper modules directory like the following:"),Object(s.b)("img",{src:m.a}),Object(s.b)("p",null," ",Object(s.b)("strong",{parentName:"p"},"notice that the ",Object(s.b)("strong",{parentName:"strong"},"init")," is completely empty, all you need is to create it")),Object(s.b)("p",null," after creating the empty ",Object(s.b)("strong",{parentName:"p"},"init")," file inside the directory you want to import from, you can import the items you need like the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">from</span> some_directory <span class="token keyword">import</span> another_file<span class="token punctuation">,</span> second_file\n\n'}}))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"OR"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">from</span> some_directory<span class="token punctuation">.</span>another_file <span class="token keyword">import</span> <span class="token operator">*</span>\n<span class="token keyword">from</span> some_directory<span class="token punctuation">.</span>second_file <span class="token keyword">import</span> <span class="token operator">*</span>\n\n'}}))))}y.isMDXComponent=!0;var f=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"practical-example",level:2,title:"Practical example:",children:[]},{id:"a-probable-scenario",level:2,title:"A probable scenario:",children:[]}]},O={}},74:function(n,a,e){n.exports=e.p+"static/media/img.1e0636bc.png"},75:function(n,a,e){n.exports=e.p+"static/media/img2.9d32e6d1.png"},76:function(n,a,e){n.exports=e.p+"static/media/img3.21943be1.png"},77:function(n,a,e){n.exports=e.p+"static/media/img4.61e3248c.png"},78:function(n,a,e){n.exports=e.p+"static/media/img5.8dd9d0f3.png"}}]);
//# sourceMappingURL=3.4ec895a1.chunk.js.map