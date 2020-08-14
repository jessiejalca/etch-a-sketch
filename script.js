let container = document.querySelector('.container');
let div;

makeGrid(16, 16);

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