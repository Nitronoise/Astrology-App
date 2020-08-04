function showSign() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(request.responseText);
      var p = document.getElementById("sign-p");
      var img = document.getElementById("sign-img");
      var d = document.getElementById("day");
      var m = document.getElementById("month");
      var Day = d.value;
      var Month = m.options[m.selectedIndex].value;
      if ((Month == 1 && Day >= 20) || (Month == 2 && Day <= 18)) {
        img.setAttribute("src", response.Aquarius[0].toString());
        p.innerHTML = response.Aquarius[1].toString();
      } else if ((Month == 2 && Day >= 19) || (Month == 3 && Day <= 20)) {
        img.setAttribute("src", response.Pisces[0].toString());
        p.innerHTML = response.Pisces[1].toString();
      } else if ((Month == 3 && Day >= 21) || (Month == 4 && Day <= 19)) {
        img.setAttribute("src", response.Aries[0].toString());
        p.innerHTML = response.Aries[1].toString();
      } else if ((Month == 4 && Day >= 20) || (Month == 5 && Day <= 20)) {
        img.setAttribute("src", response.Taurus[0].toString());
        p.innerHTML = response.Taurus[1].toString();
      } else if ((Month == 5 && Day >= 21) || (Month == 6 && Day <= 20)) {
        img.setAttribute("src", response.Gemini[0].toString());
        p.innerHTML = response.Gemini[1].toString();
      } else if ((Month == 6 && Day >= 21) || (Month == 7 && Day <= 22)) {
        img.setAttribute("src", response.Cancer[0].toString());
        p.innerHTML = response.Cancer[1].toString();
      } else if ((Month == 7 && Day >= 23) || (Month == 8 && Day <= 22)) {
        img.setAttribute("src", response.Leo[0].toString());
        p.innerHTML = response.Leo[1].toString();
      } else if ((Month == 8 && Day >= 23) || (Month == 9 && Day <= 22)) {
        img.setAttribute("src", response.Virgo[0].toString());
        p.innerHTML = response.Virgo[1].toString();
      } else if ((Month == 9 && Day >= 23) || (Month == 10 && Day <= 22)) {
        img.setAttribute("src", response.Libra[0].toString());
        p.innerHTML = response.Libra[1].toString();
      } else if ((Month == 10 && Day >= 23) || (Month == 11 && Day <= 21)) {
        img.setAttribute("src", response.Scorpio[0].toString());
        p.innerHTML = response.Scorpio[1].toString();
      } else if ((Month == 11 && Day >= 22) || (Month == 12 && Day <= 21)) {
        img.setAttribute("src", response.Sagittarius[0].toString());
        p.innerHTML = response.Sagittarius[1].toString();
      } else if ((Month == 12 && Day >= 22) || (Month == 1 && Day <= 19)) {
        img.setAttribute("src", response.Capricorn[0].toString());
        p.innerHTML = response.Capricorn[1].toString();
      }
    }
  };
  request.open("GET", "Sign.json", true);
  request.send();
}
// Dark mode fucntion
function darkMode() {
  var box = document.querySelector("body");
  var btn = document.querySelector(".fas");
  btn.setAttribute("class", "fas fa-toggle-on");
  btn.style.color = "teal";
  box.style.background = "#15181a";
  btn.setAttribute("onclick", "lightMode()");
}
// Light mode fucntion
function lightMode() {
  var box = document.querySelector("body");
  var btn = document.querySelector(".fas");
  btn.setAttribute("class", "fas fa-toggle-off");
  btn.style.color = "wheat";
  box.style.background = "linear-gradient(90deg, #4cade2, teal)";
  btn.setAttribute("onclick", "darkMode()");
}
