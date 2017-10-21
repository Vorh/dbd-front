/**
 * Created by vorh on 10/21/17.
 */


function Board() {

    const column = 50;
    const row =  90;

    this.init = function (parent) {

        let table = document.createElement("table");


        for (let i = 0; i<row; i++){

            let tr = document.createElement("tr");

            for (let q = 0; q<column;q++){

                let td = document.createElement("td");

                tr.appendChild(td);
            }

            table.appendChild(tr);

        }

        parent.appendChild(table);

    };
}