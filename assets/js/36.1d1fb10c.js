(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{509:function(t,e,i){t.exports=i.p+"assets/img/2018_11_09_MY5xLpiD9T.580e422e.gif"},765:function(t,e,i){"use strict";i.r(e);var n=i(6),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("ul",[n("li",[t._v("使用php上传图片（大小1.9M)，出现 nginx: 413 Request Entity Too Large 错误。")]),t._v(" "),n("li",[t._v("根据经验是服务器限制了上传文件的大小，但php默认的文件上传是2M，应该不会出现问题。")]),t._v(" "),n("li",[t._v("打开php.ini，把 upload_max_filesize 和 post_max_size 修改为20M，然后重启。")]),t._v(" "),n("li",[t._v("再次上传，问题依旧，可以排除php方面的问题。原来nginx默认上传文件的大小是1M，可nginx的设置中修改。   "),n("code",[t._v("client_max_body_size 20M")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:i(509),alt:"2018_11_09_MY5xLpiD9T.gif"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);