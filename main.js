window.onload = function() {

const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

// Function to update the size of the canvas
function updateCanvasSize() {
    const nav = document.querySelector('nav');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - nav.offsetHeight;
}

// Call this function initially to set the size of the canvas
updateCanvasSize();
let cannon = {
    x: 0,
    y: 0,
    width: 25,
    height: 100,
};

let mouseX = undefined;
let mouseY = undefined;

function drawCannon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = 'blue';
    ctx.fillRect(cannon.x, cannon.y, cannon.width, cannon.height);
}

function loop() {
    drawCannon();
    requestAnimationFrame(loop); // Use requestAnimationFrame for better performance
}

function logMouseCoordinates(event) {
    let rect = canvas.getBoundingClientRect(); // Get the position of the canvas
    let navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav element
    mouseX = event.clientX - rect.left; // Adjust the x-coordinate
    mouseY = canvas.height - (event.clientY - rect.top - navHeight); // Adjust the y-coordinate
    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`); // Log mouse coordinates
}


window.addEventListener('mousemove', logMouseCoordinates);
window.addEventListener('resize', updateCanvasSize); // Update the size of the canvas when the window size changes

loop();
}
