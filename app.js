const container = document.getElementById('container')
const slider = document.getElementById("myRange");
let paintColor ='black'
let canvasColor = 'white'
let mouseDown = false
let cellCount 


function firstClick(e){

}
document.addEventListener('mousedown', (e)=>{
    mouseDown = true
    if(e.target.classList.contains("cell")){
        e.target.style.backgroundColor = paintColor
        e.target.dataset.status = "active"
    }
})
document.addEventListener('mouseup', ()=>{
    mouseDown = false
})
container.addEventListener('mouseover', (e)=>{
    if(mouseDown&&e.target.classList.contains('cell')){
    e.target.style.backgroundColor = paintColor
    e.target.dataset.status = "active"
    }
})

slider.addEventListener('input', ()=>{
    document.getElementById("size-display").innerHTML = slider.value + "x" + slider.value;
    newCells(slider.value)
    })

function newCells(num, bkgd){
    deleteChildren(container)
    populateCells(num, bkgd)
}
function reset(){
    canvasColor='white'
    paintColor='black'
    slider.value = "30"
    document.getElementById("size-display").innerHTML = slider.value + "x" + slider.value;
    newCells(30, canvasColor)
    document.getElementById("grid-button").dataset.status = "none"
    clearGrid()
}
function deleteChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
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

function clearGrid(){
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
    paintColor = color
}
function eraser(){
    paintColor = canvasColor
    document.addEventListener('')

}

function setBkgd(color){
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

newCells(slider.value)

//add a class list active to cell when painting 
//check to see if active when reseting the color
//random color
//slider for setting grid 