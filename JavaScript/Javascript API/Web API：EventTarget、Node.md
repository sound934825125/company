## EventTarget API

EventTarget 提供注册事件处理函数的方法。

实现：`Window`、`Node`

### 方法

**addEventListener**

在 EventTarget 上注册特定事件的处理函数。

	EventTarget.addEventListener(Event,Listener,Options)

- Event - 注册的事件名
- Listener - 注册的处理函数
- 选项
	- capture - Boolean，绑定在"冒泡"或"捕获"流中。
	- once - Boolean，触发一次后删除处理函数
	- passive - Boolean，忽略 preventDefault（解决预览器检测导致卡顿）

**removeEventListener**

在 EventTarget 中删除特定事件的处理函数。

	EventTarget.removeEventListener()

**dispatchEvent**

创建自定义事件，并分派到 EventTarget

	EventTarget.dispatchEvent()

## Node API

> 所有 DOM 节点都继承自它，Node 提供节点的基本属性和操作方法，
> 包括：添加、删除、替换、比较、检查节点的操作方法，
> 包括：该节点父子兄弟关系节点和包含的所有子节点数组。  

继承：`EventTarget`

实现：

- `Document`
- `Element`
- `Attr` - 该接口的实例对象表示一个 DOM 元素的属性。
- `CharacterData` - 抽象类，代表 Node 对象包含的字符。
	- `Text`
	- `Comment`
	- `ProcessingInstruction`
	- `CDATASection`
- `ProcessingInstruction` - XML 节点
- `DocumentFragment` - 文档片断，微型的 Document 用于储存节点。
- `DocumentType`
- `Notation`
- `Entity`
- `EntityReference`

### 属性

- `childNodes` - NodeList 对象，包含该节点的所有实时子节点。
- `nodeName` - DOMString，该节点名字，以 `#name` 表示。和它的原型对应，如：`HTMLAudioElement`。
- `nodeValue` - 返回或设置当前节点的值。
- `textContent` - 返回或设置该元素内所有子和后代的文本内容。
- `ownerDocument` - 返回这个元素属于的 Document 对象。
- `parentElement` - 返回这个节点的父元素节点。
- `baseURI` - DOMString，表示该节点所在位置的 URI。
- `isConnected` - Boolean，表示节点是否已连接到上下文。
- `nodeType` - Number，表示节点类型。
	- `1` - 元素节点
	- `3` - 文本节点
	- `4` - cdata section
	- `7` - processing instruction
	- `8` - 注释节点
	- `9` - 文档节点
	- `10` - 文档类型节点
	- `11` - document fragment

**节点关系**

- `parentNode` - node，返回父节点。
- `firstChild` - node，返回第一个子节点。
- `lastChild` - node，返回最后一子节点。
- `nextSibling` - node，返回同级的下一个节点。
- `previousSibling` - node，返回同级上一个节点。

### 方法

**将节点插入到指定节点后**

	node.appendChild(aChild)

**将节点插入到指定节点前**

	var insertedNode = parentNode.insertBefore(newNode,referenceNode)

- `insertedNode`- 被插入节点(newNode)
- `parentNode`- 新插入节点的父节点
- `newNode`- 用于插入的节点
- `referenceNode`- newNode 将要插在这个节点之前

**规范化文本节点（删除空和连接断开的文本节点）**

	node.normalize()

**克隆元素**

	node.cloneNode(deep)

**比较当前节点与任意文档中的另一个节点的位置关系**

	compareMask = node.compareDocumentPosition( otherNode )

返回值 - 十进制码

- `1` - 存在不同文档
- `2` - node 在 otherNode 后
- `4` - node 在 otherNode 前
- `8` - node 在 otherNode 内
- `16` - otherNode 在 node 内
- `32` - 待定

**检测 node 是否拥有子节点**

	node.hasChildNodes()
	
返回值 - Boolean

**检查 namespaceURI 是否默认命名空间**

	node.isDefaultNamespace(namespaceURI)

返回值：Boolean

**检测 node 是否相等**
	
	var isEqualNode = node.isEqualNode(otherNode);
	
返回值：Boolean

**删除子节点**

	node.removeChild(childnode)

返回值：被删除的子节点	

**替换节点**

	node.replaceChild(newnode,oldnode)

返回值：被替换的旧节点

**检测后代节点（被包含）**

	node.contains( otherNode )

- node - 是否包含 otherNode
- otherNode - 是否被 otherNode 包含

返回值：Boolean

**返回根节点**

	var root = node.getRootNode(options);

返回值：在标准网页中返回 HTMLDocument 对象。

**？返回命名空间前缀**

	lookupPrefix

**？返回命名空间前缀URI**

	lookupNamespaceURI






























