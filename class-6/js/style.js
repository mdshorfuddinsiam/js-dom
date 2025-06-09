console.log('Style from JS file!!');
let sections = document.querySelectorAll('section');
// console.log(sections);
for(let section of sections){
    section.style.border = '5px solid blue';
    section.style.padding = '25px';
    section.style.borderRadius = '20px';
    section.style.marginBottom = '20px';
    section.style.backgroundColor = 'yellow';
}

let otherLanguages = document.querySelectorAll('#others-container h1');
console.log(otherLanguages);
console.log(otherLanguages[0].classList);
otherLanguages[0].classList.remove('large-text');
otherLanguages[0].classList.add('text-center');
