function is_leap_year(year) {
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) { // 윤년일 때,
    return true;
  }
  else {
    return false;
  }
}

function what_last_day(year, month) {
  // 2월일 경우
  if(month == 2) {
    if(is_leap_year(today.getFullYear())) return 29; // 윤년이면 마지막 날짜는 29일
    else return 28; // 윤년이 아니면 마지막 날짜는 28일
  }

  if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) return 31;
  else return 30;
}
/*
  switch (month){
    case 1:
      return 31;
      break;
    case 3:
      return 31;
      break;
    case 4:
      return 30;
      break;
    case 5:
      return 31;
      break;
    case 6:
      return 30;
      break;
    case 7:
      return 31;
      break;
    case 8:
      return 31;
      break;
    case 9:
      return 30;
      break;
    case 10:
      return 31;
      break;
    case 11:
      return 30;
      break;
    default:
      return 31;
  }
}
*/

// 현재 날짜를 알기 위한 Date 클래스의 객체를 생성 -> today 인스턴스
var today = new Date();
// 몇 년인지 불러와서 year 변수에 저장.
var year = today.getFullYear();
// 몇 월인지 불러와서 month 변수에 저장.
var month = today.getMonth() + 1;
// 몇 일인지 불러와서 date 변수에 저장. (9/13 -> date = 13)
var date = today.getDate();
// 마지막 일이 몇 일인지 저장하는 변수 last_day
var last_day = what_last_day(year, month);

// 1일이 무슨 요일인지 start_day 변수에 저장. (0 : 일요일, 1 : 월요일, ... , 6 : 토요일)
today.setDate(1); // 1일로 설정
var start_day = today.getDay(); // 요일을 반환

// ---------------------- 달력 리스트 만들기 ---------------------------

// 달력을 저장할 day_table
var day_table = [['일','월','화','수','목','금','토']];
day_table[1] = new Array(7);
// 1일이 시작되기 전까지 빈칸으로 채우기.
for(var i = 0; i < start_day; ++i) {
  day_table[1][i] = "";
}

// 첫째 주 채우기.
var day = 1;
for(var i = start_day; i < 7; ++i) {
  day_table[1][i] = day;
  day++;
}

// 둘째 주 ~ 마지막 주 채우기.
var row = 1;
while(day <= last_day) {
  ++row;
  day_table[row] = ["","","","","","",""]; // day_table[row] = new Array(7);
  for(var i = 0; i < 7; ++i) {
    day_table[row][i] = day;
    ++day;
    if(day > last_day) break;
  }
}

// -------------------- 달력을 HTML 코드로 삽입 -----------------------

var title_string = "<thead>\
                      <tr>\
                        <td><</td>\
                        <td colspan='5'>"+year+"년 "+month+"월</td>\
                        <td>></td>\
                      </tr>\
                    </thead>";

document.getElementById("table").innerHTML += title_string;


var calender_string = "<tbody>";
for(var i = 0; i <= row; ++i) {

  if(day_table[i][0] == date) { // 오늘 날짜 && 주말 -> 배경 색 && 글자 색 입히기
    calender_string += "<tr><td class='today_holiday'>"+day_table[i][0]+"</td>";
  }
  // !오늘 날짜 && 주말 -> 글자 색만 입히기
  else calender_string += "<tr><td class='holiday'>"+day_table[i][0]+"</td>";

  for(var j = 1; j < 6; ++j) {
    // 오늘 날짜 -> 배경 색 입히기
    if(day_table[i][j] == date) calender_string += "<td class='today'>";
    // !오늘 날짜 -> 배경 색 x
    else calender_string += "<td>"
    calender_string += day_table[i][j]+"</td>";
  }
  if(day_table[i][6] == date) calender_string += "<td class='today_saturday'>";
  else calender_string += "<td class='saturday'>";
  calender_string += day_table[i][6]+"</td>";
  calender_string += "</tr>";
}
calender_string += "</tbody>";

document.getElementById("table").innerHTML += calender_string;
