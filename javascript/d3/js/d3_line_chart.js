//데이터 배열 정의
var data = [5, 10, 12];
var width = 200, //svg 너비
    scaleFactor = 10, //배율 인수 :데이터 값이 너무 작기 때문에 화면에 표시되는 픽셀 값으로 크기를 조정해야한다.
    barHeight = 20; //수평 막대의 정적 높이

//svg 생성
var graph = d3.select('#d3_line_chart')
    .append('svg')
    .attr('width', width)
    .attr('height', barHeight * data.length);  // 높이는 막대 높이 * 데이터 값의 수


//그룹 요소 생성
var bar = graph.selectAll('g')
    .data(data)
    .enter().append('g') //각 막대를 해당 <g>요소 안에 배치
    .attr('transform', function (d, i) {
        //수평 막대 차트이기 때문에 각 그룹의 요소를 다른 요소 아래에 배치
        return 'translate(0,' + i * barHeight + ')';
    })


//도형 생성
bar.append('rect')
    .attr('width', function (d) {
        //너비 : 데이터 값 * 배율 인수
        return d * scaleFactor;
    })
    //높이 : 막대 높이 - 여백
    .attr('height', barHeight - 1);


//데이터 값을 bar에 텍스트로 표시
bar.append('text')
    .attr('x', function (d) {
        return (d * scaleFactor);
    })
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .text(function (d) {
        return d;
    })
    .attr('stroke', 'black');