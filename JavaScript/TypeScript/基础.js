## TS 可分配与不可分配

	type Duck = { name: string; }
	type Human = { name: string; occupation: string; }
	type humanBool = Human extends Duck ? 'yes' : 'no';		// yes
	type duckBool = Duck extends Human ? 'yes' : 'no';		// no


`A extends B` 判断类型 A 是否可分配给类型 B

例中，类型 Human 可分配给类型 Duck，因为 Human 满足 Duck 的一切约束条件，而 Duck 类型不可分配给 Human 类型。
换言之，Human 类型可以赋值





























$ npm install -g typescript			// 安装

$ tsc [ filename ].ts				// 将 ts 转换为 js
$ tsc --help						// 帮助
$ tsc --module						// 载入模块
$ tsc --target						// 设置 ECMA 版本
$ tsc [ filename ].ts --declaration	// 生成 .d.ts 和 .js 文件
$ tsc --removeComments				// 删除注释
$ tsc --out							// 编译并合并 多个文件为一个输出文件
$ tsc --sourcemap					// 生成 .map 文件(存储"源代码"与"编译代码"位置映射信息)
$ tsc --module noImplicitAny		// 在表达式和声明上有隐含的 any 类型时报错	
$ tsc --watch						// 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。

// _______________________________________________________

// 1.变量

	let varName: [type] = [value|expr]

	// Array 
	let arr: number[] = [1, 2];
	let arr: Array<number> = [1, 2];
	let [first,...rest] = [1,2,3,4]			// 剩余变量
	// 元组 已知元素个数，不同元素类型的数组
	let x: [string, number];

	// 仗举 enum，为一组数值编号
	enum Color {Red = 1, Green = 3, Blue};
	let c: Color = Color.Blue;
	let colorName: string = Color[3]		// return Green	

	// any 和 Object 任意类型
	let myAny: any							// 可以对 myAny 赋予任何值，调用任何方法
	let myObject: Object 					// 可以对 myObject 赋予任何值，不能调用任何方法

	// void 表示方法无返回值 undefined 或 null
	function hello(): void {
	    alert("Hello Runoob");
	}	

	// null 表示对象值缺失
	// undefined 未定义值的变量
	// never 无值和错误时，表示被永不为真的类型保护所约束时（存在无法达到的终点） 包括 null undefined
	// Any 任何类型

	// 启用 --strictNullChecks
	null 和 undefined 只能给 void 赋值


	// 断言 强制类型转换
	<type> value 或 value as type

	var str = '1' 
	var str2:number = <number> str  // str2 为 number 1

// _______________________________________________________

	const 	// 块作用域，不能修改
	let 	// 块作用域
	var 	// 函数作用域

// _______________________________________________________

// 解构

// 展开 ...

	let first = [1,2,3,4,5]
	let second = [6,7,8]
	let and = [0,...first,...second]	// and = [0,1,2,3,4,5,6,7,8]	

// _______________________________________________________

	// 变量作用域
	var global = 1 					// 全局变量
	class Numbers { 
		num_val = 13;             	// 类变量
		static sval = 10;         	// 静态变量

		storeNum():void { 			// 类方法
			var local_num = 14;   	// 局部变量
		} 
	} 

	console.log(global)		  		// 访问全局变量
	console.log(Numbers.sval)		// 访问静态变量
	var myNumbers = new Numbers()	// 实例化 
	console.log(myNumbers.num_val)	// 访问类变量

// _______________________________________________________	

	// 运算符
	+= 			 加赋值
	-= 			 减赋值
	*= 			 乘赋值
	/= 			 除赋值

	条件 ? true : false
	typeof varName			// return type
	obj instanceof type		// 判断 obj 是否指定类型、继承、类，return true|false 

	// 循环:for in 值的集合, 列表
	var j:any,n:any = "a b c" 
	for(j in n) { console.log(n[j]) }	

	// 循环:for of Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）
	let someArray = [1, "string", false];
	for (let entry of someArray) {
	console.log(entry)
	}

	// 循环:forEach
	let list = [4, 5, 6];
	list.forEach((val, idx, array) => {
	    // val: 当前值
	    // idx：当前index
	    // array: Array
	});

	// 循环:every
	let list = [4, 5, 6];
	list.every((val, idx, array) => {
	    // val: 当前值
	    // idx：当前index
	    // array: Array
	    return true; // Continues
	    // Return false will quit the iteration
	});	

	// 循环:some

// _______________________________________________________	
	
	// return_type 指定返回值类型
	// argA:type=value 参数
	// argB?:type 可选参数用 "?"
	// ...argN:number[] 包含 未知个数参数的 Array
	function function_name(argA:type=value,argB?:type,...argN:number[]):return_type { return value; }

	// 箭头函数
	(arg)=>{}

// _______________________________________________________	

declare 调用项目外代码 js | d.ts

	/* 
	js：负责逻辑运行
	d.ts：由ts生成。代码提示 类型检测 

	主动写 declare：
	1.引用的库只有js，用.d.ts或ts规定有什么方法，类，类型等
	2.单项目分离成多项目分布加载时声明，提醒IDE工具
	*/

// _______________________________________________________	

d.ts 	// TypedDefinition

由ts自动生成 类型定义文件，定义类型信息 接口规范 为第三方库添加声明

// 代码库类型
	Global lib
	Modular lib
	UMD
	Module Plugin or UMD Plugin
	Global Plugin
	Global-modifying Modules

// _______________________________________________________	

// enum 仗举 定义带名字的数字常量

// 双向映射 name -> value | value -> name

// 常数仗举 编译时删除
const enum Enum {}

// 外部仗举 已存在的仗举类型
declare enum Enum {}

// _______________________________________________________	






