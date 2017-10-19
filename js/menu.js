/**
 * Created by vorh on 10/1/17.
 */


var wss; // workspaces

window.onload = function () {


    var itemsMenu = $('menu').getElementsByTagName('li');

    wss = [];

    for (var i = 0; i < itemsMenu.length; i++) {
        var workspace = {};
        var tempItem = $(itemsMenu[i].id);
        workspace.itemMenu = tempItem;
        workspace.desk = extractDesk(tempItem.id);
        wss.push(workspace);

        addEventSelectToItemMenu(workspace.itemMenu);
    }

    function extractDesk(id) {
        return $(id.split('-')[0] +'-desk');
    }


    initTodo();

    forTest();
    todoService.createTodoListElements();
    todoService.subscribeAddTodo('modalAddTodo',function (todo) {
        document.getElementById('todo-box').appendChild(insertDocTodo(todo));
    })

};


function forTest() {
    var todo = new CreateTodo('tete', "анизации с плоской структурой, у которых в пронизанном лучами солнечного света офисном воздухе постоянно витает дух равенства и братства. Говоря о первых приходящих в голову образах, наверняка вы уже представили себе небоскреб крупно",1);
    var todo1 = new CreateTodo('tete', " Бывают такие, где выстроена строгая и глубокая иерархия управления, и где вопрос самореализации сотрудников связан в первую очередь с продвижением вверх по карьерной лестниц",2);
    var todo2 =new  CreateTodo('tete', "fdsfds",3);
    var todo3 = new CreateTodo('tete', "fdsfds",4);
    var todo4 = new CreateTodo('tete', "fdsfds",6);
    var todo5 = new CreateTodo('tete', "Компании встречаются разные. Бывают такие, где выстроена строгая и глубокая иерархия управления, и где вопрос самореализации сотрудников связан в первую очередь с продвижением вверх по карьерной лестнице. Бывают наоборот организации с плоской структурой, у которых в пронизанном лучами солнечного света офисном воздухе постоянно витает дух равенства и братства. Говоря о первых приходящих в голову образах, наверняка вы уже представили себе небоскреб крупной и бюрократизированной корпорации с одной стороны, и цветущий среди холмов Кремниевой долины стартап — с другой. В то же время британские ученые доподлинно доказали, что мир не черно-белый, и что большинство компаний в той или иной степени живут на стыке этих двух метафор – механизма и семьи. Вполне вероятно, что в одной из таких работаете и вы.",7);
    var todo6 = new CreateTodo('tete', "fdsfds",8);
    var todo7 = new CreateTodo('tete', "fdsfds",9);
    var todo8 = new CreateTodo('tete', " Вполне вероятно, что в одной из таких работаете и в",10);
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

function addEventSelectToItemMenu(itemMenu) {
    itemMenu.addEvent("click", function () {
        switchMenu(itemMenu);
    });
}

function switchMenu(itemMenu) {
    for(var i =0 ; i < wss.length ; i++){

        var tempItem = wss[i].itemMenu;
        var tempDesk =wss[i].desk;

        if (itemMenu.id === tempItem.id){
            itemMenu.addClass("hovered");
            tempDesk.setDisplay("block");
        }else {
            tempItem.removeClass("hovered");
            tempDesk.setDisplay("none");
        }

    }
}




