# Attr

Attr 属性节点，它代表一个 DOM 元素的属性。

继承：EventTarget <- Node <- Attr

**属性**

- `name` - 返回属性名

- `namespaceURI`

- `localName`

- `prefix`

- `ownerElement`

- `specified` - Boolean，是否已存在或指定属性值

- `value` - 设置或返回属性值

## NamedNodeMap

表示 Attr 属性节点的集合。

**属性**

`NamedNodeMap.length` - 返回集合中对象的个数。

**方法**

	NamedNodeMap.getNamedItem()

返回一个给定名字对应的属性节点（Attr）。

	NamedNodeMap.setNamedItem()

替换或添加一个属性节点（Attr）到映射（map）中。

	NamedNodeMap.removeNamedItem()

移除一个属性节点（Attr）。

	NamedNodeMap.item()

返回指定索引处的属性节点（Attr），或者，当索引超出或等于属性节点的数量时，返回 null。

	NamedNodeMap.getNamedItemNS()

根据给定的命名空间参数和name参数返回一个Attr对象。

	NamedNodeMap.setNamedItemNS()

替换、添加给定命名空间参数和name参数的Attr 对象 。

	NamedNodeMap.removeNamedItemNS()

删除给定命名空间参数和name参数的Attr 对象 。