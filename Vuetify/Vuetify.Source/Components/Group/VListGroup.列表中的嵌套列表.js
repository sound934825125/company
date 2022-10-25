	group 								// 分配路由

	bootable
	// showLazyContent(content) 
	// 检测 isBooted eager isActive = true
	// 加载 content 或 return 空元素

	registrable 						// 检测是否存在有效父与子 并挂载警告

	toggleable 							// 动态绑定 value isActive

	matchRoute 							// 当前路由 等于 group
// ================================================================

	// 创建时
	created beforeDestroy 				
	// 调用 register 注册到 list.groups[]
	// 检测 $route 与 group 相等，改变 isActive

	genItems 							
		绑定展开过渡 expand-transition 
		调用 showLazyContent 					
		// isBooted eager isActive 时创建 children（展开列表）
		// 否则 创建空元素

	// 作为显示项(头) <template v-slot:activator></template>
	// 作为隐藏项(栏) <template></template>

	click
	// isBooted = true
	// 改变 isActive

	onRouteChange				
	// 路由改变时触发
	// 检测 $route 与 group 相等，检测 isActive 相等
	// 调用 list.listClick 对比当前id
	// 调用 toggle

	toggle
	// isBooted = true
	// 改变 isActive

	isActive
	// !subGroup 且 true
	// 调用 toggle

	genHeader "v-list-item"
	genPrependIcon 						// 前置 icon
	genAppendIcon						// 后置 icon
    genIcon
	// 判断 subGroup
    // 判断 slots 中添加的 icon
    // 调用 VIcon 生成













