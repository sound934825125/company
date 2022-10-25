intersect						// 交叉观察者
	// 提供回调函数
	onIntersect (entries, observer, isIntersecting) {}

currentSrc 						// 当前加载 url
isLoading						// 已触发 onLoad 设置为 false
	
init()
	// 实例化 lazySrc
	pollForSize
	// 获取 naturalWidth
	// 计算 calculatedAspectRatio 长宽比

	// 实例化 src
	loadImage 	

		onLoad 					// 完成加载触发
		// isLoading = false
		// 判断 src = svg 或 CSS背景图
		// 获取 naturalWidth
		// 计算 calculatedAspectRatio 长宽比

		onError

normalisedSrc 					// 转换返回 src{src,srcset,lazySrc,aspect}
getSrc							// attr.src 或 props.src
computedAspectRatio				// 计算比例

watch: src 						// src 改变时重写实例化

contain: "禁止剪裁" 				// default: 剪裁图片以填充空间

'$vuetify.breakpoint.width': 'getSrc'


// 加载图像时显示
__genPlaceholder
// 1·判断 isLoading
// 2.挂载 transition

__cachedImage
// 1.判断 isLoading ? lazySrc : currentSrc
// 2.挂载 gradient 渐变
// 3.创建 image： 设置 lazySrc 为backgroudImage
// 4.判断 transition 并挂载

genContent
// 创建宽高比元素 genContent
// 挂载 naturalWidth