console.log('Event js file!!');

// option 1: directly set on the html element

// option 2: add onclick function
function makeBlue(){
    console.log(99);
    document.body.style.backgroundColor = 'blue';
}

// ------------------------------------------------------
// option 3: using id (separate onclick function)
let greenButton = document.getElementById('make-green');
// greenButton.onclick = makeGreen();      // (wrong) function call hoye jay
greenButton.onclick = makeGreen;     

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
// ------------------------------------------------------

// ------------------------------------------------------
// option 3: using id (inline onclick function)
let yelloButton = document.getElementById('make-yellow');
yelloButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'yellow';
}     
// ------------------------------------------------------