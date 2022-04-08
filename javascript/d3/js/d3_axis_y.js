var width = 400, height = 400;

var data = [10, 15, 20, 25, 30];

//svg 생성
var svg = d3.select('#d3_axis_y')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

//선형 scale 생성
var scale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([height / 2, 0]);

//y축 생성
var y_axis = d3.axisLeft().scale(scale);

svg.append('g')
    .attr('transform', 'translate(50,10)')
    .call(y_axis);