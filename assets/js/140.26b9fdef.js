(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{921:function(e,a,t){"use strict";t.r(a);var s=t(12),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" 架构")]),e._v(" "),t("ol",[t("li",[e._v("3 个 master节点")]),e._v(" "),t("li",[e._v("n 个 node 节点")]),e._v(" "),t("li",[e._v("两台 nginx+keepalived机器")]),e._v(" "),t("li",[e._v("两台 为 ingress nginx 准备的机器， haproxy+keepalived, 用来代理集群所有的节点")])]),e._v(" "),t("h2",{attrs:{id:"安装过程遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装过程遇到的问题"}},[e._v("#")]),e._v(" 安装过程遇到的问题")]),e._v(" "),t("ol",[t("li",[e._v("初次安装 "),t("code",[e._v("--pod-network-cidrs")]),e._v(" 没设置，导致 flannel 安装后集群网络不通")]),e._v(" "),t("li",[e._v("calico 也有上面的问题, 不过默认网段是 "),t("code",[e._v("10.244.0.0/16")])]),e._v(" "),t("li",[e._v("setenforce 和 swap 分区未关闭，导致集群起不来或者ingress不通")]),e._v(" "),t("li",[e._v("国内镜像问题（虽然这个早就知道怎么解决，但还是来吐槽下不只是k8s本身需要的镜像，其他的也大多都是需要科学上网才能拉取的）")]),e._v(" "),t("li",[e._v("虚拟机一定要加 "),t("code",[e._v("--apiserver-advertise-address")]),e._v(" 不然会出现奇奇怪怪的问题，比如pod一直pending，cluster 10.92.0.1 连接不上")])]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("帮我更深入理解各组件作用，原来只是会用yaml，现在有稍微深入了些。\n熟悉了各种方式安装k8s，kubeadm, rancher, aliYun ack。")])])}),[],!1,null,null,null);a.default=r.exports}}]);