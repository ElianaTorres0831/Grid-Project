let numRows = 0;
let numCols = 0;
let colorSelected;

//the function below will add a row
function addR() {
     let myRow = document.getElementById("grid");
     let tr = document.createElement("tr");
     if(numCols == 0){
       let td = document.createElement("td");
       td.onclick = function() {
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
       tr.appendChild(td);
       numCols++;
     }
     else{
       for(let i=0; i<numCols; i++){
         let td = document.createElement("td");
         td.onclick = function() {
              this.style.backgroundColor = document.getElementById("selectedID").value;
          };
         tr.appendChild(td);
       }
     }
     myRow.appendChild(tr)
     numRows++;
}
function addC() {
    let myCol = document.getElementById("grid");
    for (let i=0; i<myCol.rows.length; i++){
      let td = document.createElement("td");
      td.onclick = function() {
           this.style.backgroundColor = document.getElementById("selectedID").value;
       };
      myCol.rows[i].appendChild(td);
    }
    numCols++;
    return numRows;
}

//this function will remove a row
function removeR() {
  
    if(numRows < 1){
        return;
    }
    else{
        let row = document.getElementById("grid")
        row.deleteRow(numRows - 1);
        numRows--;
    }
}
//the function below will remove a column
function removeC() {
    let cols = document.querySelectorAll("tr");
    for(let i = 0; i < numRows; i++){
        if(numCols > 0){
            cols[i].removeChild(cols[i].lastChild);
    	}
    }

}
