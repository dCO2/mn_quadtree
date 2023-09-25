new p5(
  (p) => {
    
    var ballx = Math.floor(Math.random() * 400) + 1;
    var bally = Math.floor(Math.random() * 400) + 1;
    var dx = 4 * Math.random() - 2;
    var dy = 4 * Math.random() - 2;

    p.setup = () => {
      const canvasOne = p.createCanvas(400, 400);
      canvasOne.parent("canvas-1");
    }

    p.draw = () => {
      p.clear();
      p.background("#b7410e");
      p.ellipse(ballx, bally, 20, 20);
      bally += dy;
      ballx += dx;

      if(bally >= 400 || bally <= 0){
        dy *= -1;
      }
      
      if(ballx >= 400 || ballx <= 0){
        dx *= -1;
      }

    }
});

new p5(
  (p) => {
    p.setup = () => {
      const canvasTwo = p.createCanvas(400, 400);
      p.background("#e7f85e");
      canvasTwo.parent("canvas-2");
    }

    p.draw = () => {
      p.noStroke();
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    }
});
