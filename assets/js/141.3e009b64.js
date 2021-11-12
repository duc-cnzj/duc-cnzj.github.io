(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{922:function(e,t,l){"use strict";l.r(t);var o=l(12),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("p",[l("a",{attrs:{href:"https://kubernetes.io/blog/2021/09/13/read-write-once-pod-access-mode-alpha/#how-is-this-different-than-the-readwriteonce-access-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReadWriteOnce 原本以为只有一个pod可以读写❌，应该是同一节点上的多个 Pod 可以读取和写入同一个卷, ReadWriteOncePod 才是只有一个pod可以读写"),l("OutboundLink")],1)]),e._v(" "),l("p",[l("a",{attrs:{href:"https://kubernetes.io/blog/2021/09/13/read-write-once-pod-access-mode-alpha/#migrating-existing-persistentvolumes",target:"_blank",rel:"noopener noreferrer"}},[e._v("迁移 pv, pv和pvc换绑定"),l("OutboundLink")],1)]),e._v(" "),l("p",[e._v("操作步骤")]),e._v(" "),l("ol",[l("li",[e._v("设置pv模式 "),l("code",[e._v('kubectl patch pv cat-pictures-pv -p \'{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}\'')])]),e._v(" "),l("li",[l("code",[e._v("kubectl scale --replicas=0 deployment cat-pictures-writer")]),e._v(" pod数量改成 0")]),e._v(" "),l("li",[e._v("删除 pvc 或者 helm uninstall")]),e._v(" "),l("li",[e._v("编辑 pv 把关联才 claimRef 字段全删除")]),e._v(" "),l("li",[e._v("临时修改 helm charts 的 pvc 增加 "),l("code",[e._v("spec.volumeName")]),e._v("  指向原来的那个 pv")]),e._v(" "),l("li",[l("code",[e._v("helm install")]),e._v(" or "),l("code",[e._v("kc apply")])]),e._v(" "),l("li",[e._v("如果原来是 delete 模式就改回去"),l("code",[e._v('kubectl patch pv cat-pictures-pv -p \'{"spec":{"persistentVolumeReclaimPolicy":"Delete"}}\'')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);