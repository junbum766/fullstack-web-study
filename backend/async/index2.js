// Promise : 성공, 실패 분리해서 반환
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `promise 상태는 fulfilled!!! then으로 연결됩니다.\n이때의 flag가 ${flag}입니다.`
//       );
//     } else {
//       reject(
//         `promise 상태는 rejected!!! catch로 연결됩니다.\n이때의 flag는 ${flag}입니다.`
//       );
//     }
//   });
// }

// promise1(true)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise1(false)
// .then(function (result) {
//   console.log(result);
// })
// .catch(function (err) {
//   console.log(err);
// });

// promise1(5 > 3) // true, false, 5 > 3
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//#### promise로 마트 예제 변경 ####//
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝!");
//       product = "제로콜라";
//       price = 5000; // 2000 -> 상품명, 가격 출력 그대로 / 4000 -> 금액 부족 메세지 출력
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject()
//       }
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// function nopay() {
//     console.log('금액 부족!!!')
//   }

// let product;
// let price;
// goMart();
// pickDrink()
//     .then(pay)
//     .catch(nopay);

// ###Promise chaning ### //
// ex. (4+3) * 2 - 1 =13 연산
// callback 사용
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let relust = n1 + n2;
//     callback(relust);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1:", x);
//   mul(x, function (y) {
//     console.log("2:", y);
//     sub(y, function (z) {
//       {
//         console.log("3:", z);
//       }
//     });
//   });
// });

// step2. promise 체이닝 이용
function add(n1, n2) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      let result = n1 + n2;
      res(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      let result = n * 2;
      res(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      let result = n - 1;
      //   res(result);
      rej(new Error("의도적으로 에러를 만들어봄"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch(function (err) {
    console.log(err);
  });
