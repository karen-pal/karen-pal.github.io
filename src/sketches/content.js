
import groteskFont from './assets/grotesk.otf';
export default function sketch(p){
    let minSizeX;
    let minSizeY;
    let X;
    let Y;
    let r;
    let grotesk;
    let fontSize;
    let words;
    let yStart;
    let randomIndex;
    let Xpos;
    let Ypos;
    p.preload = () => {
        grotesk = p.loadFont(groteskFont);
    }
    p.setup = () => {
      Xpos=0;
      Ypos=0;
      minSizeX = 170.0;
      minSizeY= 571.0;
      X = Math.max(minSizeX,p.windowWidth/2);
      Y = Math.max(minSizeY,p.windowHeight/2);
      p.createCanvas(X,Y , p.WEBGL);
      fontSize = p.width/10;
      p.textFont(grotesk);
      p.textSize(fontSize);
      p.textAlign(p.CENTER,p.CENTER);
      words = ["DATA SCIENCE", "PROGRAMMING", "VJING", "LIVECODING", "PHILOSOPHY","FEMINISM","MACHINE LEARNING", "AR", "INTERACTIVITY"]
      p.background(255);
    }

    p.draw = () => {
      p.orbitControl();
      //for (let y = yStart; y < p.height; y += 128) { //use a for loop to draw the line of text multiple times down the vertical axis
      //      randomIndex = Math.floor(Math.random() * words.length);
      //      p.text(words[randomIndex], p.width / 2, y); //display text
      //}
      //      yStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1
      //randomIndex = Math.floor(Math.random() * words.length);
      //p.text(words[randomIndex], p.width/6 , Math.sin(p.frameCount)*.02); //display text
      
    }
    p.mouseClicked = () => {

      p.fill(0);
      p.stroke(255);
        Xpos=p.map(p.mouseX,0,p.windowWidth,0,p.width);
        Ypos=p.map(p.mouseX,0,p.windowHeight,0,p.height);
        randomIndex = Math.floor(Math.random() * words.length);
        p.text(words[randomIndex],Xpos,Ypos);
    }

}
