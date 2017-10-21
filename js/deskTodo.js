/**
 * Created by vorh on 10/9/17.
 */


function Todo(caption, content, id) {
    this.id = id;
    this.date = new Date();
    this.caption = caption;
    this.content = content;
    this.complete = false;
    this.deleted = false;
    this.type = 1;

    this.getHumanDate = function () {
        return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
    };
}


function initTodo() {

    let modalCreateTodo = $('modal-createTodo');
    $('btnCreateTodo').addEvent('click', function () {
        modalCreateTodo.setDisplay('block');
    });

    modalCreateTodo.getElementsByClassName('close')[0].addEventListener('click', function () {
        modalCreateTodo.setDisplay('none');

    });


    modalCreateTodo.getElementsByClassName('green')[0].addEventListener('click', function () {
        let caption = $('modal-todo-caption').value;
        let content = $('modal-todo-content').value;
        let typeTodo = $('modal-todo-type').value;
        let todo = new Todo(caption, content, 1);
        todo.type = typeTodo;

        todoService.addTodo(todo);

        $('modal-todo-caption').clear();
        $('modal-todo-content').clear();
        modalCreateTodo.setDisplay('none')
    });


    $('btnDeleteTodo').addEvent('click', function () {
        let todo = todoService.getSelectedTodo();
        todoService.removeTodo(todo.id);
        todoService.paintTodoList();
    });

    $('btnDoneTodo').addEvent('click', function () {
        let todo = todoService.getSelectedTodo();
        todo.complete = true;
        todoService.updateTodo(todo);
        todoService.paintTodoList();

    });

    $('btnEditTodo').addEvent('click',function () {

    });

}

function insertDocTodo(todo) {

    let classLabel;
    let tagCaption;
    let classTodoCaption;
    let todoBtn;
    if (todo.complete === true) {
        classLabel = "todo-label complete";
        tagCaption = "Complete";
        classTodoCaption = "todo-caption complete";
        todoBtn = createBtnRedo(todo);
    } else if(todo.deleted === true){
        classLabel = "todo-label deleted";
        tagCaption = "Delete";
        classTodoCaption = "todo-caption deleted";
        todoBtn = createBtnDelete(todo);
    }else {
        switch (+todo.type) {
            case 1:
                classLabel = "todo-label todo";
                tagCaption = "Todo";
                break;
            case 2:
                classLabel = "todo-label job";
                tagCaption = "Job";
                break;
        }
        classTodoCaption = "todo-caption";
        todoBtn = createBtnView(todo);


    }

    let todoLine = document.createElement("div");
    todoLine.className = "todo-line";

    let todoLabel = document.createElement("div");
    todoLabel.className = classLabel;

    let tag = document.createElement("i");
    tag.innerHTML = tagCaption;
    todoLabel.appendChild(tag);


    let todoDate = document.createElement("div");
    todoDate.className = 'todo-date';
    todoDate.innerHTML = todo.getHumanDate();

    let todoCaption = document.createElement("input");
    todoCaption.className = classTodoCaption;
    todoCaption.value = todo.caption;


    todoLine.appendChild(todoLabel);
    todoLine.appendChild(todoDate);
    todoLine.appendChild(todoCaption);
    todoLine.appendChild(todoBtn);

    todoLine.addEventListener('click',function () {
       unSelectTodoLine();
       todoLine.className = 'todo-line select';
    });

    return todoLine;
}

function unSelectTodoLine() {
    let children = $('todo-box').children;

    for (let i=0; i <children.length; i++){
        children[i].className = 'todo-line';
    }
}


function createBtnView(todo) {
    let todoBtn = document.createElement("div");
    todoBtn.className = "todo-btn";
    todoBtn.innerHTML = '<i><i class="fa fa-eye" aria-hidden="true"></i> View</i>';
    todoBtn.addEventListener('click', function () {
        displayTodoContent(todo);
        todoService.selectTodo(todo);
    });

    return todoBtn;
}

function createBtnRedo(todo) {
    let todoBtn = document.createElement("div");
    todoBtn.className = "todo-btn complete";
    todoBtn.innerHTML = '<i><i class="fa fa-refresh" aria-hidden="true"></i> Redo</i>';
    todoBtn.addEventListener('click', function () {
        todo.complete = false;
        todoService.updateTodo(todo);
        todoService.paintTodoList();
    });

    return todoBtn;
}

function createBtnDelete(todo) {
    let todoBtn = document.createElement("div");
    todoBtn.className = "todo-btn deleted";
    todoBtn.innerHTML = '<i><i class="fa fa-refresh" aria-hidden="true"></i> Restore</i>';
    todoBtn.addEventListener('click', function () {
        todo.deleted = false;
        todoService.updateTodo(todo);
        todoService.paintTodoList();
    });

    return todoBtn;
}


function displayTodoContent(todo) {
    let todoContentBody = $('todo-content').getElementsByClassName('todo-content-body')[0];
    todoContentBody.innerHTML = todo.content;

    $('btnDoneTodo').setDisplay('block');
    $('btnEditTodo').setDisplay('block');
    $('btnDeleteTodo').setDisplay('block');

}




