console.log("add money js loaded");

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log("add money btn clicked");

    const addMoneyAmount = getInputFieldValueById("input-amount-add-money");
    console.log(addMoneyAmount);

    const addMoneyPin = getInputFieldValueById("input-pin-add-money");
    console.log(addMoneyPin);

    if (addMoneyPin === 1234) {
      console.log("congrats! you have added money");
      const accountBalance = getTextFieldValueById("account-balance");
      console.log(accountBalance);
      const updateBalance = accountBalance + addMoneyAmount;
      console.log(updateBalance);
      document.getElementById("account-balance").innerText = updateBalance;
    } else {
      console.log("wrong input ... please try again later");
    }
  });
