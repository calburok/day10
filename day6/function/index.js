// const PZZ = (x) => {
//   return x + "PIZZA";
// };

// const word = (x) => {
//   return console.log(x ** 3);
// };

// const won = (x) => {
//   return console.log(`${x / 1.45}$`);
// };

// word(10);
// console.log(PZZ("🍕"));

// const gotoAcademy = (transportation) => {
//   console.log("집에서 출발");

//   transportation();

//   console.log("학원 도착");
// };

// const taxi = () => {
//   console.log("택시를 탑승 완료");
// };
// const bus = () => {
//   console.log("버스 타고");
// };
// const walk = () => {
//   console.log("걷기");
// };
// const um = () => {
//   console.log("자전거");
// };
// const pailiun = () => {
//   console.log("엄마차");
// };

// gotoAcademy(taxi);
// gotoAcademy(um);

//make Beverage
//커피만들기 {1.원두갈기 2.평탄화하기 3. 커피기계넣기 4. 버튼 클릭}
//스무디 만들기 {1.재료넣기, 2.얼음넣기, 3.갈기 4.즙짜기}
//차만들기,  {1.티ㅂ잭넣기 2.뜨물넣기 3.후불넣기}

const makeBeverage = (x) => {
  console.log("주문받겠습니다.");

  x();

  console.log("주문완료");
};

const coffee = () => {
  console.log("{1.원두갈기 2.평탄화하기 3.커피기계넣기}");
};

const smooth = () => {
  console.log("{1.재료갈기 2.평탄화하기 3.아가리에넣기}");
};

const tea = () => {
  console.log("{1.원두갈기 2.평탄화하기 3.마시라}");
};

makeBeverage(tea);
makeBeverage(smooth);
makeBeverage(coffee);
