import { scaleBand, axisBottom, scaleLinear, axisLeft } from "d3";

export const drawRect = (w, h, x, y, color, svg) => {
  const rect = svg.append("rect");
  rect.attr("width", w);
  rect.attr("height", h);
  rect.attr("x", x);
  rect.attr("y", y);
  rect.attr("rx", 4);
  rect.attr("ry", 4);
  rect.attr("fill", color);
};

export const drawImage = (w, h, x, y, link, svg) => {
  const img = svg.append('image');
  img.attr('x',x);
  img.attr('y',y);
  img.attr('width',w);
  img.attr('height',h);
  img.attr('href', link);
}


export const drawBarchart = () => {

let x_axis = scaleBand(keys, [0, 100]);
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


let values = Object.values(data);
Object.keys(data).forEach( (ciudad,index) => {
  console.log(x_axis(ciudad));
  drawRect(10, values[index],55 + x_axis(ciudad), 100-values[index], '#CD4444FF', svg);  
  drawImage(10, 10, 55 + x_axis(ciudad), 90-values[index]);
});
}