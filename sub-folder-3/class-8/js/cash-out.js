// console.log('Cash out JS file added!!');

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('cash out button clicked!');

    const pin = document.getElementById('input-cash-out-pin').value; 
    // console.log(pin);

    if(pin === '1234'){
        // console.log('Balance reducing');

        const amount = document.getElementById('input-cash-out').value;
        const balance = document.getElementById('current-balance').innerText;
        // console.log(amount, balance);

        const totalBalance = parseInt(balance) - parseInt(amount);
        // console.log(totalBalance);

        document.getElementById('current-balance').innerText = totalBalance;
    }
    else{
        alert('Failed to cash out. Please try again later');
    }
});
