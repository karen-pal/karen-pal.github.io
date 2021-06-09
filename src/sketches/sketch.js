import helixModel from './assets/simple_dna_2.obj';
export default function sketch(p){
    let helix;
    let counter;
    let bordo;
    let navy;
    let lightColor;
    p.preload = () => {
        helix = p.loadModel(helixModel);
    }

    p.setup = () => {
      p.createCanvas(600, 600, p.WEBGL);
      p.background(200);
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
      //p.scale(2);
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
      p.background(200);
    }
}
