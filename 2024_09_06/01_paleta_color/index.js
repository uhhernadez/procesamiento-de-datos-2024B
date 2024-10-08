import { select } from 'd3';
console.log(select);

const svg = select('#app').append('svg');
svg.attr('width', window.innerWidth);
svg.attr('height', window.innerHeight);


const drawRect = (w, h, x, y, color, svg) =>  {
  const rect = svg.append('rect');
  rect.attr('width', w);
  rect.attr('height', h);
  rect.attr('x', x);
  rect.attr('y', y);
  rect.attr('fill', color); 
};

drawRect(50, 20, 10, 50, '#E79F00', svg);
drawRect(50, 20, 80, 50, '#57B4E9', svg);
drawRect(50, 20, 150, 50, '#009E73', svg);
drawRect(50, 20, 220, 50, '#F0E411', svg);
drawRect(50, 20, 290, 50, '#0072B2', svg);
drawRect(50, 20, 360, 50, '#D55E00', svg);
drawRect(50, 20, 430, 50, '#CB79A7', svg);

const text = svg.append('text');
text.attr('x', 5);
text.attr('y', 15);
text.attr('fill', 'red');
text.text('Okabe Ito');


//
//<text x="5" y="15" fill="red">I love SVG!</text>