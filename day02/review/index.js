const bus = prompt("버스번호");
const age = prompt("나이를 입력");

// if (bus == "1") {
//   if (age >= "65") {
//     alert("무료입니다.");
//   } else if (age < 8) {
//     alert("800원입니다.");
//   } else alert(`탑승하신 버스는 ${bus}이고 탑승 요금은 ${1200}원 입니다.`);
// }
// if (bus == "2") {
//   if (age >= "65") {
//     alert("무료입니다.");
//   } else if (age < 8) {
//     alert("1000원입니다.");
//   } else alert("1400원입니다.");
// }
// if (bus == "3") {
//   if (age >= "65") {
//     alert("무료입니다.");
//   } else if (age < 8) {
//     alert("1200원입니다.");
//   } else alert("12000원입니다.");
// } else alert("숫자에러");

const bus_date = ["1", "2", "3"];
const bus_fee = [1200, 2000, 1000];

if (age >= 65 || age < 13)
  alert(`귀하의 나이는 ${age}이시고 요금은 무료입니다.`);
else alert(`귀하의 나이는 ${age}이시고 요금은 ${bus_fee[bus - 1]}입니다.`);
