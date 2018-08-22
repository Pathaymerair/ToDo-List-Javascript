

var add = document.getElementById('add-task');
var addTask = document.getElementsByTagName('form')
var checkBtn = Array.from(document.getElementsByClassName('check'))
var modifyBtn = Array.from(document.getElementsByClassName('modify'))
var removeBtn = Array.from(document.getElementsByClassName('remove'))
var list = document.getElementById('list')
var arrayList = []
var red = '#971c1c54'





addTask[0].addEventListener('submit', function(){
    event.preventDefault();
    console.log('Button clicked!');
    var valeur = document.getElementById('input-task').value; //On doit mettre la valeur de l'input dans une var.
    console.log(valeur)
    
    if (valeur) {
        addItem(valeur)
        document.getElementById('input-task').value = ''

    }
    
});






function addItem(text){
    
    
    var item = document.createElement('li');
    item.classList.add('liElem');
    item.classList.add('inToDo');
    item.classList.add('allElem');
    list.appendChild(item);
    arrayList.push(item)

    var inputiti = document.createElement('input')
    inputiti.value = text;
    inputiti.classList.add('monInput')
    inputiti.readOnly = true;
    item.appendChild(inputiti);



    var divBtn = document.createElement('div');
    divBtn.classList.add('buttons')
    item.appendChild(divBtn)

    var yas = document.createElement('button');
    yas.classList.add('check');
    yas.innerHTML = '<i class="far fa-check-circle"></i>'
    divBtn.appendChild(yas)

    yas.addEventListener('click', yasItem)

    var changer = document.createElement('button');
    changer.classList.add('modify');
    changer.innerHTML = '<i class="fas fa-exchange-alt"></i>'
    divBtn.appendChild(changer)

    changer.addEventListener('click', modifyItem)


    var nope = document.createElement('button');
    nope.classList.add('remove');
    nope.innerHTML = '<i class="far fa-trash-alt"></i>'
    divBtn.appendChild(nope)

    nope.addEventListener('click', removeItem);

    console.log(arrayList[0].className)
}

function removeItem(){
    var item = this.parentNode.parentNode;

    switch (item.style.background){
        case '' :
        case 'green':
        item.style.background = 'red';
        item.classList.add('inDelete');
        item.classList.remove('inToDo');
        item.classList.remove('inDone');
        
        break;
        case 'red' :
        item.style.background = '';
        item.classList.add('inToDo');
        item.classList.remove('inDelete');
        break;
        default:


    }
    // parent.removeChild(item);
}

function yasItem(){
    var item = this.parentNode.parentNode;
    switch (item.style.background){
        case '' :
        case 'red':
        item.style.background = 'green';
        item.classList.add('inDone');
        item.classList.remove('inToDo');
        item.classList.remove('inDelete');
        break;
        case 'green' :
        item.style.background = '';
        item.classList.add('inToDo');
        item.classList.remove('inDone');
        break;
        default:
    }
    
    
}

function modifyItem(){

    switch (this.innerHTML){
        case '<i class="fas fa-exchange-alt"></i>':
        var item = this.parentNode.parentNode;
        var inputato = item.childNodes[0];
        inputato.style.background = '#7FFFD4'
        inputato.readOnly = false;
        this.innerHTML = '<i class="far fa-save"></i>'
    break;
    case '<i class="far fa-save"></i>' :
        var item = this.parentNode.parentNode;
        var inputato = item.childNodes[0];
        inputato.style.background = 'none'
        inputato.readOnly = true;
        this.innerHTML = '<i class="fas fa-exchange-alt"></i>'
    break;
    default:
    }
}

function filtreToDo(){
    switch (list.className){
        case '':
        list.classList.add('toDo')
        break;
        case 'toDo':
        list.classList.remove('toDo')
        break;
        default:
    }
    
}

function filtreDone(){
    switch (list.className){
        case '':
        list.classList.add('done')
        break;
        case 'done':
        list.classList.remove('done')
        break;
        default:
    }
}

function filtreDeleted(){
    switch (list.className){
        case '':
        list.classList.add('deleted') 
        break;
        case 'deleted':
        list.classList.remove('deleted')
        break;
        default:
    }  
}

function filtreAll(){
    switch (list.className){
        case '':
        list.classList.add('all') 
        break;
        case 'all':
        list.classList.remove('all')
        break;
        default:
    } 
}
var allBtn = document.getElementById('all')
var todoBtn = document.getElementById('todobtn')
var doneBtn = document.getElementById('donebtn')
var dltBtn = document.getElementById('dltbtn')

todoBtn.addEventListener('click', filtreToDo);
doneBtn.addEventListener('click', filtreDone);
dltBtn.addEventListener('click', filtreDeleted);
allBtn.addEventListener('click', filtreAll)


