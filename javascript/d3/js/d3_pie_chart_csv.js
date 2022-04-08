var width = 500, height = 400,
    svg = d3.select('#d3_pie_chart_csv')
        .append('svg')
        .attr('width', width)
        .attr('height', height),
    radius = Math.min(width, height) / 2,
    g = svg.append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + (height / 2 + 10)  + ')');

var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

var pie = d3.pie().value(function (d) {
    return d.percent;
})

var path = d3.arc()
    .innerRadius(0)
    .outerRadius(radius - 10);

var label = d3.arc()
    .innerRadius(radius - 80)
    .outerRadius(radius);

d3.csv("browseruse.csv", function (error, data) {
    if (error) {
        throw error;
    }

    var arc = g.selectAll('.arc')
        .data(pie(data))
        .enter().append('g')
        .attr('class', 'arc');

    arc.append('path')
        .attr('d', path).attr('fill', function (d) {
        return color(d.data.browser);
    });

    console.log(arc);

    arc.append('text')
        .attr('transform', function (d) {
            return 'translate(' + label.centroid(d) + ')';
        })
        .text(function (d) {
            return d.data.browser;
        });
});
svg.append('g')
    .attr('transform', 'translate(' + (width / 2 - 120) + ',' + 15 + ')')
    .append('text')
    .text('Browser use statistics - Jan 2017')
    .attr('class', 'title');
