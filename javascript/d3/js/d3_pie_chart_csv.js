var width = 500, height = 400,
    //svg 생성
    svg = d3.select('#d3_pie_chart_csv')
        .append('svg')
        .attr('width', width)
        .attr('height', height),

    //반지름
    radius = Math.min(width, height) / 2,
    
    //그룹 요소 추가
    g = svg.append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + (height / 2 + 10) + ')');

//색 배열 추가
var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

//파이 생성 : 백분율 값을 표시하기 위해 d.percent를 반환하여 파이 값으로 설정
var pie = d3.pie().value(function (d) {
    return d.percent;
})

//내부반지름,외부반지름을 설정해 호의 크기 설정
var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius - 10);

//라벨이 들어갈 위치 설정
var label = d3.arc()
    .innerRadius(radius - 80)
    .outerRadius(radius);

//csv 파일 데이터 가져옴
d3.csv("browseruse.csv", function (error, data) {
    if (error) {
        throw error;
    }

    //각 데이터 값에 대한 그룹 요소 생성하여 각 그룹에 arc class 할당
    var arcs = g.selectAll('.arc')
        .data(pie(data))
        .enter().append('g')
        .attr('class', 'arc');

    //생성된 호를 추가하여 각각에 path 생성
    arcs.append('path')
        //path 태그의 d 속성에 아까 만들어둔 호 할당하여 해당 범위에 색을 채움
        .attr('d', arc).attr('fill', function (d) {
        return color(d.data.browser);
    });

    //라벨
    arcs.append('text')
        //라벨 호 에서 중심점 반환하여 각 호의 중간에 라벨이 위치하도록 함
        .attr('transform', function (d) {
            return 'translate(' + label.centroid(d) + ')';
        })
        .text(function (d) {
            return d.data.browser;
        });
});
//차트의 제목 추가
svg.append('g')
    .attr('transform', 'translate(' + (width / 2 - 120) + ',' + 15 + ')')
    .append('text')
    .text('Browser use statistics - Jan 2017')
    .attr('class', 'title');
