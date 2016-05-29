function checkButton(id) {
  var whichButton = id;
  var input1 = parseInt(document.getElementById("in1").value);
  var input2 = parseInt(document.getElementById("in2").value);
  if (whichButton === "addition") {
    document.getElementById("result").value = input1 + input2;
  } 
  else if (whichButton === "subtraction") {
    document.getElementById("result").value = input1 - input2;
  }
  else if (whichButton === "division") {
  	document.getElementById("result").value = input1 / input2;
  }
  else if (whichButton === "multiply") {
  	document.getElementById("result").value = input1 * input2;
  }
};