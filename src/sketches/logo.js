
import groteskFont from './assets/grotesk.otf';
export default function sketch(p){
    let grotesk;
    let hiArray;
    let fontSize;
    let r=0;
    let adelante;
    let minSizeX;
    let minSizeY;
    let X;
    let Y;
    p.preload = () => {
        grotesk = p.loadFont(groteskFont);
    }

    p.setup = () => {
      adelante = true;
      minSizeX = 170.0;
      minSizeY= 271.0;
      X = Math.max(minSizeX,p.windowWidth/5+p.windowWidth/10);
      Y = Math.max(minSizeY,p.windowHeight/4+p.windowWidth/20);
      p.createCanvas(X,Y , p.WEBGL);
      console.log(p.width,p.height);
      p.strokeWeight(2);
      fontSize = p.width/3;
      p.textFont(grotesk);
      p.textSize(fontSize);
      p.textAlign(p.CENTER,p.CENTER);
      hiArray = grotesk.textToPoints("Karen",-p.width/2+70,0,fontSize,{sampleFactor:0.05});
    }

    p.draw = () => {
      p.orbitControl();
      hiArray = grotesk.textToPoints("Karen",
          -p.width/2+70,
          0,
          fontSize,
          {sampleFactor:Math.sin(r*0.0001)}
      );
      p.stroke(0);
      //this is also fun :)
      //for(let i=0; i<hiArray.length;i++){
      //    p.push();
      //    p.translate(hiArray[i].x,hiArray[i].y);
      //    p.strokeWeight(5);
      //   //p.circle(hiArray[i].x,hiArray[i].y,newfontSize);
      //    //p.line(hiArray[i].x,hiArray[i].y,newfontSize);
      //    p.line(0,0,20,20);
      //    p.pop();
      //}
      p.beginShape();
      for(let i=0; i<hiArray.length;i++){
          p.vertex(hiArray[i].x,hiArray[i].y);
      }
      p.endShape();
      if(adelante){
       r++;
      } else {
        r--
      }
      if (r===450){
          adelante= false;
      } else if (r===0){
          adelante=true;
      }
    }
    p.windowResized = () => {
      X = Math.max(minSizeX,p.windowWidth/5+p.windowWidth/10);
      Y = Math.max(minSizeY,p.windowHeight/4+p.windowWidth/20);
        p.resizeCanvas(X,Y);
        console.log(p.width,p.height);
    }

}
