const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - navHeight;

let cannon = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 25,
    height: 100,
};

// Function to calculate angle between cannon and cursor
function calculateAngle(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left - cannon.x;
    let y = event.clientY - rect.top - cannon.y;
    return Math.atan2(-x, y);
}

// Function to draw the cannon
function drawCannon(angle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.save(); // Save the current state of the canvas
    ctx.translate(cannon.x + cannon.width/2, cannon.y); // Move the origin to the cannon's location
    ctx.rotate(angle); // Rotate the canvas

    // Draw the cannon
    ctx.fillStyle = 'black';
    ctx.fillRect(-cannon.width/2, 0, cannon.width, cannon.height); // Adjusted line

    ctx.restore(); // Restore the canvas state to before the transformations
}

// Event listener for mouse movement
canvas.addEventListener('mousemove', function(event) {
    let angle = calculateAngle(event);
    drawCannon(angle);
});