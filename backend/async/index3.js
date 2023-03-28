// async / await
// 비동기 처리 최신 문밥

function fetchFruits() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const fruits = ["수박", "키위", "레몬"];
      // res(fruits);
      rej(new Error("알 수 없는 에러 발생."));
    }, 1000);
  });
}

// 1. Promise 사용
// fetchFruits().then(function(fruits) {
//     console.log(fruits);
// }).catch(function(error) {
//     console.log(error)
// })

// 2. async / await 사용
// async function printItem() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }

// printItem();

// ex. 마트 예제
let product, price;

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 3000; // 2000 -> 상품명, 가격 출력 그대로 / 4000 -> 금액 부족 메세지 출력
      if (price <= 2000) {
        resolve();
      } else {
        reject('가격이 2000원을 넘어서 안삽니다.');
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function mart() {
  try {
    goMart();
    await pickDrink();
    pay();
  } catch (error) {
    console.log(error);
  }
}

mart();
