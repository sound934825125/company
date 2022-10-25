# BOM 预览器对象模型

> 全局变量 window 是 Window API 的实例对象，
> 它的属性 `screen`、`history`、`location`、`navigator` 引用的实例共同组成 BOM 预览器对象模型。
> 它的属性 `document` 表示该窗口加载的文档 document 实例对象。

## Window API

作为预览器全局环境变量，可通过 `this`、`self` 访问。

EventTarget <- Window

Mixin：`WindowOrWorkerGlobalScope`、`WindowEventHandlers`

### Constructors 构造器

可以通过 `window.[Constructors]` 调用这些构造器。

- `DOMParser` - 
- `GeckoActiveXOBject` - 
- `Image` - 
- `Option` - 
- `QueryInterface` - 
- `StaticRange` - 
- `Worker` - 
- `XMLSerializer` - 
- `XPCNativeWrapper` - 
- `XPCSafeJSObjectWrapper` - 

### 属性

**对象引用**

- `self` - 当前 window 对象引用。
- `window` - 指向 window 对象自身。
- `document` - 表示窗口加载的文档对象。
- `screen`
- `history`
- `location`
- `navigator`
- `console` - 控制台对象
- `crypto` - crypto 对象
- `messageManager` - message manager 对象

**位置关系**

- `parent` - 返回父窗口。
- `top` - 返回最顶层的先辈窗口。
- `screenX`、`screenLeft`
- `screenY`、`screenTop`
- `outerheight` - 返回窗口的外部高度。
- `outerwidth` - 返回窗口的外部宽度。
- `pageXOffset` - 设置或返回当前页面相对于窗口显示区左上角的 X 位置。
- `pageYOffset` - 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
- `innerheight` - 返回窗口的文档显示区的高度。
- `innerwidth` - 返回窗口的文档显示区的宽度。

**基本属性**

- `length` - 设置或返回窗口中的框架数量。
- `name` - 设置或返回窗口的名称。
- `opener` - 返回对创建此窗口的窗口的引用。
- `status` - 设置窗口状态栏的文本。
- `content` -
- `customElements` -
- `dialogArguments` -
- `frameElement` -
- `frames` - 返回当前窗口中所有子窗体的数组。
- `fullScreen` -
- `locationbar` -
- `localStorage` -
- `menubar` -
- `performance` -
- `personalbar` -
- `returnValue` -
- `scrollbars` -
- `scrollX` -
- `scrollY` -
- `sessionStorage` -
- `speechSynthesis` -
- `statusbar` -
- `toolbar` -
- `visualViewport` -

**WindowOrWorkerGlobalScope**

- `caches`
- `indexedDB`
- `isSecureContext`
- `origin`

**非标准**

- `closed` - 返回窗口是否已被关闭。
- `event` - 返回当前上下文正在处理的事件，若当前未处理事件则返回 undefined。
- `controllers` - 
- `devicePixelRation` - 
- `DOMMatrix` - 
- `DOMMatrixReadOnly` - 
- `DOMPoint` - 
- `DOMPointReadOnly` - 
- `DOMQuad` - 
- `DOMRect` - 
- `DOMRectReadOnly` - 
- `isSecureContext` - 
- `mozInnerScreenX` - 
- `mozInnerScreenY` - 
- `mozPaintCount` - 
- `scrollMaxX` - 
- `scrollMaxY` - 
- `sidebar` - 

### 方法

- `alert()` - 显示带有一段消息和一个确认按钮的警告框。
- `confirm()` - 显示带有一段消息以及确认按钮和取消按钮的对话框。
- `close()` - 关闭浏览器窗口。
- `open()` - 打开一个新的浏览器窗口或查找一个已命名的窗口。
- `print()` - 打印当前窗口的内容。
- `prompt()` - 显示可提示用户输入的对话框。
- `blur()` - 把键盘焦点从顶层窗口移开。
- `createPopup()` - 创建一个 pop-up 窗口。
- `focus()` - 把键盘焦点给予一个窗口。
- `moveBy()` - 可相对窗口的当前坐标把它移动指定的像素。
- `moveTo()` - 把窗口的左上角移动到一个指定的坐标。
- `resizeBy()` - 按照指定的像素调整窗口的大小。
- `resizeTo()` - 把窗口的大小调整到指定的宽度和高度。
- `scrollBy()` - 按照指定的像素值来滚动内容。
- `scrollTo()` - 把内容滚动到指定的坐标。

