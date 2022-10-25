
	Function.method(name,func)				// 添加原型方法
    Function.curry(arguments)				// 柯里化
	memoizer(memo,formula)					// 记忆函数，递归，记忆数组
	Function.inherits("Parent")				// 继承
	Object.superior(name)					// 访问父构造器方法
	Array.reduce(f,value)					// 叠加计算Array
	Array.dim(dimension,initial)			// 创建数组
	Array.matrix(m,n,initial)				// 创建二维数组
//__________________________________________________________

	// Function.method(name,func)

		Function.prototype.method = function (name,func){
			this.prototype[name] = func;
			return this;
		}
//__________________________________________________________

	// 柯里化
	// 1.定义"模板函数"add(arg1,arg2)
	// 2.传递"参数"给"模板函数"add.curry(5)
	// 3.新成"新函数" var add5 = add.curry(5) 相当于 add5 = add(arg1,5) 

    // Function.curry()
        Function.method('curry',function () {
            var slice = Array.prototype.slice,
                args = slice.apply(arguments),
                that = this;
            return function () {
                return that.apply(null,args.concat(slice.apply(arguments)));
            };  
        });

//__________________________________________________________

	// 记忆

	// memoizer(memo,formula)
	// memo 	初始数组
	// formula  重复调用的函数（递归）
	// recur    管理函数

	var memoizer = function(memo,formula){
		var recur = function(n){
			var result = memo[n];
			if (typeof result !== "number") {
				result = formula(recur,n);
				memo[n] = result;
			}
			return result;
		};
		return recur;
	};
//__________________________________________________________

	// Function.inherits("Parent")

	// Function构造器 继承 Parent父构造器

		Function.method('inherits',Function(Parent){
			this.prototype = new Parent();
			return this;
		});
//__________________________________________________________

	// Object.superior(name)
	// name 	父方法名
	// Object 	父构造器that
	// 调用父构造器原来的方法（即便该方法已被子改写）

		Object.method('superior',function(name){
			var that = this,
			method = that[name];
			return function(){
				return method.apply(that,arguments);
			};
		});
//__________________________________________________________

	// Array.reduce(f,value)
	// f 		计算公式
	// value 	开始值
	// 以计算公式f，初始值value，类推地与Array元素计算

	Array.method("reduce",function(f,value){
		var i;
		for(i=0;i<this.length;i+=1){
			value = f(this[i],value);
		}
		return value;
	});
//__________________________________________________________

	// Array.dim(dimension,initial)
	// 创建 dimension元素个数 initial初始值的数组

	Array.dim = function(dimension,initial){
		var a = [],i;
		for(i=0;i<dimension;i+=1){
			a[i] = initial;
		}
		return a;
	};
//__________________________________________________________

	// Array.matrix(m,n,initial)
	// 创建 m n 个数 initial 初始值的二维数组	

	Array.matrix = function(m,n,initial){
		var a,i,j,mat = [];
		for(i=0;i<m;i+=1){
			a = [];
			for(j=0;j<n;j+=1){
				a[j]=initial;
			}
			mat[i]=a;
		}
		return mat;
	};
//__________________________________________________________

//__________________________________________________________	

    // Function.curry(arguments)				
    // 柯里化
	
	// memoizer(memo,formula)					
	// 记忆函数，递归，记忆数组
	
	// Function.inherits("Parent")				
	// 继承
	
	// Object.superior(name)					
	// 访问父构造器方法
	
	// Array.reduce(f,value)					
	// 叠加计算Array
	
	// Array.dim(dimension,initial)			
	// 创建数组
	
	// Array.matrix(m,n,initial)				
	// 创建二维数组

	// is_array(value)
	// 区分数组和对象
	// 返回值：Array? true/false	

	// addLoadEvent(func) 
	// 添加多个函数到onlond()

	// insertAfter(newElement,targetElement)
	// 在指定元素后插入元素

	// addClass(element,value)
	// 向指定元素添加class

//__________________________________________________________

    // Function.curry(arguments)

        Function.method('curry',function () {
            var slice = Array.prototype.slice,
                args = slice.apply(arguments),
                that = this;
            return function () {
                return that.apply(null,args.concat(slice.apply(arguments)));
            };  
        });

//__________________________________________________________

	// memoizer(memo,formula)

	var memoizer = function(memo,formula){
		var recur = function(n){
			var result = memo[n];
			if (typeof result !== "number") {
				result = formula(recur,n);
				memo[n] = result;
			}
			return result;
		};
		return recur;
	};
//__________________________________________________________

	// Function.inherits("Parent")

		Function.method('inherits',Function(Parent){
			this.prototype = new Parent();
			return this;
		});
//__________________________________________________________

	// Object.superior(name)

		Object.method('superior',function(name){
			var that = this,
			method = that[name];
			return function(){
				return method.apply(that,arguments);
			};
		});
//__________________________________________________________

	// Array.reduce(f,value)

	Array.method("reduce",function(f,value){
		var i;
		for(i=0;i<this.length;i+=1){
			value = f(this[i],value);
		}
		return value;
	});
//__________________________________________________________

	// Array.dim(dimension,initial)

	Array.dim = function(dimension,initial){
		var a = [],i;
		for(i=0;i<dimension;i+=1){
			a[i] = initial;
		}
		return a;
	};
//__________________________________________________________

	// Array.matrix(m,n,initial)

	Array.matrix = function(m,n,initial){
		var a,i,j,mat = [];
		for(i=0;i<m;i+=1){
			a = [];
			for(j=0;j<n;j+=1){
				a[j]=initial;
			}
			mat[i]=a;
		}
		return mat;
	};
//__________________________________________________________

	// is_array(value)

	var is_array = function(value){
		return Object.prototype.toString.apply(value) === "[Object Array]";
	};	

//__________________________________________________________	

	// addLoadEvent(func) 
	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload !== 'function') {
			window.onload = func;
		}else{
			window.onload = function(){
				oldonload();
				func();
			}
		}
	}

//__________________________________________________________

	// insertAfter(newElement,targetElement) 
	function insertAfter(newElement,targetElement) {
		var parent = targetElement.parentNode;
		if (parent.lastChild == targetElement) {
			parent.appendChild(newElement);
		} else {
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
	}

//__________________________________________________________

	// addClass(element,value)
	function addClass(element,value) {
		if (!element.className) {
			element.className = value;
		}else{
			newClassName = element.className;
			newClassName += " ";
			newClassName += value;
			element.className = newClassName;
		}
	}


	
// 例："查找 &开头 ;结尾 的字符串"如果包含"字符实体表"则替换(deentityify()内嵌于预览器)
String.method("deentityify",function(){
	var entity = {
		quot:'""',
		lt:'<',
		gt:'>'
	};
	return function(){
		return this.replace(/&([^&;]+;)/g,
			function(a,b){
				var r = entity[b];
				return typeof r === "String" ? r : a; 
			}
	);
	};
}());