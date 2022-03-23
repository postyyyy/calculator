function getHistory() {
  //history pahle liya ,abb isss value k sath jo v karna hoga karege,pahle liya hai isko
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  //used to print history value(isse history value print karege)
  document.getElementById("history-value").innerText = num;
}
// printHistory("9*9+8")

//aab hum same karege output k liye ,pahle output lo then print fxn banaoo usko print karne k liye
function getOutput() {
  return document.getElementById("output-value").innerHTML;
}

function printOutput(num) {
  if (num == "") {
    //agar number empty hai to formate mat karo nai to wo zero ban jaega
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

//getFormattedNumber ek fn hai jo num ko aache se dikhata hai , aa jata hai  numbers m
function getFormattedNumber(num) {
  if (n == "-") {
    //negetive number p jab tum backspace dete ho to nan aa jata hai
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  //to manipulate thee output value we have to remove the comma
  return Number(num.replace(/,/g, ""));
}

// printoutput("979797");
// alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName("operator");
console.log(operator);
for (var i = 0; i < operator.length; i++) {
  console.log(operator[i]);
  operator[i].addEventListener("click", function () {
    //alert("The operator is "+this.id) ;
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } //aab bas operators hi bacche hai
    else if (
      this.id == "+" ||
      this.id == "-" ||
      this.id == "*" ||
      this.id == "/" ||
      this.id == "%" ||
      this.id == "="
    ) {
      var output = getOutput(); //yehh dono valude nikaal liya pahle
      var history = getHistory();
      if (output != "") {
        //output empyty hoga to we cant use opeartor
        output = reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          console.log(result);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
