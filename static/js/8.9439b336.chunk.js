(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"readingTime",function(){return p}),n.d(t,"default",function(){return b}),n.d(t,"tableOfContents",function(){return h}),n.d(t,"frontMatter",function(){return m});var o=n(15),i=(n(0),n(21)),s=n(67),l=n.n(s),a=n(68),r=n.n(a),p={text:"2 min read",minutes:1.835,time:110100,words:367},c={},u="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(u,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"how-to-do-webscraping-with-selenium-python"},"How to do webscraping with selenium python"),Object(i.b)("p",null,"Hello everyone, in this series of tutorials, we\u2019re going to cover how to use selenium with python to do advanced webscraping.\nI\u2019ll walk you through everything from setting it up, until deploying your scrapers on a remote host."),Object(i.b)("p",null,"First what is webscraping?"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Web scraping, is the process of collecting data that\u2019s freely available from the internet.")),Object(i.b)("p",null,"What are the tools used to do web scraping?\nThe following are some of the tools inside the python ecosystem:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Beautifulsoup"),Object(i.b)("li",{parentName:"ul"},"Scrapy"),Object(i.b)("li",{parentName:"ul"},"Requests"),Object(i.b)("li",{parentName:"ul"},"Selenium")),Object(i.b)("p",null,"We\u2019ll focus on selenium in this series of posts."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"setting-up-the-environment"},"Setting up the environment"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"for this tutorial we\u2019ll use google chrome, if you don\u2019t have it please install it from the following link:"),"\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.google.com/chrome/"}),"Google Chrome")),Object(i.b)("p",null,"First you\u2019ll need to know which version of chrome you\u2019re using.\nto know which version you need to go there in your chrome:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"chrome://settings/help")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After you open your link you will see the version of your chrome:")),Object(i.b)("img",{src:l.a}),Object(i.b)("p",null,"For example, that previous image is from my system, and it clearly says that my chrome version is 68.0.03440 64-bit."),Object(i.b)("h3",{id:"the-next-step-is-to-download-the-appropriate-version-from-this-link"},"The next step is to download the appropriate version from this link:"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://chromedriver.chromium.org/downloads"}),"chromedriver")),Object(i.b)("p",null,"After downloading, you\u2019ll need to extract the executable file and keep it on the Desktop for example."),Object(i.b)("p",null,"Please note that you can use other browsers than chrome, but the steps are similar."),Object(i.b)("h3",{id:"next-step-is-to-install-selenium-library"},"Next step is to install selenium library."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"I assume you have python 3+ installed, if you don\u2019t have it, please install it from the following link:")),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.python.org/downloads/"}),"Python")),Object(i.b)("p",null,"To install selenium we\u2019ll use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://pypi.org/project/pip/"}),"pip")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash","data-language":"bash","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'pip <span class="token function">install</span> selenium\n'}}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"To make sure everything is set up correctly we\u2019ll open python and import selenium and run the webdriver"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-python","data-language":"python","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> selenium\n<span class="token keyword">import</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">as</span> webdriver\n\ndriver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path <span class="token operator">=</span> PATH_TO_CHROME_DRIVER<span class="token punctuation">)</span>\n'}}))),Object(i.b)("p",null,"and make sure to replace PATH_TO_CHROME_DRIVER with where your extracted chrome driver is."),Object(i.b)("p",null,"After that you should see a Chrome window opened:"),Object(i.b)("img",{src:r.a}),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"We\u2019ve setup the environment, by downloading the chromedriver and the selenium library.\nIn the following posts We\u2019ll start opening some sites and extracting data with python and selenium."))}b.isMDXComponent=!0;var h=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"setting-up-the-environment",level:2,title:"Setting up the environment",children:[{id:"the-next-step-is-to-download-the-appropriate-version-from-this-link",level:3,title:"The next step is to download the appropriate version from this link:",children:[]},{id:"next-step-is-to-install-selenium-library",level:3,title:"Next step is to install selenium library.",children:[]}]},{id:"conclusion",level:2,title:"Conclusion",children:[]}]},m={}},67:function(e,t,n){e.exports=n.p+"static/media/chrome_version.e40cdfd9.png"},68:function(e,t,n){e.exports=n.p+"static/media/chrome_window.1361fb58.png"}}]);
//# sourceMappingURL=8.9439b336.chunk.js.map