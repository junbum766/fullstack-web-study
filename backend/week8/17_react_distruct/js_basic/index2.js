// class
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  mew() {
    console.log(`${this.name}야~~~ 야옹`);
  }
  eat() {
    console.log(`${this.name}가 밥을 먹습니다.`);
  }
}
const cat1 = new Cat("나비", 3);
console.log(cat1.name);
console.log(cat1.age);
cat1.mew();
cat1.eat();

// class 가 없던 시절..
let tv1 = {
  name: "삼성",
  price: 2000000,
  size: "56inch",
};
let tv2 = {
  name: "LG",
  price: 2200000,
  size: "70inch",
};
let tv3 = {
  name: "apple",
  size: "55inch",
};
console.log(tv1.price, tv2.price, tv3.price); // 오류 => 결측치 발생 위험이 높음

// class 등장
class TV {
  name = "";
  price = 0;
  size = "";
  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }
  getPrice() {
    return this.name + " tv의 값은 " + this.price + "원 입니다.";
  }
  setPrice(p) {
    this.price = p;
  }
}

const newTv1 = new TV("삼성", 2000000, "55inch");
console.log(newTv1.getPrice());
newTv1.setPrice(2500000);
console.log(newTv1.getPrice());

const newTv0 = new TV("apple", "54inch");
console.log(newTv0);

// 하위 클래스
class Product {
  name = "";
  price = 0;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price + "원 입니다";
  }
}

class Laptop extends Product {
  // 상속
  weight = 0;
  constructor(name, price, weight) {
    super(name, price); // 상속받은 부모 클래스 값을 받아옴
    this.weight = weight;
  }
}

let laptop = new Laptop("LG", 3000000, "1kg");
console.log(laptop.getPrice()); // 함수도 상속 받아 온다.

let parent = new Product("애플", 1900000);
console.log(parent.weight); // 부모는 자식의 weigth를 사용하지 못함
