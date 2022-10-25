
// Template Activator[VBtn]	激活器

	genActivator 				// 创建 Activator
	genActivatorListeners		// 根据 Props 绑定事件处理函数
		getActivator 			// 获取 Activator mixins:Activable
		runDelay				// 延时改变 isActive 状态 mixins:Delayable
	genActivatorAttributes  	// 标记属性

// ==========================================================
// transition[Content] 内容元素

	showLazyContent				// 判断懒加载
	genTransition				// 创建特效元素 transition
	computedTransition			// 判断特效
	genContent 					// 创建默认插槽 Content
	getScopeIdAttrs				// 获取属性
	
	styles 						// isActive 控制显示隐藏
	calculatedLeft 				// 计算 Left				
	calculatedTop				// 计算 Top
	offsetY | offsetX 			// 计算设置的定位方向

// ==========================================================
// Watch 机制 (mixins:Menuable)
	
	isActive => callActivate => activate 

		updateDimensions				// 更新 Dimensions 激活器和内容位置和大小信息									

		startTransition 				// 实例化异步对象 Promise
			isContentActive = isActive 	// 开启 Content directives		
			hasJustFocused = isActive 	// 

	disabled => callDeactivate => deactivate

	activatorFixed  					// 控制定位
