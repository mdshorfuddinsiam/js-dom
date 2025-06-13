console.log('Event summary js file!!');

// -----------------------------
function textHandler(){
    const displayText = document.getElementById('display-text');
    displayText.innerHTML = 'Text changed by onclick function';
}

document.getElementById('handle-button').addEventListener('click', function(){
    const displayText = document.getElementById('display-text');
    displayText.innerHTML = 'Updated by addEventListener';
});
// -----------------------------