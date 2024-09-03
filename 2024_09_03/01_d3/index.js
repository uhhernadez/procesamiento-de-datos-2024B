import { select } from 'd3';
console.log(select);

const svg = select('#app').append('svg');
svg.attr('width', 200);
svg.attr('height', 200);

const circle = svg.append('circle');

circle.attr('cx', 100);
circle.attr('cy', 100);
circle.attr('r', 20);
circle.attr('stroke','green');
circle.attr('fill', '#D0941D')
circle.attr('stroke-width', 10);
