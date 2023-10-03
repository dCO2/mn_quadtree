var canvasWidth;
var canvasHeight;
var canvas;
let qtree;
var pmx;
var pmy;

recurse = (tree, k) => {

  let c = color(255*(1-k*k*k), 255*k*k, 255*k);
  stroke(c);

  for(var i = 0; i < tree.allPoints.length; i++){
    textSize(10);
    strokeWeight(0.5);
    var word1 = tree.allPoints[i][0].toString();
    var word2 = tree.allPoints[i][1].toString();
    // text(word1+', ' +word2, tree.allPoints[i][0], canvasHeight-tree.allPoints[i][1]);
    // ellipse(tree.allPoints[i][0], canvasHeight-tree.allPoints[i][1], 5, 5);
    // ellipse(tree.allPoints[i][0], tree.allPoints[i][1], 20, 20);
  }

  stroke("red");
  line(tree.posX, canvasHeight-(tree.posY+tree.height), tree.posX, canvasHeight-(tree.posY-tree.height));
  line(tree.posX-tree.width, canvasHeight-tree.posY, tree.posX+tree.width, canvasHeight-tree.posY);

  // line(tree.posX, tree.posY+tree.height, tree.posX, tree.posY-tree.height);
  // line(tree.posX-tree.width, tree.posY, tree.posX+tree.width, tree.posY);

  if (tree.noOfPoints == 0){
    return;
  }

  // tree.allPoints.forEach(ellipse(point[0], point[1], 20, 20));
  tree.children.forEach(recurse, k+0.5);

}

setup = () => {
  canvasWidth = windowWidth*0.8;
  canvasHeight = windowHeight*0.8; 
  canvas = createCanvas(canvasWidth, canvasHeight);
  qtree = new Quadtree(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2);
  // qtree2 = new Quadtree(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2, 5);

  for(var i = 0; i < 100; i++){
    // var x = Math.floor(canvasWidth*Math.random()*0.5+canvasWidth/4);
    // var y = Math.floor(canvasHeight*Math.random()*0.5+canvasHeight/4);
    var x = Math.floor(canvasWidth*Math.random());
    var y = Math.floor(canvasHeight*Math.random());
    // var a,b = new Point(Math.floor(canvasWidth*Math.random()), Math.floor(canvasHeight*Math.random()));
    qtree.addPoint([x,y]);
  }

  background("black");
  canvas.parent("canvas");

  stroke("red");
  noFill();
  strokeWeight(1);
  ellipse(canvasWidth/2, canvasHeight/2, 20, 20);
  ellipse(canvasWidth/4, canvasHeight/4, 20, 20);

  stroke("white");
  noFill();
  strokeWeight(1);
}

draw = () => {
  // fill("black");
  // ellipse(mouseX, mouseY, 5, 5);
  // ellipse(4, 4, 5, 5);
  // scale(1, -1);


  // pmx = mouseX;
  // pmy = mouseY;
  // for(var i = 0; i < 10; i++){
  //   ellipse(pmx + 40 * Math.random() - 20, pmy + 40 * Math.random() - 20, 1, 1);
  // }
  
  mousePressed = () => {
    pmx = mouseX;
    pmy = mouseY;
    stroke("white");
    fill("white");
    translate(0, 0);
    for(var i = 0; i < 10; i++){
      ellipse(pmx + 60 * Math.random() - 30, pmy + 60 * Math.random() - 30, 3, 3);
    }
  }


  // translate(-canvasWidth/2, canvasHeight/2);
  // scale(1, -1);

/*
  mouseDragged = () => {
    pmx = mouseX;
    pmy = mouseY;
    // stroke("black");
    // translate(-canvasWidth/2, canvasHeight/2);
    // scale(1, -1);
    // for(var i = 0; i <= 1; i++){
    // ellipse(pmx + 40 * Math.random() - 20, pmy + 40 * Math.random() - 20, 1, 1);
    strokeWeight(1);
    ellipse(pmx + randomGaussian(0, 10), pmy + randomGaussian(0, 10), 1, 1);

    // ellipse(pmx, pmy, 1, 1);


    // }
  }
  */

  // translate(canvasWidth/2, canvasHeight/2);
  // scale(1, -1);


  // DRAW LINES FROM BOTTOM LEFT ORIGIN

  // translate(0, canvasHeight);
  // scale(1, -1);

/*
  mouseDragged = () => {
    pmx = mouseX;
    pmy = mouseY;
    // stroke("black");
    // translate(-canvasWidth/2, canvasHeight/2);
    // scale(1, -1);
    // for(var i = 0; i <= 1; i++){
    // ellipse(pmx + 40 * Math.random() - 20, pmy + 40 * Math.random() - 20, 1, 1);

    // translate(0, canvasHeight);
    // scale(1,-1);

    strokeWeight(1);
    ellipse(pmx + randomGaussian(0, 10), pmy + randomGaussian(0, 10), 1, 1);

    // ellipse(pmx, pmy, 1, 1);


    // }
  }
  */

  // pmx = mouseX;
  // pmy = mouseY;

  // translate the display window to the bottom left
  // so that the lines can be drawn
  translate(0, canvasHeight);
  scale(1,-1);

  stroke("white");
  strokeWeight(1);
  // ellipse(pmx + randomGaussian(0, 10), pmy + canvasHeight + randomGaussian(0, 10), 1, 1);
  // ellipse(mouseX + randomGaussian(0, 10), -mouseY + canvasHeight + randomGaussian(0, 10), 1, 1);
  // ellipse(mouseX + randomGaussian(0, 10), 0, 1, 1);

  // strokeWeight(1);
  // ellipse(pmx + randomGaussian(0, 10), pmy + randomGaussian(0, 10), 1, 1);

  // translate(0, -canvasHeight);
  
  noFill();
  stroke("white");
  strokeWeight(0.5);

  line(canvasWidth/2, canvasHeight, canvasWidth/2, 0);
  line(0, canvasHeight/2, canvasWidth, canvasHeight/2);

  // line(0, canvasHeight/2, canvasWidth, canvasHeight/2);

  // scale(1,-1);

  translate(0, canvasHeight);
  scale(1,-1);

  recurse(qtree, 0.5);

  // translate the display window back to origin because
  // mouseDragged will be called outside the draw function.
  // translate(0, canvasHeight);
  // scale(1,-1);

}

  // line(canvasWidth/4, 0, canvasWidth/4, canvasHeight/2);
  // line(0, canvasHeight/4, canvasWidth/2, canvasHeight/4);

