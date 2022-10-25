## 渲染插槽, 在子中定义插槽

***./MyComponent.vue***

JSX 模板语法

	<template>
		<div><slot /></div>
		<div><slot name="footer" :text="message" /></div>
	</template>

渲染函数语法, `setup(){ return VNode[ slots ] }`

	export default {
		name: "MyComponent",
		props: ['message']
		setup(props, { slots }) {
			return ()=> [
				h('div', slots.default()),
				h('div', slots.footer({text: props.message}))
				h(_Fragment, null, slots)
			]
		}
	}

- `h(_Fragment, null, slots)` - 将任何接收到的插槽定义到子组件

## 传递插槽, 在父中使用插槽

***./App.vue***

JSX 模板语法

	<template>
		<MyComponent>
			<template>default slot</template>
			<template v-slot:footer="{}">
				<div>foo</div>
			</template>
			<template v-slot:bar="{}">
				<span>one</span>
				<span>two</span>
			</template>
		</MyComponent>
	</template>

渲染函数语法, 插槽函数或包含插槽函数的对象 `slot<Function> | Object<slot: Function>`

	export default {
		name: "App",
		setup(props, { slots }){
			h(MyComponent, null, {
					...slots,
			    default: () => 'default slot',
			    footer: () => h('div', 'foo'),
			    bar: () => [h('span', 'one'), h('span', 'two')]
			})
		}
	}	

- `...slots` 展开接收的插槽对象, 传递到子组件。













