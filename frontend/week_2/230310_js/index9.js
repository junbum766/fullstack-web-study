// JS 표준 내장 객체
// 자바스크립트가 기본적으로 가지고 있는 객체
// Object
// Array
// String
// Number
// Boolean
// Math :
// Date : 시간, 날자에 대한 정보를 얻기 위해 사용

// Date
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "년");
console.log(now.getMonth() + 1, "월");
console.log(now.getDate(), "일");
console.log(now.getHours(), "시간");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "밀리초");
let day = ["일", "월", "화", "수", "목", "금", "토"];
console.log(day[now.getDay()], "요일");

// Date 객체를 이용해 오늘의 요일을 얻고,
// 오늘이 평일인지 주말인지 작성해보기
// sol 1
let today = now.getDay();
if (today == 0 || today == 6) {
  console.log(`오늘은 ${day[today]}요일이므로, 주말입니다.`);
} else {
  console.log(`오늘은 ${day[today]}요일이므로, 평일입니다.`);
}
// sol 2
switch (now.getDay()) {
  case 0:
  case 6:
    console.log("주말");
    break;
  default:
    console.log("평일");
}
// sol 3
let d = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(d);

// Math
// 속성
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

// 메소드
console.log(Math.min(1, 2, 0, -40, 3));
console.log(Math.max(1, 2, 0, -40, 3));
console.log(Math.random()); // 난수 0<=x<1
console.log(Math.round(2.51));
console.log(Math.floor(2.51));
console.log(Math.ceil(2.21));

// 응용
console.log(Math.floor(Math.random() * 10)); // 0<= ~ <10
console.log(Math.ceil(Math.random() * 100)); // 1<= ~ <101
