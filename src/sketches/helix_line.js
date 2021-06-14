import helixModel from './assets/simple_dna_2.obj';
export default function sketch(p){
    let helix;
    let minSizeX;
    let minSizeY;
    let X;
    let Y;
    let backgroundColor;
    p.preload = () => {
        helix = p.loadModel(helixModel);
    }

    p.setup = () => {
      minSizeX = 170.0;
      minSizeY= 271.0;
      X = Math.max(minSizeX,p.windowWidth/10);
      Y = Math.max(minSizeY,p.windowHeight);
      p.createCanvas(X,Y, p.WEBGL);
      p.strokeWeight(1);
      backgroundColor = p.color(221, 215, 224);
    }

    p.draw = () => {
      p.background(backgroundColor);
      p.scale(1);
      p.translate(0,p.height/2);
      p.rotateY(p.frameCount * 0.01);
      p.fill(230,226,234);
      p.stroke(120,126,214);
      for (let i =0; i<10;i++){
        p.translate(0,i-125);
        p.model(helix);
      }
    }
    p.windowResized = () => {
      X = Math.max(minSizeX,p.windowWidth/10);
      Y = Math.max(minSizeY,p.windowHeight);
      p.resizeCanvas(X,Y);
    }
}
