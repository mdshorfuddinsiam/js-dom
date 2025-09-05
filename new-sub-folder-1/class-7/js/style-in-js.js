let sections = document.querySelectorAll('section');
// console.log(sections);
for(let section of sections){
    section.style.border = '2px solid black';
    section.style.backgroundColor = 'gray';         
    section.style.color = 'white';                  // html a deya tai color pacche nah
    section.style.padding = '20px';
    section.style.borderRadius = '20px';
    section.style.margin = '25px';
}

// let cContainer = document.getElementById('fruits-title');
// console.log(cContainer);
// // cContainer.style.backgroundColor = 'yellow';

// console.log(cContainer.classList);
// cContainer.classList.add('text-center');
// cContainer.classList.remove('large-text');

// --------- nicher code kaj krtese -----------
let cContainer = document.getElementById('fruits-title');
// console.log(cContainer);

// console.log(cContainer.classList);
cContainer.classList.add('text-center');
cContainer.classList.remove('large-text');
// --------------------------------------------

