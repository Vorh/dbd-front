/**
 * Created by vorh on 10/9/17.
 */


function CreateTodo(caption, content, id) {
    this.id = id;
    this.date = new Date();
    this.caption = caption;
    this.content = content;
    this.isComplete = false;
    this.type = 1;

    this.getHumanDate = function () {
        return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
    };
}


function initTodo() {
    let btn = $('btnCreateTodo');

    let modalCreateTodo =$('modal-createTodo');
    btn.addEvent('click',function () {
        modalCreateTodo.setDisplay('block');
    });

    modalCreateTodo.getElementsByClassName('close')[0].addEventListener('click',function () {
        modalCreateTodo.setDisplay('none');

    });


    modalCreateTodo.getElementsByClassName('green')[0].addEventListener('click',function () {
        let caption  = $('modal-todo-caption').value;
        let content = $('modal-todo-content').value;
        let todo = new CreateTodo(caption,content,1);

        todoService.addTodo(todo);

        $('modal-todo-caption').clear();
        $('modal-todo-content').clear();
        modalCreateTodo.setDisplay('none')
    });


    $('btnDeleteTodo').addEvent('click',function () {
       let todo = todoService.getSelectedTodo();
       todoService.removeTodo(todo.id);
    });

}

function insertDocTodo(todo) {
    let todoLine = document.createElement("div");
    todoLine.className = "todo-line";

    let todoLabel = document.createElement("div");
    todoLabel.className = "todo-label todo";

    let tag = document.createElement("i");
    tag.innerHTML = "Todo";
    todoLabel.appendChild(tag);


    let todoDate = document.createElement("div");
    todoDate.className = 'todo-date';
    todoDate.innerHTML = todo.getHumanDate();

    let todoCaption = document.createElement("input");
    todoCaption.className = "todo-caption";
    todoCaption.value = todo.caption;

    let todoBtn = document.createElement("div");
    todoBtn.className = "todo-btn";
    todoBtn.innerHTML = '<i><i class="fa fa-eye" aria-hidden="true"></i> View</i>';
    todoBtn.addEventListener('click', function () {
        displayTodoContent(todo);
        todoService.selectTodo(todo);
    });

    todoLine.appendChild(todoLabel);
    todoLine.appendChild(todoDate);
    todoLine.appendChild(todoCaption);
    todoLine.appendChild(todoBtn);

    return todoLine;
}


function displayTodoContent(todo) {
    let todoContentBody = $('todo-content').getElementsByClassName('todo-content-body')[0];
    todoContentBody.innerHTML = todo.content;

    $('btnDoneTodo').setDisplay('block');
    $('btnEditTodo').setDisplay('block');
    $('btnDeleteTodo').setDisplay('block');

}

var todoService = (function () {

    let selectedTodo;
    let todoList = [];
    let subscribesObservers = [];


    function getTodoList() {
        return todoList;
    }

    function getSelectTodo() {
        return selectedTodo;
    }

    let addTodo = function (todo) {
        todoList.push(todo);

        for (let i =0; i<subscribesObservers.length; i++){
            subscribesObservers[i].addTodo(todo);
        }
    };

    let removeTodo = function (id) {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {

                let deletedTodo = todoList[i];
                todoList.splice(i, 1); // remote object via splice

                for (let i =0; i<subscribesObservers.length; i++){
                    subscribesObservers[i].removeTodo(deletedTodo);
                }

            }
        }
    };

    let selectTodo = function (todo) {
        selectedTodo = todo;
    };

    let subscribeObserver = function(id, addTodo, removeTodo){
           let event = {
               id:id,
               addTodo:addTodo,
               removeTodo:removeTodo
           };

           subscribesObservers.push(event);
    };

    let paintTodoList = function () {

        $('todo-box').removeChildren();
        for (let i = 0; i < todoList.length; i++) {

            let todo = todoList[i];
            document.getElementById('todo-box').appendChild(insertDocTodo(todo));
        }
    };

    return {
        paintTodoList: paintTodoList,
        getTodoList: getTodoList,
        removeTodo: removeTodo,
        addTodo: addTodo,
        subscribeObserver:subscribeObserver,
        selectTodo:selectTodo,
        getSelectedTodo:getSelectTodo
    }
})
();


