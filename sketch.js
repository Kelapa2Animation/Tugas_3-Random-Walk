let randomNormals = [];
let randomPerlins = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Inisialisasi nilai untuk distribusi normal
  let vn = 0;
  for (let i = 0; i < 200; i++) {
    vn += randomGaussian(0, 1);
    randomNormals[i] = vn;
  }
  
  // Inisialisasi nilai untuk Perlin noise
  let t = 0;
  for (let i = 0; i < 2000; i++) {
    randomPerlins[i] = noise(t);
    t += 0.01;
  }
}

function draw() {
  background(110);
  
  // Menggambar distribusi normal
  let w = windowWidth / randomNormals.length;
  strokeWeight(5);
  for (let i = 0; i < randomNormals.length - 1; i++) {
    let y1 = map(randomNormals[i], min(randomNormals), max(randomNormals), 0, windowHeight / 2);
    let y2 = map(randomNormals[i + 1], min(randomNormals), max(randomNormals), 0, windowHeight / 2);
    line(i * w, windowHeight / 2 - y1, (i + 1) * w, windowHeight / 2 - y2);
  }
  
  // Garis pemisah
  stroke(0);
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);
  
  // Menggambar Perlin noise
  w = windowWidth / randomPerlins.length;
  for (let i = 0; i < randomPerlins.length - 1; i++) {
    let y1 = map(randomPerlins[i], 0, 1, windowHeight / 2, windowHeight);
    let y2 = map(randomPerlins[i + 1], 0, 1, windowHeight / 2, windowHeight);
    line(i * w, y1, (i + 1) * w, y2);
  }
}
