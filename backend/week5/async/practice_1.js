function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("back");
      res("back");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    console.log(name + "반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then(function (message) {
    console.log("여기는" + message);
  });
