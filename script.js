let expression = '';

function appendCharacter(character) {
  expression += character;
  updateDisplay();
}

function clearInput() {
  expression = '';
  updateDisplay();
}

function deleteLastChar() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = '';
    updateDisplay();
    alert('Invalid expression');
  }
}

function updateDisplay() {
  document.getElementById('result').value = expression;
}
