/////// if문 //////
// let number = prompt('숫자를 입력하세요')
// number = Number(number)
// if (number > 3) {
//     alert(`${number}는 3보다 큽니다.`)
// } else {
//     alert(`${number}는 3보다 작거나 같습니다.`)
// }

// let score = prompt('점수를 입력하세요')
// score = Number(score)
// if (score > 100 || score < 0) {
//     alert('입력값이 잘못되었습니다.')
// } else if (90 < score){
//     alert('A입니다.')
// } else if (80 < score) {
//     alert('B입니다.')
// } else {
//     alert('C입니다.')
// }

// let age = prompt('나이를 입력하세요.')
// age = Number(age)
// if (age > 19) {
//     alert('성인입니다.')
// } else if (age > 16){
//     alert('고딩 입니다.')
// } else if (age > 13) {
//     alert('중딩 입니다.')
// } else if (age > 7) {
//     alert('초딩 입니다.')
// } else {
//     alert('애기 입니다.')
// }

////// db //////
// let userId = 'user01'
// let userPw = '1234'
// function loginUser() {
//     let inputId = prompt('아이디를 입력해 주세요.')
//     let inputPw = prompt('비밀번호를 입력해 주세요.')
//     if (userId === inputId) {
//         if (userPw === inputPw) {
//             alert('로그인이 완료되었습니다.')
//         } else if (inputPw === '') {
//             alert('비밀번호가 비었습니다.')
//         } else {
//             alert('비밀번호가 틀렸습니다.')
//         }
//     } else if (inputId === '') {
//         alert('id가 비었습니다.')
//     } else {
//         alert('id가 틀렸습니다.')
//     }
// }
// loginUser()

////// switch //////
let a = 4;
switch (a) {
  case 3:
    console.log("a=3");
    break;
  case 4:
    console.log("a=4");
    break;
  case 5:
    console.log("a=5");
    break;
  default:
    console.log("a=?");
    break;
}

////// swich 문으로 성적 산출 프로그램 변경 //////
let s = 85;
switch (parseInt(s / 10)*10) {
  case 100:
    console.log("A");
    break;
  case 90:
    console.log("B");
    break;
  case 80:
    console.log("C");
    break;
  default:
    console.log("D");
    break;
}

// 실습 1
let now = new Date().getHours();
now >= 12 ? console.log('지금은 오후 입니다.') : console.log('지금은 오전 입니다.')
