## JavaScript 规范

- 不要在 Array 上使用 for-in 循环，它只适用于 `object/map/hash` 。
- 异步加载第三方内容避免阻塞页面。Youtube 视频、like/tweet 按钮。
- 避免使用 jQuery 实现动画。

**将 DOM 保存为变量，以减少遍历 DOM 的昂贵代价**
	
		var myListHTML = document.getElementById("myList").innerHTML;

**指定数组长度能更好地缓存**

		var arr = new Array(1000)

**二元和三元操作符**

始终将操作符写在前一行以免分号的隐式插入产生预想不到的问题。

	var z = a ?
		moreComplicatedB :
		moreComplicatedC;

	var x = foo.bar().
		doSomething().
		doSomethingElse();

**使用操作符替代 if 语句**

三元运算符

	return val ? foo() : bar();

二元布尔操作符

	function foo(opt_win) {
		var win = opt_win || window;
		// ...
	}

### 注释规范

- 尽量避免多行注释。
- 函数/方法使用多行注释`/*...*/`
	- 函数说明
	- 返回值和参数说明并包含类型说明
	- 外部不可访问的内部函数使用`@inner`标识

例：

	/**
	 * 函数描述...
	 *
	 * @param {string} arg_1 参数一的说明...
	 * @param {string} arg_2 参数二的说明...
	 * 换行...
	 * @param {number=} arg_3 参数三的说明...（可选）
	 * @return {Object} 返回值描述...
	 */
	function foo(arg_1, arg_2, arg_3) {...}

### 文件注释

包含文件大体内容、作者、依赖关系和兼容性

	/**
	 * @fileoverview Description of file, its uses and information
	 * about its dependencies.
	 * @author user@meizu.com (Firstname Lastname)
	 * Copyright 2015 Meizu Inc. All Rights Reserved.
	 */

### 命名规则

**变量**

Camel 命名法。

	var loadingModules = {};

**私有属性、变量和方法**

下划线 `_` 开头。

	var _privateMethod = {};

**常量**

全大写，下划线 `_` 分隔单词。

	var HTML_ENTITY = {};

**函数和参数**

Camel 命名法。

	function stringFormat(theBells) {}

**类**

Pascal 命名法

**类方法和属性**

使用 Camel 命名法

	function TextNode(value, engine) {
	    this.value = value;
	    this.engine = engine;
	}

	TextNode.prototype.clone = function () {
	    return this;
	};

**枚举变量**

Pascal 命名法。

**枚举属性**

全大写，下划线 `_` 分隔单词。

	var TargetState = {
    	READING: 1,
    	READED: 2,
    	APPLIED: 3,
    	READY: 4
	};

**缩写**

	function XMLParser() {}

	function insertHTML(element, html) {}

### 命名语法

**类名**，使用名词.n

	function Engine(options) {}

**函数名**，使用动宾短语。

	function getStyle(element) {}

**boolean**，类型的变量使用 is 或 has 开头。

	var hasMoreCommands = false;

**Promise 对象**，用动宾短语的进行时表达。

	var loadingData = ajax.get('url');

### 常用接口命名

- options - 选项，不要使用 config、opts
- active - 当前，不要使用 current
- index - 索引
- trigger - 触点元素
- triggerType - 触发方式、类型
- context - 标识传入的 this 对象
- object - 不推荐缩写
- element - 不推荐缩写
- length - 不推荐缩写
- prev - previous 先前的，前一个
- next - 之后的，下一个
- constructor - 不推荐缩写
- easing - 动画平滑函数
- min - minimize 
- max - maxmize
- DOM 
- .hbs - 后缀，表示模板
- link - 超链接
- img - 图片路径
- dataset - html5 data-xxx 数据接口
- theme - 主题
- className - 类名
- classNameSpace - 类命名空间

### 常用块命名

- title - 主要文本
- btn - button
- navigation - 导航
- menu - 菜单
- focus - 焦点图
- logo - 标志
- icon - 图标
- tab - 标签页
- column - 栏目
- label - 商标 
- 登录条 - loginbar
- 注册 - regsiter
- 广告 - banner
- 热点 - hot
- 新闻 - news
- 下载 - download
- 搜索 - search
- 友情链接 - friendlink
- 版权 - copyright
- 提示信息 - msg
- 小技巧 - tips
- 指南 - guild
- 服务 - service
- 状态 - status
- 投票 - vote
- 合作伙伴 - partner
- 注释 - note
- 面包屑 - breadCrumb(即页面所处位置导航提示)
- 功能区 - shop(如购物车，收银台)
- 当前的 - current
- 加入 - joinus

### 添加类型标记（非 W3CShool 标准）

- a-array - 数组
- b-boolean - 布尔
- f-float - 浮点型
- fn-function - 函数、方法
- i-int - 整形
- o-object - 对象
- re-regular - 正则表达式
- s-string - 字符串
- v-variable - 所有类型变量

## 移动优化

**移动端预览器点击延时优化**

预览器会等待 300ms 以判断用户是否再次点击屏幕，触发 Click 事件。使用 FastClick 能够优化在移动端的这个延时。

**快速回弹滚动**

早期预览器不支持非 body 元素滚动。使用 iScroll、Swiper 解决。

**获取滚动条值**

- PC - `document.scrollTop` 和 `document.scrollLeft`
- IOS 和 Android  - `window.scrollY` 和 `window.scrollX`

**清除 IOS 输入框默认内阴影**

	input,textarea {
	    border: 0; 					/* 方法1 */
	    -webkit-appearance: none; 	/* 方法2 */
	}

**关闭 IOS Safari 自动电话号码识别**

	<!-- 关闭电话号码识别： -->
	<meta name="format-detection" content="telephone=no" />

	<!-- 开启电话功能： -->
	<a href="tel:123456">123456</a>

	<!-- 开启短信功能： -->
	<a href="sms:123456">123456</a>

**关闭 Android 自动邮箱识别**

	<!-- 关闭邮箱地址识别： -->
	<meta name="format-detection" content="email=no" />

	<!-- 开启邮件发送： -->
	<a mailto:>mobile@gmail.com">mobile@gmail.com</a>

**指定 iOS 的 safari 顶端状态条的样式**

	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<!-- 可选default、black、black-translucent -->

**自动调整页面窗口等同设备窗口，禁止用户缩放。**

	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

### 设备检测

摘自：[https://github.com/binnng/device.js](https://github.com/binnng/device.js)

	var WIN = window;
	var LOC = WIN["location"];
	var NA = WIN.navigator;
	var UA = NA.userAgent.toLowerCase();

	function test(needle) {
	  return needle.test(UA);
	}

	var IsTouch = "ontouchend" in WIN;
	var IsAndroid = test(/android|htc/) || /linux/i.test(NA.platform + "");
	var IsIPad = !IsAndroid && test(/ipad/);
	var IsIPhone = !IsAndroid && test(/ipod|iphone/);
	var IsIOS = IsIPad || IsIPhone;
	var IsWinPhone = test(/windows phone/);
	var IsWebapp = !!NA["standalone"];
	var IsXiaoMi = IsAndroid && test(/mi\s+/);
	var IsUC = test(/ucbrowser/);
	var IsWeixin = test(/micromessenger/);
	var IsBaiduBrowser = test(/baidubrowser/);
	var IsChrome = !!WIN["chrome"];
	var IsBaiduBox = test(/baiduboxapp/);
	var IsPC = !IsAndroid && !IsIOS && !IsWinPhone;
	var IsHTC = IsAndroid && test(/htc\s+/);
	var IsBaiduWallet = test(/baiduwallet/);
