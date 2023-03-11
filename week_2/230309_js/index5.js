// 함수
function sayHello1(name) {
  console.log(`hello, ${name}!`);
}
sayHello1("hong");

// return
function sayHello2(name) {
  return `hello, ${name}!`;
}
console.log(sayHello2("hong")); // 반환만 하고 출력은 안하기 때문에 console.log로 찍어줘야함

// 화살표 함수
let sayHello3 = (name) => {
  console.log(`hello, ${name}!`);
};
sayHello3("hong");

// 함수 표현식
let sayHello4 = function (name) {
    console.log(`hello, ${name}~`)
}
sayHello4('hong')

// 실습 1
function multifly(num1, num2) {
    return num1 * num2;
}
console.log(multifly(2,3))

// 실습 2
function square(num) {
    return num*num;
}
console.log(square(3))

// onclick
function helloWorld() {
    alert('Hello World')
}