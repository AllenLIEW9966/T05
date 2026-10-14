d3.csv("data/Ex5_ARE_Spot_Prices.csv", d => ({
    year: +d.Year,
    price: +d["Average Price (notTas-Snowy)"]
})).then(data => {
    const margin = { top: 30, right: 65, bottom: 50, left: 65 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#chart-line")
        .append("svg")
        .attr("viewBox", `0 0 700 400`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, width]);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(12).tickFormat(d3.format("d")));

    const y = d3.scaleLinear()
        .domain([0, 160])
        .range([height, 0]);

    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(8));

    const line = d3.line()
        .x(d => x(d.year))
        .y(d => y(d.price))
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#F472B6")
        .attr("stroke-width", 2.5)
        .attr("d", line);

    const last = data[data.length - 1];
    svg.append("text")
        .attr("x", x(last.year) + 6)
        .attr("y", y(last.price) + 4)
        .style("font-size", "11px")
        .style("font-weight", "600")
        .style("fill", "#F472B6")
        .text("Average");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 40)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text("Year");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -48)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text("Price ($ per megawatt hour)");
});