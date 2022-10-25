
// 监听 DOM resize 更新 Data

export default {
	data:function () {
		return {
			SomeData:""
		}
	},
	mounted(){
		// 将 vue 实例 携带到回调函数
		var that = this;
		window.addEventListener("resize",function() {
			that.SomeData = document.body.clientWidth
			// this 指向 windos
			console.log(this)
		})
	}	
}