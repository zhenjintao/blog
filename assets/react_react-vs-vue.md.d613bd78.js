import{_ as e,o as a,c as t,V as r}from"./chunks/framework.59177d03.js";const v=JSON.parse('{"title":"vue与react 的区别?","description":"","frontmatter":{},"headers":[],"relativePath":"react/react-vs-vue.md","filePath":"react/react-vs-vue.md"}'),c={name:"react/react-vs-vue.md"},o=r('<h1 id="vue与react-的区别" tabindex="-1">vue与react 的区别? <a class="header-anchor" href="#vue与react-的区别" aria-label="Permalink to &quot;vue与react 的区别?&quot;">​</a></h1><h2 id="相同点" tabindex="-1">相同点: <a class="header-anchor" href="#相同点" aria-label="Permalink to &quot;相同点:&quot;">​</a></h2><p>1.都是数据驱动视图 MVVM，都采用了组件化思想</p><p>2.都采用了虚拟DOM，diff算法都采用了同级比较不进行跨级比较，都可用key快速找到vnode复用</p><p>3.支持服务器端渲染 SSR</p><p>4.都有钩子函数 Hooks</p><h2 id="不同点" tabindex="-1">不同点: <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;不同点:&quot;">​</a></h2><p>1.react是单向数据流，数据不可变，vue是双向数据流绑定，数据可变，</p><p>2、react的diff算法中，采用双缓存机制，通过Fiber单向链表树遍历对比新旧虚拟DOM，再统一批量更新DOM。vue采用两端到中间的比较方式，并且边对比，边更新DOM。</p><p>3、react利用isx语法生成虚拟DOM，vue能用isx或template模板生成虚拟DOM。</p><p>4、react需通过import来引用，而vue组件可以全局注册和局部引入注册。</p><p>5、react的hooks不可写在判断语句或循环语句里，为了保证memoizedstate的一致性。vue没有这样 的限制。</p>',12),s=[o];function i(p,n,_,d,u,h){return a(),t("div",null,s)}const m=e(c,[["render",i]]);export{v as __pageData,m as default};
