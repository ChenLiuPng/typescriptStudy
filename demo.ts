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

// 静态类型的深刻理解

const count: number = 2020;

// 当定义一个静态类型变量的时候，使用该变量，他会有该类型的属性与方法

// const point: Point = {
// 	x: 3,
// 	y: 4
// };
// point.x

// 基础类型 null, undefined,symbol,boolean,string,void
const count1: number = 123;
const name1: string = 'dell';

// 对象类型
class Person {}
const teachear: {
	name: string,
	age: number
} = {
	name: 'dell',
	age: 18
};

const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

const getTatal: () => number = () => {
	return 123;
};
