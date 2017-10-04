/**
 * Created by vorh on 10/1/17.
 */




window.onload = function () {
    console.log("onload");



    var items = $('menu').getElementsByTagName('li');

    for(var i =0 ; i < items.length ; i++){
        console.log("Item menu: " + items[i].id);
        var item = $(items[i].id);
        console.log(item);
        var splitId = item.id.split('-');
        item.addEvent("click",function () {
            item.addClass("hovered");
            $(splitId[0] + '-desk').setDisplay("block");
        });
    }


};

