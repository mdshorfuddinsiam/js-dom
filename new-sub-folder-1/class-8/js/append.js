console.log('Append JS file')

let itemUL = document.querySelector('#item-container ul');
// console.log(itemUL);

let item = document.createElement('li');
// console.log(item);
item.innerText = 'Item - (new)';
itemUL.appendChild(item);
// console.log(itemUL);

// --------- Section (new create) ----------
let section = document.createElement('section');
// console.log(section);
let h1 = document.createElement('h1');
// console.log(h1);
h1.innerText = 'Create by javascript';
let ul = document.createElement('ul');
// console.log(ul);

let item1 = document.createElement('li');
// console.log(item1);
item1.innerText = 'Siam';
ul.appendChild(item1);
let item2 = document.createElement('li');
// console.log(item2);
item2.innerText = 'Pushputa';
ul.appendChild(item2);
let item3 = document.createElement('li');
// console.log(item3);
item3.innerText = 'Arman';

ul.appendChild(item3);
// console.log(ul);

section.appendChild(h1);
// console.log(section);

section.appendChild(ul);
// console.log(section);

// let mainContainer = document.querySelectorAll('#main-container');
// // let mainContainer = document.getElementById('main-container');
// // console.log(mainContainer);
// mainContainer[0].appendChild(section);

let mainContainer = document.querySelector('#main-container');
// console.log(mainContainer);
mainContainer.appendChild(section);
// -------------------------------------------------

let sectionGF = document.createElement('section');
// console.log(sectionGF);

sectionGF.innerHTML = `
<h1>Girl Friend Lists</h1>
<ul>
    <li>Liza Akter</li>
    <li>Tasmim Jahan Pushpita</li>
</ul>
`;

mainContainer.appendChild(sectionGF);

