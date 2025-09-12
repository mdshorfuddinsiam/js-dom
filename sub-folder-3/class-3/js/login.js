// console.log('Login JS file added!!');

// document.getElementById('login-btn').addEventListener('click', function(){});

// search: form submit reloading the page

// // step-1: set event handler
// document.querySelector('#login-btn').addEventListener('click', function(event){
//     // step-2: prevent default behaviour (prevent reloading browser)
//     event.preventDefault();

//     // step-3: get the phone number and pin number
//     let phoneNumber = document.getElementById('phone-number').value;
//     let pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // set-4: validity phone and email
//     // this is temporary. you should do like this
//     if(phoneNumber === '999' && pinNumber === '1234'){
//         console.log('You are logged in');
//         // step-5: allow user to use the website
//     }else{
//         console.log('Wrong phone numbr or pin');
//     }
// });

document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('login button clicked!');

        // get phone and pin number
        const phoneNumber = document.querySelector('#phone-number').value;
        const pinNumber = document.querySelectorAll('#pin-number')[0].value;
        console.log(phoneNumber, pinNumber);
    
        // bad way to validate
        if(phoneNumber === '999' && pinNumber === '1234'){
            // console.log('You are logged in');
            // search: js on click go to another html file
            // search: js on click go to another html file in the same folder

            window.location.href = 'home.html';
        }else{
            console.log('Wrong phone number or pin');
        }
});

