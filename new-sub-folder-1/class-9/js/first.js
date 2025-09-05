console.log('first file');

// (Tag)
const allLi = document.getElementsByTagName('li');
console.log(allLi);

// (Class)
const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

// (Id)
const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'gray';
secondSection.style.padding = '20px';

