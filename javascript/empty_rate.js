var rate_margin = { top: 20, right: 20, bottom: 70, left: 40 },
    rate_width = 800 - rate_margin.left - rate_margin.right,
    rate_height = 600 - rate_margin.top - rate_margin.bottom,
    rate_radius = Math.min(rate_width, rate_height) / 2;

var rate_svg = d3.select("body").append("svg")
    .attr("width", (rate_width + rate_margin.left + rate_margin.right) * 2)
    .attr("height", (rate_height + rate_margin.top + rate_margin.bottom))
    .append("g")
    .attr("class", "rate_svg")
    .attr("transdorm", "translate(" + rate_margin.left + "," + rate_margin.top + ")");

rate_svg.append("g")
    .append('text')
    .attr("transform", "translate(" + rate_width + ",0)")
    .attr("dy", "1.20em")
    .attr("font-size", "1.5em")
    .style("text-anchor", "middle")
    .style("fill", "black")
    .text("計程車司機空車率");

var x = d3.scaleBand().rangeRound([0, rate_width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([rate_height, 0]);

var rate_arc = d3.arc()
    .outerRadius(rate_radius - 30)
    .innerRadius(rate_radius - 100);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.value; })

var rate_color = d3.scaleLinear()
    .range(["yellow", "red"]);
