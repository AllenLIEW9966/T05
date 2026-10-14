d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv", d => ({
    tech: d.Screen_Tech,
    energy: +d["Mean(Labelled energy consumption (kWh/year))"]
})).then(data => {
    const margin = { top: 30, right: 30, bottom: 50, left: 65 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#chart-bar")
        .append("svg")
        .attr("viewBox", `0 0 700 400`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .domain(data.map(d => d.tech))
        .range([0, width])
        .padding(0.35);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    const y = d3.scaleLinear()
        .domain([0, 400])
        .range([height, 0]);

    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(8));

    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.tech))
        .attr("y", d => y(d.energy))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.energy))
        .attr("fill", "#66B2A2")
        .attr("rx", 3);

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 40)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text("Screen Technology");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -48)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#374151")
        .text("Mean Energy Consumption (kWh/year)");
});