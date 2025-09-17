// alert();

document.querySelector('#add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    let amount = getInputValueByID('amount');
    // console.log(amount);
    let pin = getInputValueByID('pin-number');
    // console.log(amount, pin);
    let account = document.getElementById('account-number').value;
    // console.log(account);
    let bank = document.getElementById('bank-name').value;

    if(amount<0){
        alert("Amount can't be less than 0");
        return;
    }

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
            let div = document.createElement('div');
            div.classList.add('bg-red-400');
            div.innerHTML = `
            <h3 class="text-yellow-300">Add Money</h3>
            <p>Amount: ${amount}</P>
            <p>Bank: ${bank}</p>
            <p>Account: ${account}</p>
            `;
            historyContainer.appendChild(div);
        }else{
            console.log('Pin not matched!');
        }
    }else{
        console.log('Invalid Account')
    }

});