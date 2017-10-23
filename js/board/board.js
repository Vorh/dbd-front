/**
 * Created by vorh on 10/21/17.
 */


function Board() {

    const column = 50;
    const row =  90;

    this.init = function (parent) {

        let table = document.createElement("table");

        let week = 0;
        let year = 0;


        let header = document.createElement("tr");
        header.className = "board-header";

        for (let i=0;i< column; i++){
            let th= document.createElement("div");

            if (week===0){
                th.innerHTML = i;
                week = 5;
                header.appendChild(th);
            }


            week--;
        }



        for (let i = 0; i<row; i++){

            let tr = document.createElement("tr");

            for (let q = 0; q<column;q++){

                let td = document.createElement("td");

                tr.appendChild(td);
            }

            table.appendChild(tr);

        }

        parent.appendChild(header);
        parent.appendChild(table);

    };
}