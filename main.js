new p5(
  (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(400, 400);
      p.background("#e7f85e");
      canvas.parent("canvas");
    }

    p.draw = () => {
      p.noStroke();
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    }
});
