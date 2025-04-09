import{_ as s,o as a,c as e,V as t}from"./chunks/framework.59177d03.js";const F=JSON.parse('{"title":"浏览器安全","description":"","frontmatter":{},"headers":[],"relativePath":"browser/security.md","filePath":"browser/security.md"}'),o={name:"browser/security.md"},r=t(`<h1 id="浏览器安全" tabindex="-1">浏览器安全 <a class="header-anchor" href="#浏览器安全" aria-label="Permalink to &quot;浏览器安全&quot;">​</a></h1><h2 id="_1、xss-cross-site-scripting-攻击-跨站脚本攻击" tabindex="-1">1、xss(cross site scripting)攻击,跨站脚本攻击 <a class="header-anchor" href="#_1、xss-cross-site-scripting-攻击-跨站脚本攻击" aria-label="Permalink to &quot;1、xss(cross site scripting)攻击,跨站脚本攻击&quot;">​</a></h2><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><ul><li>存储型攻击</li><li>反射型攻击</li><li>基于dom的攻击(Dom-base)</li></ul><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li>服务器对代码进行过滤和转码</li><li>合理利用CSP(响应头中增加content-security-policy字段)</li><li>服务端给cookie增加http-only</li></ul><p>常见的设置CSP的方式像这样：<br> 在 HTTP 响应头中添加 Content-Security-Policy: default-src &#39;self&#39;; script-src <a href="https://example.com" target="_blank" rel="noreferrer">https://example.com</a>; style-src &#39;self&#39; <a href="https://fonts.googleapis.com" target="_blank" rel="noreferrer">https://fonts.googleapis.com</a>; font-src <a href="https://fonts.gstatic.com" target="_blank" rel="noreferrer">https://fonts.gstatic.com</a>;<br> 这里 default-src &#39;self&#39; 表示默认只允许加载同源资源；script-src <a href="https://example.com" target="_blank" rel="noreferrer">https://example.com</a> 允许从 <a href="https://example.com" target="_blank" rel="noreferrer">https://example.com</a> 加载脚本；style-src &#39;self&#39; <a href="https://fonts.googleapis.com" target="_blank" rel="noreferrer">https://fonts.googleapis.com</a> 允许从本站和 <a href="https://fonts.googleapis.com" target="_blank" rel="noreferrer">https://fonts.googleapis.com</a> 加载样式表；font-src <a href="https://fonts.gstatic.com" target="_blank" rel="noreferrer">https://fonts.gstatic.com</a> 允许从 <a href="https://fonts.gstatic.com" target="_blank" rel="noreferrer">https://fonts.gstatic.com</a> 加载字体资源。</p><h2 id="_2、csrf-cross-site-request-forgery-攻击-跨站请求攻击" tabindex="-1">2、csrf(Cross-Site Request Forgery)攻击,跨站请求攻击 <a class="header-anchor" href="#_2、csrf-cross-site-request-forgery-攻击-跨站请求攻击" aria-label="Permalink to &quot;2、csrf(Cross-Site Request Forgery)攻击,跨站请求攻击&quot;">​</a></h2><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h4><p>跨站请求攻击，特点是b网站利用form表单没有跨域限制请求a网站的接口，导致a网站的用户有损失的一种攻击</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// b页面</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">action</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3000/importapi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">money</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">document.myform.submit()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="解决方案-1" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li>添加验证码(体验不好)<br> express + svg-captcha生成svg图片验证码 小知识：静态图片验证码ORC识别成功率90%，动态图片验证码ORC识别成功率40%，所以最好使用手机短信验证码，发送短信验证码前让输入图片验证码</li><li>判断来源referer：不靠谱，可以通过node自己发请求来实现伪造header里的referer</li><li>token</li></ul><h2 id="_3、xsrf攻击" tabindex="-1">3、xsrf攻击 <a class="header-anchor" href="#_3、xsrf攻击" aria-label="Permalink to &quot;3、xsrf攻击&quot;">​</a></h2><p>xss + csrf = XSRF蠕虫攻击</p><p>例如往a网站注入一个脚本，然后脚本内会自动发送发表评论的请求，如果是存储型xss，其他用户只要刷新一下页面就会多一条评论</p>`,16),l=[r];function n(p,c,i,h,f,y){return a(),e("div",null,l)}const m=s(o,[["render",n]]);export{F as __pageData,m as default};
