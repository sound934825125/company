update:mini-variant 	// 绑定于 father 事件

v-model					// 控制 isActive
isActive 				// 隐藏 / 可见

init 					// 初始化 isActive 状态
permainent 				// 总是可见 isActive = true
value					// 不为 null 则设置 isActive	

applicationProperty		// applicationable.js 动态设置 this.right
calculateTouchArea 		// 计算触摸区域 this.touchArea
updateApplication		// 更新 width
closeConditional 		// 是否需要关闭
updataApplication 		// 布局改变时 return width

// 判断
hasApp					// app 应用
isBottom 				// 移动设备 底部展开
reactsToClick			// 点击条件
reactsToResize 		
// 计算 CSS
computedTransform		// 计算位移
computedWidth			// miniWidth or Width
computedMaxHeight		// maxHeight
computedTop 			// top: 判断 clipped(间隔) isBottom(移动且底部)

// ==============================================
// 
genPosition 			// 获取 $slot 并创建元素
genPrepend 				// 前置
genAppend 				// 后置
genContent 				// 内容
genBorder 				// 边界突起效果的空元素
genBackground			// 将 src 或 $slot.ing 作为背景

// ===================================================

Mobile 模式 				// isActive 默认 false
	temporary			// 临时： Mobile 默认开启
	showOverlay 		// 遮罩元素	
	// 计算属性: 判断 Mobile || temporary 判断 isActive
	// watch: genOverlay 或 removeOverlay
	isMobile 
	// 计算属性: 判断 !总是可见 && !禁止自动 判断断点
	// watch: 更新 isActive，false 时 removeOverlay
	reactsToMobile 		// 判断允许进入 Mobile 模式

// ===================================================

genListeners
// 兼容 resize
// miniVariant onclick 时触发用户事件
// expandOnHover 改变 isMouseover

expandOnHover 			// mini 模式: 鼠标进出时改变
miniVariant 			// mini 模式
isMouseover 			// 控制 mini 副页开关
isMiniVariant			// 判断 Mini 模式

updateMiniVariant
// 触发 update:mini-variant			
// expandOnHover 和 isMouseover 改变时触发

// ==============================================
genDirectives 
clickOutside			// 判断关闭条件，设置 isAcitve = false 关闭导航栏
touch swipeLeft swipeRight
// ==============================================
disableRouteWatcher					// 路由改变时 禁止打开
reactsToRoute						// 临时 不允许自动
$route: 'onRouteChange'				// isActive false
// ==============================================

ClickOutside 						// 外部点击
Resize								// 改变尺寸
Touch 								// 触摸支持

clipped								// top 添加间隔
disableResizeWatcher 				// 自动开/关 屏幕size改变时 
floating 							// 浮动抽屉 没有可见容器
miniVariantWidth					// 指定凝结宽度
permanent							// 永远展开
stateless							// 禁止自动(大小，路由，移动)
temporary							// 临时抽屉 稀松布 背景变暗
touchless							// 禁用移动触摸

bottom 								// 底部展开
width
height
tag
right								// 右侧
src									// 组件背景

// applicationable
absolute
app
fixed

// VSheet

color
dark
light

elevation

max-min-height
max-min-width

outlined
rounded
shaped

tag
tile
























