const container = document.getElementById('container')

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

function newCells(num){
    deleteChildren(container)
    populateCells(num)

}

function clearGrid(){
    const cells = document.getElementsByClassName("cell")
    for (let i = 0; i<cells.length; i++){
        cells[i].style.border = "1px solid white"
    }


}