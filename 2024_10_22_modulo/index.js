import { select, arc, pie, scaleOrdinal } from 'd3';

let svg1 = select('#grafica1')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .append("g")
  .attr("transform", "translate(100,100)");

let svg2 = select('#grafica2')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .append("g")
  .attr("transform", "translate(100,100)");
 
const drawRect = (w, h, x, y, color, svg) => {
  const rect = svg.append("rect");
  rect.attr("width", w);
  rect.attr("height", h);
  rect.attr("x", x);
  rect.attr("y", y);
  rect.attr("rx", 4);
  rect.attr("ry", 4);
  rect.attr("fill", color);
};

const mujeres = {"Morena": 100, 
                "PAN": 56, 
                "PRI":36, 
                "PVEM": 19, 
                "PT": 16, 
                "MC":15, 
                "PRD": 7, 
                "SP":2};
const data = mujeres;                
const color = scaleOrdinal()
  .range(["#A72A2FFF", "#01308F", "#FF0000", "#50B948", "#FA1E28","#FF881A", "#FFCC00", "#606060FF"]);
// Compute the position of each group on the pie:
const pieObj = pie()
  .value(function(d) {return d[1]});
const data_ready = pieObj(Object.entries(data));

data_ready.forEach((data,index)=>{
  const arcObj = arc()
    .innerRadius(0)
    .outerRadius(90)
    .startAngle(data.startAngle)
    .endAngle(data.endAngle);

  svg1.append('path')
    .attr('d',arcObj)
    .attr("fill", color(index))
    .attr("stroke", "black")
    .attr("stroke-width", 1);
});


//drawRect(100, 200, -100, -200, "#F90000FF", svg1);
drawRect(100, 200, 0, 0, "#D8F900FF", svg2);
