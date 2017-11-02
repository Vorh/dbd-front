/**
 * Created by vorh on 10/21/17.
 */


var css = require('../styles/main.css');

var menu = require('./menu.js');
var user = require('./user.js');
var $ = require('./utils.js');
var workspace = require('./workspace.js');

var deskTodo = require('./todo/deskTodo.js');
var todoService = require('./todo/todo.js');
var goals = require('./goal/goal.js');
var board = require('./board/board.js');




var wss; // workspaces
var board;
var user;

window.onload = function () {

    Object.defineProperty( Element.prototype, 'documentOffsetTop', {
        get: function () {
            return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
        }
    } );

    Object.defineProperty( Element.prototype, 'documentOffsetLeft', {
        get: function () {
            return this.offsetLeft + ( this.offsetParent ? this.offsetParent.documentOffsetLeft : 0 );
        }
    } );



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



    deskTodo.initTodo();
    deskTodo.forTest();

    todoService.paintTodoList();
    todoService.subscribeObserver('modalAddTodo',function (todo) {
        $('todo-box').appendChild(insertDocTodo(todo));
    });


    let dateOfBirth = new Date(1996, 8, 29);


    user = new User();
    user.dateOfBirth = dateOfBirth;
    user.name = "Vorh";

    board = new Board();

    board.init($('board-table').getElementsByTagName('tbody')[0]);


};

function extractDesk(id) {
    return $(id.split('-')[0] +'-desk');
}


