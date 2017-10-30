/**
 * Created by vorh on 10/21/17.
 */




function Board() {


    const column = 52;
    const row = 90;

    this.init = function (parent, goals) {

        let currentDate = new Date();


        let table = document.createElement("table");
        let header = createHeaderTableHorizontal();
        table.appendChild(header);


        for (let i = 0; i < row; i++) {

            let tr = document.createElement("tr");


            tr.appendChild(createHeaderTableVertical(i));


            for (let q = 1; q < column; q++) {

                let td = document.createElement("td");

                if (user.dateOfBirth <= currentDate) {
                    td.className = "emptiness";
                    currentDate.setDate(currentDate.getDate() - 7);
                }
                tr.appendChild(td);


                td.addEventListener('mouseover',function () {
                    let coords = getCoords(td);
                    coords.top = coords.top-100;
                    let boardModal = $('board-item-window');
                    boardModal.style = 'left:' + coords.left + 'px; top:' + coords.top + 'px';
                    boardModal.setDisplay('block')
                });



            }

            table.appendChild(tr);

        }

        parent.appendChild(table);

    };
}


function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

function createHeaderTableVertical(count) {

    let th = document.createElement("th");
    let value;

    if (count === 0) {
        value = 0;
    }else if (count === 89){
        value = 90;
    }else if (count % 5 === 0) {
        value = count;
    } else {
        value = "";
    }

    th.className = "board-header vertical";
    th.innerHTML = value;

    return th;
}

function createHeaderTableHorizontal() {
    let header = document.createElement("tr");

    createHeader("", 1);
    createHeader(0,5);
    createHeader(5, 5);
    createHeader(10, 5);
    createHeader(15, 5);
    createHeader(20, 5);
    createHeader(25, 5);
    createHeader(30, 5);
    createHeader(35, 5);
    createHeader(40, 5);
    createHeader(45, 5);
    createHeader(50, 1);


    function createHeader(value) {
        let th = document.createElement("th");
        th.className = "board-header horizontal";
        th.innerHTML = value;
        if (arguments.length === 2) {
            th.setAttribute("colspan", arguments[1]);
        } else {
            th.setAttribute("colspan", 4);
        }
        header.appendChild(th);
    }

    return header;
}