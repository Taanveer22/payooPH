console.log("cash out js loded");

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log("cash out button clicked");

    const cashOutAmount = getInputFieldValueById("input-amount-cash-out");
    console.log(cashOutAmount);

    const cashOutPin = getInputFieldValueById("input-pin-cash-out");
    console.log(cashOutPin);

    if (cashOutPin === 1234) {
      console.log("congrats ! you have cashed out ");
      const accountBalance = getTextFieldValueById("account-balance");
      console.log(accountBalance);

      const updateBalance = accountBalance - cashOutAmount;
      console.log(updateBalance);

      document.getElementById("account-balance").innerText = updateBalance;
    } else {
      console.log("wrong input ... please try again later");
    }
  });
