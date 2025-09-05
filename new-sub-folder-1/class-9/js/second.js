console.log('second file');

const secondList = document.getElementById('second-list');
console.log(secondList);

const li = document.createElement('li');
li.innerText = 'Dynamic li';
secondList.appendChild(li)