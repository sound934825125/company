/* 其他：将引入的库转换为Vue属性 */	

	import plugin from 'plugin';
	// defineProperty() 将对象属性转换为 getter/setter
	Object.defineProperty(Vue.prototype, '$pluginName', { value: plugin });
	访问：this.$pluginName.method()