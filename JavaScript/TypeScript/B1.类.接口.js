
	export default class myClass {

		static attr: value;					// 存在于class,非实例
		public attr: value;
		private attr: value;				// class 内部访问
		protected attr: value;				// 原型链上访问
		readonly attr: value; 				// 只读

		method(){};

		get attr(){return this._attr};		// 访问 attr 前
		set attr(newattr){};				// 修改 attr 前

		// 实例化时调用
		// 默认返回 this
		constructor(arg){
			return this
		}
	}

// ____________________________________________________________

// 接口 interfaces | type

	interface myInterface {
		attribute?: type;					// ? 		可选属性
		readonly attribute: type;			// readonly 只读属性
		[index: string|number]: type;		// 数组，定义任意个数元素
		(arge:type):Type;					// 函数型接口 参数type 返回值type
	}

	// 固定值的 type , 无法改变
	let SomeVar: type = { x: 10, y: 20 }
	let SomeVar: ReadonlyArray<type> = [1, 2, 3, 4]


	// 调用函数类型接口
	let myFunc: Interface = function(arge: type) {return ReturnType}

	// 函数调用接口
	function myFunc(arge: Interface): { InterfaceVal_1: value_1; InterfaceVal_2: value_2 } {}

	// 混合类型接口实现

		function func():myInterface {
			let myInt = <myInterface>function (arge:type) {};	// 函数部分实现
			myInt.attribute = value; 							// 属性部分实现
			myInt.method = function(){};						// 方法部分实现
			return myInt
		}

// ____________________________________________________________


// ____________________________________________________________
// 继承

	// 抽象类 继承 abstract

		// 类似接口，被其他类继承，不实例化自身

		abstract class myClass{			// 定义抽象类
			abstract makeSound(): void;	// 定义抽象方法
		}

	// 类 继承 类

		class child extends father{			
			constructor(){super()}			// 构造函数继承：super() 执行 father 的 constructor
		}	

	// 类 继承 接口 implements

		class myClass implements myInterface {
			interface_Attr:interface_Value
		}

	// 接口 继承 接口 | 类 , 只继承 attr 不继承 method

		interface child extends father {}

// ____________________________________________________________

// 继承 静态部分和实例部分interface 的 构造函数

	// 1.定义构造器部分：必须包含参数 arge:type
	interface int_ctor {
	    new (arge:type): int_method;
	}
	// 2.定义实例部分：必须包含 method() 方法
	interface int_method {
	    method();
	}	
	// 3.定义构造函数：arge 继承 ctor , return 继承 method
	function ctorFunc(ctor: int_ctor, arge: type): int_method {
	    return new ctor(arge);
	}

// 实现 接口对构造函数的限制

	// 定义参数一：int_ctor 类型 带 arge: type 的 ctor
	class myClass implements int_method {
	    constructor(arge: type){}
	    method() {}
	}
	// 实例化
	let vm = ctorFunc(myClass,arge)
