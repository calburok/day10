// switch 문

const season = prompt("현재 계절은 무엇?");

switch (season) {
  case "봄":
    alert("봄이니까 한강");
    break;
  case "여름":
    alert("여름이니까 바다");
    break;
  case "가을":
    alert("가을이니까 한강");
    break;
  case "겨울":
    alert("겨울이니까 한강");
    break;
  default:
    alert("올바르지않은 형식");
}
