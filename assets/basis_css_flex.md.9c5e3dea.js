import{_ as e,o as l,c as o,V as a}from"./chunks/framework.59177d03.js";const h=JSON.parse('{"title":"flex弹性盒","description":"","frontmatter":{},"headers":[],"relativePath":"basis/css/flex.md","filePath":"basis/css/flex.md"}'),c={name:"basis/css/flex.md"},s=a(`<h1 id="flex弹性盒" tabindex="-1">flex弹性盒 <a class="header-anchor" href="#flex弹性盒" aria-label="Permalink to &quot;flex弹性盒&quot;">​</a></h1><h2 id="ffc弹性盒格式化上下文-flex-formatting-context" tabindex="-1">FFC弹性盒格式化上下文（Flex Formatting Context） <a class="header-anchor" href="#ffc弹性盒格式化上下文-flex-formatting-context" aria-label="Permalink to &quot;FFC弹性盒格式化上下文（Flex Formatting Context）&quot;">​</a></h2><p>弹性盒格式化上下文。FFC是CSS Flexbox布局创建的上下文。在Flexbox布局中，子元素（称为flex项）可以在容器（称为flex容器）中沿一个维度（行或列）进行排列，并且可以动态地调整大小以适应不同屏幕尺寸和布局需求。Flexbox布局非常适合于构建复杂的、响应式的布局。</p><p>主轴和交叉轴：Flex容器有两个轴，主轴和交叉轴。主轴的方向由<code>flex-direction</code>属性决定，可以是水平方向（默认）或垂直方向。交叉轴的方向与主轴垂直。</p><h2 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to &quot;容器属性&quot;">​</a></h2><ul><li><code>display</code>：设置元素的显示类型为flex容器。</li><li><code>flex-direction</code>：设置主轴的方向，可以是row（默认）、row-reverse、column或column-reverse。 <ul><li>默认值为<code>row</code>: 子元素水平排列，不换行。</li><li><code>row-reverse</code>: 子元素水平排列，但顺序相反。</li><li><code>column</code>: 子元素垂直排列。</li><li><code>column-reverse</code>: 子元素垂直排列，但顺序相反。</li></ul></li><li><code>flex-wrap</code>：设置子元素是否换行，可以是nowrap（默认）、wrap或wrap-reverse。 <ul><li>默认值为<code>nowrap</code>: 子元素不换行，超出容器宽度时会被压缩。</li><li><code>wrap</code>: 子元素换行，超出容器宽度时会自动换到下一行。</li><li><code>wrap-reverse</code>: 子元素换行，但顺序相反。</li></ul></li><li><code>flex-flow</code>：是<code>flex-direction</code>和<code>flex-wrap</code>的简写。 <ul><li>默认值为<code>row nowrap</code>: 子元素水平排列，不换行。</li><li><code>flex-flow: row wrap;</code>: 子元素水平排列，超出容器宽度时换行。</li><li><code>flex-flow: column nowrap;</code>: 子元素垂直排列，不换行。</li></ul></li><li><code>justify-content</code>：设置子元素在主轴上的对齐方式，可以是flex-start、flex-end、center、space-between、space-around或space-evenly。 <ul><li><code>flex-start</code>（默认值）: 子元素对齐到主轴的起始位置。</li><li><code>flex-end</code>: 子元素对齐到主轴的结束位置。</li><li><code>center</code>: 子元素在主轴上居中对齐。</li><li><code>space-between</code>: 子元素在主轴上均匀分布，第一个子元素对齐到主轴的起始位置，最后一个子元素对齐到主轴的结束位置，其余子元素之间的间距相等。</li><li><code>space-around</code>: 子元素在主轴上均匀分布，每个子元素周围都有相等的间距。</li><li><code>space-evenly</code>: 子元素在主轴上均匀分布，包括子元素之间的间距和两端与容器边缘的间距。</li></ul></li><li><code>align-items</code>：设置子元素在交叉轴上的对齐方式，可以是flex-start、flex-end、center、baseline或stretch。 <ul><li>默认值为<code>stretch</code>: 子元素在交叉轴上拉伸以填充容器。</li><li><code>flex-start</code>: 子元素对齐到交叉轴的起始位置。</li><li><code>flex-end</code>: 子元素对齐到交叉轴的结束位置。</li><li><code>center</code>: 子元素在交叉轴上居中对齐。</li><li><code>baseline</code>: 子元素在交叉轴上对齐到基线。</li></ul></li><li><code>align-content</code>：设置多行子元素在交叉轴上的对齐方式，可以是flex-start、flex-end、center、space-between、space-around或stretch。 <ul><li>默认值为<code>stretch</code>: 多行子元素在交叉轴上拉伸以填充容器。</li><li><code>flex-start</code>: 多行子元素对齐到交叉轴的起始位置。</li><li><code>flex-end</code>: 多行子元素对齐到交叉轴的结束位置。</li><li><code>center</code>: 多行子元素在交叉轴上居中对齐。</li><li><code>space-between</code>: 多行子元素在交叉轴上均匀分布，第一行对齐到交叉轴的起始位置，最后一行对齐到交叉轴的结束位置，其余行之间的间距相等。</li><li><code>space-around</code>: 多行子元素在交叉轴上均匀分布，每行周围都有相等的间距。</li></ul></li></ul><h2 id="子元素属性" tabindex="-1">子元素属性 <a class="header-anchor" href="#子元素属性" aria-label="Permalink to &quot;子元素属性&quot;">​</a></h2><ul><li><code>order</code>：设置子元素的排列顺序，默认为0，数值越小越靠前。</li><li><code>flex-grow</code>：设置子元素的扩展比例，默认为0，表示不扩展。</li><li><code>flex-shrink</code>：设置子元素的收缩比例，默认为1，表示可以收缩。</li><li><code>flex-basis</code>：设置子元素的初始大小，可以是auto、具体的长度值或百分比。</li><li><code>align-self</code>：设置子元素在交叉轴上的对齐方式，可以覆盖容器的<code>align-items</code>属性，可以是auto、flex-start、flex-end、center、baseline或stretch。</li><li><code>flex</code>：是<code>flex-grow</code>、<code>flex-shrink</code>和<code>flex-basis</code>的简写，可以同时设置这三个属性。 <ul><li>默认值为<code>0 1 auto</code>: 不扩展、可以收缩、初始大小由内容决定。</li><li><code>flex: 1</code>相当于<code>1 1 0</code>: 表示扩展比例为1，可以收缩，初始大小由内容决定。flex: 1等同于flex-grow: 1; flex-shrink: 1; flex-basis: 0%。</li><li><code>flex: auto</code>相当于<code>1 1 auto</code>: 表示扩展比例为1，可以收缩，初始大小由内容决定。flex: auto等同于flex-grow: 1; flex-shrink: 1; flex-basis: auto。</li></ul></li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">/* 水平居中 */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">/* 垂直居中 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,11),n=[s];function i(t,d,r,p,f,x){return l(),o("div",null,n)}const y=e(c,[["render",i]]);export{h as __pageData,y as default};
