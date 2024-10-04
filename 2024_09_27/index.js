import { select , scaleBand, axisBottom, axisLeft, scaleSequential, interpolateInferno, interpolateRainbow} from 'd3';

const svg = select('#app')
  .append('svg')
  .attr('width', window.innerWidth)
  .attr('height', window.innerHeight);

const labelsX = ['A', 'B', 'C']; 
const labelsY = ['A', 'B', 'C'];

const x_axis = scaleBand(labelsX, [0,100]);
const g_x_axis = svg.append('g')
  .attr('transform', "translate(50, 100)")
  .call(axisBottom(x_axis));

const y_axis = scaleBand(labelsY, [100, 0]);
const g_y_axis = svg.append('g')
  .attr('transform', 'translate(50, 0)')
  .call(axisLeft(y_axis));

const data = [
  { 'x' :0, 'y':0, 'z':0 },
  { 'x' :0, 'y':1, 'z':1 },
  { 'x' :0, 'y':2, 'z':2 },
  { 'x' :1, 'y':0, 'z':3 },
  { 'x' :1, 'y':1, 'z':4 },
  { 'x' :1, 'y':2, 'z':5 },
  { 'x' :2, 'y':0, 'z':6 },
  { 'x' :2, 'y':1, 'z':7 },
  { 'x' :2, 'y':2, 'z':8 },
];

const drawRect = (w, h, x, y, color, svg) => {
  const rect = svg.append("rect");
  rect.attr("width", w);
  rect.attr("height", h);
  rect.attr("x", x);
  rect.attr("y", y);
  rect.attr("rx", 4),
  rect.attr("ry", 4),
  rect.attr("fill", color);
};

const colorScale = scaleSequential()
                  .interpolator(interpolateRainbow)
                  .domain([0,10]);

data.forEach( (value) => {
  console.log(value.x, value.y, value.z);
  drawRect(x_axis.bandwidth(), 
          y_axis.bandwidth(), 
          50 + value.x * x_axis.bandwidth(), 
          100 - value.y * y_axis.bandwidth()- y_axis.bandwidth(), 
          colorScale(value.z), 
          svg);
});

