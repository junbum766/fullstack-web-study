// 자료형
//     - 기본
//         - String
//         - Number
//         - Boolean
//         - null
//         - undefined
//      - object
//      - array

// 1. string
let myName = "길동";
let email = "gildong@gmail.com";
let city = "서울";

console.log(myName);
console.log(email);
console.log(city);

// 문자와 변수 동시에 출력
console.log(`내 이름은 ${myName} 이고, 이메일은 ${email} 입니다.`);

let gildong = `내 이름은 ${myName} 이고, 이메일은 ${email} 입니다.`;
console.log(gildong);

// 2. number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);
// NaN : Not a Number
console.log("apple" - 3);

// 3. boolean
let checked = true;
let unchecked = false;
console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;
console.log(undef);

// 5. null
let empty = null;
console.log(empty);

// 6. array
let fruits = ["orange", "apple", "watermelon", "strawberry"];
let fruits2 = new Array("orange", "apple", "watermelon", "strawberry");
console.log(fruits[1]);
console.log(fruits2[1]);

let data = [1, "hong", true, null, undefined];
console.log(data[4]);

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(mat[1][1]);

// 실습
let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

// 3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1]);

// 7. object
let cat = {
  name: "hong",
  age: 1,
  mew: function () {
    return "hi";
  },
};
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);

// 실습 2
let hong = {
  name: "hong",
  age: 25,
  sayHello: function () {
    return `안녕, 내 이름은 ${this.name} 이고, 나이는 ${this.age}살 이야.`;
  },
};
console.log(hong.sayHello());

// typeof
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof nums);
console.log(typeof cat);

// 실습 3
console.log(`${typeof 123} isn't ${typeof "123"} data type`);
console.log(`typeof를 array나 null에 사용하면 ${typeof nums} 결과가 나옵니다.`);

// 형변환
// let mathScore = prompt("수학 점수를 입력하세요");
// let engScore = prompt("영어 점수를 입력하세요");

// let avg = (Number(mathScore) + Number(engScore))/2;
// alert(avg)
// parseInt() -> 소수점 버리고 정수만
let n = '123.123'
console.log(parseInt(n))