d3.csv("data/Ex5_TV_energy_Allsizes_byScreenType.csv", d => ({
    tech: d.Screen_Tech,
    energy: +d["Mean(Labelled energy consumption (kWh/year))"]
})).then(data => {
    const width = 700;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 25;

    const svg = d3.select("#chart-donut")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
        .domain(["LCD", "LED", "OLED"])
        .range(["#1E70BA", "#F57200", "#2CA02C"]);

    const pie = d3.pie()
        .value(d => d.energy)
        .sort(null)
        .padAngle(0.025);

    const arc = d3.arc()
        .innerRadius(radius * 0.45)
        .outerRadius(radius * 0.85);

    const labelArc = d3.arc()
        .innerRadius(radius * 0.65)
        .outerRadius(radius * 0.65);

    const arcs = svg.selectAll("g")
        .data(pie(data))
        .join("g");

    arcs.append("path")
        .attr("d", arc)
        .attr("fill", d => color(d.data.tech));

    arcs.append("text")
        .attr("transform", d => `translate(${labelArc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("fill", "#FFFFFF")
        .style("font-size", "12px")
        .style("font-weight", "700")
        .text(d => d.data.tech);
});