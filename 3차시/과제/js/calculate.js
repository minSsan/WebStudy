function calculate(){
  var n = parseInt(document.getElementById("n").value, 10);
  var m = parseInt(document.getElementById("m").value, 10);

  document.getElementById("add").innerHTML = n + m;
  document.getElementById("subtract").innerHTML = n - m;
  document.getElementById("multiply").innerHTML = n * m;
  document.getElementById("division").innerHTML = n / m;
}
