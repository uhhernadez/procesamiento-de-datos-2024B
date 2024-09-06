import { select } from 'd3';
console.log(select);

const svg = select('#app').append('svg');
svg.attr('width', window.innerWidth);
svg.attr('height', window.innerHeight);

const rect = svg.append('rect');
rect.attr('width', 50);
rect.attr('height', 20);
rect.attr('x', 10);
rect.attr('y', 10);
rect.attr('fill', '#D0941D'); 
