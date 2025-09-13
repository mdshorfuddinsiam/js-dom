// console.log('Add money JS file added!!');

/**
 * 1. add event listener to add money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 2. get the money user wants to add
 * also, get the pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add 
 * for right pin number, allow to add the number to account balance
 * 4. get the current balance
 * 5. add money to be added with the current balance 
 * 6. display/update the balance in the DOM/UI
 */

document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('add money button clicked');

        const addMoneyValue = document.getElementById('input-add-money').value;
        const pinNumberValue = document.getElementById('input-pin-number').value;
        // console.log(`Amount ${addMoneyValue}, Pin ${pinNumberValue}`);
        // console.log(addMoneyValue, pinNumberValue);

        if(pinNumberValue === '1234'){
            // console.log('go to next step');

            let balanceValue = document.getElementById('current-balance').innerText;
            // console.log(balanceValue);

            // let newBalance = addMoneyValue + balanceValue;
            let newBalance = parseInt(addMoneyValue) + parseInt(balanceValue);
            // console.log(newBalance);

            document.getElementById('current-balance').innerText = newBalance;
        }else{
            console.log('Wrong pin number');
        }
});
