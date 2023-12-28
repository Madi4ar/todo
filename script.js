// const num1 = document.querySelector('.input1');
// const num2 = document.querySelector('.input2');
// const plusBtn = document.querySelector('.plus');
// const minusBtn = document.querySelector('.minus');
// const boluBtn = document.querySelector('.bolu');
// const kobeituBtn = document.querySelector('.kobeitu');
// const resultBtn = document.querySelector('.result');
// const result = document.querySelector('.resultnum');
// let action = '+'

// plusBtn.onclick = function() {
//     action = '+';
// }
// minusBtn.onclick = function() {
//     action = '-';
// }
// boluBtn.onclick = function() {
//     action = '/';
// }
// kobeituBtn.onclick = function() {
//     action = '*';
// }


// resultBtn.onclick = function() {
//     if(action == '+') {
//         result.textContent = Number(num1.value) + Number(num2.value);
//     } else if(action == '-') {
//         result.textContent = Number(num1.value) - Number(num2.value);
//     } else if(action == '/') {
//         result.textContent = Number(num1.value) / Number(num2.value);
//     } else if(action == '*') {
//         result.textContent = Number(num1.value) * Number(num2.value);
//     }
// }


 
// const b1 = 42
// const b2 = '42'


// console.log(b1 === b2)


const inputElement = document.querySelector('.listElem');
const createBtn = document.querySelector('.create');
const listElement = document.querySelector('.list');

const notes = [
    {
        listName:'Madiyar',
        completed:false,
    }
]



function render() {
    listElement.innerHTML = ''
    if(notes.length == 0) {
        listElement.innerHTML = '<p>No data</p>'
    }

    for(let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()


createBtn.onclick = function() {
    if(inputElement.value.length == 0) {
        return
    }
    const newNote = {
        listName: inputElement.value,
        completed:false
    }

    notes.push(newNote);
    render();
    inputElement.value = '';
}


listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type == 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type == 'remove') {
            notes.splice(index, 1);
        }

        render()
    }
}


function getNoteTemplate(notes, index) {
    return `
        <div class="list w-full border border-black p-5 flex justify-between items-center mt-3">
                <p class="${notes.completed ? 'line-through' : 'no-underline'} ">${notes.listName}</p>
                <div class="btns">
                    <button data-type="toggle" data-index="${index}" type="button" class="${notes.completed ? 'bg-yellow-800': 'bg-green-800'} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Done</button>
                    <button data-type="remove" data-index="${index}" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </div>
            </div>
    `
}

