const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', function(event) {
    console.log('Mouse coordinates on page:', event.clientX, event.clientY);
});

let cannon = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 25,
    height: 100,
};

function drawCannon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillRect(cannon.x - cannon.width / 2, cannon.y - cannon.height / 2, cannon.width, cannon.height);
}

function loop() {
    drawCannon();
    requestAnimationFrame(loop);
}

loop();