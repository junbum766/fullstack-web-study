// for 문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// 배열 for문
let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i of fruits) {
  console.log(i);
}
for (let i in fruits) {
  console.log(fruits[i]);
}

let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i of numsArr) {
  sum += i;
}
console.log(sum);

// 짝수일 때의 합 구하기 1~20
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum2 += i;
  }
}
console.log(sum2);

// 실습 1
for (let i = 1; i <= 10000; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}

// 실습 2
for (let i = 2; i <= 9; i++) {
  console.log(`--- 구구단 ${i}단 ---`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

// while 실습 1
// console.log('while문')
// let i = 2;
// let j = 1;
// while (i < 10) {
//   console.log(`--- 구구단 ${i}단 ---`);
//   while (j < 10) {
//     console.log(`${i}x${j}=${i * j}`);
//     j++;
//   }
//   i++;
//   j = 1;
// }

// 실습 2
let start = 1;
let whileSum = 0;
while(start <= 100) {
    if (start%2 == 0 || start%5 == 0) {
        whileSum += start;
    }
    start += 1;
}
console.log(whileSum)

// confirm
let n2 = 0;
while(confirm('계속 진행?')) {
    n2++;
    alert(`...${n2}번째 실행`)
}