document.getElementById('cash-out-section').style.display = 'none';

document.getElementById('cash-out-box').addEventListener('click', function(){
    // document.getElementById('add-money-section').style.display = 'none';
    // document.getElementById('cash-out-section').style.display = 'block';

    handleToggle('add-money-section', 'none');
    handleToggle('trasaction-section', 'none');
    handleToggle('cash-out-section', 'block');
});

document.getElementById('add-money-box').addEventListener('click', function(){
    // document.getElementById('cash-out-section').style.display = 'none';
    // document.getElementById('add-money-section').style.display = 'block';

    handleToggle('cash-out-section', 'none');
    handleToggle('trasaction-section', 'none');
    handleToggle('add-money-section', 'block');
});

// -------- Applied in (utitiles.js) file ------------ 
// function handleToggle(id, status){
//     document.getElementById(id).style.display = status;
// }