console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

// mouse event
// click(function() {}), mouseover(function() {})
// hover(function() {}, function() {})
// hover(마우스를 올렸을 때, 마우스를 뗐을 때)

// 1. click() : 클릭이 일어났을 때
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// on() == addEventListener()
$(".num").on("click", function () {
  $(this).css("color", "blue"); // 'num'을 넣으면 하나만 눌러도 전체가 바뀜
});

$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeClass("hover1");
  }
);

$(window).scroll(function () {
  console.log("scroll!!!!!!!");
});

// 선택요소.addEventListener('keydown', function() {})
$(".input-key").keydown(function (e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("UP");
  } else if (e.code === "ArrowDown") {
    console.log("DOWN");
  } else if (e.code === "ArrowRight") {
    console.log("Right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else {
    console.log("Else");
  }
});

// todo list
$("#todo-form").on("submit", function (e) {
  e.preventDefault();
  const todo = $('input[name="todo"]').val();
  $("ul.todos").append(`<li>${todo}</li>`);
  $('input[name="todo"]').val('');
});
