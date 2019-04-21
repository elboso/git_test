const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('red');
para.style.color = 'red';
para.textContent = 'Hey I’m red!';

container.appendChild(para);

const smolTitle = document.createElement('h3');
smolTitle.classList.add('blu');
smolTitle.style.color = 'blue';
smolTitle.textContent = 'I’m a blue h3!'

container.appendChild(smolTitle);
