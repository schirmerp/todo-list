const body = document.querySelector('body');
const btn = document.createElement('button');
const container = document.createElement('div');
container.setAttribute('id', 'container');
container.className = 'container';
body.appendChild(container);
//var dd = document.createElement('input');

let list = [];
let notes = [];
let sortedlist;

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


/*
btn.className = 'addBtn'
btn.innerHTML= 'add';
body.appendChild(btn);
btn.onclick = () => {
    getNewItem();
} */

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
    const form = document.getElementById('form');
    var valP = document.getElementById("valueP").value;
    
    let x = new ItemToDo(valTitle,valDate, valP, false);
    addItem(x);
    render();
    form.reset();

}

/*function getNewItem(){
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
}*/

function addItem(x){
    list.push(x);
    return list;
}


function render() {
    const display = document.getElementById('container');
    const iDiv = document.querySelectorAll('.itemDiv');   
    iDiv.forEach(itemDiv => display.removeChild(itemDiv));
   
    list.sort((a, b) =>{
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB
    })

    for(i=0; i < list.length; i++ ){
        build(list[i])
    };
}
function build(item) {
        const div = document.createElement('div');
        const titleDiv = document.createElement('div');
        const toDoItem = document.createElement('div');
        const toDoTitle = document.createElement('h1');
        const toDoDate = document.createElement('h3');
        const btnDiv = document.createElement('div');
        const itemBtn = document.createElement('button');
        const doneButton = document.createElement('button');
        const removeBtn = document.createElement('button');
        
        div.setAttribute('id', list.indexOf(item));
        div.classList.add('itemDiv');

        
        
        if (item.priority == '1'){
                div.classList.add('itemDiv-1');
            }
        if (item.priority == '2'){
                div.classList.add('itemDiv-2');
            }
        if (item.priority == '3'){
                div.classList.add('itemDiv-3');
            }
        if (item.priority == '4'){
                div.classList.add('itemDiv-4');
            }
        if (item.priority == '5'){
                div.classList.add('itemDiv-5');
            }
        if (item.priority == '6'){
                div.classList.add('itemDiv-6');
            }
        if (item.priority == '7'){
                div.classList.add('itemDiv-7');
            }
        if (item.priority == '8'){
                div.classList.add('itemDiv-8');
            }
        if (item.priority == '9'){
                div.classList.add('itemDiv-9');
            }
        if (item.priority == '10'){
                div.classList.add('itemDiv-10');
            }
        else {
            div.classList.add('fuckadiv');
        }
        
        titleDiv.classList.add('titleDiv');
        div.appendChild(titleDiv)

        toDoTitle.textContent = item.title;
        titleDiv.appendChild(toDoTitle);

//        dd.setAttribute('type', 'date');
  //      dd.setAttribute('id', 'dd');
    //    div.appendChild(dd);

        toDoDate.textContent = item.dueDate;
        titleDiv.appendChild(toDoDate);

        toDoItem.setAttribute('id', `n${list.indexOf(item)}`);
        toDoItem.classList.add('toDoItem')
        div.appendChild(toDoItem);

        btnDiv.classList.add('btnDiv');
        div.appendChild(btnDiv);

        itemBtn.setAttribute('id', list.indexOf(item));
        itemBtn.classList.add('itemBtn');
        itemBtn.innerHTML = 'add notes';
        btnDiv.appendChild(itemBtn);
        itemBtn.onclick = () => {
            mB();
           /* miniRen();
            */
            function mB(){
            const ndiv = document.createElement('span');
            const note = document.createElement('h4');
            const noteline = document.createElement('input')

            note.textContent = window.prompt('add notes');
            note.setAttribute('id', 'note');
            notes.push(note);
            ndiv.setAttribute('id', `nd${notes.indexOf(item)}`);
            ndiv.appendChild(note);

            noteline.setAttribute('type', 'checkbox');
            noteline.defaultChecked = false;
            noteline.setAttribute('id', 'noteline');
            ndiv.appendChild(noteline); 
            //noteline.onclick = verify();
                
            noteline.addEventListener('click', () => {
                
                if(noteline.checked == true){
                    console.log('yes')
                    noteline.parentElement.style.textDecorationLine = 'line-through';
                }else{
                    console.log('no')
                    noteline.parentElement.style.textDecorationLine = 'none';
                }
            })
            
            console.log(ndiv.className);
            toDoItem.appendChild(ndiv);

            


          return notes
            }
            
        }
        doneButton.classList.add('doneBtn')
        btnDiv.appendChild(doneButton)
        removeBtn.classList.add('removeBtn')
        removeBtn.textContent = 'Remove Item'
        btnDiv.appendChild(removeBtn)

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
            if(item.done == true){
                doneButton.style.backgroundColor = 'green'
                doneButton.textContent= 'done'
                btnDiv.parentElement.style.backgroundColor = 'lightGreen'
            }else{
                doneButton.style.backgroundColor = 'red'
                doneButton.textContent = 'Not done'
                btnDiv.parentElement.style.backgroundColor = 'white';
            }

        });

        removeBtn.addEventListener('click', () => {
            //list.splice(list[i], 1)
            let j = removeBtn.parentElement.id;
            list.splice(list.indexOf(item), 1);
            render();
            console.table(list);
        })
}


//`${list[i].title} <br> ${list[i].dueDate} <br> ${list[i].priority}<br>` ;

/* <input type="checkbox" id="cBox" onclick="remNote()">  

const cbox = document.getElementByID("cbox")

if(cbox == true){
    toDoItem
}else{

}

function miniRen(){
                const nd = document.querySelectorAll('#nd-1')
                const nCount = document.getElementsByClassName('toDoItem');
                //nd.forEach(nd =>nCount.removeChild(nd));
                while(nCount.length > 0){
                    nCount[0].parentNode.removeChild(nCount[0]);
                };
                for(i=0;i<notes.length;i++){
                    mB(notes[i])
                }
            } 
*/
