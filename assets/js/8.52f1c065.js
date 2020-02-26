(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{215:function(v,_,l){"use strict";l.r(_);var i=l(17),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"数组"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[v._v("#")]),v._v(" 数组")]),v._v(" "),l("p",[v._v("什么情况下你应该考虑使用数组？当你有一系列“相似”的数据，例如你做跑酷地图时有几十个检查点坐标需要存放时，你就可以考虑使用“数组”能不能简化你的逻辑了。")]),v._v(" "),l("h2",{attrs:{id:"基础"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[v._v("#")]),v._v(" 基础")]),v._v(" "),l("p",[v._v("先介绍几个基本名词：")]),v._v(" "),l("ul",[l("li",[v._v("数组：一系列数据的集合。注意，与数学中的集合不同的是，数组内的元素是可以重复的。")]),v._v(" "),l("li",[v._v("元素：也称为“值”。集合中的单个数据。")]),v._v(" "),l("li",[v._v("索引：在编程中一般将它叫做下标或索引。它表示是集合中的第几个，从0开始计数。")])]),v._v(" "),l("p",[v._v("例如我们有一个数组是"),l("code",[v._v("[10, 20, 30]")]),v._v("，那么20是这个数组的第2个元素，它的索引是1。")]),v._v(" "),l("p",[v._v("数组的基本操作和普通变量一样，分为读取和写入。读取非常简单，使用“数组中的值”即可。写入又分为直接写入索引，或者添加到数组末尾。它们分别使用：")]),v._v(" "),l("ul",[l("li",[v._v("在索引处设置全局变量(A, 索引, 值)")]),v._v(" "),l("li",[v._v("在索引处设置玩家变量(玩家, A, 索引, 值)")]),v._v(" "),l("li",[v._v("修改全局变量(A, 添加至数组, 值)")])]),v._v(" "),l("h2",{attrs:{id:"结合-索引-读写"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#结合-索引-读写"}},[v._v("#")]),v._v(" 结合“索引”读写")]),v._v(" "),l("p",[v._v("假如我们要做一个有很多个检查点的跑酷地图，每次通过一个检查点，我们就需要给玩家创建下一个检查点的光环。如果不使用数组，我们需要写非常多的规则。但是如果使用数组，事情就会变得简单起来：")]),v._v(" "),l("h3",{attrs:{id:"初始化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[v._v("#")]),v._v(" 初始化")]),v._v(" "),l("p",[v._v("我们使用变量A来存放所有的检查点：")]),v._v(" "),l("ul",[l("li",[v._v("设置全局变量(A, 空数组)")]),v._v(" "),l("li",[v._v("修改全局变量(A, 添加至数组, 矢量(0, 0, 0))")]),v._v(" "),l("li",[v._v("修改全局变量(A, 添加至数组, 矢量(10, 10, 10))")]),v._v(" "),l("li",[v._v("修改全局变量(A, 添加至数组, 矢量(20, 20, 20))")]),v._v(" "),l("li",[v._v("修改全局变量(A, 添加至数组, 矢量(30, 30, 30))")])]),v._v(" "),l("p",[v._v("玩家一开始的索引是0，我们使用变量B来存放：")]),v._v(" "),l("ul",[l("li",[v._v("设置玩家变量(事件玩家, B, 0)")]),v._v(" "),l("li",[v._v("创建效果(事件玩家, 有益光环, 绿色, 数组中的值(全局变量, A, 玩家变量(事件玩家, B)), 10.000, 可见, 位置和半径)")])]),v._v(" "),l("p",[v._v("另外，关于“创建效果”为什么在这里创建也能达到效果，在"),l("RouterLink",{attrs:{to:"/manual/tips.html"}},[v._v("技巧与提示")]),v._v("中有简单说明。")],1),v._v(" "),l("h3",{attrs:{id:"通过检查点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#通过检查点"}},[v._v("#")]),v._v(" 通过检查点")]),v._v(" "),l("p",[v._v("假设检查点的碰撞半径是10。")]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),l("li",[v._v("条件：范围内玩家(数组中的值(全局变量(A, 玩家变量(事件玩家，B)), 10.000, 所有队伍, 关闭) == 事件玩家")]),v._v(" "),l("li",[v._v("动作：修改玩家变量(事件玩家, B, 加, 1)")])]),v._v(" "),l("h2",{attrs:{id:"增加可用变量"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#增加可用变量"}},[v._v("#")]),v._v(" 增加可用变量")]),v._v(" "),l("p",[v._v("注意：合理利用数组可以让我们可以存储更多数据。但并不推荐使用数组存储一系列互相无关的数据——从设计的角度来说，这不是好事。直接读取变量肯定比读取数组更快，因此，如果能使用普通变量解决的，那么就不推荐使用数组来解决。")]),v._v(" "),l("p",[v._v("我们可以将一系列不相关的内容放入一个数组中，达到“增加可用变量”的目的。例如：")]),v._v(" "),l("ul",[l("li",[v._v("设置玩家变量(事件玩家, A, 空数组)")]),v._v(" "),l("li",[v._v("在索引处设置玩家变量(事件玩家, A, 0, 矢量(0, 0, 0))")]),v._v(" "),l("li",[v._v("在索引处设置玩家变量(事件玩家, A, 1, 英雄(莱因哈特))")]),v._v(" "),l("li",[v._v("在索引处设置玩家变量(事件玩家, A, 2, 假)")])]),v._v(" "),l("p",[v._v("然后在别的规则中这样使用：")]),v._v(" "),l("ul",[l("li",[v._v("传送(事件玩家, 数组中的值(玩家变量(事件玩家, A), 0))")]),v._v(" "),l("li",[v._v("开始强制玩家选择英雄(事件玩家, 数组中的值(玩家变量(事件玩家, A), 1))")]),v._v(" "),l("li",[v._v("在索引处设置玩家变量(事件玩家, A, 2, 真)")])]),v._v(" "),l("h2",{attrs:{id:"其他"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[v._v("#")]),v._v(" 其他")]),v._v(" "),l("ul",[l("li",[v._v("数组使用前请先初始化！（即："),l("code",[v._v("设置全局变量(A, 空数组)")]),v._v("）否则可能出现意料之外的结果。")]),v._v(" "),l("li",[v._v("在某一时刻大量写入数组可能导致“服务器意外关闭”。")]),v._v(" "),l("li",[v._v("数组的数量可以使用“数量”来获得。")]),v._v(" "),l("li",[v._v("“已排序的数组”默认使用升序排列（即从小到大）。如果你需要使用降序排序，目前请自行进行运算转换。")]),v._v(" "),l("li",[v._v("如果你尝试读取一个不存在的索引，目前版本的结果是0。例如数组是"),l("code",[v._v("[1, 2, 3]")]),v._v("，当你尝试使用"),l("code",[v._v("数组中的值(数组, 3)")]),v._v("时，结果是0，因为数组一共有三个元素，其中3的索引是2。并不存在索引为3的元素。")])]),v._v(" "),l("h2",{attrs:{id:"二维数组"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#二维数组"}},[v._v("#")]),v._v(" 二维数组")]),v._v(" "),l("p",[v._v("二维数组在编程中可以说是相当基础的操作，但是大部分人都会误以为工坊只支持一维数组。")]),v._v(" "),l("p",[v._v("我们可以通过索引处设置变量为空数组来初始化二维数组，并在索引处修改变量来追加成员。个中细节需要配合代码来理解，例如：")]),v._v(" "),l("ul",[l("li",[v._v("在索引处设置全局变量(A, 0, 空数组);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 0, 添加至数组, 1);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 0, 添加至数组, 2);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 0, 添加至数组, 矢量(111, 222, 333));")])]),v._v(" "),l("p",[v._v("之后便可以这样读取：")]),v._v(" "),l("ul",[l("li",[v._v("数组中的值(数组中的值(全局变量(A), 0), 2);")])]),v._v(" "),l("p",[v._v("另外，二维数组中，有以下“坑”需要注意：")]),v._v(" "),l("ul",[l("li",[v._v("将二维数组用作"),l("code",[v._v("数组值的索引")]),v._v("的第一个参数时，例如"),l("code",[v._v("数组值的索引(某二维数组, ……)")]),v._v("，前者将会被展开为一位数组。如本来的二维数组是"),l("code",[v._v("[[1, 2], [2, 3]]")]),v._v("，实际查找使用的是"),l("code",[v._v("[1, 2, 2, 3]")]),v._v("。")]),v._v(" "),l("li",[v._v("将数组用作"),l("code",[v._v("数组值的索引")]),v._v("的第二个参数时，例如"),l("code",[v._v("数组值的索引(某二维数组, 某数组)")]),v._v("，会取后者的第一个值在前者中进行查找。例如"),l("code",[v._v("数组值的索引(某二维数组, [1, 2])")]),v._v("，实际运行的代码相当于："),l("code",[v._v("数组值的索引(某二维数组, 1)")])])]),v._v(" "),l("p",[v._v("例如下面动作：")]),v._v(" "),l("ul",[l("li",[v._v("设置全局变量(A, 空数组);")]),v._v(" "),l("li",[v._v("在索引处设置全局变量(A, 0, 空数组);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 0, 添加至数组, 1);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 0, 添加至数组, 2);")]),v._v(" "),l("li",[v._v("在索引处设置全局变量(A, 1, 空数组);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 1, 添加至数组, 2);")]),v._v(" "),l("li",[v._v("在索引处修改全局变量(A, 1, 添加至数组, 3);")]),v._v(" "),l("li",[v._v("设置全局变量(B, 空数组);")]),v._v(" "),l("li",[v._v("修改全局变量(B, 添加至数组, 2);")]),v._v(" "),l("li",[v._v("修改全局变量(B, 添加至数组, 3);")]),v._v(" "),l("li",[v._v("设置全局变量(C, 数组值的索引(全局变量(A), 全局变量(B)));")])]),v._v(" "),l("p",[v._v("C的结果是1，因为：")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("全局变量(A)")]),v._v("本来为"),l("code",[v._v("[[1, 2], [2, 3]]")]),v._v("，查找时被展开为"),l("code",[v._v("[1, 2, 2, 3]")]),v._v("。")]),v._v(" "),l("li",[l("code",[v._v("全局变量(B)")]),v._v("为"),l("code",[v._v("[2, 3]")]),v._v("，实际使用2进行查找。")]),v._v(" "),l("li",[v._v("实际运行的动作相当于"),l("code",[v._v("数组值的索引([1, 2, 2, 3], 2)")]),v._v("，因此结果为1。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);