d3.csv("./csvData/0703empty.csv", function(error, data) {
    var count_rate = new Array(10);
    var object_rate = [];
    var object_rate_donut = [];
    console.log(data);
    count_rate[0] = 0
    count_rate[1] = 0
    count_rate[2] = 0
    count_rate[3] = 0
    count_rate[4] = 0
    count_rate[5] = 0
    count_rate[6] = 0
    count_rate[7] = 0
    count_rate[8] = 0
    count_rate[9] = 0
        //console.log(count_rate[6])
    for (i = 0; i < data.length; i++) {
        if (data[i].empty < 10) {
            count_rate[0] == count_rate[0] + 1;
        } else if (data[i].empty >= 10 && data[i].empty < 20) {
            count_rate[1] == count_rate[1] + 1;
        } else if (data[i].empty >= 20 && data[i].empty < 30) {
            count_rate[2] = count_rate[2] + 1
        } else if (data[i].empty >= 30 && data[i].empty < 40) {
            count_rate[3] = count_rate[3] + 1
        } else if (data[i].empty >= 40 && data[i].empty < 50) {
            count_rate[4] = count_rate[4] + 1
        } else if (data[i].empty >= 50 && data[i].empty < 60) {
            count_rate[5] = count_rate[5] + 1
        } else if (data[i].empty >= 60 && data[i].empty < 70) {
            count_rate[6] = count_rate[6] + 1
        } else if (data[i].empty >= 70 && data[i].empty < 80) {
            count_rate[7] = count_rate[7] + 1
        } else if (data[i].empty >= 80 && data[i].empty < 90) {
            count_rate[8] = count_rate[8] + 1
        } else if (data[i].empty >= 90 && data[i].empty < 100) {
            count_rate[9] = count_rate[9] + 1
        }
    }
    for (i = 0; i < count_rate.length; i++) {
        object_rate.push({
            key: i * 10,
            value: +Math.floor(count_rate[i])
        });
    }
    console.log(object_rate)
    for (i = 0; i < object_rate.length; i++) {
        object_rate_donut.push({
            key: i * 10,
            value: +(count_rate[i] / count_rate.length)
        });
    }
    console.log(object_rate)
        //console.log(object_rate.map(function (d) { return d.key }));
    x.domain(object_rate.map(function(d, i) { return d.key }));
    y.domain([0, d3.max(object_rate, function(d, i) { return d.value; })])
    rate_color.domain([0, d3.max(object_rate, function(d, i) { return d.value; })]);

    rate_svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(50," + rate_height + ")")
        .call(d3.axisBottom(x));

    rate_svg.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
        .attr("transform", "translate(50,0)")
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");
    //console.log(x.bandwidth());
    var rate_bar = rate_svg.selectAll(".bar")
        .data(object_rate)
        .enter().append('g');
    rate_bar.append("rect")
        .attr("opacity", 0.8)
        .attr("x", function(d) { return x(d.key) + 50; })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return rate_height - y(d.value) })
        .attr("fill", function(d) { return rate_color(d.value) })
        .on("mouseover", function(d) {
            d3.select(this)
                .attr("opacity", 1);
        })
        .on("mouseout", function(d) {
            d3.select(this)
                .attr("opacity", 0.8);
        });
    rate_bar.append("text")

    var rate_donut = rate_svg.selectAll(".arc")
        .data(pie(object_rate))
        .enter().append("g");
    var rate_donut_text = rate_donut.append("text")
        .attr("transform", "translate(" + rate_width * 3 / 2 + "," + rate_height / 2 + ")")
        .attr("dy", "2.60em")
        .attr("font-size", "1.5em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("");
    var rate_donut_text1 = rate_donut.append("text")
        .attr("transform", "translate(" + rate_width * 3 / 2 + "," + rate_height / 2 + ")")
        .attr("dy", "3.80em")
        .attr("font-size", "1.5em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("");
    var rate_donut_text2 = rate_donut.append("text")
        .attr("transform", "translate(" + rate_width * 3 / 2 + "," + rate_height / 2 + ")")
        .attr("dy", ".00em")
        .attr("font-size", "6em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("");

    var rate_donut_cir = rate_donut.append('circle')
        .attr("transform", "translate(" + rate_width * 3 / 2 + "," + rate_height / 2 + ")")
        .attr("cx", "0")
        .attr("cy", "0")
        .attr("r", rate_radius - 105)
        .style("fill", "white");

    rate_donut.append("path")
        .attr("transform", "translate(" + rate_width * 3 / 2 + "," + rate_height / 2 + ")")
        .attr("d", rate_arc)
        .attr("opacity", 0.8)
        .attr("stroke", "white")
        .style("fill", function(d) { return rate_color(d.value) })
        .on("mouseover", function(d) {
            //console.log("111");
            console.log(data.length)
            var temp_rate_arc = d3.arc()
                .outerRadius(rate_radius - 20)
                .innerRadius(rate_radius - 100);
            var select_value = d3.select(this).data()[0].value;
            var select_key = d3.select(this).data()[0].index;
            console.log(d3.select(this).data()[0]);
            d3.select(this)
                .attr("d", temp_rate_arc)
                .attr("opacity", 0.8);
            rate_donut_text.append("tspan")
                .html("的司機" + "<tspan><br>");
            rate_donut_text1.append("tspan")
                .html("空車率在" + select_key * 10 + "%到" + (select_key + 1) * 10 + "%之間");
            rate_donut_text2.append("tspan")
                .html(count_rate_function(select_value) + "%");
            rate_donut_cir
                .attr("opacity", 0.05)
                .style("fill", function(d) {
                    return rate_color(select_value);
                })
        })
        .on("mouseout", function(d) {
            d3.select(this)
                .attr("d", rate_arc)
                .attr("opacity", 0.8);
            rate_donut_cir
                .attr("opacity", 0)
                .style("fill", "white");
            rate_donut_text
                .text("");
            rate_donut_text1
                .text("")
            rate_donut_text2
                .text("")
        })
    var rate_donut_svg = rate_svg.selectAll(".rate_svg");
    rate_svg.selectAll(".rate_svg .bar rect").attr("fill", "black").transition().duration(750);

    function HTTPword(i, data) {
        var tip = '';
        tip = "有" + data + "的司機" + "<tspan><br>" + "空車率在" + i * 10 + "到" + (i + 1) * 10 + "之間";
        return tip;
    }

    function count_rate_function(data) {
        return data / count_rate.length;
    }
})