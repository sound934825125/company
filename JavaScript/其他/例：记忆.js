/*  
 * 记忆：使用变量记录频繁使用的值，而无需重新计算。降低开销。
 * 
 * 例：fibonacci(n) 返回"斐波纳契数列"数列的第 n 位。
 * memo[] 保存计算结果，函数调用时检查结果是否存在，存在则返回。
*/
var fibonacci = function(n){
	var memo = [0,1];
	var fib = function(n){
		var result = memo[n]; 
		if (typeof result !== "number") {		// 未计算时 undefined
			result = fib(n-1)+fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();

/* 封装记忆函数 memoizer(memo,formula(recur,n))
 * 
*/
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
// 例：使用memoizer()定义fibonacci
var fibonacci = memoizer([0,1],function(recur,n){
	return recur(n-1) + recur(n-2);
});
// 例：使用memoizer()定义计算阶乘factorial
var factorial = memoizer([1,1],function(recur,n){
	return n * recur(n-1);
});			