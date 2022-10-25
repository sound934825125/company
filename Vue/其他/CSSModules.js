
// 实现 CSS 的作用域闭包

	// 1.设置 webpack.config.js
	{
	  module: {
	    rules: [
	      // ...
	      {
	        test: /\.css$/,
	        test: /\.scss$/,
	        use: [
	          'vue-style-loader',
	          {
	            loader: 'css-loader',
	            options: {
	              // 开启 CSS Modules
	              modules: true,
	              // 自定义生成的类名
	              localIdentName: '[local]_[hash:base64:8]'
	            }
	          }
	        ]
	      }
	    ]
	  }
	}

	// CSS 闭包 <style module="name">...</style>

	// 以对象 $style计算属性 注入 Vue 	
	// 访问：<p :class="$style.red">
	// 访问：<p :class="{ [$style.red]: isRed }">
	// js访问：console.log(this.$style.red)

	// CSS选项设置：vue.config.js css.loaderOptions