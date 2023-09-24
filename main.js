new p5(
  (p) => {
  p.setup = () => {
    const canvasOne = p.createCanvas(400, 400);
    canvasOne.parent("canvas-1");
  }

  p.draw = () => {
    p.clear();
    p.background("#b7410e");
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  }
});

new p5(
  (p) => {
  p.setup = () => {
    const canvasTwo = p.createCanvas(400, 400);
    canvasTwo.parent("canvas-2");
  }

  p.draw = () => {
    p.clear();
    p.background("#e7f85e");
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  }
});