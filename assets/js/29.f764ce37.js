(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{576:function(s,a,t){s.exports=t.p+"assets/img/2019_05_06_cVMGg8WQ78.441d143f.png"},577:function(s,a,t){s.exports=t.p+"assets/img/2019_05_04_KFzSpnajQT.590ab93c.png"},822:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("源码地址 https://github.com/DuC-cnZj/blog  ，给个 star 吧老铁们 😂")])]),s._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),e("ol",[e("li",[s._v("游客评论、github 评论")]),s._v(" "),e("li",[s._v("支持 "),e("code",[s._v("markdown")]),s._v(" 语法")]),s._v(" "),e("li",[s._v("支持 "),e("code",[s._v("emoji")]),s._v(" 表情，留言区输入符号 "),e("code",[s._v(":")]),s._v(" 自动补全表情 🍭")]),s._v(" "),e("li",[s._v("文章编辑支持图片拖拽上传")]),s._v(" "),e("li",[s._v("文章主题支持语法高亮")]),s._v(" "),e("li",[s._v("支持 "),e("code",[s._v("ElasticSearch")]),s._v(" 搜索 🔍")]),s._v(" "),e("li",[s._v("支持搜索结果高亮显示")]),s._v(" "),e("li",[s._v("评论实时同步")]),s._v(" "),e("li",[s._v("新文章广播通知")]),s._v(" "),e("li",[s._v("文章置顶和隐藏")]),s._v(" "),e("li",[s._v("用户数据分析")]),s._v(" "),e("li",[s._v("不断更新中...")])]),s._v(" "),e("h2",{attrs:{id:"💡-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#💡-安装"}},[s._v("#")]),s._v(" 💡 安装")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --depth "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -b "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" https://github.com/DuC-cnZj/server_docker_configuration.git blog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"🚀-启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🚀-启动"}},[s._v("#")]),s._v(" 🚀 启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"🎃-安装须知"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎃-安装须知"}},[s._v("#")]),s._v(" 🎃 安装须知")]),s._v(" "),e("p",[s._v("由于启动需要时间所以如果登陆后台出现请检查网络状态，则说明系统还在准备中，从启动到可以使用，大概需要 1min。")]),s._v(" "),e("h2",{attrs:{id:"🧐-填充测试数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🧐-填充测试数据"}},[s._v("#")]),s._v(" 🧐 填充测试数据")]),s._v(" "),e("blockquote",[e("p",[s._v("文章测试数据一次填充60条数据，可以多次填充。")])]),s._v(" "),e("p",[s._v("填充测试数据，务必在启动至少一分钟后再使用该命令，因为在启动时，es 搜索引擎还没准备好，如果使用该命令时出现错误，证明系统还没启动完成。")]),s._v(" "),e("p",[s._v("建立es索引")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" app php artisan elastic:create-index App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ArticleIndexConfigurator\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("es 没启动完成会出现以下提示，请安心等待\n"),e("img",{attrs:{src:t(576),alt:"2019_05_06_cVMGg8WQ78.png"}})]),s._v(" "),e("p",[s._v("填充数据")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" app php artisan db:seed --class"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ArticleTableSeeder --force\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"👀-预览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#👀-预览"}},[s._v("#")]),s._v(" 👀 预览")]),s._v(" "),e("p",[s._v("http://localhost:8000/ 前台")]),s._v(" "),e("p",[s._v("http://localhost:8080/ 后台 账号 123456789 密码 secret")]),s._v(" "),e("h2",{attrs:{id:"🤠-操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🤠-操作"}},[s._v("#")]),s._v(" 🤠 操作")]),s._v(" "),e("p",[s._v("停止运行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" down\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("删除之前请先停止运行。")])]),s._v(" "),e("p",[s._v("删除 docker镜像以及相关数据文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi registry.cn-hangzhou.aliyuncs.com/duc-cnzj/blog_frontend:local\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi registry.cn-hangzhou.aliyuncs.com/duc-cnzj/blog_backgroung:local\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi registry.cn-hangzhou.aliyuncs.com/duc-cnzj/blog_app\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" blog_dbdata blog_esdata blog_redisdata\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"最后附上测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后附上测试"}},[s._v("#")]),s._v(" 最后附上测试")]),s._v(" "),e("p",[e("img",{attrs:{src:t(577),alt:"2019_05_04_KFzSpnajQT.png"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);