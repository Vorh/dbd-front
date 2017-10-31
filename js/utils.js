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


function getCoords(elem,parent) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop =  parent.scrollTop || body.scrollTop;
    var scrollLeft =  parent.scrollLeft || body.scrollLeft;

    var clientTop = parent.clientTop || body.clientTop || 0;
    var clientLeft = parent.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

function getOffset(el,parent) {
    let elementTop = el.offsetTop;
    let divTop = parent.offsetTop;
    let elementRelativeTop = elementTop - divTop;

    let elementLeft = el.offsetLeft;
    let divLeft = parent.offsetLeft;

    let elementRelativeLeft = elementLeft - divLeft;

    return {
        left: elementRelativeLeft,
        top: elementRelativeTop
    }
}



