
// Vue 注册 jQuery

	$ npm install jQuery

	// *.vue
	import "jquery"
	console.log(jQuery("#app"))
	console.log($("#app"))	

	// vue.config.js
	var webpack = require("webpack");
	module.exports = {
	    configureWebpack:{
	        plugins: [
	            new webpack.optimize.SplitChunksPlugin('common.js'),
	            new webpack.ProvidePlugin({
	                jQuery: "jquery",
	                $: "jquery"
	            })
	        ]            
	    }
	} 

// ______________________________________________________________________________

// webpack 4

	SplitChunksPlugin(ObjOption)

	ObjOption{
		chunks: all, 			// 显示块范围 initial 初始 | async 按需加载 | all
		minSize: 0, 			// 压缩前最小模块大小
		minChunks: 1, 			// 引用次数
		maxAsyncRequests: 1, 	// 最大按需(异步)加载次数
		maxInitialRequests: 1,	// 最大初始化加载次数
		name: 					// (Chunk Names)，hash值
		cacheGroups: 			// 缓存组
		priority: 				// 缓存优先级
		test: 					// 缓存组规则，function、boolean、string、RegExp
		reuseExistingChunk: 	// 使用已存在块 true | false
	}

	ProvidePlugin({ identifier: ['module1', 'property1'] })