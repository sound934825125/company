# VAutocomplete source

## 自定义事件 emits

- `click:clear` - 清除
- `update:search` - 更新搜索
- `update:modelValue` - 值更新
- `update:menu` - 菜单更新


## 组件树 useRender

```
VTextField
 
- VMenu -> VList -> VListItem

- v-autocomplete__selection
	+ props、slots 中存在 VChip, `<v-defaults-provider><v-chip>{{item.title}}</v-chip><v-defaults-provider>`
	+ 否则 `slots.selection`
	+ 都不存在则显示 `<span>{{item.title}}</span>`
```

VTextField


- onClick:clear
- onClick:control
- onClick:input
- onFocus - 获得焦点
- onBlur - 失去焦点
- onKeydown - 键盘

绑定 search 值

- onUpdate:modelValue
- onInput - value 改变时触发
- modelValue: search.value

VMenu

- onUpdate:modelValue
- onAfterLeave
- modelValue - menu.value

VList

- onMousedown

## Function

highlightResult(text, matches, length)

onClear(e)
onClickControl
onKeydown(e)
onInput(e)
onAfterLeave()
select(item)

watch(isFocused)
watch(search)