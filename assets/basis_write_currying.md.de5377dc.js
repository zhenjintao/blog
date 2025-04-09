import{_ as s,o as n,c as a,V as l}from"./chunks/framework.59177d03.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"basis/write/currying.md","filePath":"basis/write/currying.md"}'),p={name:"basis/write/currying.md"},o=l(`<h3 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h3><p>柯里化是将一个函数拆分成多个只接受一个参数的函数，而偏函数则是固定部分参数并返回一个新的函数。柯里化可以使得函数更加灵活和可复用，而偏函数则更多地关注于减少函数所需的参数数量</p><h3 id="第一题" tabindex="-1">第一题 <a class="header-anchor" href="#第一题" aria-label="Permalink to &quot;第一题&quot;">​</a></h3><p>用js实现一个add方法，使计算结果能够满足如下预期：<br> test(1, 2, 3); // 6<br> test(1, 2)(3); // 6<br> test(1)(2)(3); // 6</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">currying</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;font-style:italic;">args1</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">inner</span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args2</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">args1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">args2</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">args</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,...</span><span style="color:#BABED8;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">currying</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_add</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">c</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">c</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">curry</span><span style="color:#BABED8;">(_add)</span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 6</span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 6</span></span>
<span class="line"><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 6</span></span></code></pre></div><h3 id="第二题" tabindex="-1">第二题 <a class="header-anchor" href="#第二题" aria-label="Permalink to &quot;第二题&quot;">​</a></h3><p>用js实现一个add方法，使计算结果能够满足如下预期：<br> add(1)(2)(3)() = 6;<br> add(1, 2, 3)(4)() = 10;<br> add(1)(2)(3)(4)(5)() = 15;</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args1</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">args1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">innerAdd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args2</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">args</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">args2</span><span style="color:#F07178;">]  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">innerArgs</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 如果没有新的参数传入，返回参数的总和  </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">sum</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">num</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 如果有新的参数传入，返回一个新的innerAdd函数  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">innerAdd</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">       </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">innerAdd</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 测试代码  </span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)())</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出：6  </span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)())</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出：10  </span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">)())</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出：15</span></span></code></pre></div><h3 id="第三题" tabindex="-1">第三题 <a class="header-anchor" href="#第三题" aria-label="Permalink to &quot;第三题&quot;">​</a></h3><p>用js实现一个add方法，使计算结果能够满足如下预期：<br> add(1)(2)(3) == 6;<br> add(1, 2, 3)(4) == 10;<br> add(1)(2)(3)(4)(5) == 15;<br> 利用==符号的隐式转换</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 第一次执行时，定义一个数组专门用来存储所有的参数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">_args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">slice</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">_adder</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">_args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">_adder</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">_adder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">_args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">_adder</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">5</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">15</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">)(</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">9</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,11),t=[o];function e(c,r,y,F,D,B){return n(),a("div",null,t)}const E=s(p,[["render",e]]);export{i as __pageData,E as default};
