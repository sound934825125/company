# Element API

所有 Document 下的对象都继承自它。

**继承**

EventTarget <- Node <- Element <-

<- `HTMLElement` <- HTMLAnchorElement、...

<- `SVGElement` <- SVGFEMergeElement、...

## 属性

- `attributes` - NamedNodeMap，返回该元素相关的属性集合。
- `classList` - DOMTokenList，返回该元素包含的 class 属性。
- `tagName` - 元素的标签名。
- `className` - DOMString，表示这个元素的 class。
- `id` - DOMString
- `innerHTML` - DOMString，内容文本。
- `localName` - DOMString，元素名称本地化的部分。
- `outerHTML` - DOMString，该元素以及其后代的文本。
- `computedName` - DOMString，应用于该元素的标签名。
- `computedRole` - DOMString，  
- `namespaceURI` - namespace URI
- `prefix` - DOMString，命名空间前缀。

- `clientHeight` - Number，表示内部相对于外层元素的高度。
- `clientLeft` - Number，表示该元素距离它左边界的宽度。
- `clientTop` - Number，表示该元素距离它上边界的高度。
- `clientWidth` - Number，表示该元素内部的宽度。

- `scrollHeight` - Number，滚动视图高度。
- `scrollLeft` - Number，横向滚动条距离最左的位移.
- `scrollTop` - Number，表示该元素纵向滚动条距离
- `scrollWidth` - Number，表示元素的滚动视图宽度。

- `nextElementSibling` - Element, 该元素下一个兄弟节点。
- `previousElementSibling` - Element, 该元素上一个兄弟节点。

- `shadowRoo` - 返回元素托管的影子根。
- `slot` - 实验性的，插入元素的影子插槽名。
- `Slotable.assignedSlot` - HTMLSlotElement，表示插入的 `<slot>`，在 Slotable mixin 定义的属性。

**非标准属性**

- `openOrClosedShadowRoot` - 返回元素托管的影子根，不管打开还说关闭。仅对 webeextensions 可用。
- `scrollLeftMax` - 返回类型为： Number，表示该元素横向滚动条可移动的最大值
- `scrollTopMax` - 返回类型为：Number ，表示该元素纵向滚动条可移动的最大值
- `tabStop` - Is a Boolean indicating if the element can receive input focus via the tab key.

## 事件句柄

过渡到全屏模式时触发，过渡完成时。

	targetDocument.onfullscreenchange = fullscreenChangeHandler;

过渡到全屏模式发生错误时触发。

	targetDocument.onfullscreenerror = fullscreenerrorHandler;

## 方法

- `addEventListener(type, listener, options | useCapture)` - 继承自 EventTarget，为特定事件绑定监听函数。
- `dispatchEvent()` - 继承自 EventTarget，向这个元素发生一个事件，return Boolean 表示该事件是否取消。
- `attachShadow()` - return shadowRoot，将影子 DOM 树附加到指定元素。
- `scroll()` - 滚动到给定元素的特定坐标。
- `scrollBy()` - 按给定值滚动元素。
- `scrollTo()` - 滚动到给定的一组坐标。
- `setPointerCapture()` - 指定特定元素作为未来指针事件的捕获目标。
- `toggleAttribute()` - 在指定元素上切换布尔属性。

**get & set 获取与设置**

- `getAttribute()` - 返回属性值
- `getAttributeNames()` - Array，返回当前元素的属性名的数组。
- `getAttributeNS()` - Object，检索当前元素，返回指定属性名的属性值。
- `getAttributeNode() ` - 返回属性节点
- `getAttributeNodeNS() ` - Attr，检索当前元素，返回指定属性名的属性值。
- `getBoundingClientRect()` - 返回元素的大小及其相对于视口的位置。
- `getClientRects()` - 返回矩形集合，指示每行文本的边界。
- `getElementsByClassName()` - HTMLCollection，检索匹配给定 ClassName 的元素集合。
- `getElementsByTagName()` - HTMLCollection，检索匹配给定 TagName 的元素集合。
- `getElementsByTagNameNS()` - HTMLCollection，检索匹配给定命名空间的元素集合。

- `querySelector()` - Node，返回与给定选择器匹配的第一个元素节点。
- `querySelectorAll()` - NodeList，返回与给定选择器匹配的所有元素节点。

- `setAttribute()` - 设置属性。
- `setAttributeNS()` - 设置指定命名空间属性。
- `setAttributeNode() ` - 设置指定属性节点。
- `setAttributeNodeNS() ` - 设置指定命名空间属性节点。

**has 判断**

- `hasAttribute()` - Boolean，指定元素是否具有指定属性。
- `hasAttributeNS()` - Boolean，指定元素在指定命名空间中是否具有指定属性。
- `hasAttributes()` - Boolean，指定元素是否具有指定属性数组。
- `hasPointerCapture()` - 调用指定元素的元素是否具有给定 ID 指针。

**insert 插入**

- `insertAdjacentElement()` - 
- `insertAdjacentHTML()` - 
- `insertAdjacentText()` - 

**remove 删除**

- `removeAttribute()` - 删除指定属性。
- `removeAttributeNS()` - 
- `removeAttributeNode() ` - 

**实验性的**

- `animate()` - 实验性的，A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- `closest()` - 实验性的，Element，返回与给定的选择器最近的祖先元素，包括自身。
- `computedStyleMap()` - 实验性的，return StylePropertyMapReadOnly，提供一个只读的 CSS 声明块。
- `getAnimations()` - 实验性的，Returns an array of Animation objects currently active on the element.
- `matches()` - 实验性的，Returns a Boolean indicating whether or not the element would be selected by the specified selector string.
- `pseudo()` - 实验性的，Returns a CSSPseudoElement representing the child pseudo-element matched by the specified pseudo-element selector.
- `requestFullscreen()` - 实验性的，Asynchronously asks the browser to make the element full-screen.
- `requestPointerLock()` - 实验性的，Allows to asynchronously ask for the pointer to be locked on the given element.
- `scrollIntoView()` - 实验性的，Scrolls the page until the element gets into the view.
- `releasePointerCapture()` - 

- `setCapture()` - 非标准，Sets up mouse event capture, redirecting all mouse events to this element.
- `createShadowRoot()` - 强烈反对，非标准。

## HTMLElement

所有 HTML 元素的 API 都实现了它。

**属性**

- `accessKey` - 快捷键激活元素
- `accessKeyLabel` - DOMString，访问元素的快捷键。
- `contentEditable` - String，内容是否可编辑的状态
- `isContentEditable` - Boolean，内容是否可编辑
- `contextMenu` - 元素的右键菜单
- `dataset` - Object，获取元素的自定义属性。
- `dir` - ltr、rtl、auto，元素方向
- `draggble` - Boolean，是否可拖拽
- `dropzone` - 
- `hidden` - Boolean，是否隐藏
- `lang`
- `properties` - 
- `spellcheck` - Boolean
- `style` - style 属性。
- `tabIndex` - tab 键控制顺序。
- `title` - 获取或设置元素 title 属性
- `translate` - Boolean，获取或设置元素是否可翻译。

- `offsetParent` - Element，有定位的最近父元素
- `offsetHeight` - 
- `offsetLeft` - 
- `offsetTop` - 
- `offsetWidth` - Number，content + border 宽度

**方法**

- `HTMLElement.blur()` - 元素失去焦点
- `HTMLElement.click()` - 触发元素的点击事件
- `HTMLElement.focus()` - 元素获得焦点
- `HTMLElement.forceSpellCheck()` - 实验性	 

## SVGElement

所有 SVG 元素的 API 都实现了它。

