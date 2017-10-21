/**
 * Created by vorh on 10/21/17.
 */




var wss; // workspaces
var todoService;
var menu;
var board;

window.onload = function () {




    todoService = new TodoService();
    menu = new Menu();
    wss = [];

    let itemsMenu = $('menu').getElementsByTagName('li');

    for (let i = 0; i < itemsMenu.length; i++) {
        let workspace = {};
        let tempItem = $(itemsMenu[i].id);
        workspace.itemMenu = tempItem;
        workspace.desk = extractDesk(tempItem.id);
        wss.push(workspace);

        menu.addEventSelectToItemMenu(workspace.itemMenu);
    }



    initTodo();
    forTest();

    todoService.paintTodoList();
    todoService.subscribeObserver('modalAddTodo',function (todo) {
        $('todo-box').appendChild(insertDocTodo(todo));
    });




    board = new Board();

    board.init($('board-desk'));


};

function extractDesk(id) {
    return $(id.split('-')[0] +'-desk');
}


