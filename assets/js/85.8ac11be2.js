(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{845:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://github.com/jwilder/nginx-proxy",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx-proxy"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-letsencrypt-nginx-proxy-companion"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/issues/102",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-compose v3 解决 volumes_from 废弃的问题"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.5'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx-proxy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jwilder/nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("proxy\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("proxy\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443:443"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/nginx/html\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dhparam"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/dhparam\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" vhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/vhost.d\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/run/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/tmp/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy"')]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("letsencrypt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jrcs/letsencrypt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("companion\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("encrypt\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-proxy"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("rw\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" vhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/vhost.d\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/nginx/html\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/run/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/run/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("whoami")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jwilder/whoami\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" VIRTUAL_HOST=whoami.local\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" LETSENCRYPT_HOST=whoami.local\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" VIRTUAL_PORT=8080\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("vhost")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dhparam")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);