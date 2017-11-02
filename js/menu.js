/**
 * Created by vorh on 10/1/17.
 */


module.exports = (function Menu() {


    let self = this;

    this.addEventSelectToItemMenu = function (itemMenu) {
        itemMenu.addEvent("click", function () {
            self.switchMenu(itemMenu);
        });
    };

    this.switchMenu = function (itemMenu) {
        for (let i = 0; i < wss.length; i++) {

            let tempItem = wss[i].itemMenu;
            let tempDesk = wss[i].desk;

            if (itemMenu.id === tempItem.id) {
                itemMenu.addClass("hovered");
                tempDesk.setDisplay("block");
            } else {
                tempItem.removeClass("hovered");
                tempDesk.setDisplay("none");
            }
        }

    };
});









