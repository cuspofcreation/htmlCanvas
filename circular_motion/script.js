import { randomColor, randomIntFromRange } from "./utils.js";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = [
    '#00bdff',
    '#4d39ce',
    '#088eff',
]

window.addEventListener('click', () => {
    elements.forEach(e => {
        e.velocity = e.velocity * -1;
    })
});

class VortexElement {

    constructor (x, y, radius, color) {

        this.initialX = x;
        this.initialY = y;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.05;
        this.distFromCentre = randomIntFromRange(50, 120)
    };

    update() {
        const lastPoint = {
            x: this.x,
            y: this.y,
        }
        this.radians += this.velocity;
        this.x = this.initialX + Math.cos(this.radians) * this.distFromCentre;
        this.y = this.initialY + Math.sin(this.radians) * this.distFromCentre;
        this.drawPath(lastPoint)
    };

    drawPath(lastPoint) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.radius;
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath()
    };
};

let elements;
function init() {
  elements = []

  for (let i = 0; i < 50; i++) {
    const radius = Math.random() * 2 + 1;
    // objects.push()
    elements.push(new VortexElement(canvas.width/2, canvas.height/2, radius, randomColor(colors)));
  }
  console.log(elements);
};

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = "rgba(255, 255, 255, 0.05";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  elements.forEach(e => {
    e.update();
  })
};

init();
animate();