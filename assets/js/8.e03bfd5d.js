(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{402:function(t,r,_){"use strict";_.r(r);var a=_(31),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),_("p",[t._v("浏览器渲染原理，"),_("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档参考"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"渲染原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染原理"}},[t._v("#")]),t._v(" 渲染原理")]),t._v(" "),_("h3",{attrs:{id:"html解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html解析"}},[t._v("#")]),t._v(" HTML解析")]),t._v(" "),_("p",[t._v("解析"),_("code",[t._v("html")]),t._v("分为两步，标记化和构建树：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("标记化")]),t._v("是词法分析的过程，即将"),_("code",[t._v("html")]),t._v("的内容解析成多个标记，简而言之，从html字符串中按照层级解析出标签、属性等信息。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("树构建")]),t._v("是在逐个标记的过程中，向创建的"),_("code",[t._v("dom")]),t._v("对象中不断添加元素解析完毕后，即生成了dom树。")])])]),t._v(" "),_("h3",{attrs:{id:"处理脚本和样式表的顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#处理脚本和样式表的顺序"}},[t._v("#")]),t._v(" 处理脚本和样式表的顺序")]),t._v(" "),_("p",[t._v("处理脚本和样式表的顺序，解析过程中，遭遇到"),_("code",[t._v("<script/>")]),t._v("标记时，立即解析script并执行脚本。文档解析停止，直到脚本执行完毕。\n如果脚本是外部的，那么解析过程同样停止，直到下载完毕且执行完成后在继续进行文档解析，脚本中添加"),_("code",[t._v("defer")]),t._v("，可以指明该script等待文档解析完毕后在执行。\n"),_("code",[t._v("html5")]),t._v("新增async属性，将脚本标记为异步，以便于其他线程解析、执行。")]),t._v(" "),_("h3",{attrs:{id:"css解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css解析"}},[t._v("#")]),t._v(" CSS解析")]),t._v(" "),_("p",[t._v("理论上来说，应用样式表不会更改 DOM 树，因此似乎没有必要等待样式表并停止文档解析。但这涉及到一个问题，就是脚本在文档解析阶段会请求样式信息。如果当时还没有加载和解析样式，脚本就会获得错误的响应，这样显然会产生很多问题。Firefox 在样式表加载和解析的过程中，会禁止所有脚本。而对于 WebKit 而言，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，它才会禁止该脚本。")]),t._v(" "),_("h3",{attrs:{id:"render树构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#render树构建"}},[t._v("#")]),t._v(" render树构建")]),t._v(" "),_("p",[t._v("HTML树构建的同时，会构建另一个树结构，渲染树，即最终展现给用户的页面结构，即文档的可视化表现。简而言之，render树是结合DOM树和CSS构建而成。")]),t._v(" "),_("h3",{attrs:{id:"布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),_("p",[t._v("元素添加进render树的时候，不包含位置和大小信息，计算这些值的过程称之为布局和重排，所有的元素都拥有一个"),_("code",[t._v("reflow")]),t._v("和"),_("code",[t._v("layout")]),t._v("方法。\n为避免对所有细小更改都进行整体布局，浏览器采用了一种"),_("code",[t._v("dirty 位")]),t._v("系统。如果某个元素发生了更改，或者将自身及其子代标注为“dirty”，则需要进行布局。\n有两种标记：“dirty”和“children are dirty”。“children are dirty”表示尽管呈现器自身没有变化，但它至少有一个子代需要布局。")]),t._v(" "),_("h4",{attrs:{id:"全局布局和增量布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局布局和增量布局"}},[t._v("#")]),t._v(" 全局布局和增量布局")]),t._v(" "),_("p",[t._v("全局布局是指触发了整个呈现树范围的布局，触发原因可能包括：")]),t._v(" "),_("ol",[_("li",[t._v("影响所有呈现器的全局样式更改，例如字体大小更改。")]),t._v(" "),_("li",[t._v("屏幕大小调整。")])]),t._v(" "),_("h4",{attrs:{id:"异步布局和同步布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步布局和同步布局"}},[t._v("#")]),t._v(" 异步布局和同步布局")]),t._v(" "),_("p",[t._v("增量布局是异步执行的。Firefox 将增量布局的"),_("code",[t._v("reflow 命令")]),t._v("加入队列，而调度程序会触发这些命令的批量执行。WebKit 也有用于执行增量布局的计时器：对呈现树进行遍历，并对 dirty 呈现器进行布局。请求样式信息（例如"),_("code",[t._v("offsetHeight")]),t._v("）的脚本可同步触发增量布局。全局布局往往是同步触发的。有时，当初始布局完成之后，如果一些属性（如滚动位置）发生变化，布局就会作为回调而触发。")]),t._v(" "),_("h4",{attrs:{id:"布局处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布局处理"}},[t._v("#")]),t._v(" 布局处理")]),t._v(" "),_("p",[t._v("布局通常具有以下模式：")]),t._v(" "),_("ol",[_("li",[t._v("父元素确定自己的宽度。")]),t._v(" "),_("li",[t._v("父元素依次处理子元素，并且：\n"),_("ol",[_("li",[t._v("放置子元素（设置 x,y 坐标）。")]),t._v(" "),_("li",[t._v("如果有必要，调用子元素的布局（如果子元素是 dirty 的，或者这是全局布局，或出于其他某些原因），这会计算子元素的高度。")])])]),t._v(" "),_("li",[t._v("父元素根据子元素的累加高度以及边距和补白的高度来设置自身高度，此值也可供父元素的父元素使用。")]),t._v(" "),_("li",[t._v("将其 dirty 位设置为 false。")])]),t._v(" "),_("h4",{attrs:{id:"换行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#换行"}},[t._v("#")]),t._v(" 换行")]),t._v(" "),_("p",[t._v("如果元素在布局过程中需要换行，会立即停止布局，并告知其父元素需要换行。父元素会创建额外的元素，并对其调用布局。")]),t._v(" "),_("h4",{attrs:{id:"绘制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#绘制"}},[t._v("#")]),t._v(" 绘制")]),t._v(" "),_("p",[t._v("在绘制阶段，系统会遍历元素，并调用元素的"),_("code",[t._v("paint")]),t._v("方法，将元素的内容显示在屏幕上。绘制工作是使用用户界面基础组件完成的。")])])}),[],!1,null,null,null);r.default=v.exports}}]);