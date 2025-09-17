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
            // console.log('Pin Okay');

            const currentBalance = getInnerTextByID('total-balance');
            // console.log(currentBalance);

            const sum = amount + currentBalance;
            // document.getElementById('total-balance').innerText = sum;

            setInnerTextByID_Value('total-balance', sum);

            let historyContainer = document.querySelector('#trasaction-section');
            // console.log(historyContainer);
            let p = document.createElement('p');
            // console.log(p);
            p.innerHTML = `
            Added ${amount} from ${account} account
            `;
            // console.log(p);
            historyContainer.appendChild(p);
        }else{
            console.log('Pin not matched!');
        }
    }else{
        console.log('Invalid Account')
    }

});