// globals
var speed = 10,
    canvasWidth = window.innerWidth,
    canvasHeight = window.innerHeight,
    canvas,
    ctx,
    times = 0,
    limit = 20,
    particles = [],
    colors = ['#F56991', '#FF9F80', '#FFC48C', '#EFFAB4', '#D1F2A5'],
    color = colors[4],
    pos,
    size = 10,
    opacity = 1;;

var getRand = function() {
    return [(Math.floor(Math.random() * canvasWidth)), (Math.floor(Math.random() * canvasHeight))]
};

var drawParticle = function(x, y, size, color, opacity) {
    ctx.beginPath();
    ctx.globalAlpha = opacity;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}

function throwDisc(mutex) {
    if (hitSomething()) {
        if (!mutex) {
            drawParticle(pos[0], pos[1], size, color, opacity);
            particles.push([pos[0], pos[1], color, opacity, size]);
        }
        return;
    }
    times++;
    if (mutex == true) {
        // clean();
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles = [];
        setTimeout(function() {
            throwDisc(false);
        }, speed)
    } else {
        drawParticle(pos[0], pos[1], size, color, opacity)
        particles.push([pos[0], pos[1], color, opacity, size]);
        pos[0] += 0;
        pos[1] -= 20;
        setTimeout(function() {
            throwDisc(true);
        }, speed)
    }
}

var hitSomething = function() {
    if (pos[1] <= 20) {
        return true;
    }
    return false;
};

window.onload = function() {
    canvas = document.getElementById('particles'),
        ctx = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
};


document.addEventListener("click", function() {
    times = 0;
    pos = [canvasWidth / 2, canvasHeight - 30];
    throwDisc(false);
});
