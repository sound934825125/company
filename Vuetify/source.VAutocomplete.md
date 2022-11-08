# VAutocomplete source

## 组件结构

> |- VAutocomplete > VtextField > input
> |
> | |- VMenu > VList 								遮罩, 弹出可选项
> | | |- noData 									无数据时显示: 存在 slots.noData 则使用, 否则使用 props.noDataText 文本创建 VListItem
> | | |- VListItem 									遍历显示选项: 存在 slots.item 则使用, 否则创建 VListItem
> | | | |- 如果 props.multiple 使用 prepend 插槽创建 VCheckboxBtn
> | | | |- 使用 title 插槽显示 search 值
> | 
> | |- div 											遍历显示选中项
> | | |- VDefaultsProvider 							hasChips 则显示默认样式 
> | | |- template 									否则通过插槽显示
> | | | |- slot:selection -> slot:chip
> | | | |- span 									分隔符

## Function

**自定义事件 emits**

- `click:clear` - 清除
- `update:search` - 更新搜索
- `update:modelValue` - 值更新
- `update:menu` - 菜单更新

**方法与函数**

	highlightResult(text, matches, length)

	select(item)

**监听器**

	watch(isFocused, val => {})

	watch(search, val => {})

**事件处理函数**

- onClear(e)
- onClickControl()
- onKeydown(e)
- onInput(e)
- onAfterLeave()