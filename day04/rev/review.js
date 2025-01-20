const mbti = prompt("당신의 MBTI는?(대문자입력)");

const num1 = mbti[0].toUpperCase();
const num2 = mbti[1].toUpperCase();
const num3 = mbti[2].toUpperCase();
const num4 = mbti[3].toUpperCase();

const mbtiob = {
  I: "외향",
  E: "내향",
  S: "감성",
  N: "착함",
  T: "순함",
  J: "못생김",
  P: "잘생김",
};

alert(`${mbtiob[num1]}${mbtiob[num2]}${mbtiob[num3]}${mbtiob[num4]}`);

// const mail = prompt("메일을 입력해주세요");

// if (!mail.includes("@")) alert("@미포함");
// else if (!mail.includes(".com" || ".net")) alert(".com , .net 미포함");
// else if (!mail.includes("naver" || "kakao" || "yahoo"))
//   alert("올바른 형식 아님");
// else alert("가입성공");

//   &&& ? 이메일 타당 : 안타당
