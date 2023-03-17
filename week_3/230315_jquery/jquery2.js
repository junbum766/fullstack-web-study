// val()
function getValue() {
  let value = $("input").val();
  // let value = document.querySelector('input').value;
  alert(value);
}

function setValue() {
  $("input").val("설정!");
}

// css()
function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size: 20px; color: red';
}
function changeCssJquery() {
    $('span').css('font-size', '40px');
    $('span').css('color', 'blue');
    console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'http://www.naver.com');

}
function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
    let p = document.querySelector('.p-text');
    p.innerText = '<b>JS</b>로 바꿨습니다~';
}
function changeTextJquery() {
    $('.p-text').text('<b>Jquery</b>로 바꿨습니다.')
}

// html() : text 안에 테그 적용 가능!
function changeHtmlJS() {
    let p = document.querySelector('.p-html');
    p.innerHTML = '<b>JS</b>로 바꿨습니다~';
}
function changeHtmlJquery() {
    $('.p-html').html('<b>Jquery</b>로 바꿨습니다.')

}

// 요소 추가
// append()
function appendJS() {
    let li = document.createElement('li');
    li.innerText = 'append()로 추가된 js';
    let ul = document.querySelector('ul');
    ul.append(li);
}
function appendJquery() {
    $('.colors').append('<li>append()로 추가된 jquery</li>');
}

// prepend()
function prependJS() {
    let li = document.createElement('li');
    li.innerText = 'prepend()로 추가된 js';
    let ul = document.querySelector('ul');
    ul.prepend(li);
}
function prependJquery() {
    $('.colors').prepend('<li>prepend()로 추가된 jquery</li>');
}

// after()
function afterJS() {
    let li = document.createElement('li');
    li.innerText = 'after()로 추가된 js';
    let green = document.querySelector('.green');
    green.after(li);
}
function afterJquery() {
    $('.green').after('<li>after()로 추가된 jquery</li>');
}

// before()
function beforeJS() {
    let li = document.createElement('li');
    li.innerText = 'before()로 추가된 js';
    let green = document.querySelector('.green');
    green.before(li);
}
function beforeJquery() {
    $('.green').before('<li>before()로 추가된 jquery</li>');
}

// 요소 삭제
// remove()
function removeJS() {
    let li2 = document.querySelector('#li2');
    li2.remove();
}
function removeJquery() {
    $('#li2').remove();
}

// empty()
function emptyJS() {
    let nums = document.querySelector('.nums');
    nums.innerHTML = '';
}
function emptyJquery() {
    $('.nums').empty();
}

// 요소 탐색
// find()
function findParent() {
    console.log($('.child2').parent());
}

function findParents() {
    // JS에 없음
    console.log($('.child2').parents());
}

function findNext() {
    // next() : nextSibling
    console.log($('.child2').next());
}

function findPrev() {
    // prev() : previousSibling
    console.log($('.child2').prev());
}

function findChildren() {
    // children() : js의 children과 동일
    console.log($('.parent').children())
    console.log(document.querySelector('.parent').children)
}

// 클래스 조작
function addClass() {
    $('#hi').addClass('fs-50');
}

function removeClass() {
    //$('#hi').removeClass('fs-50'); // 특정 클래스 제거
    $('#hi').removeClass(); // 클래스 모두 제거
}

function hasClass() {
    // true or false로 반환
    console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
    // 한번 누르면 추가, 또 누르면 삭제
    $('#hi').toggleClass('bg-pink');
}