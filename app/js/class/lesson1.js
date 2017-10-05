/*********************
 ****let,const命令****
**********************/

// function test() {
// 	// let a = 1
// 	// console.log(a)
// 	// for (let i = 0; i < 3; i++) {
// 	// 	console.log(i)
// 	// }
// 	// console.log(i)
// 	// let a = 1;
// 	// let a = 2;
// }

// function last(){
// 	const PI = 3.1415926;
// 	// const PI;//不能只声明不赋值，会报错
// 	// PI = 8;//这种常量不允许修改
// 	const k = { a: 1}
// 	k.b = 3;
// 	console.log(PI,k)
// }

// // test();

// last();











/*********************
    ****解构赋值****
**********************/

// {
// 	let a,b,rest;
// 	[a, b] = [1, 2]
// 	console.log(a,b)
// }

// {
// 	let a, b, rest;
// 	[a, b, ...rest] = [1, 2, 3, 4, 5, 6]
// 	console.log(a,b,rest)
// }


// {
// 	let a, b;
// 	({a,b} = {a:1,b:2})
// 	console.log(a,b)
// }

// {
// 	let a,b,c,rest;
// 	[a, b, c=3] = [1, 2]
// 	console.log(a,b,c)
// }

// {
// 	let a = 1;
// 	let b = 2;
// 	[a,b] = [b,a]
// 	console.log(a,b)
// }

// {
// 	function f(){
// 		return [1,2]
// 	}

// 	let a,b;
// 	[a,b] = f();
// 	console.log(a,b,111)
// }

// {
// 	function f(){
// 		return [1,2,3,4,5]
// 	}
// 	let a,b,c;
// 	// [a,,,b] = f()
// 	// console.log(a,b)
// 	[a,,,b,...c] = f()
// 	console.log(a,b,c)
// }


// {
// 	function f(){
// 		return [1,2,3,4,5]
// 	}
// 	let a,b,c;
// 	// [a,,,b] = f()
// 	// console.log(a,b)
// 	[a,...b] = f()
// 	console.log(a,b,c)
// }


// {
// 	function f(){
// 		return [1,2,3,4,5]
// 	}
// 	let a,b;
// 	// [a,,,b] = f()
// 	// console.log(a,b)
// 	[a,,...b] = f()
// 	console.log(a,b)
// }

// {
// 	let o = {p:42,q:true};
// 	let {p,q} = o;
// 	console.log(p,q)
// }

// {
// 	let {a = 10, b= 5} = {a:3}
// 	console.log(a,b)
// }

// {
// 	let metaData = {
// 		title:'abc',
// 		test:[{
// 			title:'test',
// 			desc:'description'
// 		}]
// 	}

// 	let {title:esTitle,test:[{title:cnTitle}]} = metaData; 

// 	console.log(esTitle,cnTitle)
// }











/*********************
    ****正则扩展****
**********************/



{
	let regex = new RegExp('xyz', 'i');
	let regex2 = RegExp(/xyz/i)

	console.log(regex.test('xyz123'),regex2.test('xyz123'))

	let regex3 = RegExp(/xyz/ig, 'i')
	console.log(regex3.flags)
}

{
	let s = 'bbb_bb_b'
	let a1 = /b+/g;
	let a2 = /b+/y;

	console.log('one:',a1.exec(s),a2.exec(s))
	console.log('two:',a1.exec(s),a2.exec(s))


	console.log(a1.sticky,a2.sticky)
}

{
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'))

	console.log(`\u{20bb7}`)

	let s = '𠮷';

	console.log('u?:  ',/^.$/.test(s))
	console.log('u-2:  ',/^.$/u.test(s))

	console.log('test', /𠮷{2}/.test('𠮷𠮷'))
	console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'))
}


