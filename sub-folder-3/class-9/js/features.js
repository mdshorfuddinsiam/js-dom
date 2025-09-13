// console.log('Features JS file!!');

document.querySelector('#btn-show-add-money-form').addEventListener('click', function(){
    // console.log('Add money form button clicked');
    console.log(document.getElementById('cash-out-form').classList);
    console.log(document.getElementById('add-money-form').classList);

    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
});

document.querySelector('#btn-show-cash-out-form').addEventListener('click', function(){
    // console.log('Cash out form button clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});



