/**
 * Created by vorh on 10/1/17.
 */

function $(id) {
    console.log('get element by id = ' + id);


    var $ = document.getElementById(id);

    $.setDisplay = function (displayParam) {
        this.style.display = displayParam;
    };

    $.addClass = function (className) {
        this.classList.add(className);
    };

    $.removeClass = function (className) {
        this.classList.remove(className);
    };

    $.addEvent= function (type, event ) {
        this.addEventListener(type, event);
    };

    $.removeChildren = function () {
        while ($.hasChildNodes()){
            $.removeChild($.lastChild);
        }
    };

    $.clear = function () {
      $.value = '';
    };

    return $;
}



