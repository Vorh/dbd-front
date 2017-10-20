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

    let setComplete = function (todo,isComplete) {
        for  (let i =0; i < todoList.length; i++){
            if (todo.id === todoList[i].id){
                todoList[i].complete = isComplete;
                for (let i =0; i<subscribesObservers.length; i++){
                    subscribesObservers[i].complete(todo);
                }
            }
        }

    };

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

    let subscribeObserver = function(id, addTodo, removeTodo,complete){
        let event = {
            id:id,
            addTodo:addTodo,
            removeTodo:removeTodo,
            complete:complete
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
        setComplete:setComplete,
        getSelectedTodo:getSelectTodo
    }
})
();
