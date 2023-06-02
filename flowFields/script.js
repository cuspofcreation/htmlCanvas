const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;
console.log(ctx);

//Global settings;
ctx.lineWidth = 10;
ctx.strokeStyle = "magenta";

class Line {

    constructor(canvas) {

        this.canvas = canvas;
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = Math.random() * canvas.width;
        this.endY = Math.random() * canvas.height;
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = Math.floor(Math.random() * 360);
    }

    draw(context) {
        context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

const linesArray = [];

for (let i = 0; i < 10; i ++) {
    linesArray.push(new Line(canvas));
}

console.log(linesArray);
linesArray.forEach((line) => line.draw(ctx));

// const line1 = new Line(canvas);
// line1.draw(ctx);