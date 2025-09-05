// console.log('Script from JS file!!');
// console.log(document.body);
// console.log(document.ul);

let countryContainer = document.getElementsByClassName('country-container');
console.log(countryContainer);
console.log(countryContainer[0]);
console.log(countryContainer[0].nodeList);
console.log(countryContainer[0].childNodes);
console.log(countryContainer[0].childNodes[0]);
console.log(countryContainer[0].childNodes[5]);
console.log(countryContainer[0].childNodes[5]);
console.log(countryContainer[0].childNodes[5].childNodes);
console.log(countryContainer[0].childNodes[5].childNodes[3]);
console.log(countryContainer[0].childNodes[5].childNodes[3].className);
console.log(countryContainer[0].childNodes[5].childNodes[3].nextSibling);
console.log(countryContainer[0].childNodes[5].childNodes[4].previousSibling);

let fruitUL = document.querySelector('#fruits-container ul');
console.log(fruitUL);
let li = document.createElement('li');
li.innerText = 'Create By Javascript';
fruitUL.appendChild(li);
console.log(fruitUL);
let li2 = document.createElement('li');
li2.innerText = 'Another new li';
li2.setAttribute('class', 'new-class');
fruitUL.appendChild(li2);
console.log(fruitUL);
console.log(fruitUL.parentNode)
console.log(fruitUL.parentNode.parentNode)
console.log(fruitUL.parentNode.parentNode.parentNode)
console.log(fruitUL.parentNode.parentNode.parentNode.parentNode)
console.log(fruitUL.parentNode.parentNode.parentNode.parentNode.parentNode)
console.log(fruitUL.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
