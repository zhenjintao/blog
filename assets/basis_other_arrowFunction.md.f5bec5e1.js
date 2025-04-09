import{_ as e,o as a,c as o,k as t,a as s}from"./chunks/framework.59177d03.js";const x=JSON.parse('{"title":"箭头函数能作为构造函数吗？","description":"","frontmatter":{},"headers":[],"relativePath":"basis/other/arrowFunction.md","filePath":"basis/other/arrowFunction.md"}'),n={name:"basis/other/arrowFunction.md"},r=t("h1",{id:"箭头函数能作为构造函数吗",tabindex:"-1"},[s("箭头函数能作为构造函数吗？ "),t("a",{class:"header-anchor",href:"#箭头函数能作为构造函数吗","aria-label":'Permalink to "箭头函数能作为构造函数吗？"'},"​")],-1),i=t("p",null,"不能",-1),l=t("ol",null,[t("li",null,"没有自身的 this 绑定：箭头函数不会创建自己的 this，它的 this 继承自外层作用域。这意味着你不能使用 new 关键字来调用箭头函数作为构造函数，因为这样会导致 this 的指向错误。"),t("li",null,"箭头函数没有 prototype 属性：构造函数通常需要一个原型对象来存放共享的方法，而箭头函数不具有这一特性。"),t("li",null,"箭头函数没有 arguments 对象：箭头函数没有自己的 arguments 对象，它使用外层作用域的 arguments 对象。")],-1),c=t("p",null,"因此，箭头函数不能作为构造函数使用。",-1),_=[r,i,l,c];function d(h,u,p,m,f,b){return a(),o("div",null,_)}const g=e(n,[["render",d]]);export{x as __pageData,g as default};
