// const { randomIntFromRange } = require("./utils").default;

import { randomIntFromRange } from "./utils.js";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class VortexElement {

    constructor (x, y, radius, color) {

        this.initialX = x;
        this.initialY = y;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.025;
        this.distFromCentre = {
            x: randomIntFromRange(50, 120),
            y: randomIntFromRange(50, 120),
        }
    };


    drawPath() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    };

    update() {
        this.radians += this.velocity;
        this.x = this.initialX + Math.cos(this.radians) * 400;
        this.y = this.initialY + Math.sin(this.radians) * 400;
        this.drawPath()
    };
};

// Implementation
let elements;
function init() {
  elements = []

  for (let i = 0; i < 10; i++) {
    // objects.push()
    elements.push(new VortexElement(canvas.width/2, canvas.height/2, 5, 'blue') );
  }
  console.log(elements);
};

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  elements.forEach(e => {
    e.update();
  })
};

init();
animate();