// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

// // 1초 후에 body 태그의 배경 색상을 빨간색으로 바꾸기
// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
// }, 1000);

// // 1초 후에 h1 태그 글자 색상을 파란색
// function changeColor() {
//   document.querySelector("h1").style.color = "blue";
// }
// setTimeout(changeColor, 1000)

// //#### 비동기 처리 ####//
// // 콜백 함수 활용
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink (callback) {
//     setTimeout(function() {
//         console.log('고민 끝!');
//         product = '제로콜라';
//         price  = 2000;
//         callback(product, price);
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink(pay);

// #### 콜백 지옥 ####//
// 1초마다  배경색이 변경 
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "yellow";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "green";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "blue";
              }, 1000);
          }, 1000);
      }, 1000);
  }, 1000);
}, 1000);