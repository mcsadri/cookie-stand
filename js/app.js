'use strict';

let hrsOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm',
    '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total',]; // array of store's open hours + total
let grandTotals = Array(hrsOpen.length).fill(0); // array to hold calculated sales across all stores for hourly and daily grand totals


function Store (name, minCust, maxCust, avgQty){
    this.name = name; // location name
    this.minCust = minCust; // location's minimum customers per hour
    this.maxCust = maxCust; // location's maximum customers per hour
    this.avgQty = avgQty; // location's average # of cookies purchsed per customer
    this.sales = []; // array to hold location's hourly cookie sales data for a single day

    this.getSales = function(){ // method to ramdomly generate the location's hourly cookie sales
        return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    };
}


// Store.prototype.renderReport = function(){

// }


// main function that will call other functions to 1. generate cookies sales by location and 2. print data to the sales webpage
function runSalesReport(){
    // print the sales report header row
    printReportHeader();
    // calculate the sales data and print the sales report body
    for (let i = 0; i < stores.length; i++){
        // calculate cookies sales for each store location
        calcSales(i);

        //renderReport(i); // call render method to populate store data in for loop

    }
    // function call print column footer
    printReportFooter();
}

// function to print the sales report header row using hours of operation in hrsOpen[]
function printReportHeader(){
    // select the 'table-header' html id container element
    let tableHeader = document.getElementById('table-header');
    // create new table row for header
    let headerRow = document.createElement('tr'); // eslint-disable-line
    // create blank table header cell
    let blank = document.createElement('th');
    blank.innerText = null;
    tableHeader.appendChild(blank);
    // fill-in the header row with column names
    for (let j = 0; j < hrsOpen.length; j++){
        let colHeader = document.createElement('th');
        colHeader.innerText = hrsOpen[j];
        tableHeader.appendChild(colHeader);
    }
}

// calculate hourly sales data and insert data into sales[] array
function calcSales(i){
    let salesTotal = 0; // holds iterating sum of the day's hourly sales
    // hrsOpen.length - 1 to account for the added hrsOpen[] element to hold Total
    for (let j = 0; j < hrsOpen.length - 1; j++){
        // repeat the getSales() method from the store location oject to calculate sales data for each hour the store is open
        stores[i].sales.push(stores[i].getSales());
        // add store's hourly sales to the store's daily sales total
        salesTotal += stores[i].sales[j];
        // add the store's hourly sales to the hourly grand total
        grandTotals[j] += stores[i].sales[j];
        // if end of day add the days's sales total to the end of the sales data array
        // hrsOpen.length - 2 to account for the added hrsOpen[] element to hold Total
        if (j === hrsOpen.length - 2){
            // add the total sales to the end of sales[]
            stores[i].sales.push(salesTotal);
            // calculate the daily grand total sales by adding each of the store's daily totals
            grandTotals[j+1] += salesTotal;
        }
    }
}

// function to print the sales report's footer row
function printReportFooter(){
    // select the 'table-footer' html id container element
    let tableFooter = document.getElementById('table-footer');
    // create new table row for sales totals footer
    let footerRow = document.createElement('tr'); // eslint-disable-line
    // create Totals table footer(<th>) cell
    let totals = document.createElement('th');
    totals.innerText = 'Totals';
    tableFooter.appendChild(totals);
    // fill-in the totals footer row with hourly and daily sales totals from grandTotals()
    for (let j = 0; j < grandTotals.length; j++){
        let colTotal = document.createElement('th');
        colTotal.innerText = grandTotals[j];
        tableFooter.appendChild(colTotal);
    }
}

// create store objects using the Store() constructor, and add objects to array stores[]
let seattle = new Store('Seattle',	23,	65,	6.3);
let tokyo = new Store('Tokyo',	3,	24,	1.2);
let dubai = new Store('Dubai',	11,	38,	3.7);
let paris = new Store('Paris',	20,	38,	2.3);
let lima = new Store('Lima',	2,	16,	4.6);
let stores = [seattle, tokyo, dubai, paris, lima];

// call the main function to publish the sales page
runSalesReport();

console.log(stores);
console.log(grandTotals);
