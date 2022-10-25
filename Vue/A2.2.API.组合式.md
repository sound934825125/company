# 组合式 API

- setup 函数
- 响应式:核心
	+ 	ref() - 创建响应式对象
	+ 	reactive()
	+ 	watch() - 监听器
	+ 	watchEffect()
	+ 	computed() - 计算属性
- 响应式:工具
	+ 	isRef()
	+ 	isProxy()
	+ 	isReactive()
	+ 	isReadonly()
- 响应式:进价
- 生命周期钩子
- 依赖注入

## setup 函数

	function setup(props, contextInstance): ObjectOptions | RenderFunction | RenderFunction[]

	interface contextInstance = { emit, attrs, slots, expose }

**返回值**

选项式 API 对象、渲染函数或渲染函数数组,
当返回渲染函数时将阻止其他返回值, 可通过 expose 显式声明其他返回值。

**引入**

处理函数、方法和顶层引入自动绑定到组件实例。

函数和对象引入 

	import { capitalize } from './helpers'

组件引入 

	import MyComponent from './MyComponent.vue'

局部指令无需注册

	const directive = { beforeMount: (el) => {}, ... }

## 响应式:核心 创建响应式对象

	const value = ref(inner: Number | String | Object)

- `shallowRef(inner: Object)` - 浅层 Ref, 传入对象不会被转换, 而是只代理 `.value` 属性。
- `reactive(inner: Object)` - 返回深层代理, 等同于 `ref(Object)`
- `shallowReactive(inner: Object)` - 返回浅层代理, `reactive` 接受数组等原生集合时自动被转换。
- `readonly(inner: Object)` - 只读的 `reactive`
- `shallowReadonly(inner: Object)` 只读的 `shallowReactive`

为 reactive 创建的深层代理对象的指定属性, 创建 ref 代理。（它们会同步变化）

	toRef(reactiveObj, key: String, value): refObj

为 reactive 创建的深层代理对象的所有属性, 创建 ref 代理。（reactiveObj 和 Object.refKey 会同步变化）

	toRefs(reactiveObj): Object

- 返回值：所有属性都被代理的普通对象, 等同于遍历调用 toRef

## 响应式:核心 watch

定义 "ref 对象" 的监听器。

	watch(source, callback, options) 

- `source` - 指定被监听源 "ref 对象"。
- `callback(newValue, oldValue, onCleanup)` - 定义被监听源发生变化时执行的回调函数。
- `options: {immediate, deep, flush, onTrack|onTrigger}`
- `StopHandle` - 返回值，销毁该监听器的函数。

定义 "副作用函数的依赖" 的监听器，并立即执行一次该函数。

	watchEffect(effect(onCleanup), options)

- `effect` - Function，被追踪的副作用函数。
- `onCleanup(rely)` - Function，清理回调，在下次执行前清除未完成（返回）的 rely 依赖的回调函数。
- `options`
- `StopHandle` - 返回值
- `watchPostEffect(effect)` - 等同于 `watchEffect(effect, {flush: "post"})`
- `watchSyncEffect(effect)` - 等同于 `watchEffect(effect, {flush: "sync"})`

**计算属性**

通过定义 getter 和 setter 函数来创建 "ref 对象"。

	const count = computed({
		get: () => {},
		set: (val) => {}
	})

## 响应式:工具 检测

- `isRef(val)` - 检查 val 是否 ref 对象，返回 typescript 类型谓词。
- `unref(val)` - 如果 val 为 ref 对象则返回类型谓词，否则返回它本身，等同于 `isRef(val) ? val.value : val`
- `isProxy(obj)` - Boolean，检查对象是否被 Proxy 代理，即由 `reactive()`、`readonly()`、`shallowReactive()`、`shallowReadonly()` 创建。 
- `isReactive(obj)` - Boolean，检查对象是否被 Proxy 代理，即由 `reactive()`、`shallowReactive()` 创建。 
- `isReadonly(obj)` - Boolean，检查对象是否被 Proxy 代理，即由 `readonly()`、`shallowReadonly()` 创建。 

## 响应式:进价 其他

- `triggerRef()` - 强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
- `customRef()` - 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。
- `toRaw()` - 返回 Vue Proxy 代理的原始对象。
- `markRaw()` - 标记对象为禁止代理，并返回它本身。
- `effectScope()` - 创建 effect 作用域
- `getCurrentScope()` - 返回当前存在的 effect 作用域。
- `onScopeDeisponse()` - 注册一个回调函数，当 effect 作用域停用时调用它。
- `getCurrentInstance()` - 只在 development 开发环境中获取组件实例, 即相当于 this

## 生命周期钩子

- `onMounted()`
- `onUpdated()`
- `onUnmounted()`
- `onBeforeMount()`
- `onBeforeUpdate()`
- `onBeforeUnmount()`
- `onErrorCaptured()`
- `onRenderTracked()`
- `onRenderTriggered()`
- `onActivated()`
- `onDeactivated()`
- `onServerPrefetch()`