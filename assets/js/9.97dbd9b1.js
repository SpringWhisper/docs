(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{216:function(v,_,t){"use strict";t.r(_);var l=t(17),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"持续事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续事件"}},[v._v("#")]),v._v(" 持续事件")]),v._v(" "),t("p",[v._v("目前为止，有“持续 - 全局”和“持续 - 每名玩家”两个持续事件。它们有一些难以把握。官方说：“当首次检查就满足条件时，则会执行行动。当未满足条件列表，但之后又满足时，则会尝试再次执行行动”。")]),v._v(" "),t("p",[v._v("我们举一些例子，来看看持续事件到底怎么回事。")]),v._v(" "),t("h2",{attrs:{id:"只运行一次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只运行一次"}},[v._v("#")]),v._v(" 只运行一次")]),v._v(" "),t("p",[v._v("使用持续事件但不附加任何条件，它在一次游戏中只会运行一次。你可以借此实现初始化。")]),v._v(" "),t("h2",{attrs:{id:"结合-循环-多次运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结合-循环-多次运行"}},[v._v("#")]),v._v(" 结合“循环”多次运行")]),v._v(" "),t("p",[v._v("例如，我们想追踪玩家位置，如果玩家的Z坐标大于100，我们就每秒给玩家恢复100点生命值：")]),v._v(" "),t("ul",[t("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),t("li",[v._v("条件：Z方向分量(位置(事件玩家)) > 100")]),v._v(" "),t("li",[v._v("动作：\n"),t("ul",[t("li",[v._v("等待(1, 无视条件)")]),v._v(" "),t("li",[v._v("治疗(事件玩家, 无, 100)")]),v._v(" "),t("li",[v._v("如条件为“真”则循环")])])])]),v._v(" "),t("p",[v._v("如果没有"),t("code",[v._v("如条件为“真”则循环")]),v._v("，那么便达不到我们的目的，因为条件并没有从满足变为不满足再变为满足，规则就只会运行一次。")]),v._v(" "),t("h2",{attrs:{id:"等待-中不会运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#等待-中不会运行"}},[v._v("#")]),v._v(" “等待”中不会运行")]),v._v(" "),t("p",[v._v("例如，我们想追踪玩家位置，如果玩家的Z坐标大于100，我们就在3秒后将玩家移动到某个位置：")]),v._v(" "),t("ul",[t("li",[v._v("事件：持续 - 每名玩家")]),v._v(" "),t("li",[v._v("条件：Z方向分量(位置(事件玩家)) > 100")]),v._v(" "),t("li",[v._v("动作：\n"),t("ul",[t("li",[v._v("等待(3, 无视条件)")]),v._v(" "),t("li",[v._v("传送(事件玩家, 矢量(0, 0, 0))")])])])]),v._v(" "),t("p",[v._v("这个规则能达到我们的目的，但它是有问题的：如果一个玩家在Z=100的地方进进出出（即一会儿小于100，一会儿又大于100），那么玩家也只会传送第一次。原因是“等待”过程中，OW会认为规则仍然在运行，因此不会运行第二次。解决是把等待改成"),t("code",[v._v("等待(3, 当为“假”时中止)")]),v._v("。")]),v._v(" "),t("p",[v._v("借助这个现象，我们可以给规则加“CD”。例如禅雅塔打中的玩家会造成“破甲”效果三秒，冷却时间五秒，从“破甲”触发开始计时：")]),v._v(" "),t("ul",[t("li",[v._v("事件：玩家受到伤害")]),v._v(" "),t("li",[v._v("条件：英雄(攻击方) == 英雄(禅雅塔)")]),v._v(" "),t("li",[v._v("动作：\n"),t("ul",[t("li",[v._v("设置受到伤害(事件玩家, 150)")]),v._v(" "),t("li",[v._v("等待(3, 无视条件)")]),v._v(" "),t("li",[v._v("设置受到伤害(事件玩家, 100)")]),v._v(" "),t("li",[v._v("等待(2, 无视条件)")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);