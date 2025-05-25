console.log("utilities js loaded");

// input value utility function
function getInputFieldValueById(id) {
  const inputFieldValue = document.getElementById(id).value;
  const inputFieldNumber = parseFloat(inputFieldValue);
  console.log(id, inputFieldValue, inputFieldNumber);
  return inputFieldNumber;
}

// text field value utility function
function getTextFieldValueById(id){
    const textFieldValue = document.getElementById(id).innerText;
    const textFieldNumber = parseFloat(textFieldValue);
    console.log(id, textFieldNumber, textFieldValue);
    return textFieldNumber;
}
