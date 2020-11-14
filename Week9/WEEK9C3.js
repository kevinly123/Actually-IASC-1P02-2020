function total(){
var firstInput = document.getElementById("Num1").value;
var secondInput = document.getElementById("Num2").value;
var addition = Number(firstInput) + Number(secondInput);
document.getElementById("Output").innerHTML = addition;
}
