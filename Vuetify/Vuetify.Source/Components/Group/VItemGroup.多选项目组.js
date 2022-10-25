	groupable									
	// 调用父组件的 register 方法

	proxyable
	// 代理 v-model
	// internalLazyValue 挂载 value
	// internalValue 挂载 计算属性 value

// VItem ======================================================================================================

	active 			// 暴露当前激活状态
	toggle()		// 暴露设置激活事件
	activeClass
	value

	render
	// 判断 $scopedSlots 存在
	// 判断 child，存在，唯一，带标签 
	// 将 v-slot data 绑定到 child

// VItemGroup =================================================================================================

	internalLazyValue							// Proxyable 中绑定 v-model 的 value
	internalValue 								// Proxyable 中绑定 计算属性 的 internalLazyValue
	items 										// register 中绑定 item

	mandatory 									// 必选
	multiple 									// 多选 value[]
	activeClass
	max											// 可以选择的最大数量

	provide										// 传递自身使 item 可以调用

	// ====================================================
	// 运行流程
	VItemGroup.provide 							// 传递自身
	VItem.mxins.groupable.created 				// 混入
	VItem.created								// 调用VItemGroup.register(item)

	// ====================================================
	// item.created 时调用	
	register(item)

		// 1.将 item 添加到 items[]

		// 2.每个 item 挂载处理函数	
		onClick(item)
			getValue(item, i)					// 判断 item.value == null 则设置为index
			updateInternalValue

		// 3.判断 必选 且 value === null
		updateMandatory(last)					// 检测第一个未禁用的 item
			getValue							// ...
			updateInternalValue(value)			// 判断多选
				updateMultiple 					// 将"设置值" 填入原来value
				updateSingle					// 将"设置值" 填入原来value

		// 4.根据检测设置 item.isActive
		updateItem
			toggleMethod(v)						// 检测 this.value 包含或等于 item.value 

	unregister



	selectedValues()							// 检测并设置 internalValue 为数组 

	selectedItems()
	// 创建 selectedItems[Boolean]
	// Items[] 中所有元素是否被 value[] 包含


	// 开始时 items | internalValue 更新时
	updateItemsState
	// items == null 且 必选，调用 updateMandatory
	// 遍历 items 调用 updateItem

	selectedItem()
	// 单选时的值，否则 undefined
	// multiple ? undefined : item

	selectedIndex()
	// return selectedItems
	
	// 判断 selectedItems 必选 且 !Array，调用 updateMandatory
	// 遍历 items 调用 updateItem