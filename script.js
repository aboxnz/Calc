function sayVal() {
		var input1 = parseInt(document.getElementById("in1").value);
		var input2 = parseInt(document.getElementById("in2").value);
	  function add(value1, value2) {
	    return (value1 + value2)
	  }
	  var sum = add(input1,input2); 
		document.getElementById("result").value = sum;
	}