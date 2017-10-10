/**
 * Created by vorh on 10/9/17.
 */


function createTodo(caption, content,id) {
    this.id = id;
    this.date = new Date();
    this.caption = caption;
    this.content = content;
    this.isComplete = false;
    this.type = 1;
    return this;
}


var todoService = (function () {


    var todoList = [];

    function getTodoList() {
        return todoList;
    }

    var addTodo = function (todo) {
        todoList.push(todo);
    };

    var removeTodo = function (id) {
        for(let i=0; i< todoList.length; i++){
            if (todoList[i].id === id){
                todoList.splice(i,1);
            }
        }
    };

   var createTodoListElements = function () {

        for (let i = 0; i < todoList.length; i++) {

            let todo = todoList[i];
            let todoLine = document.createElement("div");
            todoLine.className = "todo-line";

            let todoLabel = document.createElement("div");
            todoLabel.className = "todo-label";
            todoLabel.innerHTML = 'Todo';

            let todoDate = document.createElement("div");
            todoDate.className = 'todo-date';
            todoDate.innerHTML = todo.date;

            let todoCaption = document.createElement("div");
            todoCaption.className = "todo-caption";
            todoCaption.innerHTML = todo.content;

            todoLine.appendChild(todoLabel);
            todoLine.appendChild(todoDate);
            todoLine.appendChild(todoCaption);

            document.getElementById('todo-box').appendChild(todoLine);

        }
    };

    return {
        createTodoListElements:createTodoListElements,
        getTodoList:getTodoList,
        removeTodo:removeTodo,
        addTodo:addTodo
    }
})();