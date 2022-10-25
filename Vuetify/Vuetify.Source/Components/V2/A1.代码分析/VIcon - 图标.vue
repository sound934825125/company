<script>
SIZE_MAP										// 闭包对象 Size对照表

isFontAwesome5(iconType)						// 判断FontAwesome5

isSvgPath(icon)									// 判断svg 路径

props
	dense
	disabled
	left
	right
	size
	tag											// default "i"



remapInternalIcon(vm, iconName)					// 判断 iconName
	

	medium()									// mixins.sizeable 默认样式
	hasClickListener()							// 判断是否 click

	getIcon()									// 判断与获取child文本
	getSize()									// 判断与获取this.size
	getDefaultData()							// 初始化 data
		attrs."aria-hidden"						// 用于避免误触输入
	applyColors()								// 初始化data

	renderFontIcon()							// 非 Svg 的 string
	renderSvgIcon()								// Svg 的 string
	renderSvgIconComponent(icon, h)				// 非 string
		$menu
		mdi-home

	$_wrapperFor: VIcon							// 添加私有属性
</script>
<style lang="sass">
	.v-icon.v-icon	
		&::after
		&--dense
	.v-icon--right
		&--left
		&--right
		&.v-icon.v-icon--link
		&--disabled
		&--is-component
		&--svg
		&--dense
</style>

设置 icon 方式

	v-text
	v-html
	Content 文本	


