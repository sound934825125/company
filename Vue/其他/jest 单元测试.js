https://jestjs.io/docs/zh-Hans/api#describename-fn

// 创建一个测试块,测试函数
describe(name, fn)

// 例：测试 Obj
const myBeverage = {
	delicious: true,
	sour: false,
};

describe('my beverage', () => {
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});