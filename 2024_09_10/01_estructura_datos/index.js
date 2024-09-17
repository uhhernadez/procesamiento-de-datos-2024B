import { select } from 'd3';

const svg = select('#app').append('svg');
svg.attr('width', window.innerWidth);
svg.attr('height', window.innerHeight);

let points = [
  {x: 10.7, y:7.7}, 
  {x:8.9, y:0}
];
points.forEach( (data) => {
  console.log(data);
});
console.log(points);
console.log(points[0]);



