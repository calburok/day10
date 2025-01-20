// const car = {
//   car_name: "porter",
//   car_speed: 0,
//   car_speedup: function (spup) {
//     this.car_speed += spup;
//     console.log(`현재 속도 ${this.car_speed}km/h`);
//   },
//   car_speeddown: function (spdw) {
//     this.car_speed -= this.car_speed <= 0 ? 0 : spdw;

//     console.log(`현재 속도 ${this.car_speed}km/h`);
//   },
//   car_break: function () {
//     this.car_speed = 0;
//     console.log(`현재속도 ${this.car_speed}`);
//   },
// };

// car.car_speedup(100);
// car.car_speedup(100);
// car.car_speedup(100);
// car.car_speedup(100);
// car.car_speeddown(100);
// car.car_speeddown(100);
// car.car_speedup(1000);
// car.car_break();

// quiz 3

const calculator = {
  result: 0,
  showHistory: ``,

  showHistory1: function () {
    console.log(`${this.showHistory} = ${this.result}`);
  },
  plus: function (addNum) {
    this.result += addNum;
    this.showHistory += `+${addNum} `;
  },
  minus: function (minusNum) {
    this.result -= minusNum;
    this.showHistory += `- ${minusNum} `;
  },
  multyply: function (mulNum) {
    this.result *= mulNum;
    this.showHistory += `* ${mulNum} `;
  },
  devide: function (deNum) {
    this.result /= deNum;
    this.showHistory += `/${deNum} `;
  },
  square: function (sqNum) {
    this.result **= sqNum;
    this.showHistory += `**${sqNum} `;
  },
  clear: function () {
    this.result = 0;
    this.showHistory += `==ce `;
  },

  history: function () {
    console.log(this.result);
  },

  Hyun: function (hNum) {
    alert("뭐이리 많노");
  },
};

calculator.plus(100);
calculator.minus(90);
calculator.devide(2);
calculator.square(3);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);
calculator.plus(100);

calculator.plus(10);

calculator.history();
calculator.showHistory1();
