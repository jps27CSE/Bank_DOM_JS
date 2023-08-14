document.getElementById("btn_deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit_field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  depositField.value = "";
  if (isNaN(newDepositAmount)) {
    alert("Please Provide a Number");
    return;
  }

  const depositTotalElement = document.getElementById("deposit_total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance_total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
