
var num = new Number(value);

num.MAX_VALUE 			// 可表示的最大值
num.MIN_VALUE 			// 可表示的最小值
num.NaN 				// 非数
num.NEGATIVE_INFINITY 	// 负无穷大
num.POSITIVE_INFINITY 	// 正无穷大
num.prototype			// 添加原型方法
num.constructor			// 创建该对象的引用

num.toExponential() 	// 转换为指数
num.toFixed(decimals)	// 转换为字符串并指定小数decimals
num.toLocaleString() 	// 转换为字符串
num.toPrecision(digit)	// 指定位数digit
num.toString(cardinal)	// 转换为字符串并指定基数
num.valueOf()			// return 原始数值

// __________________________________________________________

var str = new String(value);

constructor
length
prototype

charAt()
charCodeAt()
concat()
indexOf()
lastIndexOf()
localeCompare()
match()
replace()
search()
slice()
substr()
substring()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
valueOf()

// __________________________________________________________

var arr = new Array(value);

concat()
every()
filer()
forEach()
indexOf()
join()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toString()
unshift()

// __________________________________________________________

// 元组

var tuple= [valueA,valueN]

push() 	// 添加元素
pop()	// 移除元素

// __________________________________________________________

// 联合类型 多类型

var val:typeA|typeB|typeC

// __________________________________________________________

// 类 包含 字段、构造函数、方法
class myclass {}
// 实例化
var obj = new myclass(arg)
// 类继承
class child extends myclass {} 
// 类继承接口
class myclass implements myinterface {} 
// static 静态成员
class myclass {
	static val:type;
	static method():type {}
}
// 访问
myclass.val
myclass.method()

// 访问控制修饰符
public val:type 		// 指定变量或方法，允许所有访问		
protected val:type 		// 指定变量或方法，允许自身、子、父访问
private val:type 		// 指定变量或方法，允许自身访问

// __________________________________________________________

// 鸭子类型 任何符合函数行为的类型
val:IPoint

// 命名空间
namespace mynamespace {
	export interface myinterface {}  
	export class myClass {}  
}

// 调用另一命名空间命名
myNameSpace.myClass
// 引用外部.ts文件命名空间
/// <reference path = "file.ts" />

// 编译 .ts，AMD commonjs 
$ tsc --module amd file.ts 
$ tsc --module commonjs  file.ts

// 第三方库引用 declare
declare var jQuery: (selector: string) => any;
jQuery('#foo');

// 声明文件 File.d.ts 用于定义引入库
declare module Module_Name {}
// File.ts 引入声明文件
/// <reference path = " File.d.ts" />

// ___________________________________________________

// Symbol

	Symbol.hasInstance
	Symbol.isConcatSpreadable		// 对象数组是否可展开
	Symbol.iterator					// return 对象迭代器
	Symbol.match					// 匹配字符串
	Symbol.replace					// 替换字符串
	Symbol.search					// 匹配索引
	Symbol.species					// 创建派生对象
	Symbol.split					// 分割字符串
	Symbol.toPrimitive				// 转换对象为原始值
	Symbol.toStringTag
	Symbol.unscopables

// ____________________________________________________

// for...of... 遍历 Array.value 
// for...in... 遍历 Array.key

	let list = [4, 5, 6];

	for (let i in list) {
	    console.log(i); // "0", "1", "2",
	}

	for (let i of list) {
	    console.log(i); // "4", "5", "6"
	}