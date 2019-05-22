
function addStuff(num1, num2){
console.log("num1 + num2");
}

function minusStuff(num1, num2){
return num1 - num2;
}

function divideStuff(num1, num2){
return num1 / num2;
}
function multiplyStuff(num1, num2){
return num1 * num2;
}

// function myFunction() {
//  document.getElementById("myForm").submit();
// 	}

function myFunction() {
  var x,y,oper;

  // Get the value of the input field with id="numb"
  x = document.getElementById("num1").value;
  y= document.getElementById("num2").value;
  oper = document.getElementBy("oper").value;

  // If x is Not a Number or less than one or greater than 10
  if (oper === "add") {
    text = num1 + num2;
  } else if (oper ==="minus"){ 
  	text = num1 - num2;
  } else if (oper === "divide"){
      text = num1 / num2;
  } else if (oper ==="multiply"){ 
  	text = num1 * num2;
  }
  document.getElementById("demo").innerHTML = text;
}




