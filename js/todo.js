/**
 * Created by vorh on 10/9/17.
 */


function createTodo(caption, content) {
    this.date = new Date();
    this.caption = caption;
    this.content = content;
    this.isComplete = false;
    this.type = 1;
}

var todoService = function () {


    var todoList = [];
    let todo = createTodo('tete', "fdsfds");
    todoList.push(todo);

    function getTodoList() {
        return todoList;
    }

    var createTodoListElements = function () {

        for (let i = 0; i < todoList.length; i++) {

            let todo = todoList[i];
            let todoLine = document.createElement("div");
            todoLine.className = "todo-line";

            let todoLabel = document.createElement("div");
            todoLabel.className = "todo-label";
            todoLabel.content = 'Todo';

            let todoDate = document.createElement("div");
            todoDate.className = 'todo-date';
            todoDate.content = todo.date;

            let todoCaption = document.createElement("div");
            todoCaption.className = "todo-caption";
            todoCaption.content = todo.content;

            todoLine.appendChild(todoLabel);
            todoLine.appendChild(todoDate);
            todoLine.appendChild(todoCaption);

            document.getElementById('todo-box').appendChild(todoLine);

        }
    };

    todoService.createTodoListElements = createTodoListElements;
    return todoService;

};


