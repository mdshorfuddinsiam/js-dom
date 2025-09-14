// console.log('Add Money JS File');

document.getElementById('cash-out-section').style.display = 'none';

document.getElementById('cash-out-box').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
});
document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
});

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const account = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;
    const cAmountt = parseInt(amount);
    const pin = document.getElementById('pin-number').value;
    const cPin = parseInt(pin);
    const totalBalance = document.getElementById('total-balance').innerText;
    const cTotalBalance = parseInt(totalBalance);
    // console.log(account, amount, pin, totalBalance);

    if(account.length === 11){
        // console.log('ok');
        if(cPin === 1234){
            // console.log('okkkkkk');

            const sum = cAmountt + cTotalBalance;
            // console.log(sum);

            document.getElementById('total-balance').innerText = sum;
        }else{
            console.log('Wrong pin');
        }
    }else{
        console.log('Wrong account number')
    }

});