**定时器**

	var timeoutID = window.setTimeout(func, delay, arg...)

- func - 触发的函数
- delay - 定时
- `clearTimeout("timeoutID")` - 通过定时器名取消指定定时器。
- 返回值 - timeoutID，一个正整数编号，可用于取消定时器。

**周期定时器**

	var IntervalID = setInterval(func, delay, arg...)

- func - 触发的函数
- delay - 定时，周期性触发
- `clearInterval("IntervalID")` - 通过定时器名取消指定定时器。
- 返回值 - IntervalID，一个正整数编号，可用于取消周期定时器。

## Screen API

- `availHeight` - return     显示屏幕的高度 (除 Windows 任务栏之外)。
- `availWidth` - return     显示屏幕的宽度 (除 Windows 任务栏之外)。
- `bufferDepth` - return/set 调色板的比特深度。
- `colorDepth` - return     目标设备/缓冲器上的调色板的比特深度。
- `deviceXDPI` - return     显示屏幕的每英寸水平点数。
- `deviceYDPI` - return     显示屏幕的每英寸垂直点数。
- `fontSmoothingEnabled` - return     用户是否在显示控制面板中启用了字体平滑。
- `height` - return     显示屏幕的高度。
- `logicalXDPI` - return     显示屏幕每英寸的水平方向的常规点数。
- `logicalYDPI` - return     显示屏幕每英寸的垂直方向的常规点数。
- `pixelDepth` - return     显示屏幕的颜色分辨率（比特每像素）。
- `updateInterval` - return/set 屏幕的刷新率。
- `width` - return     显示器屏幕的宽度。

## History API

浏览器曾经在标签页或者框架里访问的会话历史记录。
History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

**属性**

- `length` - Number，浏览器历史列表中的 URL 数量。
- `scrollRestoration` - 实验性，
- `state` - 表示历史堆栈顶部的状态值。

**方法**

- `back()` - 前往历史堆栈上一页。
- `forward()` - 前往历史堆栈下一页。
- `go()` - 相对当前位置，前往历史堆栈指定页。
- `pushState()` - 
- `replaceState()`

**扩展**

WebExtensions history 用于浏览器历史记录交互。

## Location API

- `hash` - set/return 从井号 (#) 开始的 URL（锚）。
- `host` - set/return 主机名和当前 URL 的端口号。
- `hostname` - set/return 当前 URL 的主机名。
- `href` - set/return 完整的 URL。
- `pathname` - set/return 当前 URL 的路径部分。
- `port` - set/return 当前 URL 的端口号。
- `protocol` - set/return 当前 URL 的协议。
- `search` - set/return 从问号 (?) 开始的 URL（查询部分）。
- `assign()` - load new document
- `reload()` - reload now document
- `replace()` - newdocument replace olddocument

## Navigator API

- `navigator.plugins[]` - 所有嵌入式对象的引用。浏览器已安装的插件,它所支持的 MIME 类型的列表
- `navigator.appCodeName` - return 浏览器   代码名
- `navigator.appMinorVersion` - return 浏览器   次级版本
- `navigator.appName` - return 浏览器   名称
- `navigator.appVersion` - return 浏览器   平台和版本信息
- `navigator.browserLanguage` - return 浏览器   语言
- `navigator.cookieEnabled` - return 浏览器   是否启用cookie true/false 
- `navigator.cpuClass` - return 操作系统 CPU等级
- `navigator.onLine` - return 操作系统 是否脱机 true/false
- `navigator.platform` - return 操作系统
- `navigator.systemLanguage` - return OS系统   默认语言
- `navigator.userLanguage` - return OS系统   自然语言设置
- `navigator.userAgent` - return "客户机"发送"服务器"的 user-agent 头部的值
- `navigator.javaEnabled()` - 是否启用java true/false
- `navigator.taintEnabled()` - 是否启用data tainting(数据污点)