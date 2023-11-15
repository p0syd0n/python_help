const fs = require('fs');

function reportbug() {
  var data = document.getElementById('reportticket').value
  var prevdata = ''
  var senddata = data+prevdata+'\n'
  alert(senddata)
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function on_load() {
  var randomnum = Math.floor(Math.random() * 10) + 1
  if (randomnum == 1) {
    document.getElementById("rmt").innerHTML = 'Keep on coding!'
  } else if (randomnum == 2) {
    document.getElementById("rmt").innerHTML = 'Good coding recources here!'
  } else if (randomnum == 3) {
    document.getElementById("rmt").innerHTML = 'Your future is in coding!'
  } else if (randomnum == 4) {
    document.getElementById("rmt").innerHTML = 'Programming is cool!'
  } else if (randomnum == 5) {
    document.getElementById("rmt").innerHTML = 'Find your answers here!'
  } else if (randomnum == 6) {
    document.getElementById("rmt").innerHTML = 'HTML is cool!'
  } else if (randomnum == 7) {
    document.getElementById("rmt").innerHTML = 'Python is excellent!'
  } else if (randomnum == 8) {
    document.getElementById("rmt").innerHTML = 'Lua is the best language.'
  } else if (randomnum == 9) {
    document.getElementById("rmt").innerHTML = 'JavaScript is fun to learn!'
  } else if (randomnum == 10) {
    document.getElementById("rmt").innerHTML = 'Created by ITemply and OnyxDev1234!'
  }
}