(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{882:function(t,e,n){"use strict";n.r(e);var s=n(12),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("github上有官方的参考，地址："),n("a",{attrs:{href:"https://help.github.com/en/articles/removing-sensitive-data-from-a-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("Removing sensitive data from a repository"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("实战也有，地址："),n("a",{attrs:{href:"https://blog.csdn.net/zcf1002797280/article/details/50723783",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git从库中移除已删除大文件 - 白杨的专栏 - 博客频道 - CSDN.NET"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("也可以参考："),n("a",{attrs:{href:"https://www.tuicool.com/articles/uq2yMvV",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 Git 仓库中永久删除文件或目录"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("还有这篇 https://harttle.land/2016/03/22/purge-large-files-in-gitrepo.html")]),t._v(" "),n("p",[t._v("以及这篇 https://www.cnblogs.com/congyucn/p/9309734.html")]),t._v(" "),n("p",[t._v("经过我实际操作，如果文件名有空格，则需要用双引号引起来，主要命令如下，按照顺序操作即可：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" filter-branch --force --index-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git rm --cached --ignore-unmatch \"testFolder/2017-2-5 testFile.md\" '")]),t._v(" --prune-empty --tag-name-filter "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" -- --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --force --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --force --tags\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" for-each-ref --format"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete %(refname)'")]),t._v(" refs/original "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-ref --stdin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog expire --expire"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("now --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" gc --prune"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nowgit count-objects -v\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);