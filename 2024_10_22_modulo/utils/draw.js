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