const body = document.querySelector('body');
const btn = document.createElement('button');
const container = document.createElement('div');
container.setAttribute('id', 'container');
container.className = 'container';
body.appendChild(container);
//var dd = document.createElement('input');

let list = [];

let today = new Date;
console.log(today);

class ItemToDo {
    constructor (title, Date, priority, done){
        this.title = title
        this.dueDate = Date;
        this.priority = priority;
        this.done = Boolean(done);
        this.description;

        this.info = () => {
            return `${title} <br> ${dueDate} <br> ${priority}`
        }
    }
};



btn.className = 'addBtn'
btn.innerHTML= 'add';
body.appendChild(btn);
btn.onclick = () => {
    getNewItem();
}

//const work = new ItemToDo('work', '9/07/84', 1, true);
//const eat = new ItemToDo('eat', '8/23/08', 0, false);
//const bday = new ItemToDo('bday', '8/22/11', 2, true);

//addItem(work);
//addItem(eat);
//addItem(bday);

/*const wha = (() => {
    lisB = document.getElementById("valueBtn");
    lisB.onclick = () => {
        getInput()
    }
})();*/

function getInput(){
    var valTitle = document.getElementById("valueTitle").value;
    var valDate = document.getElementById("valueDate").value;
    
    var valP = document.getElementById("valueP").value;
    
    let x = new ItemToDo(valTitle,valDate, valP, false);
    addItem(x);
    render();
    valTitle = '';
}

function getNewItem(){
    let e;
    let d;
    let p;
    let c;
    e = window.prompt('New Event');
    d = window.prompt('Date?');
    p = window.prompt('Priority?');
    c = window.prompt('true or false: completed?')
    e = new ItemToDo(e, d, p, c);

    addItem(e);
    render();
    return e;
}

function addItem(x){
    list.push(x);
    return list;
}


function render() {
    const display = document.getElementById('container');
    const dones = document.querySelectorAll('.itemDiv');   
    dones.forEach(itemDiv => display.removeChild(itemDiv));
   

    for(i=0; i < list.length; i++ ){
        build(list[i])
    };
}
    function build(item) {
        const div = document.createElement('div');
        const toDoItem = document.createElement('div');
        const toDoTitle = document.createElement('h1');
        const toDoDate = document.createElement('h3');
        const itemBtn = document.createElement('button');
        const doneButton = document.createElement('button');
        
        div.setAttribute('id', list.indexOf(item));
        div.classList.add('itemDiv');

        toDoTitle.textContent = item.title;
        div.appendChild(toDoTitle);

//        dd.setAttribute('type', 'date');
  //      dd.setAttribute('id', 'dd');
    //    div.appendChild(dd);

        toDoDate.textContent = item.dueDate;
        div.appendChild(toDoDate);

        toDoItem.setAttribute('id', list.indexOf(item));
        toDoItem.classList.add('toDoItem')
        div.appendChild(toDoItem);

        itemBtn.setAttribute('id', list.indexOf(item));
        itemBtn.classList.add('itemBtn')
        itemBtn.innerHTML = 'add notes';
        div.appendChild(itemBtn);
        itemBtn.onclick = () => {
            toDoItem.innerHTML += window.prompt('add notes') + '<br>';
        }
        doneButton.classList.add('doneBtn')
        div.appendChild(doneButton)

        container.appendChild(div);

        if(item.done == false){
            doneButton.textContent = 'Not done'
            doneButton.style.backgroundColor ='red'
        }else{
            doneButton.textContent= 'done'
            doneButton.style.backgroundColor = 'green'  
        }

        doneButton.addEventListener('click', () => {
            item.done = !item.done; 
            build(item);

        });

        
    }
    

//`${list[i].title} <br> ${list[i].dueDate} <br> ${list[i].priority}<br>` ;