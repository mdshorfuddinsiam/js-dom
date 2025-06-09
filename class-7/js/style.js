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
// console.log(otherLanguages);
// console.log(otherLanguages[0].classList);
otherLanguages[0].classList.remove('large-text');
otherLanguages[0].classList.add('text-center');
// -----------------------------------------------------

// // let lanContainer = document.getElementsByClassName('language-container'); 
// let lanContainer = document.querySelector('.language-container'); 
// console.log(lanContainer);
// console.log(lanContainer.childNodes);
// console.log(lanContainer.children);
// console.log(lanContainer.childElementCount);
// console.log(lanContainer.childNodes[1]);
// console.log(lanContainer.childNodes[3]);
// console.log(lanContainer.childNodes[3].childNodes);
// console.log(lanContainer.childNodes[3].childNodes[5]);

let lanLists = document.querySelector('.language-container ul');
console.log(lanLists);
console.log(lanLists.childNodes);
console.log(lanLists.children);
console.log(lanLists.childElementCount);
console.log(lanLists.childNodes[3]);
console.log(lanLists.childNodes[3].childNodes);
console.log(lanLists.childNodes[3].childNodes[0]);

let newLi = document.createElement('li');
// console.log(newLi);
newLi.innerText = 'New Element';
console.log(newLi);
lanLists.appendChild(newLi);
console.log(lanLists);
console.log(lanLists.parentNode.parentNode.parentNode.parentNode.parentNode);


