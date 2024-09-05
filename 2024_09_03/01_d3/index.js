import { select } from 'd3';
console.log(select);

const svg = select('#app').append('svg');
svg.attr('width', window.innerWidth);
svg.attr('height', window.innerHeight);

const circle = svg.append('circle');
circle.attr('cx', 100);
circle.attr('cy', 100);
circle.attr('r', 20);
circle.attr('stroke','green');
circle.attr('fill', '#D0941D')
circle.attr('stroke-width', 10);

//<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
const rect = svg.append('rect');
rect.attr('width', 50);
rect.attr('height', 20);
rect.attr('x', 10);
rect.attr('y', 10);

const c = svg.append('circle');
c.attr('cx', 150);
c.attr('cy', 150);
c.attr('r', 20);

svg.on('mousemove', (event) => {
  console.log("El mouse está en el canvas");
  circle.attr('cx',event.x);
  circle.attr('cy',event.y);
});


svg.on('mousedown', (event) => {
  console.log("El mouse se presionó en el canvas");
});

let selection =  0;
c.on('mousedown',() => {
  console.log("Se presionó el círculo pequeño 🤓");
  if (selection === 0) {
    c.attr('fill', '#73E715');
    selection = 1;
  } else {
    c.attr('fill', '#FA0303');
    selection = 0;
  }
});

