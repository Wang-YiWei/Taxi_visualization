var money_margin = { top: 20, right: 20, bottom: 70, left: 40 },
    money_width = 800 - money_margin.left - money_margin.right,
    money_height = 600 - money_margin.top - money_margin.bottom,
    money_radius = Math.min(money_width, money_height) / 2;

var money_svg = d3.select("body").append("svg")
    .attr("width", (money_width + money_margin.left + money_margin.right) * 2)
    .attr("height", (money_height + money_margin.top + money_margin.bottom))
    .append("g")
    .attr("class", "money_svg")
    .attr("transdorm", "translate(" + money_margin.left + "," + money_margin.top + ")");

money_svg.append("g")
    .append('text')
    .attr("transform", "translate(" + money_width + ",0)")
    .attr("dy", "1.20em")
    .attr("font-size", "1.5em")
    .style("text-anchor", "middle")
    .style("fill", "black")
    .text("計程車司機每日平均所得");

var x = d3.scaleBand().rangeRound([0, money_width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([money_height, 0]);

var money_arc = d3.arc()
    .outerRadius(money_radius - 30)
    .innerRadius(money_radius - 100);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.value; })

var money_color = d3.scaleLinear()
    .range(["#99FFFF", "blue"]);
d3.csv("./csvData/money_day_date.csv", function(d) {
    d.value = +d.value;
    return d;
}, function(error, data) {
    x.domain(data.map(function(d, i) { return d.percent; }));
    y.domain([0, d3.max(data, function(d, i) { return d.value; })])
    money_color.domain([0, d3.max(data, function(d, i) { return d.value; })]);
    console.log(data);
    var money_donut = money_svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g");
    console.log(pie(data));

    var money_donut_text = money_donut.append("text")
        .attr("transform", "translate(" + money_width + "," + money_height / 1.9 + ")")
        .attr("dy", "2.60em")
        .attr("font-size", "1.5em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("");
    var money_donut_text1 = money_donut.append("text")
        .attr("transform", "translate(" + money_width + "," + money_height / 1.9 + ")")
        .attr("dy", "3.80em")
        .attr("font-size", "1.5em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("");

    var money_donut_text2 = money_donut.append("text")
        .attr("transform", "translate(" + money_width + "," + money_height / 1.9 + ")")
        .attr("dy", ".00em")
        .attr("font-size", "6em")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("");
    var money_donut_cir = money_donut.append('circle')
        .attr("transform", "translate(" + money_width + "," + money_height / 1.9 + ")")
        .attr("cx", "0")
        .attr("cy", "0")
        .attr("r", money_radius - 105)
        .style("fill", "white");

    money_donut.append("path")
        .attr("transform", "translate(" + money_width + "," + money_height / 1.9 + ")")
        .attr("d", money_arc)
        .attr("opacity", 0.8)
        .attr("stroke", "white")
        .style("fill", function(d) { return money_color(d.value) })
        .on("mouseover", function(d) {
            console.log("111");
            var temp_money_arc = d3.arc()
                .outerRadius(money_radius - 20)
                .innerRadius(money_radius - 100);
            var select_value = d3.select(this).data()[0].value;
            var select_key = d3.select(this).data()[0].data.percent;
            console.log(d3.select(this).data()[0].data.percent);
            d3.select(this)
                .attr("d", temp_money_arc)
                .attr("opacity", 0.8);
            money_donut_text2.append("tspan")
                .html(count_money_function(select_value) + "%");
            money_donut_text.append("tspan")
                .html("的司機的每日營業額" + "<tspan><br>");
            money_donut_text1.append("tspan")
                .html("在" + select_key + "之間");


            money_donut_cir
                .attr("opacity", 0.05)
                .style("fill", function(d) {
                    return money_color(select_value);
                })
        })
        .on("mouseout", function(d) {
            d3.select(this)
                .attr("d", money_arc)
                .attr("opacity", 0.8);
            money_donut_cir
                .attr("opacity", 0)
                .style("fill", "white");
            money_donut_text
                .text("");
            money_donut_text1
                .text("")
            money_donut_text2
                .text("")
        })
    var money_donut_svg = money_svg.selectAll(".money_svg");
    money_svg.selectAll(".money_svg .bar rect").attr("fill", "black").transition().duration(750);

    function HTTPword(i, data) {
        var tip = '';
        tip = "有" + data + "的司機" + "<tspan><br>" + "空車率在" + i * 10 + "到" + (i + 1) * 10 + "之間";
        return tip;
    }

    function count_money_function(data) {
        return data;
    }
})