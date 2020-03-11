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

// type annotation 类型注解 我们来告诉TS变量是什么类型

let count2: number;

count2 = 123;

// type inference 类型推断  TS 会自动的去尝试分析变量的类型
// 如果TS能够自动分析变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解

let countInference = 123;

const firstNumber = 1;
const secondNumber = 2;
const total = firstNumber + secondNumber;

function getTatal1(firstNumber: number, secondNumber: number) {
	return firstNumber + secondNumber;
}
const total1 = getTatal1(firstNumber, secondNumber);

let eleId = document.getElementById('a');

const obj = {
	name: 'dell',
	age: 18
};

// 函数类型
// 必须加上返回值类型
function add(first: number, second: number): number {
	return first + second;
}

const total3 = add(1, 2);

function sayHello(): void {
	console.log('hello');
}
// never 永远都不可能执行完成
function errorEmitter(): never {
	throw new Error();
	console.log(123);
}

function errorEmitter1(): never {
	while (true) {}
}

function add2({ first, second }: { first: number, second: number }): number {
	return first + second;
}

function getNumber({ first }: { first: number }): number {
	return first;
}

const total4 = add2({ first: 1, second: 2 });
const total5 = getNumber({ first: 1 });
