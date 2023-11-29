// import utils from './utils'

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class VortexElement {

    constructor (x, y, radius, color) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color
    };


    drawPath() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.drawPath()
    }
}

// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })
}
