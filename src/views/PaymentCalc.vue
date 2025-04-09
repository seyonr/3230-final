<!-- M = mothly Payment
P = loan Amount = Vehicle price - Down Payment - trade-in
r = monthly interest rate =  -->

<template>
    <div class="main">
        <h1>Payment calc page</h1>
        <div class="graph-holder">
            <div class="graph-p">
                <p>Over the years, vehicle prices have steadily increased due to advancements in technology, improved safety features, and rising production costs. Modern cars now come equipped with high-end infotainment systems, fuel-efficient engines, and driver-assist technologies, all of which contribute to higher overall prices. Additionally, global supply chain challenges and inflation have further impacted the cost of both new and used vehicles. As a result, buyers today may notice that prices are significantly higher compared to just a few years ago, making it more important than ever to consider long-term value and reliability when choosing a vehicle.</p>
            </div>
            <div class="graph"></div>
        </div>
    </div>

    <div class="calculator">
            <h1>Ready to buy?</h1>
            <form>
                <label for="cost">Vehicle Price:</label><br>
                <input type="text" id="cost" name="cost" placeholder="10000"><br>
                
                <label for="payment">Down Payment</label><br>
                <input type="text" id="payment" name="payment" placeholder=2000><br>

                <label for="rate">Interest Rate:</label><br>
                <input type="text" id="rate" name="rate" placeholder=2><br>
                               
                <label for="monthly_term">Montly Term:</label><br>
                <input type="text" id="monthly_term" name="monthly_term" placeholder=12><br>

                <label for="trade_in">Trade In:</label><br>
                <input type="text" id="trade_in" name="trade_in" placeholder=0><br><br>

                <!-- <button type="button" @click="calculateMonthlyPayment()">Submit</button> -->
                <button type="button" id="submit">Submit</button>
                
            </form>
            <div class="result">
                <h2>Monthly Payment:</h2>
                <p id="monthly_payment"></p>
            </div>
            
        </div>

</template>

<script setup>
import {onMounted} from 'vue';

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

    // let svg = d3.select('.graph')
    //                 .append('svg')
    //                     .attr('width', width)
    //                     .attr('height', height);

    let svg = d3.select('.graph')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .classed('responsive-svg', true);

    
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


    $(document).ready(() => {
        $("#submit").click(function() {
            $("#monthly_payment").html( "$" + calculateMonthlyPayment())
        });
    })

    // $(document).ready(() => {
    //     $("#cost").val()
    // });

    function calculateMonthlyPayment(){
        var vehicle_price = parseFloat(document.getElementById("cost").value).toFixed(2);

        var rate = ((parseFloat(document.getElementById("rate").value)))/100/12;

        var down_payment = parseFloat(document.getElementById("payment").value).toFixed(2);

        var monthly_term = parseInt(document.getElementById("monthly_term").value)
        
        var trade_in = parseFloat(document.getElementById("trade_in").value)

        return parseFloat(((vehicle_price - down_payment - trade_in) * rate)/
                        (1 -( Math.pow((1+rate),-monthly_term)))).toFixed(2);

    }
</script>

<style scoped>

    .main{
        padding: 30px 2%;
        background-color: #EEE5E9;
        color: #7C7C7C;
    }

    h1{
        text-align: center;
        font-size: 30px;
        font-weight: 600;
    }

    .graph-holder{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .graph-p{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    .graph{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
    }

    .calculator{
        padding: 30px 2%;
        background-color: #7C7C7C;
        color: #EEE5E9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .calculator label{
        font-size: 20px;
    }

    .result{
        margin-top: 20px;
        display: flex;
    }

    input{
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        text-align: center;
        font-size: 15px;
    }

    .calculator button{
        background-color: #92DCE5;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-size: 15px;
    }

    .calculator button:hover{
        background-color: #a3ccd2;
    }

    .result h2{
        font-weight: 500;
    }

    #monthly_payment{
        padding-left: 10px;
    }

    /* Adaptive styling */
    @media screen and (max-width: 1100px){
        .graph-holder{
            grid-template-columns: 1fr;
        }
    }

    @media screen and (max-width: 780px){
        .graph svg {
            width: 100% !important;
            height: 100px !important;
        }
    }

    @media screen and (max-width: 780px){
        h1{
            font-size: 20px;
        }

        .calculator label{
            font-size: 15px;
        }

        input{
            font-size: 12px;
        }
    }

</style>