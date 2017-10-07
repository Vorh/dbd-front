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





};

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


