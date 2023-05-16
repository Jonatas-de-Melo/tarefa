//buscar as regerencias dos elementos html

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

//funçao para adicionar uma tarefa

function addTask(){
    //retona o valor da tarefa digitada pelo usuario

        const   taskDescription = taskiInput.value;

        //criar um novo intem de lista e adicionar a lista
        const listIntem = document.createElemmet('li');
        listIntem.className = 'list-group-item';
        listIntem.innerHtml = `<span>${taskDescription}</span>;`;
        todoList.appendChild(listIntem);

        //limpar o campo de entrada de texto
        taskInput.value = '';

        //adicionar um evento de clique para remover o item da lista

        const trashiIcon = listIntem.querySelector('.trash-icon');
        trashiIcon.addEventListener('click', function(){
            listIntem.remove();
        });

    }
