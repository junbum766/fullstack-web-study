// map()
const list = ["a", "b", "c", "d", "e"];

// 일반 for문으로 배열의 각 원소를 출력
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// map()
const items = list.map((txt, id, arr) => {
  console.log("txt: ", txt);
  console.log("id: ", id);
  console.log("arr: ", arr);
  return `${id}위치에 ${txt}원소가 있음`;
});
console.log("items >>> ", items);

// filter()
// - js 배열 내장 함수
// - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 (true면 유지, false면 버림) 새로운 배열을 반환
const animals = ["dog", "cat", "rabbit"];
const newAnimals = animals.filter((animal) => {
  // return animal.length > 3;
  return animal.includes("a");
});
console.log(newAnimals);

// =========================================
// 퀴즈
const nums = [1, 2, 3, 4, 5];
const words = ["dog", "cat", , "rabbit", "apple", "wow"];

// 1.
const dobbleNums = nums.map((num) => num * 2);
console.log(dobbleNums);

// 2.
const newWords = words.filter((w) => {
  return w.includes("t");
});
console.log(newWords);

// =========================================
//
const tripleNums = nums.map((num) => num * 3);
console.log(tripleNums);
console.log(tripleNums.includes(3)); // true
console.log(tripleNums.includes(7)); // false
console.log(tripleNums.indexOf(9)); // 2 => index 위치
console.log(tripleNums.indexOf(10)); // -1 => 없음

const aaa = ["a", "b", "c"];
const bbb = ["d", "e", "f"];
console.log(aaa.concat(bbb));
console.log([...aaa, ...bbb]);

const arr1 = [
  {
    name: "a",
    id: 1,
  },
  {
    name: "b",
    id: 2,
  },
  {
    name: "c",
    id: 3,
  },
];
const arr2 = [
  {
    name: "d",
    id: 4,
  },
  {
    name: "e",
    id: 5,
  },
  {
    name: "f",
    id: 6,
  },
];
const arr3 = arr1.concat(arr2)
console.log(arr3)