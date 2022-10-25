# Util 目录

- anchor
- animation - 特效
- box
- colors
- colorUtils - 色彩工具
- console - 警告
- createSimpleFunctional - 创建函数式组件
- dateTimeUtils
- defineComponent
- dom
- easing - 缓动函数
- getCurrentInstance
- getScrollParent
- globals
- helpers
- index
- isFixedPosition - 判断 fixed position 定位
- propsFactory - Props 选项工厂
- useRender

## defaultComponent

根据传入值判断调用 `_defineComponent` 或 `defineComponent`

	export const VAutocomplete = genericComponent()(options)

改写原生 Vue API, 通过该方法定义组件选项使其支持 TS 类型推动, 并添加更多类型限制。

	defineComponent(options)

## getCurrentInstance

改写原生 Vue API, 获取组件实例, 验证和打印错误信息。

	getCurrentInstance(name, message)

获取 name

	getCurrentInstanceName

获取 uid

	getUid()

## useRender

将渲染函数传入到组件选项 vm.render

	useRender( render )





