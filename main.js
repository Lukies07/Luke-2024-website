const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let cannon = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 25,
    height: 100,
};

let cannonMouse_angle = undefined
let mouseX = undefined
let mouseY = undefined

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cannon.x = canvas.width / 2;
    cannon.y = canvas.height / 2;
    drawCannon(); // Redraw the cannon after resizing
}

resizeCanvas(); // Resize when website is opened

window.addEventListener('resize', resizeCanvas);

canvas.addEventListener('mousemove', function(event) {
    mouseX = event.clientX - canvas.width / 2; // adjust mouseX
    mouseY = event.clientY - canvas.height / 2; // adjust mouseY
});

function drawCannon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(canvas.width / 2 - cannon.width / 2, canvas.height / 2 - cannon.height / 2, cannon.width, cannon.height);

    console.log("Angle:", cannonMouse_angle);   
    console.log("mouseX", mouseX);
    console.log("mouseY", mouseY);
}   

function loop() {
    drawCannon();
    requestAnimationFrame(loop);
}

loop();
