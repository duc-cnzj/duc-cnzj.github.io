(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{905:function(s,a,e){"use strict";e.r(a);var n=e(12),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("生产环境用rancher部署k8s，首先你需要一个rancher，不能通过单节点docker run 起来，因为这不高可用")]),s._v(" "),e("p",[s._v("所以官方推荐使用 rke 或者 k3s 搭建，k3s 貌似是主推产品，轻量级 k8s .")]),s._v(" "),e("blockquote",[e("p",[s._v("k3s: 轻量级 Kubernetes。安装简单，内存只有一半，所有的二进制都不到 100MB。")])]),s._v(" "),e("p",[s._v("所以我尝试用k3s 搭建rancher，由于国内安装地址挂了，而直接安装又很慢，所以我采用"),e("a",{attrs:{href:"https://rancher2.docs.rancher.cn/docs/k3s/installation/airgap/_index",target:"_blank",rel:"noopener noreferrer"}},[s._v("离线安装的方式"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("把对应的tar包和k3s bin 文件上传到对应的服务器之后，安装以下步骤走")]),s._v(" "),e("p",[s._v("步骤：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("sudo mkdir -p /var/lib/rancher/k3s/agent/images/")])]),s._v(" "),e("li",[e("code",[s._v("sudo cp k3s /usr/local/bin/")])]),s._v(" "),e("li",[e("code",[s._v("sudo cp k3s-airgap-images-amd64.tar /var/lib/rancher/k3s/agent/images/")])]),s._v(" "),e("li",[e("code",[s._v("sudo INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --tls-san=\"47.110.92.7\"' ./install.sh")]),s._v(" 这里注意如果不配置 "),e("code",[s._v('--tls-san="47.110.92.7"')]),s._v("的话，你没有办法在外部通过 kubeconfig 访问集群")]),s._v(" "),e("li",[e("code",[s._v("cat /var/lib/rancher/k3s/server/node-token")]),s._v(" 获取agent注册的token")]),s._v(" "),e("li",[e("code",[s._v("INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://172.23.96.246:6443 K3S_TOKEN=K106babcefe122d96865e08181fe37773af9dbe600b67798de9645b2389b29de15b::server:076884928668d11df16dde90ef62b1a9 ./install.sh")]),s._v(" 注册 agent 也就是node节点")]),s._v(" "),e("li",[s._v("按照文档安装cert-manager，以及rancher  https://rancher2.docs.rancher.cn/docs/rancher2/installation/k8s-install/helm-rancher/_index")])]),s._v(" "),e("p",[s._v("汇总")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/lib/rancher/k3s/agent/images/\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" k3s /usr/local/bin/\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" k3s-airgap-images-amd64.tar  /var/lib/rancher/k3s/agent/images/\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_SKIP_DOWNLOAD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_EXEC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'server  --tls-san=\"47.110.92.7\"'")]),s._v(" ./install.sh\n\n//在master 节点执行\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TOKEN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/lib/rancher/k3s/server/node-token"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TOKEN")]),s._v("\n\n// 在node节点执行\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_SKIP_DOWNLOAD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_URL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://172.23.96.246:6443 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_TOKEN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TOKEN")]),s._v(" ./install.sh\n\nhelm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" rancher-stable http://rancher-mirror.oss-cn-beijing.aliyuncs.com/server-charts/stable\n\nhelm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rancher rancher-stable/rancher "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --namespace cattle-system "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --set "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hostname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rancher.whoops-cn.club "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --set ingress.tls.source"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("letsEncrypt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --set letsEncrypt.email"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1025434218")]),s._v("@qq.com\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("出现的问题")]),s._v(" "),e("p",[s._v("2020/09/05 10:00:33 [ERROR] ClusterController local [cluster-deploy] failed with : waiting for server-url setting to be set")]),s._v(" "),e("p",[s._v("有可能的 cert-manager 版本不对，没有指定版本 v0.15.0 导致一直报错")])])}),[],!1,null,null,null);a.default=t.exports}}]);