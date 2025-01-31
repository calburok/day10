// const Arr1000 = Array(1001)
//   .fill(0)
//   .map((x, i) => i);
// // console.log(Arr1000);

// const Arr100 = Array(101)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 5 == 0);

// const Arr101 = Array(21)
//   .fill(0)
//   .map((x, i) => i * 5);

// const ArrAni = Array(100)
//   .fill(0)
//   .map((x, i) => i)
//   .map((x) => {
//     if (x % 3 == 0 && x % 5 == 0) return "☢";
//     else if (x % 3 == 0) {
//       return "😜";
//     } else if (x % 5 == 0) return "😘";
//     else return x;
//   });

// // console.log(ArrAni);

const year = Array(126)
  .fill({ 연도: 100, 띠: 100 })
  .map((x, i) => {
    const years = i + 1900;

    if (years % 12 == 1) return { 연도: years, 띠: "자" };
    else if (years % 12 == 2) return { 연도: years, 띠: "축" };
    else if (years % 12 == 3) return { 연도: years, 띠: "인" };
    else if (years % 12 == 4) return { 연도: years, 띠: "묘" };
    else if (years % 12 == 5) return { 연도: years, 띠: "진" };
    else if (years % 12 == 6) return { 연도: years, 띠: "사" };
    else if (years % 12 == 7) return { 연도: years, 띠: "오" };
    else if (years % 12 == 8) return { 연도: years, 띠: "미" };
    else if (years % 12 == 9) return { 연도: years, 띠: "신" };
    else if (years % 12 == 10) return { 연도: years, 띠: "유" };
    else if (years % 12 == 11) return { 연도: years, 띠: "술" };
    else return { 연도: years, 띠: "해" };
  });

console.log(year);

const makeZodiac = (to, from) => {
  const zodiac = {
    0: "신",
    1: "유",
    2: "술",
    3: "해",
    4: "자",
    5: "축",
    6: "인",
    7: "묘",
    8: "진",
    9: "사",
    10: "오",
    11: "미",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zodiac[v % 12] };
    });
};
