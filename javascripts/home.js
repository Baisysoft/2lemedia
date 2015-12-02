var stars = [
    {label: "Home", link: 'index.html'},
    {label: "About us", link: 'pages/about-us.html'},
    {label: "Programmes", link: 'pages/programmes.html'},
    {label: "Why 2LE?", link: 'pages/why-2le.html'},
    {label: "Contact us", link: 'pages/contact.html'}
];
var D2R = Math.PI / 180;
var startArc = 230;
var endArc = 130;
var radius = 300;
var starWidth = 50;

for (i = 0; i < stars.length; i++) {
    var spacing = ((startArc - endArc) / (stars.length - 1));
    var star = stars[i];
    star.radians = (startArc - i * spacing) * D2R;
    star.x = radius * Math.sin(star.radians) - (starWidth / 2);
    star.y = -radius * Math.cos(star.radians) - (starWidth / 2);
}

var tooltip = d3.select("#container .tooltip");

var starSelection = d3.select("#container svg .stars")
    .selectAll('.star').data(stars);

starSelection.enter()
    .append("image")
    .classed("star", true)
    .attr("xlink:href", "images/star.png")
    .attr("x", function (d) { return d.x; })
    .attr("y", function (d) { return d.y; })
    .attr("height", 60)
    .attr("width", 60)
    .on("click", function (d) { window.location.assign(d.link); })
    .on("mouseover", function (d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", 1.0);
        tooltip.text(d.label);
        tooltip
            .style("left", (430 + d.x) + "px")
            .style("top", (d.y - 270) + "px");
    })
    .on("mouseout", function (d) {
        tooltip.transition()
            .delay(500)
            .duration(500)
            .style("opacity", 0);
    });
