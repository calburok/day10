// date

const a = new Date();

const date = a.getDate();
const day = a.getDay();
const hour = a.getHours();
const month = a.getMonth();
// console.log({ date, day, hour, month });

const iso = a.toISOString();
const locale = a.toLocaleString();
const date1 = a.toLocaleDateString();
const time = a.toLocaleTimeString();
// console.log({ iso, locale, date1, time });

const absolute = Math.abs(-10); //절대값
const max = Math.max(3, 13, 255, 327, 120, 310); //최댓값
const min = Math.min(3, 13, 255, 327, 120, 310); //최솟값

const ceil = Math.ceil(3.14); // 올림
const floor = Math.floor(3.9); //내림
const round = Math.round(3.4); //반올림

const ran = Math.random() * 10; //0 <= x < 1

const getrandom = (min, max) => {
  return Math.floor(Math.ramdom() * (max - min + 1) + min);
};

console.log(getrandom(10, 20));
