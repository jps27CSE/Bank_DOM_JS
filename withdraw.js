document.getElementById("btn_withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw_field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("Please Provide a Number");
    return;
  }

  const WithdrawTotalElement = document.getElementById("withdraw_total");
  const previousWithdrawTotalString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance_total");
  const previousBlanaceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBlanaceTotalString);

  withdrawField.value = "";
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Not Much Money");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  WithdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
