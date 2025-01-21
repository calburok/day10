// const cook = (x) => {
//   console.log("요리시작");

//   switch (x) {
//     case 1:
//       console.log("댕장꿍");
//       break;
//     case 2:
//       console.log("미역국");
//       break;
//     case 3:
//       console.log("소야");
//       break;
//     case 4:
//       console.log("긴티띠개");
//       break;
//     case 5:
//       console.log("쨔빠구리");
//       break;
//     case 6:
//       console.log("너구리");
//       break;
//     default:
//       console.log("없음");
//   }

//   console.log("요리 끝");
// };
// cook(1);

// 아래함수에 skill(fire)을 넣으면 밑의 x()가 fire()랑 똑같은 상태가 댐 그럼 fire()에 해당하는 함수가 실행되는 원리
const skill = (x) => {
  console.log("스킬 준비 !");
  x();
  console.log("스킬완료!");
};

const fire = () => {
  console.log("불");
};

const ice = () => {
  console.log("얼음");
};

const thunder = () => {
  console.log("번개");
};

skill(fire);
