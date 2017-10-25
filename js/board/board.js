/**
 * Created by vorh on 10/21/17.
 */




function Board() {

    const column = 51;
    const row = 90;

    this.init = function (parent, goals) {

        let currentDate = new Date();



        let table = document.createElement("table");
        let header = createHeaderTableHorizontal();
        table.appendChild(header);

        let count = 0;
        let value = 0;

        for (let i = 0; i < row; i++) {

            let tr = document.createElement("tr");

            let th = document.createElement("th");
            if(count === 0){
                th.innerHTML = value;
                th.className = "board-header vertical";
                count=4;
                value +=5;
            }else {
                th.innerHTML = "";
                count--;
            }

            tr.appendChild(th);


            for (let q = 1; q < column; q++) {

                let td = document.createElement("td");
                if (user.dateOfBirth <= currentDate){
                    td.className = "emptiness";
                    currentDate.setDate(currentDate.getDate()-7);
                }
                tr.appendChild(td);
            }

            table.appendChild(tr);

        }

        parent.appendChild(table);

    };
}


function createHeaderTableHorizontal() {
    let header = document.createElement("tr");

    function createHeader(value) {
        let th = document.createElement("th");
        th.className = "board-header horizontal";
        th.innerHTML = value;
        if (arguments.length === 2){
            th.setAttribute("colspan", arguments[1]);
        }else {
            th.setAttribute("colspan", 5);
        }
        header.appendChild(th);
    }

    createHeader("",1);
    createHeader(0);
    createHeader(5);
    createHeader(10);
    createHeader(15);
    createHeader(20);
    createHeader(25);
    createHeader(30);
    createHeader(35);
    createHeader(40);
    createHeader(45);

    return header;
}