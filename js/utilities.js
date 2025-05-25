console.log("utilities js loaded");

// input value utility function
function getInputFieldValueById(id) {
  const inputFieldValue = document.getElementById(id).value;
  const inputFieldNumber = parseFloat(inputFieldValue);
  console.log(id, inputFieldValue, inputFieldNumber);
  return inputFieldNumber;
}

// text field value utility function
function getTextFieldValueById(id) {
  const textFieldValue = document.getElementById(id).innerText;
  const textFieldNumber = parseFloat(textFieldValue);
  console.log(id, textFieldNumber, textFieldValue);
  return textFieldNumber;
}

// show section by id
function showSectionById(id) {
  // hide all the sections
  document.getElementById("form-add-money").classList.add("hidden");
  document.getElementById("form-cash-out").classList.add("hidden");
  document.getElementById("transactions-history").classList.add("hidden");

  //show a specific section by clicking the action button powered by id
  document.getElementById(id).classList.remove("hidden");
}
