const test = [100, false, "지각", ["커피", "콜라", "아이스크림"]];
const soccer2 = new Array(10);

const menu = ["아메리카노", "라떼", "바닐라"]; //array 타입
const soccer = ["손흥민", "황조롱", "이현배", "김민재"];

배열 관련된 연산자
const test = [menu, soccer];

console.log(test[0][1]);
console.log(test[1][1]);

console.log(test);

// 2. Destructuring 연산자 (=분해)

const test1 = [...menu, ...soccer];
console.log(test1);

//3. rest 연산자
const [son, ...hwang] = soccer;
console.log(son);
console.log(hwang);

const [son 1, rest1] = soccer;
console.log(son1);
console.log(rest1);

// 4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬히형";
console.log(soccer);

// 5. delete 연산자 (=삭제)
delete soccer[3]; //
console.log(soccer);
