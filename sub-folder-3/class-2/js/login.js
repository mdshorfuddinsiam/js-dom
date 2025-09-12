// console.log('Login JS file added!!');

// document.getElementById('login-btn').addEventListener('click', function(){});

// search: form submit reloading the page

// step-1: set event handler
document.querySelector('#login-btn').addEventListener('click', function(event){
    // step-2: prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    // console.log(event);
    // console.log('Login button clicked!!');

    // step-3: get the phone number
    let phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});