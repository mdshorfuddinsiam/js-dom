// console.log('Login JS File');

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login button clicked!');

    let mobile = document.getElementById('mobile-number').value;
    let pin = document.getElementById('pin').value;
    let covertedPin = parseFloat(pin);
    console.log(typeof pin);
    console.log(mobile, pin);

    if(mobile.length === 11){
        console.log('Get the mobile number');
        if(covertedPin === 1234){
            console.log('Pin number matched');
            window.location.href = './main.html';
        }else{
            alert('Wront PIN');
        }
    }else{
        alert('Wront mobile number');
    }
});