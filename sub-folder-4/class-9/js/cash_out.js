document.getElementById('transaction-section').addEventListener('click', function(event){
    event.preventDefault();

    const account = document.getElementById('cash-out-account-number').value;

    const pin = getInputValueByID('cash-out-pin-number');
    const amount = getInputValueByID('cash-out-amount');
    const balance = getInnerTextByID('total-balance');

    let bank = document.getElementById('cash-out-bank-name').value;

    if(amount>balance){
        alert('Invalid Amount');
        return;
    }

    if(account.length === 4){
        if(pin === 1111){
            const updatedBalance = balance - amount;
            setInnerTextByID_Value('total-balance', updatedBalance);

            let historyContainer = document.querySelector('#transaction-section');
            let div = document.createElement('div');
            div.classList.add('bg-red-400');
            div.innerHTML = `
            <h3 class="text-yellow-300">Cash Out</h3>
            <p>Amount: ${amount}</P>
            <p>Bank: ${bank}</p>
            <p>Account: ${account}</p><br>
            `;
            historyContainer.appendChild(div);
        }else{
            console.log('Wrong Pin');
        }
    }else{
        console.log('Wrong Account');
    }
});
