import { select , csv} from 'd3';

//const svg = select('#app').append('svg');
//svg.attr('width', window.innerWidth);
//svg.attr('height', window.innerHeight);

const svg = select('#app')
            .append('svg')
            .attr('width', window.innerWidth)
            .attr('height', window.innerHeight)
            .append('g')
            .attr('transform', "translate("+ window.innerWidth/2 +","+100+")");
            // translate
            // rotate
            // scale

let points = [
  {x: 10.7, y:7.7}, 
  {x:8.9, y:0}
];
points.forEach( (data) => {
  console.log(data);
});
console.log(points);
console.log(points[0]);

const data = await csv('data.csv');
console.log(data);
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5AwcWCl2impnSpM8EnQdLBrV9KsJQOn41ZQzt3V83Z4EabWfirlcSuOFjysNZHjJ8TAn7agS_Vudc/pub?gid=0&single=true&output=csv';

await csv(url, (data, index) => {
  console.log(data, index);
  const text = svg.append('text');
  text.attr('x', 0);
  text.attr('y', 10 + 30 * index);
  text.attr('fill', 'red');
  text.text(data.Nombres);
});


