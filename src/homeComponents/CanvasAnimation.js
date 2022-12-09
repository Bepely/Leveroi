import React from 'react'
import {useRef, useEffect} from "react"

const CanvasAnimation = () => {
    const canvasPar = useRef(null)
    const canvasRef = useRef(null);
  

    


    useEffect(() => {
      const canvasParent = canvasPar.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
  // Set the size of the dot
  var dotSize = 10;

  // Set the initial position of the dot
  var x = 0;
  var y = canvas.height / 2;

  // Set the direction of the graph
  var dx = 1;

  // Set the speed of the graph and dot
  var speed = 5;

  // This function will be called before each frame is drawn
  function drawFrame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the graph
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();

    // Draw the dot
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(x, y, dotSize, 0, 2 * Math.PI);
    ctx.fill();

    // Update the position of the graph and dot
    x += dx * speed;

    // If the graph reaches the edge of the canvas, reverse its direction
    if (x >= canvas.width || x <= 0) dx *= -1;

    // Request the next frame of the animation
    requestAnimationFrame(drawFrame);
  }

  // Start the animation
  requestAnimationFrame(drawFrame);
      
    }, []);



  return (
   
    <div id='canvasParent' ref={canvasPar}>
        <canvas id='canvas' ref={canvasRef} width={canvasPar.offsetWidth} height={canvasPar.offsetHeight}></canvas>
    </div>
    

  )
}

export default CanvasAnimation
