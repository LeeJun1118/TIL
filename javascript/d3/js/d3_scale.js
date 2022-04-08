/*d3 scales : 데이터 값이 너무 크거나 작을 때 크기 조정하는 함수들
            Continuous (Linear, Power, Log, Identity, Time, Radial)
            Sequential, Quantize, Quantile, Threshold, Band, Point, Ordinal*/
var data = [100, 400, 300, 900, 850, 1000]

var width = 500,
    barHeight = 20,
    margin = 1;


//도메인 값이 100,1000 인 선형 스케일 변수
var scale = d3.scaleLinear() //입력 데이터(도메인)가 지정된 출력 범위에 매핑되는 연속 선형 스케일을 구성
    .domain([d3.min(data), d3.max(data)]) //입력 데이터의 최소값과 최대값
    .range([50, 500]); //입력 값을 매핑하려는 출력 범위

//svg 생성
var svg = d3.select('#d3_scale')
    .append('svg')
    .attr('width', width)
    .attr('height', barHeight * data.length);

//그룹 요소 생성
var g = svg.selectAll("g")
    .data(data)
    .enter().append('g')
    .attr('transform', function (d, i) {
        return 'translate(0,' + i * barHeight + ')';
    });

//도형 생성
g.append('rect')
    .attr('width', function (d) {
        return scale(d);
    })
    .attr('height', barHeight - margin)
    .attr('fill', 'orange');

g.append('text')
    .attr('x', function (d) {
        return scale(d);
    })
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .text(function (d) {
        return d;
    });