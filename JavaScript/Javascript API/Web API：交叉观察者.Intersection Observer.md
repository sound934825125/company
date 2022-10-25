# 交叉观察者 Intersection Observer API

交叉观察者，提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法。

**应用场景**

- 图片懒加载，当图片滚动到可见时才进行加载。
- 内容无限滚动，用户滚动到接近底部时直接加载更多内容而无需翻页。
- 检测广告的曝光情况。
- 当用户看见某个区域时执行任务或播放动画。

**用法**

1. 创建交叉观察者

	const observer = new IntersectionObserver(callback, Options)

2. 定义回调函数

	let callbacck = (entries, observer) => {
		entries.forEach(entry => {})
	}

3. 将交叉观察者绑定到 Target 目标元素

	let target = document.querySelector('#listItem');
	observer.observe(target);

## Intersection Observer

**构造函数**

	IntersectionObserver(callback, Options)

Options

- `root` - 指定监听的根元素，默认为预览器视窗。
- `rootMargin` - px，指定给根元素一个偏移量。
- `thresholds` - Number 或 Array[Number]，0 - 1 的百分比数表示。阈值，达到该值时触发回调。递进的数组会多次触发回调。

callback - 达到交叉阈值时执行的回调函数，接受俩个参数。

- `entries` - IntersectionObserverEntry 对象数组，描述相交状态。
- `observer` - 实例化的观察者对象 Intersection Observer。

**属性**

- `root`
- `rootMargin`
- `thresholds`

**方法**

- `observe()` - 使用观察者绑定一个 target 目标元素，开始监听
- `disconnect()` - 停止监听
- `takeRecords()` - 返回观察目标的 IntersectionObserverEntry 对象数组。
- `unobserve()` - 停止监听特定目标

## IntersectionObserverEntry

描述 root 和 target 的相交状态的对象。

**属性**

- `boundingClientRect` - DOMRectReadOnly 对象，描述 Target 元素的边界信息。
- `intersectionRect` - DOMRectReadOnly 对象，描述 Target 和 Root 的相交区域。
- `rootBounds` - DOMRectReadOnly 对象，描述 Root 元素的边界信息。
- `intersectionRatio` - Number，返回 intersectionRect 与 boundingClientRect 的比例值。即：相交比例和程度。
- `isIntersecting` - Boolean，描述 "已相交" 和 "未相交"
- `target` - Element，与 Root 相交的元素，即：Target
- `time`- 返回从观察者被实例化到相交被触发的时间戳。

## DOMRectReadOnly

一个属性不可变的矩形盒子模型，即：只读。

**属性**

- `x`
- `y`
- `width`			
- `height`
- `top`	
- `bottom`
- `right`
- `left`

**创建一个新的 DOMRect 对象**

	fromRect([ Rectangle ])

Rectangle - Object，指定矩形位置和尺寸。

- `x`
- `y`
- `width`
- `height`

## DOMRect

从 DOMRectReadOnly 继承所有属性和方法，区别在于 DOMRect 可读写。