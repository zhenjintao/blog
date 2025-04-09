import{_ as s,o as a,c as p,V as n}from"./chunks/framework.59177d03.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"node/process-argv.md","filePath":"node/process-argv.md"}'),o={name:"node/process-argv.md"},l=n(`<p>process.argv 是 Node.js 中的一个全局变量，它包含了启动 Node.js 进程时传入的命令行参数数组。process 对象是一个全局变量，提供有关当前 Node.js 进程的信息。</p><p>process.argv 数组的第一个元素是 &#39;node&#39;，第二个元素是正在执行的 JavaScript 文件的路径。剩余的元素是任何附加的命令行参数。</p><p>例如，假设你有以下的 Node.js 脚本 app.js：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">argv)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>如果你在命令行中这样运行它： process.argv 是 Node.js 中的一个全局变量，它包含了启动 Node.js 进程时传入的命令行参数数组。process 对象是一个全局变量，提供有关当前 Node.js 进程的信息。</p><p>process.argv 数组的第一个元素是 &#39;node&#39;，第二个元素是正在执行的 JavaScript 文件的路径。剩余的元素是任何附加的命令行参数。</p><p>例如，假设你有以下的 Node.js 脚本 app.js：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">argv)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>如果你在命令行中这样运行它：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">arg1</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">arg2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">arg3</span></span></code></pre></div><p>process.argv 将会输出如下数组：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">[ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/to/app.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arg1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arg2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arg3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> ]</span></span></code></pre></div><p>你可以通过遍历这个数组来访问这些参数，或者根据需要解析它们。这对于创建可以接受命令行参数的 Node.js 脚本非常有用。</p><p>下面是一个简单的例子，展示了如何解析 process.argv 来获取命令行参数：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> args </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">argv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 去掉 &#39;node&#39; 和脚本路径  </span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 遍历参数并打印  </span></span>
<span class="line"><span style="color:#BABED8;">args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arg</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Argument </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">index </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">arg</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>如果你运行 node app.js arg1 arg2 arg3，上述代码将会输出：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Argument</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">arg1</span><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Argument</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">arg2</span><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">Argument</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">arg3</span></span></code></pre></div><p>请注意，process.argv 只是一个包含字符串的数组，如果你需要特定类型的参数（例如数字或布尔值），你需要自己进行转换。</p>`,18),e=[l];function t(c,r,D,y,F,B){return a(),p("div",null,e)}const d=s(o,[["render",t]]);export{E as __pageData,d as default};
