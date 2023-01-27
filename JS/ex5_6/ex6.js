window.onload = function () {
  function x() {
    console.log("Hello!");
    var greet = document.getElementById("greet");
    greet.innerHTML += "Hello! ";
  }

  var timer = setInterval(x, 1000);

  function y() {
    clearInterval(timer);
  }
  setTimeout(y, 10000);

  const myInterval = setInterval(localTime, 1000);
  function localTime() {
    var time = document.getElementById("time");
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
  }

  var myColor = setInterval(myColor, 1000);
  function myColor () {
    var color = document.getElementById("color");
    color.style.backgroundColor = color.style.backgroundColor == "yellow" ? "pink" : "yellow";
  }

  function stopColor() {
    clearInterval(myColor);
  }
  setTimeout(stopColor, 10000);

};
