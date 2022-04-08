var width = 500;
var height = 500;

//svg 생성
var svg = d3.select('#d3_style')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

//그룹 요소 생성
var g = svg.append('g')
    .attr('transform', function (d, i) {
        return 'translate(0,0)';
    });

//도형 생성
var ellipse = g.append('ellipse')
    .attr('cx', 250)
    .attr('cy', 50)
    .attr('rx', 150)
    .attr('ry', 50)

    //요소의 채우기 색상
    .attr('fill', 'green');

//그룹에 텍스트 요소 생성 및 추가
g.append('text')
    .attr('x', 150)
    .attr('y', 50)

    //stroke : 획 색상
    .attr('stroke', 'black')

    //font-family : 글꼴
    .attr('font-family', 'sans-serif')

    //글꼴 크기
    .attr('font-size', '24px')

    //투명도 : 0 불투명 -> 1 투명
    .attr('opacity', '0.6')
    .text('this is an Figure');