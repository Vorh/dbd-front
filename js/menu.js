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
        workspace.itemMenu = tempItem
        workspace.desk = extractDesk(tempItem.id);
        wss.push(workspace);

        addEventSelectToItemMenu(workspace.itemMenu);
    }

    function extractDesk(id) {
        return $(id.split('-')[0] +'-desk');
    }

};

function addEventSelectToItemMenu(itemMenu) {
    itemMenu.addEvent("click", function () {
        selectItemMenu(itemMenu);
        displayDesk(itemMenu.id);
    });
}

function selectItemMenu(itemMenu) {
    for(var i =0 ; i < wss.length ; i++){
        var tempMenu = wss[i].itemMenu;
        if (itemMenu.id === tempMenu.id){
            itemMenu.addClass("hovered");
        }else {
            tempMenu.removeClass("hovered");
        }
    }
}

function displayDesk(idMenuItem) {
    for (var i = 0; i < wss.length; i++) {
        var tempDesk =wss[i].desk;
        var tmpItem =wss[i].itemMenu;
        if (tmpItem.id === idMenuItem) {
            tempDesk.setDisplay("block");
        } else {
            tempDesk.setDisplay("none");
        }
    }
}
