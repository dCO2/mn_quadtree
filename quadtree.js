// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }


class Quadtree {
  constructor(posX, posY, width, height, maxPoints = 5) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    // this.pointAtXMin = [Infinity, 0];
    // this.pointAtXMax = [-Infinity, 0];
    // this.pointAtYMin = [0, Infinity];
    // this.pointAtYMax = [0, -Infinity];
    this.noOfPoints = 0;
    this.allPoints = [];
    this.maxPoints = maxPoints;
    this.children = [];
  }

  addPoint(point){
    
    if (this.noOfPoints < this.maxPoints){
      this.allPoints.push(point);
      this.noOfPoints += 1;

    }else{

      if(point[0] > this.posX && point[1] > this.posY){
        // this.topRightTree = new Quadtree(this.posX + this.width, this.posY + this.height, this.width/2, this.height/2);
        // this.topRightTree.addPoint(point);
        // this.children.push(this.topRightTree);
        
        if(this.topRightTree){
          this.topRightTree.addPoint(point);
        }else{
          this.topRightTree = new Quadtree(this.posX + this.width/2, this.posY + this.height/2, this.width/2, this.height/2);
          this.topRightTree.addPoint(point);
          this.children.push(this.topRightTree);
        }

      }else if(point[0] < this.posX && point[1] > this.posY){
        // this.topLeftTree = new Quadtree(this.posX - this.width, this.posY + this.height, this.width/2, this.height/2);
        // this.topLeftTree.addPoint(point);
        // this.children.push(this.topLeftTree);

        if(this.topLeftTree){
          this.topLeftTree.addPoint(point);
        }else{
          this.topLeftTree = new Quadtree(this.posX - this.width/2, this.posY + this.height/2, this.width/2, this.height/2);
          this.topLeftTree.addPoint(point);
          this.children.push(this.topLeftTree);
        }

      }else if(point[0] > this.posX && point[1] < this.posY){
        // this.bottomRightTree = new Quadtree(this.posX + this.width, this.posY - this.height, this.width/2, this.height/2);
        // this.bottomRightTree.addPoint(point);
        // this.children.push(this.bottomRightTree);

        if(this.bottomRightTree){
          this.bottomRightTree.addPoint(point);
        }else{
          this.bottomRightTree = new Quadtree(this.posX + this.width/2, this.posY - this.height/2, this.width/2, this.height/2);
          this.bottomRightTree.addPoint(point);
          this.children.push(this.bottomRightTree);
        }

      }else if(point[0] < this.posX && point[1] < this.posY){
        // this.bottomLeftTree = new Quadtree(this.posX - this.width, this.posY - this.height, this.width/2, this.height/2);
        // this.bottomLeftTree.addPoint(point);
        // this.children.push(this.bottomLeftTree);

        if(this.bottomLeftTree){
          this.bottomLeftTree.addPoint(point);
        }else{
          this.bottomLeftTree = new Quadtree(this.posX - this.width/2, this.posY - this.height/2, this.width/2, this.height/2);
          this.bottomLeftTree.addPoint(point);
          this.children.push(this.bottomLeftTree);
        }

      }

    }
    
  }

  // numberOfPointsInTopLeft = 0;
  // numberOfPointsInTopRight = 0;
  // numberOfPointsInBottomLeft = 0;
  // numberOfPointsInBottomRight = 0;

  // numberOfPointsX = 0;


  // setNPointsRegion(){
  //   this.allPoints.sort();
  //   while (const point < this.allPoints){

  //   }

  // }

  // this.allPoints.sort();

  // this.allPoints.sort( (pointA, pointB) => pointA[1] > pointB[1] );


}


