const amount = document.getElementById('amount');
const tipOutput = document.getElementById('tipOutPut');
document.querySelector('.btn').addEventListener('click', btnClicked);

function btnClicked(e) {
  tipCalculation();
  e.preventDefault();
}

function tipCalculation() {
  const orginalAmount = amount.value;
  const ten = 0.1;
  const result = ten * orginalAmount;

  return result;
}

// UI
function showResult() {
  let total = tipCalculation.result;

  tipOutput.innerHTML = total;
}
