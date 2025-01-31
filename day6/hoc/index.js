// const arr = [1, 3, 5, 7, 9];

// //매우중요

// //요소들을 바꿔주는 함수 .map

// const num = (x) => {
//   return x + 10;
// };
// const double = (x) => {
//   return x * 2;
// };

// // 10보다 작으면 배열내 수를 바꿔주는 함수
// const newarr = arr.map(num);
// const newarr1 = arr.map(double);

// console.log(newarr);
// console.log(newarr1);

// const num2 = (x) => {
//   return x ** 2 < 10 ? "짜장면" : "탕수육";
// };
// const newarr2 = arr.map(num2);
// console.log(newarr2);

// const long = (x) => {
//   x ** 3 < 99 ? "커피" : "붕빵";
// };

// const newarr3 = arr.map(long);
// console.log(newarr3);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const text = (x) => {
//   return    x.length >= 6 ? x + "💙" : x + "💘";
// };

// const fruitsarr = fruits.map(text);
// console.log(fruitsarr);

// const text1 = (x) => {
//   return x.length * 2 < 15 ? x + " 과일이름 짧음" : x + "과일이름김";
// };

// const fruitarr = fruits.map(text1);
// console.log(fruitarr);

// //.some : ~조건을 갖고 있나요?
// const arr = [1, 3, 5, 7, 9];

// const isthree = (x) => x == 3;

// const hasthree = arr.some(isthree);
// console.log(hasthree);

// const isadd = (x) => x % 2 == 0;

// const hasadd = arr.some(isadd);
// console.log(hasadd);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const haskbs = (x) => {
//   return x.startsWith("k") || x.startsWith("b") || x.startsWith("s");
// };
// const arr3 = fruits.some(haskbs);
// console.log(arr3);

//every 모든 조건 만족시 true
// const length = (x) => {
//   return x.length <= 12 && x.length >= 4;
// };
// const arr4 = fruits.every(length);
// console.log(arr4);

// const hasiou = (x) => {
//   return x.includes("i") || x.includes("o") || x.includes("u") ? "💛" : "☢";
// };
// const arr5 = fruits.map(hasiou);
// console.log(arr5);

// const song = `Ooh
// I, I just woke up from a dream
// Where you and I had to say goodbye
// And I don't know what it all means
// But since I survived, I realized
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// Ooh
// Oh, lost, lost in the words that we scream
// I don't even wanna do this anymore
// 'Cause you already know what you mean to me
// And our love's the only war worth fighting for
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// Right next to you
// Next to you
// Right next to you
// Oh-oh, oh
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// If the world was ending, I'd wanna be next to you
// Ooh
// I'd wanna be next to you`;

// const songsplit = song.split(" ");

// const a = (x) => {
//   return x.length > 6 ? "💛" : x;
// };

// const songlog1 = songsplit.map(a);
// console.log(songlog1);

// const songlog = song
//   .split(" ")
//   .map((x) => (x.length > 6 ? "💛" : x))
//   .join(" ");

// console.log(songlog);

//filter (입구컷)

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddArr = numArr.filter((x) => x % 2);

const double = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);
