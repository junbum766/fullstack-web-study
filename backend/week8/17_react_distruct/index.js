const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log(`item1: ${item1}`); // apple
console.log(`item2: ${item2}`); // grape
console.log(`item3: ${item3}`); // peach

const arr = [1, 2, 3, 4, 5];
[item1, , , item2] = arr;
console.log(item1); // 1

let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

const obj1 = {
  key1: "one",
  key2: "two",
};
const { key1: newkey, key2, key3 = "three" } = obj1;
// console.log(key1) // one
console.log(newkey); // one => 이러면 key1은 못씀
console.log(key3); // three

const { a, b } = { a: 10, b: 20 };
console.log(a, b); // 10 20

// spread 연산자 => 함수 호출에 사용
const a1 = [1, 2, 3, 4, 5];
console.log(...a1); // 1 2 3 4 5

// rest 파라미터: 남은 인수들을 묶어서 배열로 반환 => 함수 매개변수에 사용
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data;
console.log(c, d, rest); // 30 40 {e: 50, f: 60}
console.log(rest.f);

// 배열 분해 할당
const newArr = ["one", "two", "three"];
const [one, two, three] = newArr;
console.log(one, two, three);

// swap
let newA = 10,
  newB = 20;
console.log(newA, newB);
[newA, newB] = [newB, newA];
console.log(newA, newB);

// 객체 분해 할당
const newObj = {
  one: "one",
  two: "two",
  three: "three",
};
console.log(newObj.one); // 기존 방법

const { one: newOne, two: newTow, three: newThree } = newObj; // one, two, three 키 이름을 맞춰줘야 하는데, 변수 이름을 바꾸고 싶을 때
console.log(newOne);

// spread 연산자로 배열 합치기
const t1 = [1, 2, 3];
const t2 = [5, 6, 7];
const t3 = [...t1, ...t2];
console.log(t3); // [1, 2, 3, 5, 6, 7]

const cookie = {
  base: "cookie",
  madeIn: "korea",
};
const chocochipCookie = {
  ...cookie,
  toping: "choco",
};
console.log(chocochipCookie);

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키"];
const allCookies = [...noTopingCookies, "초코칩쿠키", ...topingCookies];
console.log(allCookies);

