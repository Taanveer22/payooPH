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

      //   added to transactions history
      const p = document.createElement("p");
      p.classList.add("bg-secondary", "my-5");
      p.innerText = `account balance : ${accountBalance} & update balance : ${updateBalance}`;
      document.getElementById("history-container").appendChild(p);
    } else {
      console.log("wrong input ... please try again later");
    }
  });
