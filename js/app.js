'use strict';

// this is crap
// i have no idea what I'm doing
// but let's get a commit anyway, ya?

// global multi-dim array of store location information where elements = locaName, minCust, maxCust, avgQty
// let storeInfo = [
//     ['Seattle',	23,	65,	6.3],
//     ['Tokyo',	3,	24,	1.2],
//     ['Dubai',	11,	38,	3.7],
//     ['Paris',	20,	38,	2.3],
//     ['Lima',	2,	16,	4.6],
// ];

let locations = [];
let hrsOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm',
    '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total',]; // array of store's open hours + total
let salesTotals = []; // array to hold sales calcuated sales totals across all stores for hourly totals and daily grand total


function Store (storeInfo){

        this.name = storeInfo[0];
        this.minCust = storeInfo[1];
        this.maxCust = storeInfo[2];
        this.avgQty = storeInfo[3];
        this.sales = [];

}






// function store (name, minCust, maxCust, avgQty){
//     this.name = name;
//     this.minCust = minCust;
//     this.maxCust = maxCust;
//     this.avgQty = avgQty;
//     this.sales = [];

//     // // method to calculate sales data
//     // this.getSales = function(){
//     //     return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
//     // };



//     // // method to print sales data to webpage table
//     // this.render = function(){

//     //};
// }

addStore(storeInfo);

console.log(seattle);


// function declaration to create store location objects using locationInfo() constructor
function addStore(storeInfo) {
   //for(let i = 0; i < storeInfo.length; i++){
        //let storeInfo[i, 0] = new store(storeInfo[i]);
        let seattle = new Store(storeInfo[]);

       // let potato8 = new Potato("apple", "maroon", 24);

   // }

}



// function declaration to calcuate sales data for each store location


// function declaration to print column header


// function declaration to print column footer



// function to print sales data table

    // function call print column header

    // call render method to populate store data in for loop

    // function call print column footer






// // calculate hourly sales data and insert data into sales[] array
// function calcSales(i){
//     let salesTotal = 0; // holds iterating sum of the day's hourly sales
//     // hrsOpen.length - 1 to account for the added hrsOpen[] element to hold Total
//     for (let j = 0; j < hrsOpen.length - 1; j++){
//         // repeat the getSales() method from the store location oject to calculate sales data for each hour the store is open
//         locations[i].sales.push(locations[i].getSales());
//         // add hourly sales to the day's total sales
//         salesTotal += locations[i].sales[j];
//         // if end of day add the days's sales total to the end of the sales data array
//         // hrsOpen.length - 2 to account for the added hrsOpen[] element to hold Total
//         if (j === hrsOpen.length - 2){
//             // add the total sales to the end of sales[]
//             locations[i].sales.push(salesTotal);
//         }
//     }
// }

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
