const gridContainer = document.getElementById("container")

const gridSizeButon = document.getElementById("gridSize")
const clearGridButon = document.getElementById("clearGrid")
const ButonEraser = document.getElementById("eraser")
const butoncolorMode = document.getElementById("colorMode")
const colorPicker = document.getElementById("colorpicker")





colorPicker.value = "black"
let drawMode = false
let colorMode = true
let eraserMode = false

document.addEventListener("click", () => {
    if (drawMode == false) {
        drawMode = true
    } else {
        drawMode = false
    }
});




let numColumns = 16

function crearteGrid() {

    for (let i = 1; i < numColumns * numColumns + 1; i++) {
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        gridContainer.appendChild(gridItem)
        container.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;




        gridItem.addEventListener('mouseover', () => {
            if (drawMode == true && colorMode == true) {
                gridItem.style.backgroundColor = colorPicker.value
            } else if (drawMode == false && colorMode == false && eraserMode == true) {
                gridItem.style.backgroundColor = "white"
            }


        })

        clearGridButon.addEventListener("click", () => {
            gridItem.style.backgroundColor = "white"
        })
    }
}

ButonEraser.addEventListener("click", () => {
    colorMode = false
    eraserMode = true
})

butoncolorMode.addEventListener("click", () => {
    colorMode = true
    eraserMode = false
})





gridSizeButon.addEventListener("click", () => {
    let gridSize = parseInt(prompt("elige el tama;o de la cuadricula"))
    while (isNaN(gridSize) || gridSize <= 0 || gridSize >= 100) {
        alert("numero invalido, ingresa un numero entre el 1 y el 99")
        gridSize = parseInt(prompt("elige el tama;o de la cuadricula"))
    }
    numColumns = gridSize

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    crearteGrid()


})



crearteGrid()