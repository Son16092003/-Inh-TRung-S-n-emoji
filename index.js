let canvas = document.getElementById("myCanvas");

/**
 * @param {any} canvas
 * @return {CanvasRenderingContext2D}}
 */
function createPaper(canvas) {
  return canvas.getContext("2d");
}

let currentTime = Date.now();
let paper = createPaper(canvas);
let circleX = canvas.width / 2;
let circleY = canvas.height / 2;


    paper.beginPath();
    paper.strokeStyle = "yellow";
    paper.fillStyle = "yellow";
    paper.arc(circleX, circleY, 190, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();


let eye = false;    
setInterval(() => {
    
    let delta = Date.now() - currentTime;
    let fps = 1 / (delta / 1000);
    currentTime = Date.now();
    paper.clearRect(0, 0, canvas.width, canvas.height);
    console.log("FPS: " + fps);

    paper.beginPath();
    paper.strokeStyle = "yellow";
    paper.fillStyle = "yellow";
    paper.arc(circleX, circleY, 190, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

  if (eye == true) {
    eye = false;
    //eye left
    paper.beginPath();
    paper.strokeStyle = "#5e6a74";
    paper.fillStyle = "red";
    paper.arc(430, 220, 20, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    //eye right
    paper.beginPath();
    paper.strokeStyle = "#5e6a74";
    paper.fillStyle = "brown";
    paper.arc(540, 220, 20, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
  } else {
    eye = true;
    //eye left
    paper.beginPath();
    paper.strokeStyle = "#5e6a74";
    paper.fillStyle = "brown";
    paper.arc(430, 220, 20, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    //eye right
    paper.beginPath();
    paper.strokeStyle = "#5e6a74";
    paper.fillStyle = "red";
    paper.arc(540, 220, 20, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
  }
  paper.beginPath();
  paper.strokeStyle = "#5e6a74";
  paper.fillStyle = "brown";
  paper.fillRect(375, 320, 220, 25);
  paper.stroke();
  paper.fill();

}, 1000);


