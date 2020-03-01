let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,640);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 

  // Add a color to our ellipse
  fill(200, 100, 100);

  //retrieve data from Cities collection
  let x = loadJSON('./sample.json');
  console.log(x)
}

function draw(){
  clear();
  // Every Frame, get the canvas position 
  // for the latitude and longitude of Nigeria
  const nigeria = myMap.latLngToPixel(11.396396, 5.076543); 
  // Using that position, draw an ellipse
  ellipse(nigeria.x, nigeria.y, 20, 20);
}
