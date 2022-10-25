# Source 目录

| components       | 组件定义
| composables      | props 和 use 函数定义
| directives       | 指令定义
| iconsets         | 字体图标定义
| locale           | 多语言支持
| presets          | 定义实例化 Vuetify 的初始选项对象
| services         | 定义 Vuetify 实例暴露的 property
| styles           | CSS 样式定义
| util             | 
| util.helper      | 
| entry-bunder.mjs | 导出 createVuetify、components、directives
| framework.mjs    | 定义构造函数 createVuetify
| index.d.ts       | TypeScript 定义
| styles.scss      | 

## Components

- VList
- VSelect
- VAutocomplete
- Group
	+ VListGroup.列表中的嵌套列表
	+ VItemGroup.多选项目组
	+ VListItemGroup.列表中的多选项目组

## Composables

**props**

- border
- elevation
- rounded
- tag
- theme
- transition
- density

- makeLayoutProps
- makeLayoutItemProps
- makeNestedProps
- makeDimensionProps
- makeItemsProps
- makeVariantProps
- makeRouterProps
- makeGroupProps
- makeGroupItemProps
- makeFilterProps
- makeItemsProps
- makeValidationProps

**use**

- useForwardRef

## Util

- defineComponent
- getCurrentInstance
- useRender
	
## Util.helper

- getPropertyFromItem
- getObjectValueByPath
- getNestedValue

