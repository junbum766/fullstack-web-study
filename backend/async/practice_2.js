function changeColor(color) {
  return new Promise(function (res, reg) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      res(color);
    }, 1000);
  });
}

changeColor("red")
  .then(function (color) {
    return changeColor("orange");
  })
  .then(function (color) {
    return changeColor("yellow");
  })
  .then(function (color) {
    return changeColor("green");
  })
  .then(function (color) {
    return changeColor("blue");
  })
  .then(function (color) {
    return changeColor("purple");
  });
