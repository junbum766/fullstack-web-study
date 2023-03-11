// 문자열 관련 함수 + 속성(length)
// - toUpperCase(), toLowerCase()
// - trim()
// - indexOf()
// - SecurityPolicyViolationEvent()
// - replace(), replceAll()
// - repeat()

// 인덱싱
let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";
console.log(str1[0]);
console.log(str2[0] + str2[12]);
// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 매개변수가 없는 함수
// length
console.log(str1.length);
console.log(str2.length);

// 대소문자
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

// 양쪽 공백 제거
console.log(str2.trim());
console.log(str2.trim().length);

let msg2 = "    hello world!!   ";
console.log(msg2.trim().toUpperCase());

// 매개변수가 있는 함수
// index 위치
let fruit = "applemango";
console.log(fruit.indexOf("a")); // 0
console.log(fruit.indexOf("apple")); // 0 : 시작 위치 반환
console.log(fruit.indexOf("x")); // -1

console.log(fruit.charAt(1)); // index 번호에 대한 문자 반환

// slice
console.log(fruit.slice(5, 8)); // man
console.log(fruit.slice(-3)); // ngo

// replace
let msg3 = "Wow! It is so amazing!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replaceAll("o", "a"));

// split
let date = "23.03.10";
console.log(date.split("."));
console.log(date.split(".").join("-")); // 23-03-10

// repeat
console.log("hi".repeat(5));

// ========== 배열 ============
// push, pop, unshift, shift -> 원본 배열 변화
// indexOf, join, reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d"];
arr1[5] = 6; // 끝의 index를 알고 있어야 하는 단점. 중간이 빌 수 있음.
console.log(arr1);

arr1.pop(6);
arr1.push(10);
console.log(arr1);
console.log(arr1.pop(10)); // 빠지는 요소 확인

arr2.unshift("a");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

// includes : 요소가 있는지 없는지 체크
// indexOf : 요소 위치 체크
console.log(arr1.includes(2)); // true
console.log(arr1.includes(100)); // false

console.log(arr2.indexOf("c"));

// reverse
console.log(arr1.reverse()); // 뒤집기
console.log(arr1); // 기존 배열을 바꿔버림

// join
str1 = arr1.join("");
console.log(str1);

// 배열 for문
// 기본 for
// for of
// for each 함수 > 매개변수로 익명함수가 들어감

let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
  //console.log(alphabets[i]);
}

for (let num of arr3) {
  console.log(num);
}

arr3.forEach((data, index, arr) => {
  console.log(data, index, arr);
});

arr3.forEach((data) => {
  console.log(data);
});

// filter
console.log("-----------");
let newArr = arr3.filter(function (num) {
  return num > 3;
});
console.log(newArr);

// map : 배열 내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열 반환
let arr4 = [1, 2, 3].map(function (num) {
  return num * 3;
});
console.log(arr4);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((num) => num * 10);
console.log(arr4);
// arr4 = [10,20,30,40,50]

// find : 특정 조건을 만족하는 첫번째 요소 반환
let findResult = arr4.find((num) => {
  return num > 30;
});
console.log(findResult); // 40

// 실습 1
let arr5 = [];
for (let i = 1; i <= 100; i++) {
  arr5.push(i);
}
console.log(arr5);

let sum = 0;
for (let i = 0; i < arr5.length; i++) {
  sum += arr5[i];
}
console.log(sum);

sum = 0;
for (let num of arr5) {
  sum += num;
}
console.log(sum);

sum = 0;
arr5.forEach((num) => {
  sum += num;
});
console.log(sum);

// 실습 2
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// sol 1
let same = [];
let diff = [];

for (el1 of fruits1) {
  idx = 0;
  for (el2 of fruits2) {
    if (el1 === el2) {
      same.push(el1);
      continue;
    } else {
      idx += 1;
    }
  }
  if (idx === fruits2.length) {
    diff.push(el1);
  }
}
console.log(same);
console.log(diff);

// sol 2
same = [];
diff = [];

for (el1 of fruits1) {
  if (fruits2.includes(el1)) {
    same.push(el1);
  } else {
    diff.push(el1);
  }
}
console.log(same);
console.log(diff);

// sol 3
same = fruits1.filter((el) => fruits2.includes(el));
diff = fruits1.filter((el) => !fruits2.includes(el));

console.log(same);
console.log(diff);
