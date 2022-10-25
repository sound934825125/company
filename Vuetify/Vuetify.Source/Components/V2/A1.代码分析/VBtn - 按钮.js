isElevated 				// 判断 应用海拔样式
isRound 				// 判断 应用圆角样式
hasBg 					// 判断 应用背景颜色

genContent				// 
genLoader				// 创建 loader 动画，自定义或进度圆

computedRipple 			// 计算涟漪

click 			
// 判断条件 触发 blur
// 判断按键组 触发 toggle: 预留事件，路由改变时

data => generateRouteLink

// ==========================================================================

VBtnToggle				// VBtn 组外壳
ButtonGroup				// 添加 VItemGroup 样式
VItemGroup
	render 				// 注册组件
	register 			// 注册 VBtn
	unregister

// ==========================================================================

VProgressCircular

	viewBoxSize						
	/* 计算 svg 总比值 = radius / circle占比
		circle占比: 1 - 轮廓占比
		轮廓占比: width / size
	*/
	strokeWidth 				// 轮廓宽度(比值): 轮廓占比 * 总比值

	size 						// 整体尺寸
	width 						// 轮廓占比值
	radius 						// 固定值: 半径 20	
	circumference				// 圆周
	strokeDashArray 			// 圆周 四舍五入
	rotate						// 设置起点值
	svgStyles    				// 旋转svg，达到起点
	calculatedSize 			   	// 计算 Size

	genSvg 						// svg 画布
	genInfo						// $slot 添加 Class

	genCircle					// circle 形状
		underlay 				// 底环
		overlay 				// 进度环
			value 				// 设置进度
			normalizedValue 	// 计算 剩余进度
			strokeDashOffset	// 剩余进度 转化为 剩余周长
			// 传入剩余周长到 "stroke-dashoffset"

	indeterminate 				// 持续动画
	// 1.取消底环
	// 2.v-progress-circular--indeterminate => 添加 animation