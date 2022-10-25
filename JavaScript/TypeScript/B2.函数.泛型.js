
// Function

	// 1.定义变量类型，2.定义函数类型
	let Func: (arge:type) => returnType = 
	function(arge:type): returnType { return value }

	// 使用数组变量收集剩余参数，不确定参数个数
	function(...argeArry:string[]){}

	// 重载 为同一个函数提供多个函数类型
	function myFunc (arge:type)type;
	function myFunc ...
	function myFunc ...

	// this和箭头函数

// _______________________________________________________	

// 泛型 <T> 将类型定义为变量

	// 定义泛型函数:该函数返回值与参数相同
	function func<T>(arge: T): T {}

	// 指定泛型 为 string , 或使用类型推断 
	let myVar = func<string>("arge")

	// 操作 T 为数组
	function func<T>(arg: T[]): T[] {}
	function func<T>(arg: Array<T>): Array<T> {}

	let myVar: <T>(arg: T) => T = func
	// 使用对象传入
	let myVar: {<T>(arg: T): T} = func

	// 泛型 函数 接口
	interface FuncInterface {
	    <T>(arg: T): T;
	}

	// 泛型类
	class myclass<T> {
		attr:<T>;
		method:(arge:<T>) => <T>
	}
	new myclass<type>()

	// 泛型约束
	interface myInterface {
		attr: type
	}
	// <T> 继承 myInteface
	function myFunc<T extends myInterface>(arge:T):T{}
	// myFunc 的 arge 必须包含 myInterface attr:type
	myFunc({attr:type,arge:value})

	// 泛型约束 类型参数
	// <T,K extends keyof T> 定义了参数的泛型
	function myFunc<T, K extends keyof T>(obj: T, key: K) {
	    return obj[key];
	}	
	// arge_1 必须 obj
	// arge_2 必须 key
	let x = { a: 1, b: 2, c: 3, d: 4 };
	getProperty(x, "a");	

	// 泛型 使用 类 创建工厂函数:引用类的构造函数

		// arge type 为 类构造器
		function myFunc<T>(c: {new(): T; }): T {
		    return new c();
		}	

		class class_1 {}
		class class_2 {}
		class class_3 extends class_2{
			attr:class_1
		}
		//  工厂构造函数 , A 继承 class_2
		function Func<A extends class_2>(c: new () => A): A {
		    return new c();
		}