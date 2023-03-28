
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
        console.log('back');
        res('back');
      }, 1000);
    });
  }
  function hell() {
    return new Promise(function (res, rej) {
      setTimeout(function () {
        res('callback hell');
      }, 1000);
    });
  }
  
async function exec(name) {
    let n = await call(name);
    console.log(`${n} 반가워`)
    let b = await back();
    console.log(`${b} 을 실행했구나`)
    let h = await hell();
    console.log(`여기는 ${h}`)
}

exec('kim');