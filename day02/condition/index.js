//if문

// const name = prompt("니기름");
// if (name == "엄준식") alert("살아있다.");

// const number = Number(prompt("숫자 입력"));

// if (number > 0) {
//   alert("양의정수입니다.");
// } else {
//   alert("음의정수입니다.");
// }

// const number = Number(prompt("수 입력"));

// if (number % 2 == 0) {
//   alert("짝수입니다.");
// } else {
//   alert("홀수입니다.");
// }

// const num = Number(prompt("수입력"));
// if (num % 2) {
//   alert("홀수");
// } else {
//   ("짝수");
// }

// const num = +prompt("정수 입력")
// if (num >0 ) {
//     alert("양의 정수");
// }

//      else if (num ==0) {
//         alert("0임")
//      }
//       else {
//         alert("음의정수")
//      }

// const num3 = +prompt("정수입력");
// if (num3 > 0 && num3 % 2 == 1) {
//   alert("양의 홀수");
// } else if (num3 > 0 && num3 % 2 == 0) {
//   alert("양의 짝수");
// } else if (num3 < 0 && num3 % 2 == 0) {
//   alert("음의 짝수");
// } else if (num3 < 0 && num3 % 2 == -1) {
//   alert("음의 홀수");
// } else {
//   const result = num3 == 0 ? "0입니다." : "에러입니다.";
//   alert(result);
// }

const num4 = +prompt("몇년생입니까?");

if (num4 % 12 == 0) {
  alert("원");
} else if (num4 % 12 == 1) {
  alert("닭");
} else if (num4 % 12 == 2) {
  alert("개");
} else if (num4 % 12 == 3) {
  alert("돼지");
} else if (num4 % 12 == 4) {
  alert("쥐");
} else if (num4 % 12 == 5) {
  alert("소");
} else if (num4 % 12 == 6) {
  alert("범");
} else if (num4 % 12 == 7) {
  alert("토");
} else if (num4 % 12 == 8) {
  alert("뱀");
} else {
  num4 % 12 == 9;
  alert("말");
}
