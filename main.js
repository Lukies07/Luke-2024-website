window.onload = function() {
    const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');

    let cannon = {
        x: canvas.width/2,
        y: canvas.height/2,
        width: 25,
        height: 100,
    };

    let mouseX = 0;
    let mouseY = 0;

    // Function to update the size of the canvas
    function updateCanvasSize() {
        canvas.width = window.innerWidth; // Set canvas width to window width
        canvas.height = window.innerHeight; // Set canvas height to window height
    }

    // Function to draw the cannon
    function drawCannon() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw cannon
        ctx.save(); // Save the current drawing state
        ctx.translate(cannon.x, cannon.y); // Translate origin to cannon's position
        // Calculate angle towards mouse
        let angle = Math.atan2(mouseY - cannon.y, mouseX - cannon.x);
        ctx.rotate(angle); // Rotate cannon towards mouse
        ctx.fillRect(-cannon.width / 2, -cannon.height / 2, cannon.width, cannon.height);
        ctx.restore(); // Restore original drawing state
    }

    // Function to handle mouse movement
    function handleMouseMove(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    // Event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Event listener for window resize
    window.addEventListener('resize', function() {
        updateCanvasSize();
        // You might also want to redraw the cannon when the canvas size changes
        drawCannon();
    });

    // Function to start the animation loop
    function loop() {
        drawCannon();
        requestAnimationFrame(loop);
    }

    updateCanvasSize(); // Call this function initially to set the size of the canvas
    loop(); // Start the animation loop
};
