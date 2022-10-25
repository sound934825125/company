
// 拆分组件成小模块 服务器按需下载

	// component(template) 使用 回调的工厂函数 resolve()
	Vue.component('async-example', function (resolve, reject) {
		setTimeout(function () {resolve({template: '<div>I am async!</div>'})}, 1000)
	})

	// Webpack 代码分割 require()
	Vue.component('async-webpack-example', function (resolve) {
		require(['./my-async-component'], resolve)
	})

	// Webpack 2 + ES2015 返回 Promise resolve 函数
	Vue.component(
		'async-webpack-example',
		() => System.import('./my-async-component')
	)	

	// 在局部注册中，提供返回 Promise 的函数	
	new Vue({
		// ...
		components: {
			'my-component': () => import('./my-async-component')
		}
	})

	// 异步组件工厂函数 返回该对象
	const AsyncComponent = () => ({
		// 需要加载的组件 (应该是一个 `Promise` 对象)
		component: import('./MyComponent.vue'),
		// 异步组件加载时使用的组件
		loading: LoadingComponent,
		// 加载失败时使用的组件
		error: ErrorComponent,
		// 展示加载时组件的延时时间。默认值是 200 (毫秒)
		delay: 200,
		// 如果提供了超时时间且组件加载也超时了，
		// 则使用加载失败时使用的组件。默认值是：`Infinity`
		timeout: 3000
	})		