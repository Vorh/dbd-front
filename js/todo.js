/**
 * Created by vorh on 10/9/17.
 */


function CreateTodo(caption, content, id) {
    this.id = id;
    this.date = new Date();
    this.caption = caption;
    this.content = content;
    this.complete = false;
    this.type = 1;

    this.getHumanDate = function () {
        return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
    };
}


function initTodo() {
    let btn = $('btnCreateTodo');

    let modalCreateTodo = $('modal-createTodo');
    btn.addEvent('click', function () {
        modalCreateTodo.setDisplay('block');
    });

    modalCreateTodo.getElementsByClassName('close')[0].addEventListener('click', function () {
        modalCreateTodo.setDisplay('none');

    });


    modalCreateTodo.getElementsByClassName('green')[0].addEventListener('click', function () {
        let caption = $('modal-todo-caption').value;
        let content = $('modal-todo-content').value;
        let typeTodo = $('modal-todo-type').value;
        let todo = new CreateTodo(caption, content, 1);
        todo.type = typeTodo;

        todoService.addTodo(todo);

        $('modal-todo-caption').clear();
        $('modal-todo-content').clear();
        modalCreateTodo.setDisplay('none')
    });


    $('btnDeleteTodo').addEvent('click', function () {
        let todo = todoService.getSelectedTodo();
        todoService.removeTodo(todo.id);
    });

    $('btnDoneTodo').addEvent('click', function () {
        let todo = todoService.getSelectedTodo();
        todoService.setComplete(todo, true);

    });

}

function insertDocTodo(todo) {

    let classLabel;
    let tagCaption;
    let classTodoCaption;
    let todoBtn;
    if (todo.complete === true) {
        classLabel = "todo-label complete"
        tagCaption = "Complete";
        classTodoCaption = "todo-caption complete";
        todoBtn = createBtnRedo(todo);
    } else {
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

    return todoLine;
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
        todoService.setComplete(todo, false);
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




