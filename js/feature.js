console.log("feature js loaded");

// show add money form
document
  .getElementById("btn-show-add-money-section")
  .addEventListener("click", function () {
    console.log("show add money button clicked");
    showSectionById("form-add-money");
  });

// show cash out form
document
  .getElementById("btn-show-cash-out-section")
  .addEventListener("click", function () {
    console.log("show cash out section clicked");
    showSectionById("form-cash-out");
  });

// show transactions history
document.getElementById('btn-show-transactions-section').addEventListener('click', function(){
    console.log('show transactions button clicked');
    showSectionById("transactions-history")
})
