//함수
// 자바스크립트에서는 함수를 일급 객체로 취급함
// array, object , funtion

// const c = function (a, b) {
//   return a + b;
// };
// const d = c(1, 2); // 3     //변수로 입력 가능 다른 언어에선 불가

// const subway = {
//   name: "부평점 서브웨이",
//   sale: 0,
//   sellbread: function () {
//     this.sale = this.sale + 1000;
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
// };
// subway.sellbread();
// subway.sellbread();
// subway.sellbread();
// subway.printSale();

//baskinRabbins 오브젝트 타입
// ice cream: ["민트초코", "엄마는외게인", "뉴치케"]
// sale :0
// sellIcecream : 민트초코 - 2000, 엄외 -2500, 뉴치케 - 4000
// printSale: 매출보여주는 함수

const BR = {
  iceCream: [
    { name: "민트초코", price: 2000 },
    { name: "엄외", price: 2000 },
    { name: "뉴치케", price: 2000 },
  ],

  sale: 0,

  selliceCream: function (num) {
    if (this.iceCream[num] == undefined) console.log("그런 번호 없음");
    else {
      console.log(
        `${this.iceCream[num].name}아이스크림이 판매되었습니다. ㅅㄱ`
      );
      this.sale = this.sale + this.iceCream[num].price;
    }
  },

  printSale: function () {
    console.log(`현재매출 : ${this.sale}`);
  },

  addIcecream: function (a, b) {
    this.iceCream.push({ name: a, price: b });
    console.log(`${a}메뉴가 추가 되었습니다.`);
  },
};

BR.selliceCream(0);
BR.printSale();
BR.addIcecream("cheez", 10000);
BR.selliceCream(3);
BR.printSale();
BR.selliceCream(3);
BR.printSale();
