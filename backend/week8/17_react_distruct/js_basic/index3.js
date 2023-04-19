const a = 10;
const b = 8;
a > b && console.log("a가 큼");

function test(name) {
  const obj = {
    a: name || "홍",
  };
  console.log(obj)
}
test()