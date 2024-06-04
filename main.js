const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let cannon = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 25,
    height: 100,
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cannon.x = canvas.width / 2;
    cannon.y = canvas.height / 2;
    drawCannon(); // Redraw the cannon after resizing
}

// Initial resize
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

canvas.addEventListener('mousemove', function(event) {
    console.log('Mouse coordinates on page:', event.clientX, event.clientY);
});

function drawCannon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(cannon.x - cannon.width / 2, cannon.y - cannon.height / 2, cannon.width, cannon.height);
}

function loop() {
    drawCannon();
    requestAnimationFrame(loop);
}

loop();
