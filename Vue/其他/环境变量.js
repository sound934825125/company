
// 作用：配置在不同环境中的开发和调试

	服务器地址
	接口地址
	websorket地址

// 流程：

	// 1.package.json：开启该模式环境并启动

		"scripts":{"stage":"vue-cli-service build --mode stage"}

	// 2.App/env.development 新建文件

	// 3./env.development 创建环境变量：name="value"

		outputDir = 'stage'

	// 4.使用环境变量设置入口，vue.config.js

		modeule.exports = {outputDir:env.outputDir}

// _________________________________________________________________

// 1.模式：.env.[mode]

	development 		// vue-cli-service serve
	production  		// vue-cli-service build 和 vue-cli-service test:e2e
						// 加载 .env .env.production .env.production.local
	test        		// vue-cli-service test:unit
	Staging    			// vue-cli-service build --mode staging 
						// 加载 .env .env.staging .env.staging.local
						// process.env.VUE_APP_TITLE 被覆盖

// 2.配置环境变量：根目录添加

	.env 					// 所有环境 载入
	.env.local				// 本地环境 载入，被git忽略
	.env.[mode]				// [mode] 模式下载入 
	.env.[mode].local		// 本地[mode] 模式下载入，被git忽略

// 4.使用环境变量

	src 中使用：VUE_APP_开头
	js中使用：console.log(process.env.VUE_APP_SECRET)

	webpack配置中使用：process.env.XXX

	index.html中使用：		// 插值：大量url引用

		<%= VAR %>			// 非转换插值  
		// `<link rel="shortcut icon" href="<%= BASE_URL %>favicon.ico">`
		<%- VAR %>			// HTML转义插值
		<% expression %>	// JavaScript控制流  

// _________________________________________________________________

// 默认环境变量

	NODE_ENV=development 	// 决定模式的环境变量
	VUE_APP_*  				// 静态嵌入到客户端侧的包中,构建时被替代
	BASE_URL				// vue.config.js publicPath 应用部署的基础路径
