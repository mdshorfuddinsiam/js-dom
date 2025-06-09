console.log('appned js');

// where to add
let languages = document.getElementById('lang-lists');
// console.log(languages);

// what to be added
let li = document.createElement('li');
li.innerHTML = 'New language';

// add the child
languages.appendChild(li);
console.log(languages);
// ---------------------------------

// ----------- manually -----------
let mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

let section = document.createElement('section');

let h1 = document.createElement('h1');
h1.innerText = 'New Heading Tag';

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerText = 'One';
let li2 = document.createElement('li');
li2.innerText = 'Two';
let li3 = document.createElement('li');
li3.innerText = 'Three';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

section.appendChild(h1);
section.appendChild(ul);

mainContainer.appendChild(section);

console.log(mainContainer)
// ----------------------------------

// -------- using backtic -----------
let newSection = document.createElement('section');
newSection.innerHTML = `
    <h1>Country List</h1>
    <ul>
        <li>Bangladesh</li>
        <li>India</li>
        <li>Pakistan</li>
        <li>China</li>
    </ul>
`;

// ----------- mine (faced issue) ----------
// let newSection = `
//     <section>
//         <h1 id="student-title">Student Lists</h1>
//         <ul class="love-lists">
//             <li class="love">Siam</li>
//             <li class="love">Pushpita</li>
//             <li class="love">Shorfuddin</li>
//             <li>Arman</li>
//         </ul>
//     </section>
// `;
// // console.log(newSection);
// mainContainer.append(newSection);
// ------------ end: mine -------------

mainContainer.appendChild(newSection);
console.log(mainContainer);
// ----------------------------------