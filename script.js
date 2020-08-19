let container = document.querySelector('.container');
let div;
let grid;
let maxSize = 550;
let nCells = 16;
let sizeOfCells;

// Get the size of the grid cells
function getSizeOfCells(maxSize, nCells) {
    // Set up local version of variable so it doesn't 
    // get mixed up with the global version
    let sizeOfCells; 

    sizeOfCells = maxSize / nCells;
    sizeOfCells = sizeOfCells + 'px';
    return sizeOfCells;
}

// Generating the drawing grid
function makeGrid(nCells) {
    sizeOfCells = getSizeOfCells(maxSize, nCells);

    container.style['grid-template'] = 
    `repeat(${nCells}, ${sizeOfCells}) / repeat(${nCells}, ${sizeOfCells})`;

    for (let i = 0; i < nCells; i++) {
        for (let j = 0; j < nCells; j++) {
            div = document.createElement('div');
            div.classList.add('cell');
            container.appendChild(div);
        }
    }

    grid = document.querySelectorAll('.container > .cell');
}

// Changes the color of a cell when the mouse rolls over it
function draw() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('mouseover', function() {
            grid[i].style.backgroundColor = '#000';
        });
    }
}

// Resets the color of the grid to white
function reset() {
    for(let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = '#FFF';
    }
}

// Creates a new grid with different sized cells based on user input
function replaceGrid() {
    nCells = prompt('Enter a number between 1 and 50');
    if (nCells > 50 || nCells < 1) {
        if (typeof(nCells) != 'object') { // ignore following code if the prompt was canceled
            alert("That's not within range!");
        }
    } else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }

        makeGrid(nCells);
    }
}

makeGrid(nCells);
draw();