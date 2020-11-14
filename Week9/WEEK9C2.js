var age = prompt("What is Your Age?");
var todayDate = new Date();

var birthYear = todayDate.getFullYear() - age;

document.getElementById("YearOutput").innerHTML = birthYear; 
