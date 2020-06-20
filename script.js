var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addToDo);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeToDo);

function addToDo() {
    var input = document.getElementById('task');
    var item = input.value;
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
    } else {
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var label = document.createElement('label');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        setTimeout(() => {
            ul.insertBefore(li, ul.childNodes[0]);
            input.value = '';
        }, 200);
    }
}

function removeToDo() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
    
}