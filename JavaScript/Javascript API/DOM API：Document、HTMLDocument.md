# Document API

继承：EventTarget <- Node <- Document <- HTMLDocument <- #document

## 属性

- `characterSet` - 文档使用的字符集。
- `childElementCount` - 
- `children` - 
- `compatMode` - 实验性，quirks、strict，怪异模式或严格模式。
- `contentType` - 实验性，根据 MIME Header，返回 Content-Type
- `currentScript` - 
- `doctype` - 文档类型
- `documentURI` - 文档路径
- `fonts` - FontFaceSet 接口
- `firstElementChild` - 
- `fullscreenEnabled` - 
- `hidden` - Boolean，当前页面是否隐藏。
- `implementation` - DOM 实现。
- `lastElementChild` - 
- `pictureInPictureElement` - 
- `pictureInPictureEnabled` - 
- `plugins` - 可用的插件列表
- `preferredStyleSheetSet` - 依网页作者的喜好回传阶层样式集。
- `scrollingElement` - Element 元素的引用
- `selectedStyleSheetSet` - 返回当前使用的样式集。
- `visibilityState` - 'visible'、'hidden'、'prerender'、'unloaded'，表明可见性。

- `peaturePolicy` - 实验性，
- `timeline` - 实验性，
- `mozSyntheticDocument` - 非标准，

**元素与集合**

- `forms` - HTMLCollection，`<form>` 标签的集合
- `images` - HTMLCollection，`<img>` 标签的集合
- `links` - HTMLCollection，`<link>` 和 `<area>` 标签的集合
- `body` - `<body>` 或 `<frameset>` 元素
- `documentElement` - 直接子节点，HTML 文档为 `<html>` 元素
- `head` - `<head>` 元素
- `embeds` - list，嵌入的 `<embed>` 元素。
- `scripts` - 所有 `<scripts>` 元素

**HTMLDocument 扩展属性**

- `cookie` - 可读可写的字符串，当前文档的cookie(识别用户)读取、创建、修改、删除
- `defaultView` - 
- `designMode` - 
- `dir` - 
- `lastModified` - 最后修改日期和时间
- `location` - 
- `readyState` - 
- `referrer` - 载入当前文档的文档的URL，允许客户端JavaScript访问HTTP引用头部。
- `title` - 标题
- `URL` - 当前文档的URL

**DocumentOrShadowRoot Mixin 属性**

- `activeElement`
- `fullscreenElement` - 
- `pointerLockElement` - 
- `styleSheets` - 文档中可用样式表的列表。

## 方法

- `adoptNode()` - 从外部文档采用节点。
- `enableStyleSheetsForSet()` - 
- `hasStorageAccess()` - 
- `importNode()` - 
- `requestStorageAccess()` - 
- `querySelector()` - 
- `querySelectorAll()` - 
- `evaluate()` - 

**create 创建**

- `createAttribute()` - Attr，创建属性节点
- `createAttributeNS()` - 
- `createCDATASection()` - 
- `createComment()` - 
- `createDocumentFragment()` - 
- `createElement()` - 创建元素节点
- `createElementNS()
- `createEvent()` - 
- `createNodeIterator()` - 
- `createProcessingInstruction()` - 
- `createRange()` - 
- `createTextNode()` - 创建文本节点
- `createTouchList()` - 
- `createTreeWalker()` - 
- `createExpression()` -
- `createNSResolver()` -

**getElement[s] 获取元素**

- `getElementsByClassName()` - 
- `getElementsByTagName()` - 
- `getElementsByTagNameNS()` - 
- `getElementById` -

**非标准**

- `caretRangeFromPoint()` - 
- `releaseCapture()` - 
- `mozSetImageElement` -

**实验的**

- `exitPointerLock()` - 
- `getAnimations` -		

**HTMLDocument 扩展方法**

- `close()` - 关闭流，并显示数据
- `execCommand()` - 
- `getmentByName()` - 
- `hasFocus()` - 
- `open()` - 
- `queryCommandEnabled()` - 
- `queryCommandIndeterm()` - 
- `queryCommandState()` - 
- `queryCommandSupported()` - 
- `queryCommandValue()` - 
- `write()` - 向文档写入内容。
- `writeln()` - 向文档写入内容并添加换行符。

**DocumentOrShadowRoot Mixin 方法**

- `getSelection()` - 
- `elementFromPoint()` - 
- `elementsFromPoint()` - 
- `caretPositionFromPoint()` - 

## Event handlers 事件监听器

定义于 `GlobalEventHandlers` Mixin 中
通过 `HTMLElement`、`Document`、`Window`、`WorkerGlobalScope` 为 `Web worker` 实现

## 事件

