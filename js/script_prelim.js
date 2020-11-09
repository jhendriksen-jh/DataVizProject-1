// load in the Kobe dataset

// Promise.all([d3.json('./data/Kobedata.json')]).then( dataJson =>
//     {
//         console.log(dataJson)
//     })

// reading in as csv results in much more useful data structure
Promise.all([d3.csv("./data/Kobedata.csv")]).then( data =>
{
    this.activeYear = null;

    let that = this;
    
    function updateYearKobe (year) {
        if (year === null) {
            let heatMap = new HeatMap(data);

            heatMap.drawHeatMapRight();
            heatMap.drawHeatMapLeft();
        }
        else {
            that.activeYear = year;
            heatMap.updateChartKobe(year);
        }
    }
    
    let heatMap = new HeatMap(data, updateYearKobe);

    heatMap.drawHeatMapRight();
    heatMap.drawHeatMapLeft();
})