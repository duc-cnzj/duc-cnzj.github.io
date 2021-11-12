(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{630:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_jS96GRYR7N.3ca88947.png"},631:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_H27W7cpzSj.0d75f5b6.png"},632:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_J7OM40DJK5.cd9fdf90.png"},633:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_u7fKU9f05Y.78229063.png"},634:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_FpcldpyiQy.27bbf640.png"},635:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_vVZrXJvfWZ.e7cdb976.png"},636:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_QxywZHfhVy.ca06080e.png"},637:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_rkIN3dxwdq.ae08c7e9.png"},638:function(t,s,a){t.exports=a.p+"assets/img/2019_01_13_Zsd1NiIQHQ.581a71e7.gif"},850:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"第三方登陆的种类分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方登陆的种类分析"}},[t._v("#")]),t._v(" 第三方登陆的种类分析")]),t._v(" "),n("ol",[n("li",[t._v("前后端不分离的情况，后端根据第三方回调返回的用户信息可以直接登陆用户，这种比较简单，后端拿到用户可以直接使用session记住并且登陆用户，跳转到相应页面。")]),t._v(" "),n("li",[t._v("前后端分离，但是不跨域")]),t._v(" "),n("li",[t._v("前后端分离，并且是跨域的，即前端域名和后端api域名不同")])]),t._v(" "),n("h2",{attrs:{id:"以-github-为例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#以-github-为例子"}},[t._v("#")]),t._v(" 以 "),n("code",[t._v("github")]),t._v(" 为例子：")]),t._v(" "),n("p",[t._v("首先去添加一个 Oauth App：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(630),alt:"2019_01_13_jS96GRYR7N.png"}}),t._v("\n配置相关回调地址，这里的回调地址必须必须能通过外网访问。或者你可以用内网穿透。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(631),alt:"2019_01_13_H27W7cpzSj.png"}}),t._v("\n配置完后把你的 "),n("code",[t._v("ID")]),t._v(" 和 "),n("code",[t._v("secret")]),t._v(" 加入到你的后端逻辑中去，")]),t._v(" "),n("p",[n("img",{attrs:{src:a(632),alt:"2019_01_13_J7OM40DJK5.png"}}),t._v("\n之后用户通过前端授权按钮登陆，首次登陆需要授权。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(633),alt:"2019_01_13_u7fKU9f05Y.png"}}),t._v("\n授权完成后 github 会调用你的回调地址返回用户信息：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(634),alt:"2019_01_13_FpcldpyiQy.png"}})]),t._v(" "),n("p",[t._v("获取到用户信息后逻辑就开始区分了")]),t._v(" "),n("ol",[n("li",[t._v("前后端不分离的话可以直接在回调方法中登陆用户跳转")]),t._v(" "),n("li",[t._v("前后端分离的话比较麻烦，请继续看")])]),t._v(" "),n("p",[t._v("分离环境下，后端会先把 github 回调的用户信息存到数据库中，然后再做相应处理。")]),t._v(" "),n("p",[t._v("因为 github 调用的是你后端 api 的地址，比如调用地址的域名为 "),n("code",[t._v("api.server.com")]),t._v(" ，然而你web端的地址是 "),n("code",[t._v("web.server.com")]),t._v(" ，这时候如何去登陆用户呢？")]),t._v(" "),n("h2",{attrs:{id:"难题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#难题"}},[t._v("#")]),t._v(" 难题：")]),t._v(" "),n("p",[t._v("因为前后端分离中的后端几乎都是返回 json 格式的信息，几乎不存在直接跳前端页面的做法，并且前后端分离都是用token获取用户信息。前端只有拿到相应的token才能获取到github用户的资料。所以这里的问题变成了如何通过后端把用户的 token 给到前端页面。")]),t._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案：")]),t._v(" "),n("blockquote",[n("p",[t._v("本质上来讲这个问题属于跨域问题，只有同源的数据才能相互访问。")])]),t._v(" "),n("p",[t._v("1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。")]),t._v(" "),n("p",[t._v("最初，它的含义是指，A 网页设置的 Cookie，B 网页不能打开，除非这两个网页“同源”。所谓“同源”指的是”三个相同“。")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("协议相同")]),t._v(" "),n("li",[t._v("域名相同")]),t._v(" "),n("li",[t._v("端口相同")])])]),t._v(" "),n("p",[t._v("举例来说，"),n("code",[t._v("http://www.example.com/dir/page.html")]),t._v("这个网址，协议是"),n("code",[t._v("http://")]),t._v("，域名是"),n("code",[t._v("www.example.com")]),t._v("，端口是"),n("code",[t._v("80")]),t._v("（默认端口可以省略），它的同源情况如下。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("http://www.example.com/dir2/other.html")]),t._v("：同源")]),t._v(" "),n("li",[n("code",[t._v("http://example.com/dir/other.html")]),t._v("：不同源（域名不同）")]),t._v(" "),n("li",[n("code",[t._v("http://v2.www.example.com/dir/other.html")]),t._v("：不同源（域名不同）")]),t._v(" "),n("li",[n("code",[t._v("http://www.example.com:81/dir/other.html")]),t._v("：不同源（端口不同）")]),t._v(" "),n("li",[n("code",[t._v("https://www.example.com/dir/page.html")]),t._v("：不同源（协议不同）")])]),t._v(" "),n("p",[t._v("那么如何解决跨域问题的，这里我采用了，跨文档通信 API（Cross-document messaging）。"),n("code",[t._v("window.postMessage()")]),t._v(" 。（HTML5 为了解决跨域窗口通信这个问题，引入的一个全新的API）。")]),t._v(" "),n("h2",{attrs:{id:"下面开始实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下面开始实践"}},[t._v("#")]),t._v(" 下面开始实践")]),t._v(" "),n("h3",{attrs:{id:"前端页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端页面"}},[t._v("#")]),t._v(" 前端页面：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(635),alt:"2019_01_13_vVZrXJvfWZ.png"}}),t._v("\n点击 "),n("code",[t._v("github")]),t._v(" logo，跳转到后端的 "),n("code",[t._v("api.server.com/oauth/login")]),t._v("，为了好看，你可以采用弹出小窗的形式，类似于下面这样")]),t._v(" "),n("p",[n("img",{attrs:{src:a(636),alt:"2019_01_13_QxywZHfhVy.png"}})]),t._v(" "),n("p",[n("code",[t._v("弹出窗口->github 授权登陆->后端接收到用户的json信息")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"后端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端：")]),t._v(" "),n("p",[t._v("后端得到github回调用户信息后，去生成一串 "),n("code",[t._v("token")]),t._v("，怎么实现的话，问你自己咯😀，生成token之后，后端必须跳转一个页面（但不是跳转到前端页面，这样不可行，直接把token放在url地址上也不安全），正确的方法是跳一个类似于下面这样的页面（注意这个行为是后端做的）。"),n("code",[t._v("domain")]),t._v("是你前端的"),n("strong",[t._v("域名")]),t._v(" "),n("code",[t._v("web.server.com")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),n("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("doctype")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("oauth github"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n登陆中...\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer {{ $token }}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ $domain }}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br")])]),n("p",[n("img",{attrs:{src:a(637),alt:"2019_01_13_rkIN3dxwdq.png"}}),t._v("\n用户几乎是不会感觉到这个行为的，非常快！")]),t._v(" "),n("p",[t._v("这个页面的意义在于和前端通信，把token传给前端，")]),t._v(" "),n("p",[t._v("前端点击跳出小窗口的代码：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("href")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        # 弹出 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" 的窗口\n      window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'newwindow'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      # "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("通过监听，父页面可以拿到子页面传递的token，父")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("前端页面"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("，子")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("小窗"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("me")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户信息获取成功'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("如果不知道上面代码的实现原理或者有疑问请看这里 https://wangdoc.com/javascript/bom/same-origin.html#windowpostmessage，")]),t._v(" "),n("p",[t._v("嗯，拿到token了之后怎么做上面代码也写了，聪明的你应该看懂了😁")]),t._v(" "),n("h2",{attrs:{id:"这种方式的安全性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这种方式的安全性"}},[t._v("#")]),t._v(" 这种方式的安全性")]),t._v(" "),n("p",[t._v("MDN 上对其这样介绍")]),t._v(" "),n("blockquote",[n("p",[t._v("window.postMessage() 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为https），端口号（443为https的默认值），以及主机  (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信。window.postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全。")])]),t._v(" "),n("h2",{attrs:{id:"演示一下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#演示一下"}},[t._v("#")]),t._v(" 演示一下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(638),alt:"2019_01_13_Zsd1NiIQHQ.gif"}})]),t._v(" "),n("p",[t._v("你可以来 "),n("a",{attrs:{href:"http://39.108.139.38/articles/100",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的博客"),n("OutboundLink")],1),t._v(" 体验一下")])])}),[],!1,null,null,null);s.default=e.exports}}]);