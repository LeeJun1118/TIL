var data = [2, 4, 8, 10];

var width = 300, height = 200,

    //svg 안에 pie chart 가 들어가도록 반지름 크기 조정
    radius = Math.min(width, height) / 2,
    svg = d3.select('#d3_pie_chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height),
    //모든 파이 요소 그룹화
    g = svg.append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

//색상 순서 설정
var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

//파이 생성
var pie = d3.pie();

//호 생성
var arc = d3.arc()
    //내부 반지름 : 커질수록 도넛 모양이된다.
    .innerRadius(0)
    .outerRadius(radius);

//각 그룹에 대한 요소 생성
var arcs = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc');

//생성한 호들에 path 요소 추가 후 색상 지정
arcs.append('path')
    .attr('fill', function (d, i) {
        return color(i);
    })
    .attr('d', arc);