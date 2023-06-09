const { createApp } = Vue

createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        }
    },
    methods: {
        addGoal() {
            // add new value to goals
            if (this.enteredValue != '') {
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            }
        }
    },
}).mount('#app')

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     if (inputEl.value != '') {
//         // recuperer la value saisi
//         const enteredValue = inputEl.value;
//         // ensuite creer un list d'element 
//         const listItemEl = document.createElement('li');
//         // inject la value saisi dans la list d'element 
//         listItemEl.textContent = enteredValue;
//         // ajouter la list d'element dans la list principale
//         listEl.appendChild(listItemEl);
//         // reinitialiser la list après avoir ajoute la value
//         inputEl.value = '';
//     }
// }

// buttonEl.addEventListener('click', addGoal);