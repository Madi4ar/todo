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


// const inputElement = document.querySelector('.listElem');
// const createBtn = document.querySelector('.create');
// const listElement = document.querySelector('.list');

// const notes = [
//     {
//         listName:'Madiyar',
//         completed:false,
//     }
// ]



// function render() {
//     listElement.innerHTML = ''
//     if(notes.length == 0) {
//         listElement.innerHTML = '<p>No data</p>'
//     }

//     for(let i = 0; i < notes.length; i++) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
//     }
// }

// render()


// createBtn.onclick = function() {
//     if(inputElement.value.length == 0) {
//         return
//     }
//     const newNote = {
//         listName: inputElement.value,
//         completed:false
//     }

//     notes.push(newNote);
//     render();
//     inputElement.value = '';
// }

// function renderEdit(index) {
//     listElement.innerHTML = getNoteTemplate(notes[index], index, true);
// }

// function saveEdit(index) {
//     const editValue = document.querySelector('#editInput').value;
//     notes[index].listName = editValue;

//     render();
// }

// listElement.onclick = function (event) {
//     if(event.target.dataset.index) {
//         const index = parseInt(event.target.dataset.index)
//         const type = event.target.dataset.type

//         if(type == 'toggle') {
//             notes[index].completed = !notes[index].completed
//         } else if (type == 'remove') {
//             notes.splice(index, 1);
//         }

//         if(type === 'edit') {
//             renderEdit(index);
//         } else if(type ==='save') {
//             saveEdit(index);
//         }

//         render()
//     }
// }



// function getNoteTemplate(notes, index, editMode) {
//     if(editMode) {
//         return `
//         <div class="list w-full border border-black p-5 flex justify-between items-center mt-3">
//                 <input id="editInput" class="border rounded p-1" type="text" value="${notes.listName}">
//                 <button data-type="save" data-index="${index}" type="button" class="bg-blue-500 text-white px-2 py-1 rounded">Сохранить</button>
//             </div>;
//         `
//     }
//     return `
//         <div class="list w-full border border-black p-5 flex justify-between items-center mt-3">
//                 <p class="${notes.completed ? 'line-through' : 'no-underline'} ">${notes.listName}</p>
//                 <div class="btns">
//                     <button data-type="edit" data-index="${index}" type="button" class="${notes.completed ? 'bg-yellow-800': 'bg-green-800'} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">edit</button>
//                     <button data-type="toggle" data-index="${index}" type="button" class="${notes.completed ? 'bg-yellow-800': 'bg-green-800'} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Done</button>
//                     <button data-type="remove" data-index="${index}" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
//                 </div>
//             </div>
//     `
// }





// function greet(name) {
//     console.log('Hello -', name)
// }

// greet('Madiyar');

// console.log(new Date());

// let mode = 'full';
// let output = document.querySelector('.now-time');
// let fullBtn = document.querySelector('.full')
// let dateBtn = document.querySelector('.date')
// let timeBtn = document.querySelector('.time')

// update();

// function update() {
//     output.textContent = format(mode);
// }

// setInterval(() => {
//     update();
// }, 1000)


// fullBtn.onclick = function() {
//     mode = 'full'
//     update();
// }

// dateBtn.onclick = function() {
//     mode = 'date'
//     update();
// }

// timeBtn.onclick = function() {
//     mode = 'time'
//     update();
// }

// function format(formatMode) {
//     const now = new Date();

//     switch(formatMode) {
//         case 'time':
//             return now.toLocaleTimeString()
//         case 'date': 
//             return now.toLocaleDateString()
//         case 'full':
//             return now.toLocaleDateString() + ' ' + ' ' + now.toLocaleTimeString();

//         default:
//             return now.toLocaleTimeString()
//     }
// }

// const getData = () => new Promise((resolve) => resolve([1,2,3]))

// async function asyncExample(){
//     try {
       
//         const data = await getData()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log('Finally')
//     }
// }


// asyncExample();


const list = document.querySelector('.list');
const filter = document.querySelector('.filter');
let USERS = []


filter.addEventListener('input', (event) => {
    const {value} = event.target;
    const filteredUsers = USERS.filter((user) => 
        user.name.toLowerCase().includes(value)
    )
    render(filteredUsers);
})
async function start() {
    list.innerHTML = 'Loading...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
        render(data);
    } catch (err) {
        list.style.color = 'red';
        list.innerHTML = err.message;
    }
}

function render(users = []) {
    const html = users.map(toHTML).join('');
    list.innerHTML = html;
}


function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
}

start();











