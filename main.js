let canvas = document.getElementById('Canvas');
let ctx = canvas.getContext('2d');
let nav = document.querySelector('nav');
let navHeight = nav.offsetHeight;

let cannon = {
    x: canvas.width / 2,
    y: canvas.height,
    width: 60,
    height: 180,
}

//this function is for the nav a element to stay green if they are on the x webpage
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav a");
    var currentPath = window.location.pathname;

    //the following 7 lines were added by AI 
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var linkPath = link.getAttribute("href");

        // Check if the currentPath matches the linkPath
        if (currentPath === linkPath) {
            link.classList.add("active");
        }
    }
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Update cannon position to stay centered
    cannon.x = canvas.width / 2;
    cannon.y = canvas.height - navHeight + window.innerHeight*0.15;

    drawCannon(0); // Redraw cannon after resize
}

// Initial resize canvas
resizeCanvas();

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
    ctx.translate(cannon.x, cannon.y); // Move the origin to the cannon's base
    ctx.rotate(angle); // Rotate the canvas

    // Flip the canvas vertically
    ctx.scale(1, -1);

    // Draw the cannon image
    // Since the image is flipped, adjust the position to draw from the bottom
    ctx.drawImage(document.getElementById('cannonImage'), -cannon.width/2, -cannon.height + 30, cannon.width, cannon.height); //-cannon.height + 25 makes it look like the cannon is pivoting

    ctx.restore(); // Restore the canvas state to before the transformations
}

// Event listener for mouse movement
canvas.addEventListener('mousemove', function(event) {
    let angle = calculateAngle(event);
    drawCannon(angle);
});

// Event listener for window resize
window.addEventListener('resize', function() {
    resizeCanvas();
});
