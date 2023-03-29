// var : 재선언, 재할당 가능 -> 유지보수에 안좋음
var name = '홍길동';
console.log(name);

var name = '이몽룡';
console.log(name);

// let : 재선언 불가, 재할당 가능, 선언 동시 초기화 필요 x
let a = 1;
console.log(a)
a = 2;
console.log(a)

let aa;
aa = 123;
console.log(aa)

// const : 재선언 불가, 재할당 불가, 선언 동시에 초기화 필요!
const b = 3;
console.log(b)
//b = 5; // 오류
//console.log(b) // 오류

// 식별자 이름 규칙
// 1. $ _
let $ = 5;
console.log($)
let _ = 6;
console.log(_)
//let 1st = 5 // 오류
//let s-t = 5 // 오류