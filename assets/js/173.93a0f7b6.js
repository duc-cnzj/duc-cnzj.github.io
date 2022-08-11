(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{924:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"istio-笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#istio-笔记"}},[s._v("#")]),s._v(" istio 笔记")]),s._v(" "),a("blockquote",[a("p",[s._v("基本功能都知道了，但是底层实现原理，架构还没摸清楚")])]),s._v(" "),a("p",[s._v("集群中的 pod 通过 svc 访问istio服务时，默认轮训，不会使用 VirtualService，如果要用，必须指定 gateway "),a("code",[s._v("mesh")]),s._v(",  "),a("strong",[s._v("并且如果不是通过 istio 管理的pod内部也无法控制流量")])]),s._v(" "),a("blockquote",[a("p",[s._v("https://istio.io/latest/zh/docs/ops/common-problems/network-issues/#route-rules-have-no-effect-on-ingress-gateway-requests")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gateways")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mesh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[s._v("#")]),s._v(" todo")]),s._v(" "),a("ul",[a("li",[s._v("熔断管理的几个参数不是很懂，回头再看看")]),s._v(" "),a("li",[s._v("地域负载均衡先不看，没那么多集群测试")]),s._v(" "),a("li",[s._v("Sds tls 没怎么看懂，和之前直接用secret证书方式没差别，看文章的意思是sds能够热加载 创建更新的证书，如果不开启sds，secrets更新了gateway感知不到？")]),s._v(" "),a("li",[s._v("过一下整片文档")]),s._v(" "),a("li",[s._v("一个 gateway 多个证书？")]),s._v(" "),a("li",[s._v("多集群")])]),s._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Istio 支持 k8s 本身的 ingress，只需要把 "),a("code",[s._v("ingressClassName")]),s._v(" 改成 "),a("code",[s._v("istio")])])]),s._v(" "),a("li",[a("p",[s._v("使用 k8s 原生 ingress 的 TLS ， "),a("code",[s._v("Ingress")]),s._v(" 支持"),a("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/services-networking/ingress/#tls",target:"_blank",rel:"noopener noreferrer"}},[s._v("TLS"),a("OutboundLink")],1),s._v("设置。 Istio 支持此功能，但是引用的 "),a("code",[s._v("Secret")]),s._v(" 必须存在于"),a("code",[s._v("istio-ingressgateway")]),s._v(" 部署的名称空间（通常是 "),a("code",[s._v("istio-system")]),s._v(" ）中。 "),a("a",{attrs:{href:"https://istio.io/latest/zh/docs/ops/integrations/certmanager/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cert-manager"),a("OutboundLink")],1),s._v("可用于生成这些证书。")]),s._v(" "),a("ul",[a("li",[s._v("[ ] 待测试")]),s._v(" "),a("li",[s._v("[ ] https://istio.io/latest/zh/docs/tasks/traffic-management/ingress/kubernetes-ingress/")])])]),s._v(" "),a("li",[a("p",[s._v("VirtualService 如果需要在其它 pod 内也遵守规则需要在 vs 的 hosts 中添加内部  dns 记录")]),s._v(" "),a("ol",[a("li",[a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.istio.io/v1alpha3\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" VirtualService\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gw\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 如果其它内部pod要通过 vs 访问demo，必须在这里加 demo，"demo.test/demo.test.svc.cluster.local" 可以不加，进过测试只需要加一个就行')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://istio.io/latest/zh/docs/tasks/traffic-management/ingress/ingress-control/  ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo.istio.local"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("只有被 istio 注入 sidecar 的 pod 去 curl 才具备vs规则，普通pod是通过curl 访问 vs 的时候还是 rr。")])]),s._v(" "),a("li",[a("p",[s._v("VirtualService HTTP 请求的默认超时时间是 15 秒")])]),s._v(" "),a("li",[a("p",[s._v("HTTP 请求的默认重试行为是在返回错误之前重试两次")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://istio.io/latest/zh/docs/ops/deployment/requirements/",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 istio 应用必须满足的条件"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("接上，"),a("a",{attrs:{href:"https://istio.io/latest/zh/docs/ops/configuration/traffic-management/protocol-selection/",target:"_blank",rel:"noopener noreferrer"}},[s._v("service 协议选择协议"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://istio.io/latest/zh/docs/ops/common-problems/network-issues/#not-found-errors-occur-when-multiple-gateways-configured-with-same-TLS-certificate",target:"_blank",rel:"noopener noreferrer"}},[s._v("同一张 https 证书不能配置多个 gateway"),a("OutboundLink")],1),s._v(" "),a("strong",[s._v("已测试确实是这样√")])])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://istio.io/latest/zh/docs/ops/diagnostic-tools/istioctl-analyze/",target:"_blank",rel:"noopener noreferrer"}},[s._v("istio 帮你检查端口名称规范"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://istio.io/latest/zh/docs/reference/config/annotations/",target:"_blank",rel:"noopener noreferrer"}},[s._v("istio 注解 annotations"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("修改 istio 自动注入策略貌似只能通过 "),a("code",[s._v("kubectl edit cm -n istio-system istio-sidecar-injector")])])]),s._v(" "),a("li",[a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制跳转到 https")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://istio.io/latest/zh/docs/reference/config/networking/gateway/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("httpsRedirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sends 301 redirect for http requests")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 控制网格到外部的流量，需要 ServiceEntry + VirtualService 一起工作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.istio.io/v1alpha3\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" VirtualService\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("google\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"google.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2s\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" google.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.istio.io/v1alpha3\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ServiceEntry\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" external"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("google\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" google.com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MESH_EXTERNAL\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("http\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" HTTP\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resolution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DNS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("VirtualService http redirect "),a("strong",[s._v("在重定向时，使用此值覆盖 URL 的路径部分。请注意，无论请求 URI 是否匹配为确切路径或前缀，都将替换整个路径。")])])]),s._v(" "),a("li",[a("p",[s._v("HTTPRewrite rewrite "),a("strong",[s._v("用这个值重写 URI 的路径（或前缀）部分。如果原始 URI 是根据前缀匹配的，则此字段中提供的值将替换相应匹配的前缀。")])])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://istio.io/latest/docs/reference/config/networking/gateway/#Gateway",target:"_blank",rel:"noopener noreferrer"}},[s._v("gateway 中的 selector 默认会在所有 namespace 中匹配"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("小坑 mars 的 etag 不能用了，如果用了 istio 多版本，可能需要考虑单独打包前端代码，可能不适应于这种场景")])]),s._v(" "),a("li",[a("p",[s._v("因此，用一句话来说明 "),a("code",[s._v("analyze")]),s._v(" 就是：尽管运行！它非常安全，不用考虑，可能会有帮助，最坏的情况就是浪费您一分钟！")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);