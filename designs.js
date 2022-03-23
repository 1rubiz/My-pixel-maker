// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// grid making function
 function makeGrid(myHeight, myWidth) {
        myHeight = document.getElementById("inputHeight").value;
        myWidth = document.getElementById("inputWidth").value;
      for (let i = 0; i < myHeight; i++) {
            let myTable = document.getElementById("pixelCanvas");
            let row = myTable.insertRow(i);//creates a row after first loop
          for (let j = 0; j < myWidth; j++) {
              // row.classList.add("row");
              let cell = row.insertCell(j);//creates the cells within the row
              cell.id= "row-id - "+parseInt(i+1)+" - col-id -"+parseInt(j+1);//parses the value in strings and creates an id
               //color picking function 
              cell.addEventListener("click", function(){
                  let color= document.querySelector("#colorPicker").value;
                  cell.style.backgroundColor=color;//sets the background color to the the value of the color picker
                  let cellSelected= document.querySelector("#cellSelected");
                  let colored= document.querySelector("#colorSelected");
                  cellSelected.innerHTML= "Cell Selected : Row-"+parseInt(i+1)+" Column- "+parseInt(j+1);//shows the current clicked cell
                  colored.innerHTML="Color selected : "+ color;//show the current color in use
               })
            }
        }
    } 
 let sizePicker = document.getElementById("submission");
  sizePicker.addEventListener("click", function e(evt){
       evt.preventDefault() //prevents reloading when creating the grid.
       let myHeight = document.getElementById("inputHeight").value;
       let myWidth = document.getElementById("inputWidth").value;
       makeGrid(myHeight, myWidth)
       // Removes the "how to use" paragraphs upon grid creation
       let myDiv=document.querySelector("#myDiv");
       while (myDiv.firstChild) {
           myDiv.removeChild(myDiv.firstChild)
        }
    })
    // A reload button to reload the page upon submission.
   let reload= document.querySelector("#reload");
    reload.addEventListener("click", function(r){
        r.window.location.reload();
    })
