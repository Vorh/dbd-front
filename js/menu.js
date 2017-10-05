/**
 * Created by vorh on 10/1/17.
 */


var itemsMenu;
var desks;

window.onload = function () {
    console.log("onload");



    itemsMenu = $('menu').getElementsByTagName('li');
    desks = $('desk').children;


    for(var i =0 ; i < itemsMenu.length ; i++){
        var itemMenu = $(itemsMenu[i].id);
        addEventSelectToItemMenu(itemMenu);
    }


};

function addEventSelectToItemMenu(item) {
    item.addEvent("click",function () {
        item.addClass("hovered");
        splidId=item.id.split('-');
        displayDesk()
        $(splidId[0] + '-desk').setDisplay("block");
    });
}

function displayDesk(id) {
    for(var i=0; i < itemsMenu.length ; i++){
        if (itemsMenu[i].id === id){
            itemsMenu[i].style.display = "block";
        }else {
            itemsMenu[i].style.display = "none";
        }
    }
}
