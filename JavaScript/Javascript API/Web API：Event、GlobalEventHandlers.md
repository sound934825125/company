# Event API

所有事件的接口都继承自 Event 如：`FetchEvent`、`FocusEvent`、...

事件处理函数中的参数 `e`、`event` 是继承 Event API 的接口的实例。

## 属性

- `target` - 触发该事件的最初 DOM 元素。
- `currentTarget` - 当前正在处理事件监听器的目标 DOM 元素。（随着事件"冒泡"和"捕获"改变）
- `bubbles` - Boolean，是否冒泡
- `cancelable` - Boolean，是否可取消
- `composed` - Boolean，是否穿越 Shadow DOM 冒泡。（Shadow DOM：隐藏的被封装的 DOM）
- `defaultPrevented` - Boolean，表示事件是否被取消。（preventDefault）
- `eventPhase` - Number，表示事件流处在的当前阶段。
	- `1` - Event.CAPTURING_PHASE，捕获阶段
	- `2` - Event.AT_TARGET，正常派发阶段
	- `3` - Event.BUBBLING_PHASE，冒泡阶段
- `returnValue` - 替代事件返回值 fasle：取消事件默认动作 
- `timeStamp` - Unix 纪元起到事件创建时的时间戳（精度为毫秒）。
- `type` - 事件的类型。
- `isTrusted` - 表示发起者 "浏览器" 还是 "脚本"。

## 方法

**composedPath**

返回事件的路径（将在该对象上调用监听器），如果阴影根节点 (shadow root) 创建时 ShadowRoot.mode 值为 closed，那么路径不会包括该根节点下阴影树 (shadow tree) 的节点。

	Event.composedPath()

**preventDefault**

取消事件的默认动作

	event.preventDefault

**stopImmediatePropagation**

对这个特定的事件而言，没有其他监听器被调用，这个事件既不会添加到相同的元素上，也不会添加到以后将要遍历的元素上（例如在捕获阶段）。

	event.stopImmediatePropagation

**stopPropagation**

阻止事件在 DOM 中继续冒泡。代替：Event.cancelBubble

## GlobalEventHandlers Mixin

GlobalEventHandlers 是 Mixin 混合器，它被 `HTMLElement`、`Document`、`Window`、`WorkerGlobalScope` 混入。

GlobalEventHandlers 定义了以 `on[Event]` 命名的所有事件句柄 Event handlers。(事件处理函数)