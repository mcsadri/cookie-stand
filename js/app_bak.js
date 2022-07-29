'use strict';

let seattle = {
    locName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgQty: 6.3,
    sales: [],
    getSales: function(){
        return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let tokyo = {
    locName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgQty: 1.2,
    sales: [],
    getSales: function(){
        return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let dubai = {
    locName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgQty: 3.7,
    sales: [],
    getSales: function(){
        return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let paris = {
    locName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgQty: 2.3,
    sales: [],
    getSales: function(){
        return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let lima = {
    locName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgQty: 4.6,
    sales: [],
    getSales: function(){
        return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let locations = [seattle, tokyo, dubai, paris, lima]; // array of store location objects
let hrsOpen = ['6am','7am','8am','9am','10m','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total']; // array of store's open hours

// process sales for each store location listed in locations[]
for (let i = 0; i < locations.length; i++){

    let salesTotal = 0; // holds iterating sum of the day's hourly sales

    // calculate hourly sales data and insert data into sales[] array
    // hrsOpen.length - 1 to account for the added hrsOpen[] element to hold Total
    for (let j = 0; j < hrsOpen.length - 1; j++){
        // repeat the getSales() method from the store location oject to calculate sales data for each hour the store is open
        locations[i].sales.push(locations[i].getSales());
        // add hourly sales to the day's total sales
        salesTotal += locations[i].sales[j];
        // if end of day add the days's sales total to the end of the sales data array
        // hrsOpen.length - 2 to account for the added hrsOpen[] element to hold Total
        if (j === hrsOpen.length - 2){
            // add the total sales to the end of sales[]
            locations[i].sales.push(salesTotal);
        }
    }

    // create the sales report for the current locations[i] and select the parent HTML object
    let report = document.getElementById(locations[i].locName);

    // print the sales report, sales[], for the currrent store location on sales.html
    for (let j = 0; j < locations[i].sales.length; j++){
        // create hourSales <li> for selected element id on sales.html
        let hourSales = document.createElement('li');
        // set hourSales <li> equals to the current index value of sales[] for the current location
        hourSales.innerText = hrsOpen[j] + ': ' + locations[i].sales[j] + ' cookies';
        // add the hourSales element to the unordered list for the current location on sales.html
        report.appendChild(hourSales);
    }
}
