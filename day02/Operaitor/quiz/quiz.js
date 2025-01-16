// const height = prompt("키가 몇cm입니까?");

// const e = 140 >= height ? "탑승금지" : "탑승 가능";
// window.alert(e);

// const number = prompt("숫자 입력");
// const d = Number(number) % 2;
// const f = d === 1 ? "홀수" : "짝수";

// window.alert(f);

// const birth = prompt("태어난 년도 입력");
// const z = 20 <= Number(2026 - birth) ? "성인입니다." : "미성년자입니다"; //참이면 오른쪽으로 감
// window.alert(z);

// const first = prompt("첫번쨰 숫자");
// const second = prompt("두번 쨰 숫자");
// alert(Number(first) > Number(second) ? first : second);

const hour = prompt("시간입력");
const min = prompt("분입력");
const sec = prompt("초입력");
alert(3600 * Number(hour) + 60 * Number(min) + Number(sec));
