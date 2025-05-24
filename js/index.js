console.log('index js loaded');

document.getElementById('btn-login').addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    console.log('login button clicked');

    const inputMobileLoginValue = document.getElementById('input-mobile-login').value;
    console.log(inputMobileLoginValue);

    const inputPinLoginValue = document.getElementById('input-pin-login').value;
    console.log(inputPinLoginValue);

    if(inputMobileLoginValue === '01761248294' && inputPinLoginValue === "1234"){
        console.log('congrats! you have login successfully');
        window.location.href = "../html/home.html"
    } else{
        console.log('wrong input .... please try again later');
    }

})