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




    forTest();
    todoService.createTodoListElements();


};


function forTest() {
    var todo = createTodo('tete', "fdsfds",1);
    var todo1 = createTodo('tete', "fdsfds",2);
    var todo2 = createTodo('tete', "fdsfds",3);
    var todo3 = createTodo('tete', "fdsfds",4);
    var todo4 = createTodo('tete', "fdsfds",6);
    var todo5 = createTodo('tete', "fdsfds",7);
    var todo6 = createTodo('tete', "fdsfds",8);
    var todo7 = createTodo('tete', "fdsfds",9);
    var todo8 = createTodo('tete', "fdsfds",10);
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




