



const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june','jul','sept','oct','Nov','Dec'],
        datasets: [{
            label: 'Loyal Customers',
            
           
            data: [200, 100, 300, 400, 300, 100,200,50,100,200,100],
            borderWidth: 2
        },{
            label: 'New Customers',
            data: [250, 150, 200, 300, 200, 150,250,100,150,250,200],
            borderWidth: 2
        },{
            label: 'Unique Customers',
            data: [100, 50, 150, 200, 150, 50,100,50,50,100,50],
            borderWidth: 2 
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

const ct = document.getElementById('Chart');

new Chart(ct, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tues ', 'Wed', 'Thur', 'Fri', 'Sat','sun'],
        datasets: [{
            label: 'Online Sales',
            data: [120, 200, 250, 200, 180, 250,350,],
        
            borderWidth: 1,
            backgroundColor:["blue","blue",]
        },{
            label: 'Offline Sales',
            data: [150, 180, 300, 150, 150, 250,190,],
            backgroundColor:["green"]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

const bay = document.getElementById('bay');

new Chart(bay, {
    type: 'line',
    data: {
        labels: ['mon', 'Tues ', 'Wed', 'Thurs', 'Fri', 'Sat','sun'],
        datasets: [{
            label: 'Last Month',
            data: [150, 200, 250, 150, 10,50,200],
            
            borderWidth: 2,
           
        },{
            label: 'This Month',
        data: [100, 150, 200, 250, 150,100,250 ],
    }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

const bea = document.getElementById('bea');

new Chart(bea, {
    type: 'bar',
    data: {
        labels: ['jan','feb','mar','apr','may','june','july' ],
        datasets: [{
            label: 'Last Month',
            data: [150, 200, 280, 150, 120, 150,250,],
            borderWidth: 1,
            backgroundColor:["green"]

        },{
           
             data: [200, 220, 250, 200, 150, 200,300,],
            backgroundColor:["yellow"]

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
const width = 290;
const height = 250;
const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    const projection = d3.geoMercator()
    .center([0, 20]) // Center the map
    .scale(50) // Zoom level
    .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function(data) {
        svg.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "steelblue")
            .attr("stroke", "white");
    });

const nothing = document.getElementById('nothing');

new Chart(nothing, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tues ', 'Wed', 'Thurs', 'Fri', 'Sat','sun'],
        datasets: [{
            label: ' Volume',
            data: [150, 200, 250, 150, 100, 150,250,],
            borderWidth: 1,
            backgroundColor:["orange"]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
