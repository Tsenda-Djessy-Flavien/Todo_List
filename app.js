const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    // recuperer la value saisi
    const enteredValue = inputEl.value;
    // ensuite creer un list d'element 
    const listItemEl = document.createElement('li');
    // inject la value saisi dans la list d'element 
    listItemEl.textContent = enteredValue;
    // ajouter la list d'element dans la list principale
    listEl.appendChild(listItemEl);
    // reinitialiser la list après avoir ajoute la value
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);