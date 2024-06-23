# Luke-2024-website
This website will be connected to a game that I will make for a game in DTC later in the year.

Chat gpt log:

I used chat gpt to help me with the css for a for the slider for the nav bar when hovering over an element

what i used:

nav a::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0047ab;
    transition: top 0.5s, height 0.5s;
}

nav a:hover::after {
    top: 0;
    height: 100%;
}



How can i use the cursor coordiantes to make the cannon point to the cursor

function calculateAngle(event) { 
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left - cannon.x;
    let y = event.clientY - rect.top - cannon.y;
    return Math.atan2(x, y);                                                       I changed it to (-x, y)
}   

// Function to draw the cannon
function drawCannon(angle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.save(); // Save the current state of the canvas
    ctx.translate(cannon.x, cannon.y); // Move the origin to the cannon's location

    // Draw the cannon
    ctx.rotate(angle); // Rotate the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(-cannon.width, 0, cannon.width, cannon.height);                    I changed this to ctx.fillRect(-cannon.width/2 , 0, cannon.width, cannon.height); 
                                                                                    to make it point to the centre of the cannon
    ctx.restore(); // Restore the canvas state to before the transformations
}

// Event listener for mouse movement
canvas.addEventListener('mousemove', function(event) {
    let angle = calculateAngle(event);
    drawCannon(angle);
});