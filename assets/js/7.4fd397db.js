(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{407:function(s,t,a){},442:function(s,t,a){"use strict";var n=a(407);a.n(n).a},462:function(s,t,a){"use strict";a.r(t);a(442);var n=a(22),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"从零开发一个node命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从零开发一个node命令行工具"}},[s._v("#")]),s._v(" 从零开发一个node命令行工具")]),s._v(" "),a("p",{staticClass:"title-1"},[s._v("什么是命令行工具？")]),s._v(" "),a("p",[s._v("命令行工具（Command Line Interface）简称cli，顾名思义就是在命令行终端中使用的工具。我们常用的 git、npm、vim 等都是 cli 工具，比如我们可以通过 git clone 等命令简单把远程代码复制到本地。")]),s._v(" "),a("p",{staticClass:"title-2"},[s._v("为什么要用cli工具？")]),s._v(" "),a("p",[s._v("和 cli 相对的是图形用户界面（gui），windows 环境中几乎都是 gui 工具，而 linux 环境中则几乎都是 cli 工具，因为两者用户不同，gui 侧重于易用，cli 则侧重于效率。对于熟悉 gui 和集成开发环境（IDE）的程序员，这似乎很难理解。毕竟用鼠标点点拽拽，不是更方便么？")]),s._v(" "),a("p",[s._v("很遗憾，答案是否定的。gui 对于某些简单操作，可能更快、更方便。比如移动文件、阅读邮件或写word文档。但如果你依赖 gui 完成全部工作，你将会错过环境的某些能力，比如使常见任务自动化，或是利用各种工具的全部功能。并且，你也无法将工具组合，创建出定制的宏工具。gui 的好处是所见即所得（what you see is what you get）。缺点是所见即全部所得（what you see is all you get）。")]),s._v(" "),a("p",[s._v("作为注重实效的程序员，你不断的想要执行特别的操作（gui 可能不支持的操作）。当你想要快速地组合一些命令，以完成一次查询或某种其他任务时，cli 要更为合适。比如：查看上周哪些 js 文件没有改动过：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cli:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.js'")]),s._v(" -mtime +7 -print\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gui:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".点击并转到"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"查找文件"')]),s._v(",点击"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件名"')]),s._v("字段,敲入"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.js"')]),s._v(",选择"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"修改日期"')]),s._v("选项卡"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".然后选择"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"介于"')]),s._v(".点击"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始日期"')]),s._v(",敲入项目开始的日期.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".点击"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"结束日期"')]),s._v(",敲入1周以前的日期"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("确保手边有日历"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",点击"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始查找"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",{staticClass:"title-2"},[s._v("如何开发一个cli工具")]),s._v(" "),a("p",[s._v("基本上，使用任何成熟的语言都可以开发 cli 工具，作为前端小白，我们选用 node 作为开发语言。")]),s._v(" "),a("h2",{attrs:{id:"创建一个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个项目"}},[s._v("#")]),s._v(" 创建一个项目")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.创建以恶搞目录：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" kid-cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kid-cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.因为最终我们要把cli发不到npm上，所以需要初始化一个程序包:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.创建一个index.js文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" index.js\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.打开编辑器(vscode)")]),s._v("\ncode "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[s._v("安装 code 命令，运行 VS code 并打开命令面板(⇧⌘P),然后输入 shell command 找到: Install 'code' command in PATH 就行了。")])]),s._v(" "),a("p",[s._v("打开index.js文件，添加一段测试代码：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\n\nconsole.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("终端运行 node 程序，需要先输入 node 命令，比如 "),a("code",[s._v("node index.js")]),s._v("\n可以正确输出 hello world!，代码顶部的 "),a("code",[s._v("#/usr/bin/env node")]),s._v(" 是告诉终端，这个文件要使用 node 去执行。")]),s._v(" "),a("h2",{attrs:{id:"创建一个命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个命令"}},[s._v("#")]),s._v(" 创建一个命令")]),s._v(" "),a("p",[s._v("一般 cli 都有一个特定的命令，比如 git，刚才使用的 code 等，我们也需要设置一个命令，就叫 kid 吧！如何让终端识别这个命令呢？很简单，打开 "),a("code",[s._v("package.json")]),s._v(" 文件，添加一个字段 "),a("code",[s._v('"bin"')]),s._v("，并且生命一个关键字和对应执行的文件：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("如果想要声明多个命令，修改这个字段就好了")])]),s._v(" "),a("p",[s._v("然后我们测试一下，在终端中输入 kid，会提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("zsh:command not found: kid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("为什么会这样呢？回想一下，通常我们在使用一个 cli 工具时，都需要先安装它，比如 vue-cli")]),s._v(" "),a("p",[s._v("而我们的 kid-cli 并没有发布到 npm 上，当然也没有安装过了，所以终端现在还不认识这个命令。通常我们想本地测试一个 npm 包，可以使用："),a("code",[s._v("npm link")]),s._v(" 这个命令，本地安装这个包，我们执行一下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后在执行")]),s._v("\nkid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可以看到输出 hello world!")]),s._v(" "),a("p",[s._v("到此，一个简答的命令行工具就完成了，但是这个工具并没有任何卵用，别着急，我们来一点点增强他的功能。")]),s._v(" "),a("h3",{attrs:{id:"查看版本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看版本信息"}},[s._v("#")]),s._v(" 查看版本信息")]),s._v(" "),a("p",[s._v("首先是查看cli的版本信息，希望通过如下命令来查看版本信息：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kid-v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("这里有两个问题")]),s._v(" "),a("ol",[a("li",[s._v("如何获取 -v 参数")]),s._v(" "),a("li",[s._v("如何获取版本信息")])])]),s._v(" "),a("p",[s._v("在node程序中，通过 process.argv 可获取到命令的参数，以数组返回，修改 index.js，输出这个数组:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后输入任意命令，比如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kid -v -h -lalala\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("控制台输出")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/shi/.nvm/versions/node/v12.12.0/bin/node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/bin/kid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-v'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-lalala'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这个数组的第三个参数就是我们想要的 -v")]),s._v(" "),a("p",[s._v("第二个问题，版本信息一般是放在 package.json 文件的 version 字段中，require 进来就好了，改造后的 index.js 代码如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\nconst pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconst "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process.argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nswitch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-v'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n        console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pkg.version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default:\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("然后执行 kid -v，就可以输出版本号了。")]),s._v(" "),a("h2",{attrs:{id:"初始化一个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个项目"}},[s._v("#")]),s._v(" 初始化一个项目")]),s._v(" "),a("p",[s._v("接下来我们来实现一个最常见的功能，利用 cli 初始化一个项目。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("整个流程大概是这样的：")]),s._v(" "),a("ol",[a("li",[s._v("cd 到一个你想新建项目的目录；")]),s._v(" "),a("li",[s._v("执行 kid init 命令，根据提示输入项目名称；")]),s._v(" "),a("li",[s._v("cli 通过 git 拉取模版项目代码，并拷贝到项目名称所在目录中；")])])]),s._v(" "),a("p",{staticClass:"title-1"},[s._v("为了实现这个流程，我们需要解决下面几个问题：")]),s._v(" "),a("p",{staticClass:"title-2"},[s._v("执行复杂的命令")]),s._v(" "),a("p",[s._v('上面的例子中，我们通过 process.argv 获取到了命令的参数，但是当一个命令有多个参数，或者像新建项目这种需要用户输入项目名称(我们称作"问答")的命令时，一个简单的 switch case 就显得捉襟见肘了。这里我们引入一个专门处理命令行交互的包 '),a("code",[s._v("npm i commander --save")]),s._v("。")]),s._v(" "),a("p",[s._v("然后改造 index.js")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\nconst program "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commander'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprogram.version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("./package.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprogram.parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process.argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("运行 "),a("code",[s._v("kid -h")]),s._v("，输出:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Usage: kid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOptions:\n  -V, --version  output the version number\n  -h, --help     output usage information\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("commander已经为我们创建好了帮助信息，以及两个参数 -V 和 -h，上面代码中的 program.version 就是返回的版本号，和之前的功能一致，program.parse 是将命令参数传入 commander 管道中，一般放在最后执行。")]),s._v(" "),a("p",{staticClass:"title-2"},[s._v("添加问答操作")]),s._v(" "),a("p",[s._v("接下来我们添加 "),a("code",[s._v("kid init")]),s._v(" 的问答操作，这里需要引入一个新的包 "),a("code",[s._v("npm i inquirer --save")]),s._v("，这个包可以通过简单配置让 cli 支持问答交互。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\nconst program "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commander'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconst inquirer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inquirer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconst initAction "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    inquirer.prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        type: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input'")]),s._v(",\n        message: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入项目名称'")]),s._v(",\n        name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("answers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目名为：'")]),s._v(", answers.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'正在拷贝项目，请稍等'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nprogram.version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprogram\n    .command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'init'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    .description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建项目'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    .action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprogram.parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process.argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("program.command 可以定义一个命令\ndescription 添加一个描述，在 --help 中展示\naction 指定一个回调函数执行命令。\ninquirer.prompt 可以接受一组问答对象\ntype字段表示问答类型，name 指定答案的key，可以在 answers 里通过 name 拿到用户的输入，问答的类型有很多种，这里我们使用 input，让用户输入项目名称。")]),s._v(" "),a("p",[s._v("运行 "),a("code",[s._v("kid init")]),s._v("，然后会提示输入项目名称，输入后会打印出来。")]),s._v(" "),a("p",{staticClass:"title-2"},[s._v("如何在node中执行shell脚本？")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i shelljs --save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("假定我们想克隆 github 上 elementUI 这个项目的代码，并自动安装依赖，改造"),a("code",[s._v("index.js")]),s._v("，在 "),a("code",[s._v("initAction")]),s._v(" 函数中加上执行shell脚本的逻辑：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\nconst program "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commander'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconst inquirer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inquirer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconst shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shelljs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconst initAction "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    inquirer.prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        type: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input'")]),s._v(",\n        message: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入项目名称'")]),s._v(",\n        name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("answers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目名为：'")]),s._v(", answers.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'正在拷贝项目，请稍等'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        const remote "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/ElemeFE/element.git'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        const curName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'elementUI'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        const tarName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" answers.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        shell.exec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("curName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tarName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ./$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tarName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/.git\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tarName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error, stdout, stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                console.error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" error: $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nprogram.version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprogram\n    .command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'init'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    .description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建项目'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    .action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprogram.parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process.argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("shell.exec 可以帮助我们执行一段脚本，在回调函数中可以输出脚本执行的结果。")])])}),[],!1,null,null,null);t.default=e.exports}}]);