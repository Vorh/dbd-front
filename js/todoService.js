/**
 * Created by vorh on 10/20/17.
 */

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


    let updateTodo = function (todo) {
         let indexOf = todoList.findIndex(i=> i.id === todo.id);
         todoService[indexOf] = todo;

         notifySubscribes(todo);
    };


    let notifySubscribes = function (todo) {
        for (let i =0; i<subscribesObservers.length; i++){
            subscribesObservers[i].updateTodo(todo);
        }
    };

    let addTodo = function (todo) {
        todoList.push(todo);

        notifySubscribes(todo);
    };

    let removeTodo = function (id) {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {

                let deletedTodo = todoList[i];
                deletedTodo.deleted = true;

                notifySubscribes(deletedTodo);

            }
        }
    };

    let selectTodo = function (todo) {
        selectedTodo = todo;
    };

    let subscribeObserver = function(id, update){
        let event = {
            id:id,
            updateTodo:update
        };

        subscribesObservers.push(event);
    };

    let paintTodoList = function () {

        $('todo-box').removeChildren();
        for (let i = 0; i < todoList.length; i++) {

            let todo = todoList[i];
            $('todo-box').appendChild(insertDocTodo(todo));
        }
    };

    return {
        paintTodoList: paintTodoList,
        getTodoList: getTodoList,
        removeTodo: removeTodo,
        addTodo: addTodo,
        subscribeObserver:subscribeObserver,
        selectTodo:selectTodo,
        getSelectedTodo:getSelectTodo,
        updateTodo:updateTodo
    }
})
();
