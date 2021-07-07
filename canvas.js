let canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    const mainNodeDOM = canvas.parent();
    canvas.parent("canvas-container");
    mainNodeDOM.remove();
}

function draw() {

}