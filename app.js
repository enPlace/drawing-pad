const container = document.getElementById('container')
const slider = document.getElementById("myRange");
let paintColor ='black'
let canvasColor = 'white'
let mouseDown = false
let cellCount 
let eraserMode

const firstClick = function(e){
    //changes the color of a cell when clicked
    mouseDown = true
    if(e.target.classList.contains("cell") && !eraserMode){
        e.target.style.backgroundColor = paintColor
        e.target.dataset.status = "active"
    }else if(e.target.classList.contains("cell") && eraserMode){
        e.target.style.backgroundColor = canvasColor
        e.target.dataset.status = ""
    }

}
const drag = function(e){
    //changes the color of a cell when mouse is already clicked down and pointer is moved to the cell
    if(mouseDown&&e.target.classList.contains('cell')&& !eraserMode){
        e.target.style.backgroundColor = paintColor
        e.target.dataset.status = "active"
    }else if(mouseDown&&e.target.classList.contains('cell')&& eraserMode){
        e.target.style.backgroundColor = canvasColor
        e.target.dataset.status = ""
    }
}

document.addEventListener('mousedown',firstClick)
document.addEventListener('mouseup', ()=>{mouseDown = false})
container.addEventListener('mouseover', drag)

slider.addEventListener('input', ()=>{
    //gets value from slider and changes display, loads the canvas with "value" number of cells squared
    document.getElementById("size-display").innerHTML = slider.value + "x" + slider.value;
    newCells(slider.value)
    })

function newCells(num, bkgd){
    //deletes old cells and repaints canvas with new cells 
    deleteChildren(container)
    populateCells(num, bkgd)
}

function populateCells(num, bkgd = canvasColor){
    for(let i =0; i<num*num; i++){
        let celldim = 500/num
        let newBox = document.createElement('div')
        newBox.classList.add('cell')
        newBox.style.width=celldim.toString() +"px"
        newBox.style.height=celldim.toString() +"px"
        newBox.style.backgroundColor = bkgd
        container.appendChild(newBox)

    }
}
function deleteChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function reset(){
    //resets all to default
    canvasColor='white'
    paintColor='black'
    slider.value = "30"
    document.getElementById("size-display").innerHTML = slider.value + "x" + slider.value;
    newCells(30, canvasColor)
    document.getElementById("grid-button").dataset.status = "none"
    clearGrid()
}



function clearGrid(){
    //takes away or shows grid lines on the canvas 
    const cells = document.getElementsByClassName("cell")
    const gridButton =  document.getElementById("grid-button")
    if(gridButton.dataset.status == "shown"){
        for (let i = 0; i<cells.length; i++){
            cells[i].style.border = "none"
        }
        gridButton.dataset.status= "none"
        gridButton.innerHTML = "Show Grid"
    }
    else{
        for (let i = 0; i<cells.length; i++){
            cells[i].style.border = ".5px solid rgb(172, 167, 167)"
            gridButton.dataset.status = "shown"
            gridButton.innerHTML = "Hide Grid"
        }
    }  
}

function setColor(color){
    //sets color of brush 
    paintColor = color
    eraserMode = false
}
function eraser(){
    //turns on eraserMode to paint cells to the canvas color. 
    paintColor = canvasColor
    eraserMode = true

}

function setBkgd(color){
    //sets the background color
    const cells = document.getElementsByClassName('cell')
    for(let i=0; i<cells.length; i++){
        if(cells[i].dataset.status !="active"){
            cells[i].style.backgroundColor = color
        }
    }
    canvasColor = color
}

function rgb(){return Math.floor(Math.random()*255)}
function randomColor(){
    return `rgb(${rgb()}, ${rgb()}, ${rgb()})`
}

newCells(slider.value) //loads the cells and grid size display on loading the page.
