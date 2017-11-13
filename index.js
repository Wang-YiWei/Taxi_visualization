//datas = [7099, 4893, 3911, 2866, 2956, 3647, 4809, 7669, 12054, 14633, 14604, 15126, 13364, 13372, 13298, 13247, 13311, 14749, 15742, 13128, 13264, 13036, 11048, 9095]



// get the data
d3.csv("csvData/span.csv", function(error, data) {
    if (error) throw error;

    var spanMargin = { top: 20, right: 20, bottom: 30, left: 40 },
        spanWidth = 0.9 * screen.availWidth - spanMargin.left - spanMargin.right,
        spanHeight = 0.6 * screen.availHeight - spanMargin.top - spanMargin.bottom;

    // set the ranges
    var scaleX = d3.scaleBand()
        .range([0, spanWidth])
        .padding(0.1);
    var scaleY = d3.scaleLinear()
        .range([spanHeight, 0]);

    // 
    var spanSVG = d3.select("body").append("svg")
        .attr("width", spanWidth + spanMargin.left + spanMargin.right)
        .attr("height", spanHeight + spanMargin.top + spanMargin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + spanMargin.left + "," + spanMargin.top + ")");

    var spanValueSum = 0;
    var spanValueAvg = 0;
    // format the data
    data.forEach(function(d) {
        d.value = +d.value;
        spanValueSum += d.value
    });
    spanValueAvg = spanValueSum / data.length;
    // Scale the range of the data in the domains
    scaleX.domain(data.map(function(d) { return d.span; }));
    scaleY.domain([0, d3.max(data, function(d) { return d.value; })]);

    // append the rectangles for the bar chart

    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    spanSVG.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d, i) {
            return scaleX(d.span);
        })
        .attr("width", scaleX.bandwidth())
        .attr("y", function(d) { return scaleY(d.value); })
        .attr("height", function(d) { return spanHeight - scaleY(d.value); })
        .attr("fill", (d) => {
            if (d.value > 14600) return "orange";
            else return "steelblue";
        })
        .on("mousemove", function(d) {
            d3.select(this).attr("opacity", 0.8);
            tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html((d.span) + "<br>" + "交易次數:" + (d.value));
        })
        .on("mouseout", function(d) {
            d3.select(this).attr("opacity", 1);
            tooltip.style("display", "none");
        });

    // add the x Axis
    spanSVG.append("g")
        .attr("transform", "translate(0," + spanHeight + ")")
        .call(d3.axisBottom(scaleX));

    // add the y Axis
    spanSVG.append("g")
        .call(d3.axisLeft(scaleY))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .attr("fill", "black")
        .text("三個月來總交易次數(次)");

});