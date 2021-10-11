export default function sketch(p){
    let dim;
    let gradColor;
    let off;
    let buzz;
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        //p.createCanvas(710, 400);
        dim = p.windowWidth - p.windowWidth / 4;
        p.colorMode(p.HSB, 360, 100, 100);
        p.noStroke();
        p.ellipseMode(p.RADIUS);
        gradColor = 150;
        off = 0.0;
        buzz = 0.0;
    }

    p.draw = () => {
      p.clear();
      //p.background(255,.1);
      off = off + 0.01;
      let offX = p.map(p.noise(off),0,1,0.9,1.1);
      let offY =p.map(p.noise(off),0,1,1.9,2.1);
      buzz = Math.sin(p.frameCount)*2;
      p.drawGradient(dim*offX-p.mouseX, buzz + p.windowHeight / 2, gradColor+200, off*1.3);
      
      p.drawGradient(dim*.95*offX, buzz+ p.windowHeight / offY, gradColor-50, off);

    }

    p.drawGradient = (x, y, gradColor, off) => {
      //clear();
      let radius = dim *2;
      let h = gradColor;
      for (let r = radius; r > 0; --r) {

        p.fill(h, 90, 90,1/r);

        p.ellipse(x, y, r*p.noise(off), r*p.noise(off));
        h = (h + 1) % 360;
      }
    }
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        dim = p.windowWidth / 2;
        console.log(dim);
    }
}

