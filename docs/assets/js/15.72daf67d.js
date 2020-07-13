(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{433:function(s,t,a){"use strict";a.r(t);var e=a(11),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis集群方式实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis集群方式实现"}},[s._v("#")]),s._v(" Redis集群方式实现")]),s._v(" "),a("p",[s._v("集群的配置")]),s._v(" "),a("h2",{attrs:{id:"_1-主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制"}},[s._v("#")]),s._v(" 1. 主从复制")]),s._v(" "),a("p",[s._v("主: 192.168.1.1\n从: 192.168.1.2")]),s._v(" "),a("ul",[a("li",[s._v("主配置")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IP开放")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1\nport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在后台运行")]),s._v("\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码")]),s._v("\nmasterauth "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myredis"')]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myredis"')]),s._v("\n")])])]),a("ul",[a("li",[s._v("从配置")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IP开放")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.2\nport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在后台运行")]),s._v("\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码")]),s._v("\nmasterauth "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myredis"')]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myredis"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听主节点 slaveof <masterip> <masterport>")]),s._v("\nslaveof "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])])]),a("h2",{attrs:{id:"_2-哨兵模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-哨兵模式"}},[s._v("#")]),s._v(" 2. 哨兵模式")]),s._v(" "),a("p",[s._v("一主二从三哨兵，哨兵必须 3 个起，主节点挂了，两位还能存在 2 个从节点，一致认为主节点故障，进行选举投票，从 2 个里选一个成为主节点")]),s._v(" "),a("h2",{attrs:{id:"_3-redis-cluster集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis-cluster集群"}},[s._v("#")]),s._v(" 3. Redis-Cluster集群")]),s._v(" "),a("p",[s._v("待补充")])])}),[],!1,null,null,null);t.default=n.exports}}]);