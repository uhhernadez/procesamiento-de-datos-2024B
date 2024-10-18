import { select, scaleOrdinal, pie, arc } from 'd3';

let svg = select('#pie')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .append("g")
  .attr("transform", "translate(100,100)");

const data = {a: 9, b: 20, c:30, d:8, e:12};

const color = scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

// Compute the position of each group on the pie:
const pieObj = pie()
  .value(function(d) {return d[1]});
const data_ready = pieObj(Object.entries(data));
console.log(data_ready);

const arcObj = arc()
  .innerRadius(0)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(Math.PI / 2);

svg.append('path')
  .attr('d',arcObj)
  .attr("fill", "pink")
  .attr("stroke", "gray")
  .attr("stroke-width", 1);

