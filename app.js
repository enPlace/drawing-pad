const container = document.getElementById('container')
let paintColor ='red'
let mouseDown = false


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

function newCells(num){
    deleteChildren(container)
    populateCells(num)
}

function deleteChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function populateCells(num){
    for(let i =0; i<num*num; i++){
        let celldim = 500/num
        let newBox = document.createElement('div')
        newBox.classList.add('cell')
        newBox.style.width=celldim.toString() +"px"
        newBox.style.height=celldim.toString() +"px"
        container.appendChild(newBox)
    }
}

function clearGrid(){
    const cells = document.getElementsByClassName("cell")
    for (let i = 0; i<cells.length; i++){
        cells[i].style.border = "none"
    }
}

function randomColor(){

}

//button can change the data-status to indicate color
//use a color wheel to select specific color. 
//take that data and use it as a variable for the color in the event
// 

newCells(34)