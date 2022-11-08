# composables.items

## makeItemsProps

- `items[]`
- itemTitle: `title`
- itemValue: `value`
- itemChildren: `children`
- itemProps: `props`
- returnObject - Boolean

## transformItem

返回被转换的 items 数组

- title
	+ items 为字符串或显式指定
	+ 可通过 props.itemTitle 指定 `items[]` 中任意键
	+ 未指定则为 `"[object Object]"`
- value
	+ items 为字符串或显式指定
	+ 可通过 props.itemProps 指定 `items[]` 中任意键
	+ 未指定则为 `items[]` 原始值
- `props: { title, value }` - 可通过 props.itemProps 指定 `items[]` 中任意键
- children - props.itemChildren 中传入的值
- raw - 未被转换的原始 items 数组

## transformItems

遍历 items 数组, 调用 transformItem

	transformItems(props, items)

## useItems

返回工具函数

	useItems(props)

- items
- `transformIn(value)` - 遍历调用 transformItem
- `transformOut(value)`