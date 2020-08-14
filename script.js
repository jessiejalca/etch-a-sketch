let container = document.querySelector('.container');
let div;

// Generating the drawing grid
function makeGrid(x, y) {
    container.style['grid-template'] = 
    `repeat(${x}, 34px) / repeat(${y}, 34px)`;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            div = document.createElement('div');
            div.classList.add('cell');
            container.appendChild(div);
        }
    }
}

function draw() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('mouseover', function() {
            grid[i].style.backgroundColor = '#000000';
        });
    }
}

makeGrid(16, 16);
let grid = document.querySelectorAll('.container > .cell');
draw();