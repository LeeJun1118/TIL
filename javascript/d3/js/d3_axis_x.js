var width = 400,
    height = 100;

var data = [10, 15, 20, 25, 30];

//
var svg = d3.select('#d3_axis_x')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var scale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([0, width - 100]);

//x축 설정 : axisBottom
var x_axis = d3.axisBottom()
    .scale(scale);

svg.append('g')
    .call(x_axis);