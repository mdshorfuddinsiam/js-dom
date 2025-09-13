// console.log('Home JS fill added!!');

// step-1: add an event handler to the add money button inside the form
document.getElementById('add-money-btn').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step-2: get money to be added to the account    
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    console.log(typeof addMoneyInput);
    const addMoneyAmount = parseInt(addMoneyInput);
    console.log(addMoneyAmount);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    
    if(pinNumberInput === '1234'){
        // console.log('Pin number is corret & you can add money now');
        
        // const currentBalance = document.querySelector('#current-balance').value;
        const currentBalance = document.querySelector('#current-balance').innerText;
        console.log(currentBalance);
        console.log(typeof currentBalance);
        const balance = parseInt(currentBalance);
        console.log(balance);

        // const newBalance = addMoneyInput + currentBalance;
        const newBalance = addMoneyAmount + balance;
        console.log(newBalance);

        document.getElementById('current-balance').innerText = newBalance;
    }else{
        console.log("Pin number doesn't match");
    }

});