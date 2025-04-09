import{_ as s,o as a,c as n,V as l}from"./chunks/framework.59177d03.js";const _=JSON.parse('{"title":"模版编译优化","description":"","frontmatter":{},"headers":[],"relativePath":"vue/other/template.md","filePath":"vue/other/template.md"}'),o={name:"vue/other/template.md"},e=l(`<h1 id="模版编译优化" tabindex="-1">模版编译优化 <a class="header-anchor" href="#模版编译优化" aria-label="Permalink to &quot;模版编译优化&quot;">​</a></h1><h2 id="_1-模版编译" tabindex="-1">1. 模版编译 <a class="header-anchor" href="#_1-模版编译" aria-label="Permalink to &quot;1. 模版编译&quot;">​</a></h2><h3 id="_1-1-编译过程" tabindex="-1">1.1 编译过程 <a class="header-anchor" href="#_1-1-编译过程" aria-label="Permalink to &quot;1.1 编译过程&quot;">​</a></h3><ol><li>将模版字符串解析成 AST 语法树</li><li>对 AST 语法树进行标记静态节点</li><li>生成代码</li></ol><h3 id="_1-2-生成代码" tabindex="-1">1.2 生成代码 <a class="header-anchor" href="#_1-2-生成代码" aria-label="Permalink to &quot;1.2 生成代码&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">generate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">ast</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ast</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">genElement</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">ast</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_c(&quot;div&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">_render(</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">code</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">genElement</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">el</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">genData</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">children</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">genChildren</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,6),p=[e];function t(c,r,F,y,D,i){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{_ as __pageData,h as default};
