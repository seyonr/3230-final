<template>
    <div class="main">
        <h1>Payment calc page</h1>
        <div class="graph"></div>
        <div class="calculator"></div>
    </div>
</template>

<script setup>
import { onMounted} from 'vue';

    onMounted(() => {
        const graphData = [
        {"year": 2012, "price": 25000},
        {"year": 2013, "price": 30000},
        {"year": 2014, "price": 35000},
        {"year": 2015, "price": 40000},
        {"year": 2016, "price": 45000},
        {"year": 2017, "price": 50000},
        {"year": 2018, "price": 55000},
        {"year": 2019, "price": 60000},
        {"year": 2020, "price": 65000},
        {"year": 2021, "price": 70000},
        {"year": 2022, "price": 75000},
    ];

    const margin = 50;
    const width = 800;
    const height = 500;
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;

    const colourScale = d3.scaleLinear()
                            .domain([25000, 75000])
                            .range(['#2B303A', '#92DCE5']);
    
    const xScale = d3.scaleBand() // discrete, bucket
                        .domain(graphData.map((data) => data.year))
                        .range([0, chartWidth])
                        .padding(0.3);
    
    const yScale = d3.scaleLinear()
                        .domain([0, 100000])
                        .range([chartHeight, 0]);

    let svg = d3.select('.graph')
                    .append('svg')
                        .attr('width', width)
                        .attr('height', height);
    
    // title
    svg.append('text')
            .attr('x', width / 2)
            .attr('y', margin)
            .attr('text-anchor', 'middle')
            .text('Prices increased over time');

    //X-Axis

    svg.append('text')
            .attr('x', width/2)
            .attr('y', margin*10)
            .attr("text-anchor", "middle")
            .text("Year");

    //Y-axis
    svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('x', -height/2)
            .attr('y', margin/4)
            .attr('text-anchor', 'middle')
            .text('Price ($)');
    // create a group (g) for the bars
    let g = svg.append('g')
                    .attr('transform', `translate(${margin}, ${margin})`);

    // y-axis
    g.append('g')
        .call(d3.axisLeft(yScale));
    
    // x-axis
    g.append('g')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(xScale));
    
    let rectangles = g.selectAll('rect')
        .data(graphData)
        .enter()
            .append('rect')
                .attr('x', (data) => xScale(data.year))
                .attr('y', (data) => chartHeight)
                .attr('width', xScale.bandwidth())
                .attr('height', (data) => 0)
                .attr('fill', (data) => colourScale(data.price))
                .on('mouseenter', function(source, index) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr('opacity', 0.5);
                })
                .on('mouseleave', function(source, index) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr('opacity', 1.0);
                });
    
    rectangles.transition()
        .ease(d3.easeElastic)
        .attr('height', (data) => chartHeight - yScale(data.price))
        .attr('y', (data) => yScale(data.price))
        .duration(1000)
        .delay((data, index) => index * 50);
    });

 
</script>

<style scoped>
    .graph{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 20px;
    }

    .main{
        background-color: #EEE5E9;
        height: 100vh;
    }
    
</style>