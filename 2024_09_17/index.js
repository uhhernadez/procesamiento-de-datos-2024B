import { select , csv, scaleBand, scaleLinear, axisBottom} from 'd3';

const svg = select('#app')
            .append('svg')
            .attr('width', window.innerWidth)
            .attr('height', window.innerHeight);

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
svg.append('g')
  .attr('transform', "translate("+ 50 +","+100+")")
  .call(axisBottom(x_axis))
.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  let y_axis = scaleLinear([0, 100]);

const drawRect = (w, h, x, y, color, svg) =>  {
  const rect = svg.append('rect');
  rect.attr('width', w);
  rect.attr('height', h);
  rect.attr('x', x);
  rect.attr('y', y);
  rect.attr('fill', color); 
};

let values = Object.values(data);
Object.keys(data).forEach( (ciudad,index) => {
  console.log(x_axis(ciudad));
  drawRect(10, values[index],55 + x_axis(ciudad), 100-values[index], '#CD4444FF', svg);  
});
