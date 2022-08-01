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
function pubSalesPage(){
    // process sales for each store location listed in locations[]
    for (let i = 0; i < stores.length; i++){
        calcSales(i);
        //printSales(i);
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



// function declaration to print column header


// function declaration to print column footer



// function to print sales data table

    // function call print column header

    // call render method to populate store data in for loop

    // function call print column footer


// create store objects using the Store() constructor, and add objects to array stores[]
let seattle = new Store('Seattle',	23,	65,	6.3);
let tokyo = new Store('Tokyo',	3,	24,	1.2);
let dubai = new Store('Dubai',	11,	38,	3.7);
let paris = new Store('Paris',	20,	38,	2.3);
let lima = new Store('Lima',	2,	16,	4.6);
let stores = [seattle, tokyo, dubai, paris, lima];
//let stores = [seattle];



// call the main function to publish the sales page
pubSalesPage();

console.log(stores);
console.log(grandTotals);
//console.log(seattle);





// // print cookie sales data to the sales webpage
// function printSales(i){
//     // create the sales report for the current locations[i] and select the parent HTML object
//     let report = document.getElementById(locations[i].locName);
//     // print the sales report, sales[], for the currrent store location on sales.html
//     for (let j = 0; j < locations[i].sales.length; j++){
//         // create hourSales <li> for selected element id on sales.html
//         let hourSales = document.createElement('li');
//         // set hourSales <li> equals to the current index value of sales[] for the current location
//         hourSales.innerText = hrsOpen[j] + ': ' + locations[i].sales[j] + ' cookies';
//         // add the hourSales element to the unordered list for the current location on sales.html
//         report.appendChild(hourSales);
//     }
// }
