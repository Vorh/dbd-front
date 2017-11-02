/**
 * Created by vorh on 10/20/17.
 */


 function TodoService() {

    let selectedTodo;
    let todoList = [];
    let subscribesObservers = [];


    this.getTodoList = function () {
        return todoList;
    };

    this.getSelectedTodo= function() {
        return selectedTodo;
    };


    this.updateTodo = function (todo) {
        let indexOf = todoList.findIndex(i => i.id === todo.id);
        todoList[indexOf] = todo;

        notifySubscribes(todo);
    };


    let notifySubscribes = function (todo) {
        for (let i = 0; i < subscribesObservers.length; i++) {
            subscribesObservers[i].updateTodo(todo);
        }
    };

    this.addTodo = function (todo) {
        todoList.push(todo);

        notifySubscribes(todo);
    };

    this.removeTodo = function (id) {
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {

                let deletedTodo = todoList[i];
                deletedTodo.deleted = true;

                notifySubscribes(deletedTodo);

            }
        }
    };

    this.selectTodo = function (todo) {
        selectedTodo = todo;
    };

    this.subscribeObserver = function (id, update) {
        let event = {
            id: id,
            updateTodo: update
        };

        subscribesObservers.push(event);
    };

    this.paintTodoList = function () {

        $('todo-box').removeChildren();
        for (let i = 0; i < todoList.length; i++) {

            let todo = todoList[i];
            $('todo-box').appendChild(insertDocTodo(todo));
        }
    };

};


function forTest() {
    var todo = new Todo('teвавыаte', "анизации с плоской структурой, у которых в пронизанном лучами солнечного света офисном воздухе постоянно витает дух равенства и братства. Говоря о первых приходящих в голову образах, наверняка вы уже представили себе небоскреб крупно", 1);
    var todo1 = new Todo('tete', " Бывают такие, где выстроена строгая и глубокая иерархия управления, и где вопрос самореализации сотрудников связан в первую очередь с продвижением вверх по карьерной лестниц", 2);
    var todo2 = new Todo('ПАВПВАПВА', "fdsfds", 3);
    todo2.complete = true;
    var todo3 = new Todo('tete', "fdsfds", 4);
    var todo4 = new Todo('tete', "fdsfds", 6);
    var todo5 = new Todo('tete', "Компании встречаются разные. Бывают такие, где выстроена строгая и глубокая иерархия управления, и где вопрос самореализации сотрудников связан в первую очередь с продвижением вверх по карьерной лестнице. Бывают наоборот организации с плоской структурой, у которых в пронизанном лучами солнечного света офисном воздухе постоянно витает дух равенства и братства. Говоря о первых приходящих в голову образах, наверняка вы уже представили себе небоскреб крупной и бюрократизированной корпорации с одной стороны, и цветущий среди холмов Кремниевой долины стартап — с другой. В то же время британские ученые доподлинно доказали, что мир не черно-белый, и что большинство компаний в той или иной степени живут на стыке этих двух метафор – механизма и семьи. Вполне вероятно, что в одной из таких работаете и вы.", 7);
    var todo6 = new Todo('tete', "fdsfds", 8);
    var todo7 = new Todo('tete', "fdsfds", 9);
    todo7.deleted = true;
    var todo8 = new Todo('tetавыаыe', " Вполне вероятно, что в одной из таких работаете и в", 10);
    todo8.type = 2;
    todoService.addTodo(todo);
    todoService.addTodo(todo1);
    todoService.addTodo(todo2);
    todoService.addTodo(todo3);
    todoService.addTodo(todo4);
    todoService.addTodo(todo5);
    todoService.addTodo(todo6);
    todoService.addTodo(todo7);
    todoService.addTodo(todo8);
}
