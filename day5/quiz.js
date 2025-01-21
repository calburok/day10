function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function hello(name) {
  return `${name}님 안녕`;
}

function tolength(word) {
  return `${word}문자: ${word.length}`;
}

function square_three(x) {
  return x ** 2 * 3;
}

function lunch_menu(x) {
  return `점심메뉴 ${x} 입니다.`;
}

function allergy_test(x) {
  if (x.include("새우" || "땅콩" || "조개")) return "알러지있음";
  else return "알려지 없음";
}

function threetoArray(x, y, z) {
  return [x, y, z];
}

function getIphone(ver, mo, st) {
  return { version: ver, model: mo, storage: st };
}

function angle(a) {
  if (a < 90 && a > 0) {
    return "예각입니다.";
  } else if (a == 90) return "직각입니다.";
  else if (a > 90 && a < 180) return "둔각입니다.";
  else return "평각입니다.";
}

function word(word, alpha) {
  return word.split(alpha)[0];
}

function word2(x) {
  if (x.length >= 4 && x.length <= 10) return "길이가 유효!0";
  else return "길이가 유효하지 않음";
}
