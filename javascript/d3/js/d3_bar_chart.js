//svg 생성
var width = 600, height = 500,
    margin = 200,
    svg = d3.select('#d3_bar_chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

svg.append('text')
    .attr('transform', 'translate(100,0)')
    .attr('x', 50)
    .attr('y', 50)
    .attr('font-size', '24px')
    .text('XYZ.csv File');

//여백 추가를 위한 너비,높이
var width_margin = svg.attr('width') - margin,
    height_margin = svg.attr('height') - margin;

//x축 스케일 : scaleBand,반환 범위 지정, bar 사이 패딩 설정
var xScale = d3.scaleBand().range([0, width_margin]).padding(0.4),
    //y축 스케일 : scaleLinear,반환 범위 지정
    yScale = d3.scaleLinear().range([height_margin, 0]);

//그룹 요소 추가하여 축,bar 추가가
var g = svg.append('g')
    .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

d3.csv("XYZ.csv", function (error, data) {
    if (error) {
        throw error;
    }

    //x축 입력 범위 지정
    xScale.domain(data.map(function (d) {
        return d.year;
    }));

    //y축 입력 범위 지정
    yScale.domain([0, d3.max(data, function (d) {
        return d.value;
    })]);

    //x축 생성
    g.append('g')
        .attr('transform', 'translate(0,' + height_margin + ')')
        .call(d3.axisBottom(xScale))
        .append('text')

        //라벨
        .attr('x', width_margin - 100)
        .attr('y', height_margin - 250)
        .attr('text-anchor', 'end')
        .attr('stroke', 'black')
        .text('year');

    //y축 생성
    g.append('g')
        .call(d3.axisLeft(yScale).tickFormat(function (d) {
            return '$' + d;
        }).ticks(10))

        //라벨
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '-5.1em')
        .attr('text-anchor', 'end')
        .attr('stroke', 'black')
        .text('price');

    //bar 생성
    g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function (d) {
            return xScale(d.year);
        })
        .attr('y', function (d) {
            return yScale(d.value);
        })
        .attr('width', xScale.bandwidth())
        .attr('height', function (d) {
            return height_margin - yScale(d.value);
        });

    //bar에 색상 지정
    d3.selectAll('.bar').attr('fill', 'steelblue');
});