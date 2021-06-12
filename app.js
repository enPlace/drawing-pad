const container = document.getElementById('container')
let paintColor ='black'
let canvasColor = 'white'
let mouseDown = false
let cellCount 



document.addEventListener('mousedown', (e)=>{
    mouseDown = true
    if(e.target.classList.contains("cell")){
        e.target.style.backgroundColor = paintColor
    }
})
document.addEventListener('mouseup', ()=>{
    mouseDown = false
})
container.addEventListener('mouseover', (e)=>{
    if(mouseDown&&e.target.classList.contains('cell')){
    e.target.style.backgroundColor = paintColor
    }
})

function newCells(num, bkgd){
    deleteChildren(container)
    populateCells(num, bkgd)
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
    for (let i = 0; i<cells.length; i++){
        cells[i].style.border = "none"
    }
}

function setColor(color){
    paintColor = color
}

function setBkgd(color){
    const cells = document.getElementsByClassName('cell')
    for(let i=0; i<cells.length; i++){
        if(cells[i].style.backgroundColor==canvasColor){
            cells[i].style.backgroundColor = color
        }
    }
    canvasColor = color
}


function randomColor(){
}


newCells(34)

//add a class list active to cell when painting 
//check to see if active when reseting the color