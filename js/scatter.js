d3.csv("data/Ex5_TV_energy.csv", d => ({
    star: +d.star2,
    energy: +d.energy_consumpt
})).then(data => {
    const margin = { top: 30, right: 30, bottom: 50, left: 65 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#chart-scatter")
        .append("svg")
        .attr("viewBox", `0 0 700 400`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
        .domain([1.5, d3.max(data, d => d.star) + 0.5])
        .range([0, width]);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(14));

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.energy) + 100])
        .range([height, 0]);

    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(10));

    svg.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => x(d.star))
        .attr("cy", d => y(d.energy))
        .attr("r", 4.5)
        .attr("fill", "#5B92E5")
        .attr("opacity", 0.65);

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 40)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text("Star Rating (Energy Efficiency)");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -48)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text("Energy Consumption (kWh)");
});