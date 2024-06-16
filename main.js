window.onload = function() {

const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let cannon = {
    x: 0,
    y: 0,
    width: 25,
    height: 100,
};

let mouseX = undefined;
let mouseY = undefined;

// Function to update the size of the canvas
function updateCanvasSize() {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - navHeight;
    // Update the cannon position to the center of the canvas
    cannon.x = window.innerWidth / 2 - cannon.width / 2;
    cannon.y = window.innerHeight / 2;
    console.log(cannon.y);
}

updateCanvasSize();// Call this function initially to set the size of the canvas

function logMouseCoordinates(event) {
    let rect = canvas.getBoundingClientRect();
    let navHeight = document.querySelector('nav').offsetHeight;
    mouseX = event.clientX - rect.left; // Assign the value to mouseX
    mouseY = canvas.height - (event.clientY - navHeight);
    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
}

function drawCannon() {
    // Calculate angle between cannon and mouse
    let dx = mouseX - (cannon.x - cannon.width/2);
    let dy = mouseY - cannon.y;
    let angle = Math.atan2(dy, dx);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save(); // Save the current canvas state
    ctx.translate(cannon.x + cannon.width / 2, cannon.y + cannon.height / 2);
    ctx.rotate(angle); // Rotate by the calculated angle

    // Draw the rotated cannon
    ctx.fillStyle = 'blue'; 
    ctx.fillRect(-cannon.width / 2, -cannon.height / 2, cannon.width, cannon.height);
    ctx.restore(); // Restore the original canvas state
}

function loop() {
    drawCannon();
    requestAnimationFrame(loop);
}

window.addEventListener('mousemove', logMouseCoordinates);
window.addEventListener('resize', updateCanvasSize);
loop();

};
