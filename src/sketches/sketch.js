import helixModel from './assets/simple_dna_2.obj';
export default function sketch(p){
    let helix;
    let counter;
    let bordo;
    let navy;
    let lightColor;
    let minSizeX;
    let minSizeY;
    let X;
    let Y;
    p.preload = () => {
        helix = p.loadModel(helixModel);
    }

    p.setup = () => {
      minSizeX = 170.0;
      minSizeY= 271.0;
      X = Math.max(minSizeX,p.windowWidth/2);
      Y = Math.max(minSizeY,p.windowHeight/2);
      p.createCanvas(X,Y, p.WEBGL);
      console.log(p.width,p.height);
      //p.background(200);
      counter = 0;
      navy = p.color(10,10,50);
      bordo = p.color(50,10,20);
      lightColor = p.color(255,255,100);
      p.strokeWeight(2);
    }

    p.draw = () => {
      p.scale(10);
      if (counter===100){
          p.stroke(lightColor);
      } else{
          p.stroke(navy);
      }
      //more serious
      p.translate(10, -50);
      p.rotateY(p.frameCount * 0.01);
      p.fill(200);

      //p.normalMaterial();
      p.model(helix);
      // maximum fun
      if (counter===100){
          p.stroke(lightColor);
          counter = 5;
      } else{
          p.stroke(bordo);
      }
      p.fill(200);
      //p.translate(p.mouseX,p.mouseY);

      p.rotateY(p.frameCount * 0.01);
      //p.normalMaterial();
      p.model(helix);
      counter = counter+1;
    }

    p.mouseClicked = () => {
      p.background(255);
    }

    p.windowResized = () => {
      X = Math.max(minSizeX,p.windowWidth/2);
      Y = Math.max(minSizeY,p.windowHeight/2);
        p.resizeCanvas(X,Y);
        console.log(p.width,p.height);
    }
}
