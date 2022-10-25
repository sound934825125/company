生产环境下目录

	dist						// 入口
	config 						// vue基本配置文件，监听端口、打包输出
		dev.env.js 				// 项目开发环境配置
		index.js 				// 项目主要配置(监听端口，打包路径)
		prod.env.js 			// 项目生产环境配置

	build						// webpack配置文件
		build.js 				// 生产环境构建
		check-versions.js 		// 版本检测 npm node
		dev-client.js 			// 开发服务器的热加载
		dev-server.js 			// 构建本地服务器(nom run dev)
		utils.js 				// 构建相关工具
		vue-loader.conf.js 		// css加载器配置
		webpack.base.conf.js 	// webpack基础配置
		webpack.dev.conf.js 	// webpack开发环境配置
		webpac.prod.conf.js 	// webpack生产环境配置

	text
	preset config.package.json	// 新项目的配置副本	


	& npm run build --target

		index.html 			// 带有注入资源 和 resource hint
		第三方库   			// 划分到独立的包以便缓存
		小于4kb静态资源		// 内联到 JavaScript
		public 				// 静态资源复制到输出目录

		publicPath 动态资源加载	
		document.currentScript


	// 将一个入口构建为库

		& npm run  --target lib --name myLib [entry]
		dist/myLib.umd.min.js 	// 给打包器用的 CommonJS 包
		dist/myLib.umd.js    	// 给浏览器或 AMD loader 使用的 UMD 包
		dist/myLib.common.js  	// 压缩后的 UMD 构建版本
		dist/myLib.css        	// 提取出来的 CSS 文件 (可以通过在 vue.config.js 中设置 css: { extract: false } 强制内联)

	// 构建为 Web Components  

		vue-cli-service build --target wc --name my-element [entry]	
		// 指定多个入口
		vue-cli-service build --target wc --name foo 'src/components/*.vue'
		// 异步 Web Components
		vue-cli-service build --target wc-async --name foo 'src/components/*.vue'


	// 部署

	将 /.dist 部署到静态服务器