function draw_star() {
  var n = parseInt(document.getElementById("input_num").value, 10);
  var result = "";

  for(var i = 0; i < n; ++i) {
    for(var j = 0; j < i+1; ++j) {
      result += "*";
    }
    result += "<br>";
  }

  document.getElementById("draw_board").innerHTML = result;
}