/*  
  // DRAW RECT WITH LINES
  //PASS
  noFill();
  stroke("white");
  strokeWeight(0.5);
  // rectMode(CORNER);
  // rect(0, 0, canvasWidth, canvasHeight);
  line(canvasWidth/2, 0, canvasWidth/2, canvasHeight);
  line(0, canvasHeight/2, canvasWidth, canvasHeight/2);

  line(canvasWidth/4, 0, canvasWidth/4, canvasHeight/2);
  line(0, canvasHeight/4, canvasWidth/2, canvasHeight/4);

  // line(canvasWidth/2, 0, canvasWidth/2, canvasHeight);
  // line(canvasWidth/2, 0, canvasWidth/2, canvasHeight);
*/



/*
  // CORNER RECTANGLE
  rectMode(CORNER);
  noFill();
  stroke("white");
  strokeWeight(0.125);
  rect(0, 0, canvasWidth*0.5, canvasHeight*0.5);
  rect(canvasWidth*0.5, 0, canvasWidth*0.5, canvasHeight*0.5);
  rect(0, canvasHeight*0.5, canvasWidth*0.5, canvasHeight*0.5);
  cw = 0;
  ch = canvasHeight*0.5;
  lw = canvasWidth*0.5;
  lh = canvasHeight*0.5;

  rect(cw, ch, lw*0.5, lh*0.5);
  rect(cw+lw*0.5, ch, lw*0.5, lh*0.5);
  rect(cw, ch+lh*0.5, lw*0.5, lh*0.5);
  ccw = cw;
  cch = lh+lh*0.5;
  llw = lw*0.5;
  llh = lh*0.5;
  rect(ccw, cch, llw*0.5, llh*0.5);
  rect(ccw+llw*0.5, cch, llw*0.5, llh*0.5);
  rect(ccw, cch+llh*0.5, llw*0.5, llh*0.5);
  rect(ccw+llw*0.5, cch+llh*0.5, llw*0.5, llh*0.5);


  rect(cw+lw*0.5, lh+lh*0.5, lw*0.5, lh*0.5);


  rect(canvasWidth*0.5, canvasHeight*0.5, canvasWidth*0.5, canvasHeight*0.5);
*/



  // CENTER RECTANGLE
/*
  // // noStroke();
  rectMode(CENTER);
  noFill();
  stroke("white");
  // // fill("#e7f85e");
  // rect(canvasWidth*0.25, canvasHeight*0.25, canvasWidth*0.25, canvasHeight*0.25);
  // rect(-canvasWidth*0.25, canvasHeight*0.25, canvasWidth*0.25, canvasHeight*0.25);
  // rect(canvasWidth*0.25, -canvasHeight*0.25, canvasWidth*0.25, canvasHeight*0.25);
  // rect(-canvasWidth*0.25, -canvasHeight*0.25, canvasWidth*0.25, canvasHeight*0.25);

  // rect(canvasWidth*0.25, canvasHeight*0.25, canvasWidth*0.5, canvasHeight*0.5);
  // rect(canvasWidth*0.75, canvasHeight*0.25, canvasWidth*0.5, canvasHeight*0.5);

  // cw = canvasWidth*0.75;
  // ch = canvasHeight*0.25;
  // rect(cw+cw*0.125, ch+ch*0.125, cw*0.25, ch*0.25);


  // rect(canvasWidth*0.25, canvasHeight*0.75, canvasWidth*0.5, canvasHeight*0.5);
  rect(canvasWidth*0.75, canvasHeight*0.75, canvasWidth*0.5, canvasHeight*0.5);
  cw = canvasWidth*0.75;
  ch = canvasHeight*0.75;
  ww = canvasWidth*0.5;
  hh = canvasHeight*0.5;
  // rect(cw+ww*0.5, ch+hh*0.5, ww*0.5, hh*0.5);
  rect(cw+0.25*ww, ch+0.25*hh, ww*0.5, hh*0.5);
  cww = cw+0.25*ww;
  chh = ch+0.25*hh;
  www = ww*0.5;
  hhh = hh*0.5;

  rect(cww+0.25*www, chh+0.25*hhh, www*0.5, hhh*0.5);



  // rect(canvasWidth*0.75+0.25*canvasWidth*0.5, ch+0.25*hh, ww*0.5, hh*0.5);
  */
