import { select } from "d3";
import { drawRect } from "drawUtils";

const svg = select("#draw")
            .append("svg")
            .attr("width", 200)
            .attr("height", 200);

drawRect(100,50, 100,10,"#E32222FF",svg);