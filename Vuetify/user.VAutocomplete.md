# VAutocomplete user

## Props

- search: String - 获取焦点时显示的文本

***makeFilterProps***

- customFilter: Function
- customKeyFilter: Object
- filterKeys: `title`
- filterMode: String, `default`: `intersection`
- noFilter: Boolean - 搜索时不过滤, 在服务器端过滤
- label: String - 占位符文本

***makeSelectProps***

- chips: Boolean - 选项样式
- closableChips: Boolean - 允许关闭
- eager: Boolean
- hideNoData: Boolean - 隐藏无数据时显示
- hideSelected: Boolean
- menu: Boolean
- menuIcon - `$dropdown`, 设置下拉菜单图标
- menuProps
- modelValue: `() => []`
- multiple: Boolean - 多选
- noDataText: `$vuetify.noDataText` - 设置无数据时显示的文本
- openOnClear: Boolean

***makeItemsProps***

- items: Array
- itemTitle: `title`
- itemValue: `value`
- itemChildren: `false`
- itemProps: `props`
- returnObject: Boolean

***makeTransitionProps***

- transition: `false`

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