// const SB = {
//   coffee: [
//     { menu: "아아", price: 4000 },
//     { menu: "라떼", price: 4500 },
//     { menu: "유자차", price: 5000 },
//   ],
//   sale: 0,
//   sell: function (num) {
//     if (num == undefined) console.log("그런 메뉴 없다");
//     else console.log(`${coffee[num].menu}판매되었습니다.`);
//     this.sale += coffee[num].price;
//   },
//   printsale: function () {
//     console.log(`현재매출: ${this.sale}`);
//   },
//   add: function (a, b) {
//     console.log(`${a}메뉴가 추가 되었습니다.`);
//     this.coffee.push({ menu: a, price: b });
//   },
// };

// SB.sell(1);
// SB.printsale();

// // quiz 2
// const youtube = {
//   id: "ljk031129",
//   submit_channel: ["안녕", "얀", "이수"],

//   like_channel: ["잘가", "황철순"],
//   submit: function (newchannel) {
//     this.submit_channel.push(newchannel);
//     console.log(` 구독한 채널 ${this.submit_channel}`);
//   },

//   like: function (newlikechannel) {
//     this.like_channel.push(newlikechannel);
//     console.log(` 좋아요 표시한 채널 ${this.like_channel}`);
//   },
// };

// youtube.like("고마워");
// youtube.submit("해병햄버거");

// youtube.like("신태일");  
// youtube.submit("철구");

// youtube.like("턱형");
// youtube.submit("함바가");


const magician = {
  hp: 100,
  mp: 100,
  exp: 100,
  claw: function() {
    if (mp < 10  ) console.log(`마나가 부족합니다. 현재마나 ${mp}`);
    else  { exp += 10 ,
      console.log("매직클로 발동"),
      this.mp -= 10 

    }
  }                                                    //경험치 10 오름  매직클로 발동 !   mana -10
  tp                                                     //경험치 50오름 텔레포트 발동          man -50
  potion:                                               //마나 50, 체력 50오름
}