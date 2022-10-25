# Autocomplete

## Props

- eager -
- open-on-clear
- return-object
- hide-no-data - 隐藏无数据时的显示
- no-data-text - 设置无数据时显示文本
- readonly - 只读
- multiple - Boolean, 多选
- transition - 特效

- label - 标签, 获得焦点时将缩小到左上角
- placeholder - 占位符文本
- dense - 样式, 紧凑的
- flat - 样式, 平坦的
- prepend-icon

**下拉菜单与选中项**

- chips - 薯片
- closable-chips - 允许关闭的薯片
- menu - Boolean
- menu-icon - 下拉菜单按钮
- menu-props
- hide-selected - 隐藏选择器

**过滤器**

- custom-filter - Function, 自定义筛选
- custom-key-filter
- filter-keys
- filter-mode
- no-filter - 不筛选

**搜索**

- model-value - 双向绑定的已选中项
- search - 双向绑定的已 input 的搜索文本
- `v-model:search-input="search"`
- `v-model:search="search"`
- cache-items

## User: items props

通过 items props 传入的数组项将被自动转换:

	const items = [
		{ "title": "", "value": "", "props": {"title": "", "value": ""}, "raw": ""  },
		...
	]

- `item.title` - 若 item 中显式指定或传入值为字符串则自动绑定, 否则绑定 item-title prop 指定的 item 中的值。（若未指定则为 item 类型 `"[object Object]"`）
- `item.value` - 若 item 中显式指定或传入值为字符串则自动绑定, 否则绑定 item-value prop 指定的 item 中的值。（若未指定则为 item 中原始数据）
- `item.props` - 默认包含 title 和 value 的对象, 可通过 item-props prop 指定任何 VListItem props
- `item.raw` - 包含未被转换的原始 item 的值, String 或 Object。

**props**

- `items`
- `item-title`
- `item-value`
- `item-children`
- `item-props`

## Slots

***Item 下拉列表***

	<template v-slot:item="{ props, item }">
	  <v-list-item v-if="typeof item.raw !== 'object'" v-bind="props"></v-list-item>
	  <v-list-item
	    v-else
	    v-bind="props"
	    :prepend-avatar="item.raw.avatar"
	    :title="item.raw.name"
	    :subtitle="item.raw.group"
	  ></v-list-item>
	</template>	

***Chip 芯片显示的选中项***

	<template v-slot:chip="{ props, item }">
	  <v-chip
	    v-bind="props"
	    :prepend-avatar="item.raw.avatar"
	    :text="item.raw.name"
	  ></v-chip>
	</template>	

***NoData 无数据时显示***

	<template v-slot:no-data>
	  <v-list-item>
	    <v-list-item-title>
	      Search for your favorite
	      <strong>Cryptocurrency</strong>
	    </v-list-item-title>
	  </v-list-item>
	</template>

***Selection***

	<template v-slot:selection="{ attr, on, item, selected }">
	  <v-chip
	    v-bind="attr"
	    :input-value="selected"
	    color="blue-grey"
	    class="white--text"
	    v-on="on"
	  >
	    <v-icon start>
	      mdi-bitcoin
	    </v-icon>
	    <span v-text="item.name"></span>
	  </v-chip>
	</template>

***append-outer***

	<template v-slot:append-outer>	
		<v-slide-x-reverse-transition mode="out-in"></>
	</>	

## Autocomplete 结构

VTextField

		slots

		default > _Fragment

			VMenu > default > List > VListItem > VCheckboxBtn

			div VDefaultsProvider > 一个默认预设
					VChip							
					slots.selection item index
					span > selection-text comma				



<div v-input>
	<div class="v-input__control"></div>
	<div class="v-input__details">
		<div v-messages>
			<div v-field>
				<div overlay></div>
				<div loader>
					v-progress-linear
				</div>
				<div v-field__field>
					label
					input
							v-autoomplete__selection
							v-autoomplete__selection
				</div>
				<div v-field__append-inner></div>	下拉按钮
				<div v-field__outline><i></div>			
			</div>
		</div>
	</div>
</div>











<v-autocomplete><v-text-field>
	<...slots>
	<_Fragment v-slot:default>

		<v-menu>
			<v-list v-slot:defalut>
				<v-list-item v-slot:no-data>

				_slots$item.call(slots


				<v-list-item v-for="items in item">
					<template v-slot:prepend>
						<v-checkbox-btn>
					<template v-slot:title>	





		// 选中项
		<div v-for="items for item" class="v-autocomple__selection">
			// hasChips true
			<v-defaults-provider>
			// hasChip false
			<template v-slot:selection><template v-slot:chip>
			// or
			<span v-for="items in item">{ item.title + "," }<span>
</v-text-field></v-autocomple>