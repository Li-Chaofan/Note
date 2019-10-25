(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_002-localinstallationik"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_002-localinstallationik"}},[t._v("#")]),t._v(" 002-LocalInstallationIK")]),t._v(" "),n("blockquote",[n("p",[t._v("目录:"),n("a",{attrs:{href:"https://github.com/dolyw/Elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dolyw/Elasticsearch"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"安装本地elasticsearch的ik分词插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch的ik分词插件"}},[t._v("#")]),t._v(" 安装本地"),n("code",[t._v("Elasticsearch")]),t._v("的IK分词插件")]),t._v(" "),n("p",[t._v("去"),n("a",{attrs:{href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/medcl/elasticsearch-analysis-ik/releases"),n("OutboundLink")],1),t._v("下载对应"),n("code",[t._v("Elasticsearch")]),t._v("版本的IK分词插件"),n("code",[t._v("elasticsearch-analysis-ik-7.3.0.zip")]),t._v("这个文件，打开可以看到如下文件")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("commons-codec-1.9.jar\ncommons-logging-1.2.jar\nconfig/\nelasticsearch-analysis-ik-7.2.0.jar\nhttpclient-4.5.2.jar\nhttpcore-4.4.4.jar\nplugin-descriptor.properties\nplugin-security.policy\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("没问题，就解压到你安装的"),n("code",[t._v("Elasticsearch")]),t._v("目录的"),n("code",[t._v("plugins")]),t._v("目录下，例如我的路径是这样的"),n("code",[t._v("D:\\Tools\\elasticsearch-7.2.0\\plugins\\elasticsearch-analysis-ik-7.2.0")])]),t._v(" "),n("p",[t._v("重启"),n("code",[t._v("Elasticsearch")]),t._v("，可以看到控制台打印日志")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("loaded plugin [analysis-ik]\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("测试一下")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('POST /_analyze\n{\n  "text":"中华人民共和国国徽",\n  "analyzer":"ik_smart"\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("返回")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n\t"tokens": [\n\t\t{\n\t\t\t"token": "中华人民共和国",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "国徽",\n\t\t\t"start_offset": 7,\n\t\t\t"end_offset": 9,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 1\n\t\t}\n\t]\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('POST /_analyze\n{\n  "text":"中华人民共和国国徽",\n  "analyzer":"ik_max_word"\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("返回")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n\t"tokens": [\n\t\t{\n\t\t\t"token": "中华人民共和国",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "中华人民",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 4,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 1\n\t\t},\n\t\t{\n\t\t\t"token": "中华",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 2,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 2\n\t\t},\n\t\t{\n\t\t\t"token": "华人",\n\t\t\t"start_offset": 1,\n\t\t\t"end_offset": 3,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 3\n\t\t},\n\t\t{\n\t\t\t"token": "人民共和国",\n\t\t\t"start_offset": 2,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 4\n\t\t},\n\t\t{\n\t\t\t"token": "人民",\n\t\t\t"start_offset": 2,\n\t\t\t"end_offset": 4,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 5\n\t\t},\n\t\t{\n\t\t\t"token": "共和国",\n\t\t\t"start_offset": 4,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 6\n\t\t},\n\t\t{\n\t\t\t"token": "共和",\n\t\t\t"start_offset": 4,\n\t\t\t"end_offset": 6,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 7\n\t\t},\n\t\t{\n\t\t\t"token": "国",\n\t\t\t"start_offset": 6,\n\t\t\t"end_offset": 7,\n\t\t\t"type": "CN_CHAR",\n\t\t\t"position": 8\n\t\t},\n\t\t{\n\t\t\t"token": "国徽",\n\t\t\t"start_offset": 7,\n\t\t\t"end_offset": 9,\n\t\t\t"type": "CN_WORD",\n\t\t\t"position": 9\n\t\t}\n\t]\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br")])]),n("p",[t._v("IK分词插件就这样安装成功了")]),t._v(" "),n("h2",{attrs:{id:"安装本地elasticsearch的拼音分词插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装本地elasticsearch的拼音分词插件"}},[t._v("#")]),t._v(" 安装本地"),n("code",[t._v("Elasticsearch")]),t._v("的拼音分词插件")]),t._v(" "),n("p",[t._v("去"),n("a",{attrs:{href:"https://github.com/medcl/elasticsearch-analysis-pinyin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/medcl/elasticsearch-analysis-pinyin/releases"),n("OutboundLink")],1),t._v("下载对应"),n("code",[t._v("Elasticsearch")]),t._v("版本的IK分词插件"),n("code",[t._v("elasticsearch-analysis-pinyin-7.2.0.zip")]),t._v("这个文件，打开可以看到如下文件")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("elasticsearch-analysis-pinyin-7.2.0.jar\nnlp-lang-1.7.jar\nplugin-descriptor.properties\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("没问题，就解压到你安装的"),n("code",[t._v("Elasticsearch")]),t._v("目录的"),n("code",[t._v("plugins")]),t._v("目录下，例如我的路径是这样的"),n("code",[t._v("D:\\Tools\\elasticsearch-7.2.0\\plugins\\elasticsearch-analysis-pinyin-7.2.0")])]),t._v(" "),n("p",[t._v("重启"),n("code",[t._v("Elasticsearch")]),t._v("，可以看到控制台打印日志")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("loaded plugin [analysis-pinyin]\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("测试一下")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('POST /_analyze\n{\n  "text":"中华人民共和国国徽",\n  "analyzer":"pinyin"\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("返回")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n\t"tokens": [\n\t\t{\n\t\t\t"token": "zhong",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "zhrmghggh",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 0\n\t\t},\n\t\t{\n\t\t\t"token": "hua",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 1\n\t\t},\n\t\t{\n\t\t\t"token": "ren",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 2\n\t\t},\n\t\t{\n\t\t\t"token": "min",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 3\n\t\t},\n\t\t{\n\t\t\t"token": "gong",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 4\n\t\t},\n\t\t{\n\t\t\t"token": "he",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 5\n\t\t},\n\t\t{\n\t\t\t"token": "guo",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 6\n\t\t},\n\t\t{\n\t\t\t"token": "guo",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 7\n\t\t},\n\t\t{\n\t\t\t"token": "hui",\n\t\t\t"start_offset": 0,\n\t\t\t"end_offset": 0,\n\t\t\t"type": "word",\n\t\t\t"position": 8\n\t\t}\n\t]\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br")])]),n("p",[t._v("拼音分词插件就这样安装成功了")]),t._v(" "),n("h4",{attrs:{id:"使用ik和拼音插件-详细使用可以查看github的文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用ik和拼音插件-详细使用可以查看github的文档"}},[t._v("#")]),t._v(" 使用IK和拼音插件(详细使用可以查看Github的文档)")]),t._v(" "),n("ul",[n("li",[t._v("创建Index，拼音分词过滤")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('PUT /book\n{\n\t"settings": {\n\t\t"analysis": {\n\t\t\t"analyzer": {\n\t\t\t\t"pinyin_analyzer": {\n\t\t\t\t\t"tokenizer": "my_pinyin"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"tokenizer": {\n\t\t\t\t"my_pinyin": {\n\t\t\t\t\t"type": "pinyin",\n\t\t\t\t\t"keep_separate_first_letter": false,\n\t\t\t\t\t"keep_full_pinyin": true,\n\t\t\t\t\t"keep_original": true,\n\t\t\t\t\t"limit_first_letter_length": 16,\n\t\t\t\t\t"lowercase": true,\n\t\t\t\t\t"remove_duplicated_term": true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br")])]),n("p",[t._v("返回")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "acknowledged": true,\n    "shards_acknowledged": true,\n    "index": "book"\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("ul",[n("li",[t._v("创建Mapping，属性使用过滤，name开启拼音分词，content开启IK分词，describe开启拼音加IK分词")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('POST /book/_mapping\n{\n\t"properties": {\n\t\t"name": {\n\t\t\t"type": "keyword",\n\t\t\t"fields": {\n\t\t\t\t"pinyin": {\n\t\t\t\t\t"type": "text",\n\t\t\t\t\t"store": false,\n\t\t\t\t\t"term_vector": "with_offsets",\n\t\t\t\t\t"analyzer": "pinyin_analyzer",\n\t\t\t\t\t"boost": 10\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"content": {\n\t\t\t"type": "text",\n\t\t\t"analyzer": "ik_max_word",\n\t\t\t"search_analyzer": "ik_smart"\n\t\t},\n\t\t"describe": {\n\t\t\t"type": "text",\n\t\t\t"analyzer": "ik_max_word",\n\t\t\t"search_analyzer": "ik_smart",\n\t\t\t"fields": {\n\t\t\t\t"pinyin": {\n\t\t\t\t\t"type": "text",\n\t\t\t\t\t"store": false,\n\t\t\t\t\t"term_vector": "with_offsets",\n\t\t\t\t\t"analyzer": "pinyin_analyzer",\n\t\t\t\t\t"boost": 10\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"id": {\n\t\t\t"type": "long"\n\t\t}\n\t}\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br")])]),n("p",[t._v("返回")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "acknowledged": true\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("这样Index以及属性分词就开启了")]),t._v(" "),n("h5",{attrs:{id:"注：搜索时，先查看被搜索的词被分析成什么样的数据，如果你搜索该词输入没有被分析出的参数时，是查不到的！！！"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注：搜索时，先查看被搜索的词被分析成什么样的数据，如果你搜索该词输入没有被分析出的参数时，是查不到的！！！"}},[t._v("#")]),t._v(" 注：搜索时，先查看被搜索的词被分析成什么样的数据，如果你搜索该词输入没有被分析出的参数时，是查不到的！！！")])])}),[],!1,null,null,null);s.default=e.exports}}]);