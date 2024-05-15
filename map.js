

    let gdp = {};
let population = {};

fetch('')
    .then(response => response.json())
    .then(data => {
        gdp = data;
        return fetch('');
    })
    .then(response => response.json())
    .then(data => {
        population = data;
        drawMap(gdp, population);
    })
    .catch(error => console.error('Error fetching data:', error));

function mapDraw(gdp, population){
  //  const width:800;
    //const height:600;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

    const projection = d3.geo.mercator()
    //.scale(1000)
    const path = d3.geoPath().projection(projection);

    const tooltip = d3.select("#tooltip");
    d3.json("").then(geojson => {
        svg.selectAll(".state")
            .data(geojson.features)
            .enter().append("")
            .attr("class", "state")
            .attr("d", path)
            .on("mouseover", function(event, d) {
                const state = d.properties.name;
                const gdp = gdpData[state] || 'Data not available';
                d3.select(this).style("fill", "orange");
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(state + "<br>GDP: " + gdp)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                d3.select(this).style("fill", "");
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            })
            
    });
}