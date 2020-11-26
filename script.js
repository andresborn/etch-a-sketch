const body = document.querySelector('body');
const container = document.querySelector('.container');
const navbar = document.createElement('div');
const h1 = document.createElement('h1');
const clearBtn = document.createElement('button');
const blackBtn = document.createElement('button');
const randomBtn = document.createElement('button');
const grayBtn = document.createElement('button');

navbar.setAttribute('id', 'navbar');
body.insertBefore(navbar, container);

h1.textContent = "Set size, then pick a color";
body.insertBefore(h1, navbar);

clearBtn.setAttribute('id', 'button');
clearBtn.textContent = "Set Size";
navbar.appendChild(clearBtn);

blackBtn.setAttribute('id', 'button');
blackBtn.textContent = "Black";
navbar.appendChild(blackBtn);

randomBtn.setAttribute('id', 'button');
randomBtn.textContent = "Random";
navbar.appendChild(randomBtn);

grayBtn.setAttribute('id', 'button');
grayBtn.textContent = "Gray Scale";
navbar.appendChild(grayBtn);


function hoverBlack() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color: black')
        })
    }
    )
}

function hoverRandom() {
    function randomRGB() {
        let random = Math.floor(Math.random() * 255);
        return random;
    }
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', `background-color: rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`)
        })
    }
    )
}

function hoverGrayScale() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        let darker = 0;
        function opacity() {
            darker += 0.1;
            return darker;
        }
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', `background-color: black; opacity: ${opacity()}`)
        })
    }
    )
}

function erase() {
    container.removeAttribute('style');
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function createBoxes(amount) {
    if (amount >= 100) {
        amount = 99;
        container.setAttribute('style', `grid-template-columns: repeat(${amount}, 1fr);     grid-template-rows: repeat(${amount}, 1fr);`);
        let area = amount**2;
        for (let i = 0; i < area; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);

        }
    } if (amount <= 99) {
        container.setAttribute('style', `grid-template-columns: repeat(${amount}, 1fr);     grid-template-rows: repeat(${amount}, 1fr);`);
        let area = amount**2;
        for (let i = 0; i < area; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);

        }
    } if (amount <= 0) {
        amount = 1;
        container.setAttribute('style', `grid-template-columns: repeat(${amount}, 1fr);     grid-template-rows: repeat(${amount}, 1fr);`);
        let area = amount**2;
        for (let i = 0; i < area; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);

        }
    }
    return;
}

clearBtn.addEventListener('click', () => {
    erase();
    createBoxes(prompt("Enter Grid Size"));
})

blackBtn.addEventListener('click', () => {
    hoverBlack();
}) 
randomBtn.addEventListener('click', () => {
    hoverRandom();
})
grayBtn.addEventListener('click', () => {
    hoverGrayScale();
})

createBoxes(16);
hoverBlack();