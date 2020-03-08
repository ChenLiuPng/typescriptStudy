// 静态类型
let b: number = 123;
// b = '123'; 报错
b = 456;

function tsDemo1(data: { x: number, y: number }) {
	return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo1({ x: 1, y: 123 });

// ts 静态类型使我们在编写代码时更能发现问题
// 可以更能加强代码提示
// {x:number,y:number}就能知道data里面就有x和y
// 代码可读性
interface Point {
	x: number;
	y: number;
}

function tsDemo2(data: Point) {
	return Math.sqrt(data.x ** 2 + data.y ** 2);
}
console.log('1');
tsDemo2({ x: 1, y: 123 });
