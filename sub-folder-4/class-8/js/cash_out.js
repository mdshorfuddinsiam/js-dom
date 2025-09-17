document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const account = document.getElementById('cash-out-account-number').value;

    const pin = getInputValueByID('cash-out-pin-number');
    const amount = getInputValueByID('cash-out-amount');

    if(account.length === 4){
        if(pin === 1111){
            const balance = getInnerTextByID('total-balance');
            const updatedBalance = balance - amount;
            setInnerTextByID_Value('total-balance', updatedBalance);

            let historyContainer = document.querySelector('#trasaction-section');
            let p = document.createElement('p');
            p.innerHTML = `
            Cashout ${amount} from this ${account} account
            `;
            historyContainer.appendChild(p);
        }else{
            console.log('Wrong Pin');
        }
    }else{
        console.log('Wrong Account');
    }
});
