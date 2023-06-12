const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;
console.log(ctx);

//Global settings;
ctx.lineWidth = 10;
// ctx.strokeStyle = "magenta";

//canvas shadow
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2;

const grad1 = ctx.createLinearGradient(0,0, canvas.width, canvas.height)
grad1.addColorStop('0.2', 'pink');
grad1.addColorStop('0.3', 'red');
grad1.addColorStop('0.4', 'orange');
grad1.addColorStop('0.5', 'yellow');
grad1.addColorStop('0.6', 'green');
grad1.addColorStop('0.7', 'turquoise');
grad1.addColorStop('0.8', 'violet');

// const grad2 = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 30, canvas.width * 0.5, canvas.height * 0.5, 200,)
// grad2.addColorStop('0.4', 'orange');
// grad2.addColorStop('0.6', 'blue');
// grad2.addColorStop('0.5', 'pink');

//Image pattern background
// const patternImg = document.getElementById('patternImg');
// console.log(patternImg);
// const pattern1 = ctx.createPattern(patternImg, 'no-repeat');

ctx.strokeStyle = grad1;

class Line {

    constructor(canvas) {

        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.history = [{x: this.x, y: this.y}];
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = Math.floor(Math.random() * 360);
        this.maxLength = Math.floor(Math.random() * 150 + 10);
        this.speedX = Math.random() * 1 - 0.5;
        // this.speedY = Math.random() * 5 - 2.5;
        this.speedY = 7;
        this.lifeSpan = this.maxLength * 2;
        this.timer = 0;
        this.angle = 0;
        this.va = Math.random() * 0.5 - 0.25;
        this.curve = 0.1;
        this.vc = 0.05;

    }

    draw(context) {

        // context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);

        for (let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }

        context.stroke();

    }

    update() {
        this.timer++;
        // this.angle += 0.1;
        this.angle += this.va;
        this.curve += this.vc;
        if (this.timer < this.lifeSpan) {
            this.x += Math.sin(this.angle) * this.curve;
            // this.y += Math.sin(this.angle) * this.curve;
            this.y += Math.cos(this.angle) * this.curve;
            this.history.push({x: this.x, y: this.y});
            if (this.history.length > this.maxLength) {
                this.history.shift();
            } 
            }  else if (this.history.length <= 1) {
                this.reset();
            } else {
                this.history.shift();
            }
    }

    reset() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.history = [{x: this.x, y: this.y}];
        this.timer = 0;
        this.angle = 0;
        this.curve = 0;

    }
}

const linesArray = [];
const numberOfLines = 25;

for (let i = 0; i < numberOfLines; i ++) {
    linesArray.push(new Line(canvas));
}

// linesArray.forEach((line) => line.draw(ctx));

function animate () {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    linesArray.forEach(line => 
        {
            line.draw(ctx);
            line.update();
        });
    // update line
    requestAnimationFrame(animate);

}

animate();