// option: 1
// <button onclick="console.log(33);">Click Me</button>

// option: 2
// <button onclick="makeRed();">Make Red</button>
function makeRed(){
    // console.log('Make red');
    document.body.style.backgroundColor = 'red';
}

// option: 3
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = makeYellow;  
// makeYellowButton.onclick = makeYellow();  
function makeYellow(){
    // console.log('Make Yellow');
    document.body.style.backgroundColor = 'yellow';
}

// option: 3 (another)
const makePurpleButton = document.getElementById('make-purple');
// makePurpleButton.onclick = function makePurple(){  
makePurpleButton.onclick = function(){  
    document.body.style.backgroundColor = 'purple';
}

// option: 4 (addEventListener)
// const makeGrayButton = document.getElementById('make-gray');
const makeGrayButton = document.querySelector('#make-gray');
makeGrayButton.addEventListener('click', makeGray);
function makeGray(){
    document.body.style.backgroundColor = 'gray';
}

// option: 4 (another)
const makeVioletButton = document.querySelector('#make-violet');
makeVioletButton.addEventListener('click', function makeViolet(){
    document.body.style.backgroundColor = 'violet';
});

// option: 4 ()
document.querySelector('#make-skyblue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'skyblue';
});