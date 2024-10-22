import { select, scaleOrdinal, pie, arc } from 'd3';

let svg = select('#pie')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .append("g")
  .attr("transform", "translate(100,100)");

const data = {a: 9, b: 20, c:30, d:8, e:12};
const mujeres = {"Morena": 100, "PAN": 56, "PRI":36, "PVEM": 19, "PT": 16, "MC":15, "PRD": 7, "SP":2};
/*
MORENA	100	50	100	50	200	40
PAN	    56	50	56	50	112	22.4
PRI	36	52.9	32	47.1	68	13.6
PVEM	19	47.5	21	52.5	40	8
PT	16	48.5	17	51.5	33	6.6
MC	15	51.7	14	48.3	29	5.8
PRD	7	58.3	5	41.7	12	2.4
SP	2	33.3	4	66.7	6
*/

const color = scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

// Compute the position of each group on the pie:
const pieObj = pie()
  .value(function(d) {return d[1]});
const data_ready = pieObj(Object.entries(data));
//console.log(data_ready);

data_ready.forEach((data,index)=>{
  const arcObj = arc()
    .innerRadius(0)
    .outerRadius(90)
    .startAngle(data.startAngle)
    .endAngle(data.endAngle);

  svg.append('path')
    .attr('d',arcObj)
    .attr("fill", color(index))
    .attr("stroke", "black")
    .attr("stroke-width", 1);
});

/*
*/
