// createTransition.js

	createJavascriptTransition
	// 创建 vue transition 组件
	// on: 挂载钩子函数
	// props[name,mode]

	createSimpleTransition
	
		name
		group 				// 创建 transition 或 transition-group
		mode 				// in-out 或 out-in
		origin				// 设置旋转原点 挂载到 beforeEnter
		hideOnLeave 		// leave 时 none 不显示
		leaveAbsolute 		// leave 时 absolute



// expand-transition.js 钩子函数

	expandedParentClass 	// set Parent transition Class
	x: Boolean 				// set Height or Width as Size

	beforeEnter				// 1.进入前	
	enter 					// 2.进入
	afterEnter				// 3.进入后
	enterCancelled			// 4.进入销毁
	leave 					// 6.离开
	afterLeave 				// 7.离开后
	leaveCancelled 			// 8.离开销毁后

	resetStyles()			// 进入销毁处理函数
	afterLeave()			// 离开销毁处理函数