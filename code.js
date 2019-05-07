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

// crée une boite rose et ses deux contenu
const blackBox = document.createElement('div');
blackBox.classList.add('blackBox');

const boxTitle = document.createElement('h1');
boxTitle.textContent = "I\'m a div";
blackBox.appendChild(boxTitle);

const boxText = document.createElement('p');
boxText.textContent = 'ME TOO!'
blackBox.appendChild(boxText);

container.appendChild(blackBox);

// Bouton version 2
const btn = document.querySelector('#btn');
btn.onclick = alerte;

// Bouton version 3
const button2 = document.querySelector('#button2');
button2.addEventListener('click', alerte);
button2.addEventListener('click', function(e){
  console.log(e.target);
  e.target.style.background = 'blue';
});

// function d'alerte Bouton
function alerte () {
  alert('fudge!')
};
