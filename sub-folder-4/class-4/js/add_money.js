// alert();

document.querySelector('#add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    let amount = getInputValueByID('amount');
    // console.log(amount);
    let pin = getInputValueByID('pin-number');
    // console.log(amount, pin);
    let account = document.getElementById('account-number').value;
    // console.log(account);

    if(account.length === 11){
        // console.log('Account Okay');
        if(pin === 1111){
            console.log('Pin Okay');
        }else{
            console.log('Pin not matched!');
        }
    }else{
        console.log('Invalid Account')
    }

});