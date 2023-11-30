// import utils from './utils'

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
        this.radians = 0;
        this.velocity = 0.015;
    };


    drawPath() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update() {

        // let x = this.x;
        // let y = this.y;
        this.radians += this.velocity;
        this.x = this.initialX + Math.cos(this.radians) * 400;
        // console.log(Math.cos(this.radians) * 100);
        this.y = this.initialY + Math.sin(this.radians) * 400;
        // this.y += Math.tan(this.radians);
        this.drawPath()
    }
};

// Implementation
let elements;
function init() {
  elements = []

  for (let i = 0; i < 1; i++) {
    // objects.push()
    elements.push(new VortexElement(canvas.width/2, canvas.height/2, 5, 'blue') );
  }
  console.log(elements);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  elements.forEach(e => {
    e.update();
  })

}

init();
animate();