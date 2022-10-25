
VList 列表

	data:groups[]						// 储存 VListGroup			
	attrs.role							// 标识：Nav Menu list

	register 							// 注册：将调用该方法 content 连接到 groups[]
	unregister							// 注销：将调用该方法 content 检测并删除
	listClick							// 检测并调用 group.toggle()



VListItem 列表项

	inject: isInGroup isInList isInMenu

	isClickable
	proxyClass

	routable
	GroupableFactory('listItemGroup')	// listItemGroup.register | unregister
	ToggleableFactory('inputValue')		// v-model isActive value

	created 							// 检测 $attrs.avatar 移除头像

	click 								// 触发 to | toggle 传递 click
	genAttrs 
		"aria-disabled"					// 是否禁用
		tabindex 						// 链接且未禁用 ? 0 : -1

		判断 isInGroup | isInMenu | isInList
		设置 role id "aria-selected"	

ItemGroup 基本类	


List
	亮暗文本颜色
	垫片与基础类
	nav 减小项宽度并圆角化
	shaped 左上右下圆角
	rouded 圆角

ListGroup
	ListGroup 列表基本类
	sub-group 嵌套列表类
	items 	  项基本类
	active 	  三角Icon旋转动画
	


ListItem 基本类
	亮暗"各状态"文本不透明度
	状态类 	__acitve __dense __link
	子组件类	__icon __avatar __content __title __subtitle
	two,three-line 样式
	
ListItemGroup			