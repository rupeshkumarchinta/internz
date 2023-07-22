var result = document.getElementById("result");

function calculate() {
  var value = result.value;
  var operator = document.querySelector(".operator:focus").value;

  if (operator === "") {
    return;
  }

  var expression = value + operator;

  result.value = eval(expression);
}

document.querySelector(".number").onclick = function() {
  result.value += this.value;
};

document.querySelector(".operator").onclick = calculate;
