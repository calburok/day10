// const coffee = {
//   name: "아메리카노",
//   price: 2500,
//   ingredients: ["물", "커피콩", "얼음"],
// };

// console.log(coffee["ingredients"][1]);
// console.log(coffee.ingredients[1]);

// const dplus = {
//   top: {
//     playerName: "siwoo",
//     champion: "sion",
//     kda: { kill: 1, death: 0, assist: 13 },
//   },
//   mid: {
//     playerName: "showmaker",
//     champion: "Ahri",
//     kda: { kill: 9, death: 2, assist: 7 },
//   },
// };

// console.log(dplus.top.kda.kill + dplus.mid.kda.kill);

// //

// const lunch = {
//   name: "햄버거",
//   franchise: "버거킹",
// };

// //오브젝트 데이터 추가

// lunch.kcal = 900;

// lunch.side = "감튀";
// lunch.drink = "제로콜라";

// //오브젝트 삭제
// delete lunch.name;

// //
// const drama = {
//   title: "오징어게임",
//   grade: "19",
//   genres: ["액션", "블랙코미디", " 군상극", "데스게임"],
// };
// const { genres } = drama;
// const [action, black] = drama.genres;

// const a = drama.title;

// const { title } = drama;

// const menu = ["아메리카노", "라떼", "민트"];
// const a1 = menu[0];
// const [a2] = menu;

const player = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};
const coffee = {
  coffeeName: "아메리카노",
  price: 2500,
};

const data = { player, coffee };
console.log(data);

const cosmetic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세린",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄 오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};

const { company } = cosmetic;

//첫 번째 성분만 빼기
const { first } = cosmetic.ingredients;

const test = { ...cosmetic.ingredients.first };
console.log(test);
console.log(first);

const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};

const { cpu, ram, storage } = laptop.specs;

console.log(cpu);
console.log(ram);
console.log(storage);
