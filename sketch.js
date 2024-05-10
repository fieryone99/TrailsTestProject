
let maxLife = 100;
let angle = 0;
let maxLen = 200;
let scaler = 2;
let listOfParticles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100, 100);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  for (let i = 0; i < 2; i++) {

  r = maxLen * sin(scaler * angle);

  let x = r * cos(angle);
  let y = r * sin(angle);

  let offset = p5.Vector.random2D().setMag(random(1, 10));
  x += offset.x;
  y += offset.y;

  let p = new Particle(x, y);
  listOfParticles.push(p);

  for (let i = 0; i < listOfParticles.length; i++) {
      let particle = listOfParticles[i];
      particle.show();
      particle.update();
      if (particle.lifespan < 0) {
        listOfParticles.splice(i, 1); 
      }

    }

    angle += 0.01;
  }
}

