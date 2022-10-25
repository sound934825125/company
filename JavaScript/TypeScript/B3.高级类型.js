
// 交叉类型 &

let arge:A & T & U
// some 兼容 A T U 类型

// _______________________________________

// 联合类型 |

let arge:A | T | U
// 只能访问 A T U 的公共部分 attr 或 method

// _______________________________________

// 类型保护，使联合类型可访问非公共部分

// 类型保护函数 通过返回已断言的类型实现

	// arge is A 检测类型
	function isA(arge: A | T): arge is A {
	// 断言并返回
	    return (<A>arge).method_A !== undefined;
	}

	// 2.调用
	if (isA(arge)) {
	    arge.method_A();
	}
	else {
	    arge.method_T();
	}

// 使用 typeof 类型保护

	function Func(arge_1: A, arge_2: A | T) {
	    if (typeof arge_2 === "T") {
	        return ...
	    }
	    if (typeof arge_2 === "A") {
	        return ...
	    }
	    throw new Error(...);
	}

// intanceof 判断 some 是否 constructor(必须是构造类或函数) 类型 (细化到 prototype)
some instanceof constructor

// ________________________________________________________________

// 去除 undefined 和 null

	// 启用严格模式 变量不再自动赋予 
	--strictNullChecks

	// 可选参数 默认包含 undefined

	// 短路
	function f(sn: string | null): string {
	    return sn || "default";
	}


	// 类型保护
	function f(sn: string | null): string {
	    if (sn == null) {
	        return "default";
	    }
	    else {
	        return sn;
	    }
	}

	// 在arge后面加上 ！ 去除 undefined 和 null

	// 类型别名 type 常用于联合类型
	type name = sometype


	// 通过 指定的字符串 联合类型 进行用户验证
	// 该方法可用于判断 函数重载
	type Easing = "ease-in" | "ease-out" | "ease-in-out";
	class UIElement {
	    animate(dx: number, dy: number, easing: Easing) {
	        if (easing === "ease-in") {
	        }
	        else if (easing === "ease-out") {
	        }
	        else if (easing === "ease-in-out") {
	        }
	        else {
	            // error!
	        }
	    }
	}

	// 使用共同属性进行辨识，类型保护
	interface a { kind: "a"; ... }
	interface b { kind: "b"; ... }
	interface c { kind: "c"; ... }

	// 判断是否有未被定义的联合类型保护,方法一
	function Error(x: never): never {
	    throw new Error("Error" + x);
	}	
	// 指定返回值已判断是否有未被定义的联合类型保护,方法二
	function Any(arge: a | b | c):number {
		switch(arge.kind){
			case "a" : return arge.methods_A();
			case "b" : return arge.methods_B();
			case "c" : return arge.methods_C()				
		}
		default return Error(arge)
	}

	// 索引类型查询操作符
	keyof interface			 // return interface 上的公共属性名的集

	// 索引访问操作符
	T[P]

	// 映射类型转换
	type Readonly<T> = {
	    readonly [P in keyof T]: T[P];
	}
	type Partial<T> = {
	    [P in keyof T]?: T[P];
	}	
