
VContainer

	props: fluid			// 无论任何屏幕尺寸完全扩展 max-width 100%

Render

    // 从 data.attrs 中过滤掉 "slot" 和 "data-"
    // 将剩下的字符串如: "pa-4" 作为 classes 传入组件

CSS

	媒体查询 根据屏幕 min-width 设置应用 max-width，预留俩边间隙
	媒体查询 Firefox 打印类


// ===================================================================

VRow

	makeProps(prefix,def)				// 工厂函数 创建所有断点 props


	// align、justify、align-content
	// 1.筛选合法值
	// 2.调用 makeProps 创建 props 对象
	alignValidator			
	alignProps		
	justifyValidator
	justifyProps
	alignContentValidator
	alignContentProps

Render

	创建 cacheKey 判断存在 classList 则获取，
	不存在则创建 classList

		深度遍历 propMap 调用 breakpointClass 
		将断点类 替换 classList
		根据 props 替换 classList
		记录 classList 到 Map 对象	



breakpointClass(type, prop, value)		// 判断断点则转换类名，如 align-sm-${val}

cache{cacheKey:classList} 				// 记录已存在 Class列表 的 Map()
cacheKey	    						// 作为 cache 唯一 key 名，使用所有props值连结为字符串

classMap								// 对应属性名列表
propMap 								// 完整 props 列表，所有 {attr}{bp} 名字
classList								// 当前作用的类列表 classes

// ===================================================================

VCol

	// 创建 props 列表
	breakpointProps						// props:{sm,md,lg,xl}
	offsetProps							// offset-{breakpoints}
	orderProps							// order-{breakpoints}

	propMap 							// 完整 props 列表，所有 {attr}{bp} 名字
	breakpointClass(type, prop, val)	// 断点类名转换

Render

	创建 cacheKey 判断存在 classList 则获取，
	不存在则创建 classList

		深度遍历 propMap 调用 breakpointClass 
		将断点类 替换 classList

		hasColClasses 验证是否存在 col- 开头，即生成了断点类
		没有断点类时，启用默认类 .col

		根据 props 替换 classList
		记录 classList 到 Map 对象	









