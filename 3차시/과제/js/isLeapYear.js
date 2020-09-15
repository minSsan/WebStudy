function is_leap_year() {
  var year = parseInt(document.getElementById("inputYear").value, 10);
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) { // 윤년일 때,
    document.getElementById("result").innerHTML = "윤년입니다.";
  }
  else {
    document.getElementById("result").innerHTML = "윤년이 아닙니다.";
  }
}
