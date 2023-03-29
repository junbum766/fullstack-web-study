// background to info //
var $button = $(".button"),
  $modalContainer = $("#modal-container"),
  $body = $("body"),
  $content = $(".content"),
  $close = $(".close"),
  btnId;

$button.on("click", function () {
  btnId = $(this).attr("id");

  $modalContainer.removeAttr("class").addClass(btnId);
  $content.removeAttr("class").addClass("content");

  $body.addClass("modal-active");

  $content.addClass(btnId);
});
// x 클릭시 닫음
$close.on("click", function () {
  $modalContainer.addClass("out");
  $body.removeClass("modal-active");
  $content.removeAttr('class').addClass("out");
});
// esc 누를시 닫음
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    $modalContainer.addClass("out");
    $body.removeClass("modal-active");
    $content.removeAttr('class').addClass("out");
    console.log($modalContainer)
  }
});

// info to img part //
var $modalContainerImg = $("#modal-container-img"),
  $infoBtn = $(".info-btn"),
  $imgBtn = $(".img-btn");

$imgBtn.on("click", function () {
  if ($modalContainer.hasClass('change')) {
    $modalContainer.addClass('continue');
  } else {
    $modalContainer.addClass('change'); 
  }

  $modalContainerImg.removeAttr("class").addClass('act');

  $body.removeClass("modal-active").addClass("img-modal-active");
});
// info로 전환
$infoBtn.on("click", function () {

  $modalContainerImg.addClass('change');
  $modalContainer.removeAttr("class").addClass('change');

  $body.removeClass("img-modal-active").addClass("modal-active");
});

$close.on("click", function () {
  $modalContainerImg.addClass("out");
  $body.removeClass("img-modal-active");
  $content.addClass("out");
});
// esc 누를시 닫음
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    $modalContainerImg.addClass("out");
    $body.removeClass("img-modal-active");
    if ($modalContainerImg.hasClass(btnId)) {
      $content.addClass("out");
    }
  }
});