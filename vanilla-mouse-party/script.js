let mousePosition = {
    x: 0,
    y: 0
}

let drawId

function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min
}

window.addEventListener('mousemove', (event) => {
    mousePosition.x = event.pageX
    mousePosition.y = event.pageY
    // draw()
})

function draw() {

    return setInterval(() => {
        let container = document.querySelector('#wrap')

        const color = `background:rgb(${getRandomNumber(
            0,
            255
          )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
        const ballSize = getRandomNumber(10, 30);
        const size = `height:${ballSize}px; width:${ballSize}px;`;
        const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
            )}px;`;
        const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
            )}px; `;
        const style = `${left}${top}${color}${size}`;

        let newDiv = document.createElement('div')
        newDiv.classList.add('ball')
        newDiv.style = style
        
        newDiv.addEventListener('animationend', (event) => {
            event.target.remove()
        })

        container.appendChild(newDiv)
    }, 1000)
}

window.addEventListener('mouseover', () => {
    drawId = draw()
})

window.addEventListener('mouseout', () => {
    clearInterval(drawId)
})