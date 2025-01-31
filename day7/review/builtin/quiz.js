// // // 1부터 max까지의 숫자 중에서 랜덤한 숫자를 반환하는 함수
// const lottoNumber = (max) => {
//   return Math.floor(Math.random() * max) + 1;
// };

// // // 로또 번호를 생성하는 함수
// const generateLottoNumbers = () => {
//   const lottoNumbers = new Set();
//   while (lottoNumbers.size < 6) {
//     lottoNumbers.add(lottoNumber(45));
//   }
//   return Array.from(lottoNumbers);
// };

// const lottoNumbers = generateLottoNumbers();
// console.log(lottoNumbers); // 예: [23, 1, 45, 34, 12, 7]

// // 콘솔로 로또번호 나타내기 ㄱ
// // [1,5,9,23,38,44]
// const getRandom = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const getLotto1 = () => {
//   while (true) {
//     const lotto = [
//       ...new Set(
//         Array(6)
//           .fill(1)
//           .map((v) => String(getRandom(1, 45)))
//       ),
//     ];
//     if (lotto.length == 6) return lotto;
//   }
// };

// console.log(getLotto1());

//   // while 사용해서 로또 만들기
//   const getLotto = () => {
//     while (true) {
//       const lotto = Array(6)
//         .fill(1)
//         .map((v) => String(getRandom(1, 45)));

//       const newLotto = lotto
//         .reduce((a, c) => {
//           if (a.includes(c)) return a;
//           else return a + "," + c;
//         })
//         .split(",");
//       if (newLotto.length == 6) return newLotto;
//     }
//   };

// // 1부터 max까지의 숫자 중에서 랜덤한 숫자를 반환하는 함수
const lottoNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

// // 로또 번호를 생성하는 함수
const generateLottoNumbers = () => {
  const lottoNumbers = new Set();
  while (lottoNumbers.size < 6) {
    lottoNumbers.add(lottoNumber(45));
  }
  return Array.from(lottoNumbers);
};

const lottoNumbers = generateLottoNumbers();
console.log(lottoNumbers); // 예: [23, 1, 45, 34, 12, 7]
