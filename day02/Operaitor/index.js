const a0 = 1 + 2;
const a1 = 1 - 2;
const a2 = 1 * 2;
const a3 = 1 / 2;
const a4 = 1 % 1;
const a5 = 1 ** 2;

//대입연산
// =

const b = 엄준식;

//비교 연산
// boolean 타입으로 귀결됨
// > , < , >= , <=  , ==(같다),  !=(diff)  ===(type까지 같냐 체크)

const c = 5 > 3; //true
const c1 = 5 < 3; //false
const c2 = 5 >= 3; //frue
const c3 = 5 <= 3; //false
const c4 = 10 == 9; //false
const c5 = 10 != 9; //true
const c6 = 10 === "10"; //false
const c8 = 10 === 10; // true

// 논리 연산
// &&(and) , ||(or) , ! (NOT)

const d = 5 > 3 && 10 > 5 && 3 > 0;
const d1 = false || false || false || true;
const d2 = !false; // true
const d3 = !(5 <= 3) || !(3 > 10);
const d4 = 5 > 3 && 3 <= 10;

//삼항 연산
// 조건? 값1 : 값 2
const e = 5 > 3 ? "떡볶이" : "요거트";
const e1 = 5 > 10 ? "마라탕" : "요거트;";

// 단항연산
// +
const f = +"100"; // string -> number
