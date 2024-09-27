import { select , csv, scaleBand, scaleLinear, axisBottom, axisLeft, image} from 'd3';

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
  { 'x' :0, 'y':0, 'z':10 },
  { 'x' :0, 'y':1, 'z':10 },
  { 'x' :0, 'y':2, 'z':10 },
  { 'x' :1, 'y':0, 'z':10 },
  { 'x' :1, 'y':1, 'z':10 },
  { 'x' :1, 'y':2, 'z':10 },
  { 'x' :2, 'y':0, 'z':10 },
  { 'x' :2, 'y':1, 'z':10 },
  { 'x' :2, 'y':2, 'z':10 },
];


