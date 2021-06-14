
import fondoImg from './assets/fondos/foreground-min.png';
export default function sketch(p){
    let backgroundPic;
    let minSizeX;
    let minSizeY;
    let X;
    let Y;
    p.preload = () => {
        backgroundPic = p.loadImage(fondoImg);
    }

    p.setup = () => {
      minSizeX = 170.0;
      minSizeY= 271.0;
      X = Math.max(minSizeX,p.windowWidth);
      Y = Math.max(minSizeY,p.windowHeight);
      p.createCanvas(X,Y, p.WEBGL);
      p.strokeWeight(1);
      p.scale(.45);
      p.image(backgroundPic,-X,-Y);
    }

    p.draw = () => {
    }
}
