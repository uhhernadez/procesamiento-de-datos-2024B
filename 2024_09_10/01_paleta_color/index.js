import { select } from 'd3';

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

let arreglo = [0, 1, 2, 3, 4, 5];
console.log(arreglo);
console.log(arreglo.length);
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
} 
arreglo.forEach((elemento, indice, array) => {
  console.log(elemento, indice);
});

let colors = ['#E79F00', '#57B4E9', '#009E73',
              '#F0E411', '#0072B2',
              '#D55E00', '#CB79A7'];

let width = 50;
let height = 20;              
let y = 50;
colors.forEach((elemento,indice) => {
  let x = 10 + indice * width + (indice + 1 ) * 20;
  drawRect(width, height, x , y, elemento, svg);
});

let heterogeneos = [1, 'Hola mundo', 90.4];
console.log(heterogeneos);
heterogeneos.push(898);
console.log(heterogeneos);
console.log(heterogeneos.find((element) => {return element === 1;}));

/*
drawRect(50, 20, 10, 50, '#E79F00', svg);
drawRect(50, 20, 80, 50, '#57B4E9', svg);
drawRect(50, 20, 150, 50, '#009E73', svg);
drawRect(50, 20, 220, 50, '#F0E411', svg);
drawRect(50, 20, 290, 50, '#0072B2', svg);
drawRect(50, 20, 360, 50, '#D55E00', svg);
drawRect(50, 20, 430, 50, '#CB79A7', svg);
*/

/*
const text = svg.append('text');
text.attr('x', 5);
text.attr('y', 15);
text.attr('fill', 'red');
text.text('Okabe Ito');
*/

//
//<text x="5" y="15" fill="red">I love SVG!</text>