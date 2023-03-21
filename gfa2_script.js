function addCalc(){
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	var sum = Number(num1) + Number(num2);
	document.getElementById("result").innerHTML = "The sum of "+num1 +" and " +num2+ " is " + sum;
}
function subCalc(){
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	var diff = num1 - num2;
	document.getElementById("result").innerHTML = "The difference of "+num1 +" and " +num2+ " is " + diff;
}
function mulCalc(){
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	var prod = num1*num2;
	document.getElementById("result").innerHTML = "The product of "+num1 +" and " +num2+ " is " + prod;
}
function divCalc(){
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	var quo = num1/num2;
	document.getElementById("result").innerHTML = "The quotient of "+num1 +" and " +num2+ " is " + quo;
}
function remCalc(){
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	var rem = num1%num2;
	document.getElementById("result").innerHTML = "The remainder of "+num1 +" and " +num2+ " is " + rem;
}