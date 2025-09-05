console.log('third file');

const main = document.querySelector('#main-container');

const section = document.createElement('section');
// section.innerText = `
section.innerHTML = `
<h1>New Section</h1>
<p>This is dummy text</p>
<ul>
    <li>AAA</li>
    <li>BBB</li>
    <li>CCC</li>
    <li>DDD</li>
</ul>
`;

main.appendChild(section);
