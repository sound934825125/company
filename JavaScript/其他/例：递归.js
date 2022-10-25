
	//递归

		// 递归 汉诺塔
			// disc 圆盘数 src 起始柱 aux 辅助柱 dst 目标柱
			// 递归分解处理问题，以对处理
				// 1."disc-1"移动到"辅助柱"
				// 2."disc"到"目标柱"
				// 3."disc-1"到"目标柱"
			var hanoi = function (disc,src,aux,dst) {
				if (disc>0) {
					hanoi(disc-1,src,dst,aux);
					document.writeln("move disc"+disc+"from"+src+"to"+dst);
					hanoi(disc-1,aux,src,dst);
				}
			};
			hanoi(3,"src","aux","dst");

		// 递归 按"HTML流顺序"传递"每个节点"给"函数"处理
		var walk_the_DOM = function walk(node,func) {
			func(node);
			node = node.firstChild;
			while(node){
				walk(node,func);
				node = node.nextSibling;
			}
		};

		// "getElementsByAttribute函数"调用"wakl_the_DOM"传递查找节点属性名的函数,结果会累加到"结果数组"
		// 参数1:属性名   参数2 匹配值
		var getElementsByAttribute = function(att,value){
			var results = [];	//结果数组

			walk_the_DOM(document.body,function(node)){
				var actual = node.nodeType === 1 && node.getElementsByAttribute(att);
				if (typeof actual === "string" && 
					(actual === value || typeof value !== "string")) {
					results.push(node);
				}
			}
		}

		// 尾递归，返回自身调用的结果
		var factorial = function factorial(i,a){
			a=a||1;
			if (i<2) {
				return a;
			}
			return factorial(i - 1,a * i);
		};
		document.writeln(factorial(4));		//24




