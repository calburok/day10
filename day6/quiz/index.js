const menu = [
  {
    name: "부대찌개",
    price: 20000,
    kcal: 700,
    ingredients: ["햄", "라면", "파", "두부"],
  },
  { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
  {
    name: "샌드위치",
    price: 5000,
    kcal: 400,
    ingredients: ["고구마", "참치", "빵", "치즈"],
  },
  {
    name: "해장국",
    price: 10000,
    kcal: 700,
    ingredients: ["등뼈", "시래기", "감자", "물"],
  },
];

//메뉴에서 가격이 10%올린 배열을 콘솔로 나타내셈

// const upprice = menu.map((x) => (x.price *= 1.1));
// console.log(menu);

// const addkcal = menu.map((x) => (x.kcal += 100));
// const addsuger = menu.map((x) => x.ingredients.push("설탕"));

// const inflation = (x) => {
//   x.price *= 1.1;
//   return x;
// };

// const a = menu.map(inflation); //[ {} , {}, {} ] 를 하나 하나 뒤질꺼임 inflation ( {} 오브젝트 1 ) {}.price}
// console.log(a);

//

// const vegun = (x) => x.ingredients.every((v) => !(v == "햄" || v == "소고기"));

// const newMenu2 = menu.filter(vegun);

// console.log(newMenu2);

const starbucks = [
  { name: "카페모카 ", price: 6000, shots: 2, ingredients: ["커피콩", " 물 "] },
  { name: "레몬에이드 ", price: 7000, shots: 0, ingredients: [" 물 "] },
  {
    name: "아메리카노 ",
    price: 8000,
    shots: 2,
    ingredients: ["커피콩", "물 "],
  },
  {
    name: "자몽허니 블랙티 ",
    price: 9000,
    shots: 0,
    ingredients: [" 물 ", "꿀"],
  },
  {
    name: "화이트초코 ",
    price: 10000,
    shots: 1,
    ingredients: ["커피콩", " 물 "],
  },
];

// const noncoffee = starbucks.filter((x) => x.shots == 0);
// console.log(noncoffee);

const honeyParty = (x) => {
  if (!x.ingredients.includes("꿀")) {
    x.name += "💛";
    x.ingredients.push("꿀");
    x.price += 300;
  }
};

// String -> Array
const arr = "엄준식".split(" ");
const arr1 = { ..."엄준식" };
