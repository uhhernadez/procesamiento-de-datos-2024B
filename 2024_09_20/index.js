import { select , csv, scaleBand, scaleLinear, axisBottom, axisLeft, image} from 'd3';

const svg = select('#app')
            .append('svg')
            .attr('width', window.innerWidth)
            .attr('height', window.innerHeight)
            .append('g')
            .attr('transform', "translate(0,20)scale(3,3)");

const data = {
  "León" : 85,
  Irapuato: 52,
  Celaya: 27,
  Salamanca: 21,
  "Valle de Santiago": 18
};
// Datos
console.log(data);
// Obtenemos solamante las llaves
let keys = Object.keys(data);
console.log(keys);
let x_axis = scaleBand(keys, [0, 100]);
console.log(x_axis);
console.log(x_axis("León"));
console.log(x_axis("Irapuato"));
const g_x_axis = svg.append('g')
  .attr('transform', "translate("+ 50 +","+100+")")
  .call(axisBottom(x_axis));

g_x_axis.selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-40)")
  .style("text-anchor", "end");

let y_axis = scaleLinear([0, 100],[100, 0]);
const g_y_axis = svg.append('g')
  .attr('transform', 'translate(50, 0)')
  .call(axisLeft(y_axis));

const drawRect = (w, h, x, y, color, svg) =>  {
  const rect = svg.append('rect');
  rect.attr('width', w);
  rect.attr('height', h);
  rect.attr('x', x);
  rect.attr('y', y);
  rect.attr('fill', color); 
};

const drawImage = (w, h, x, y) => {
  const img = svg.append('image');
  img.attr('x',x);
  img.attr('y',y);
  img.attr('width',w);
  img.attr('height',h);
  img.attr('href', 'https://upload.wikimedia.org/wikipedia/commons/0/06/Skull_and_Crossbones.svg');
  //img.attr('href', 'skull.svg');
}

let values = Object.values(data);
Object.keys(data).forEach( (ciudad,index) => {
  console.log(x_axis(ciudad));
  drawRect(10, values[index],55 + x_axis(ciudad), 100-values[index], '#CD4444FF', svg);  
  drawImage(10, 10, 55 + x_axis(ciudad), 90-values[index]);
});
