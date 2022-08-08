'use strict';

let hrsOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm',
    '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total',]; // array of store's open hours + total
let grandTotals = Array(hrsOpen.length).fill(0); // array to hold calculated sales across all stores for hourly and daily grand totals

// constructor to create new store location objects
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

// store object method to print the body of the sales report
Store.prototype.renderReport = function(){
    // select the 'table-body' html id container element
    let tableBody = document.getElementById('table-body');
    // create new table row element for body of sales report
    let bodyRow = document.createElement('tr');
    // print store location name in a header cell
    let storeLoc = document.createElement('th');
    storeLoc.innerText = this.name;
    tableBody.appendChild(storeLoc);
    // print the hourly and daily sales total for the store location
    for(let j = 0; j < this.sales.length; j++){
        let salesData = document.createElement('td');
        salesData.innerText = this.sales[j];
        tableBody.appendChild(salesData);
        tableBody.appendChild(bodyRow);
    }
};

// main function that will call other functions to generate cookies sales by location and print sales report
function runSalesReport(){
    // print the sales report header row
    printReportHeader();
    // calculate the sales data and print the sales report body
    for (let i = 0; i < stores.length; i++){
        // calculate cookies sales for each store location
        calcSales(i);
        // call render method to populate store data in for loop
        stores[i].renderReport();
    }
    // function call print column footer
    printReportFooter();
}

// function to print the sales report header row using hours of operation in hrsOpen[]
function printReportHeader(){
    // select the 'table-header' html id container element
    let tableHeader = document.getElementById('table-header');
    // create new table row element for header
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
    // remove any existing totals (table footer) row from sales report table - this is needed for when totals row is re-rendered after a storeForm submission
    document.getElementById('table-footer').innerHTML = ''; // borrowed from solution @ https://stackoverflow.com/questions/63442859/reset-dom-table-on-form-submit
    // select the 'table-footer' html id container element
    let tableFooter = document.getElementById('table-footer');
    // create new table row element for sales totals footer
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

// event listener to add new store location from HTML form
let storeForm = document.getElementById('storeForm');
storeForm.addEventListener('submit', addStore);

// event handler to add new store location from HTML form
function addStore(event) {
    event.preventDefault();
    let form = event.target;
    let name = properCase(form.name.value); // send user submitted name to properCase() to normalize upper/lower case
    let minCust = form.minCust.value;
    let maxCust = form.maxCust.value;
    let avgQty = form.avgQty.value;

    // check if submitted store is already in the stores[] array
    let found = false; // boolean flag used when searching if submitted store name matches an existing store
    let index = null; // number variable to save the index location in stores[] if submitted name match is found
    for (let i = 0; i < stores.length; i++) {
        // if the submitted store is found then set the found and index variables accordingly for use later
        if (name == stores[i].name){ // eslint-disable-line
            found = true;
            index = i;
            //console.log(`I FOUND ${name} at stores[${index}]`);
            break;
        }
    }

    // if the submitted store was found in stores[] (found === true) then update the existing store sales data and grand totals
    if (found === true) {
        // send store info to the updateExistingStore() function to update existing store with new sales values
        updateExistingStore(index, minCust, maxCust, avgQty);
    } else { // else the submitted store was not found in stores[] (found === false) then create the new store object and update the grand totals
        // create new store object with form values
        let store = new Store(name, minCust, maxCust, avgQty);
        // add new store object to end of stores array
        stores.push(store);
        // update the sales report with the new store
        updateNewStore();
    }

    // reset the form to blank fields
    document.getElementById('storeForm').reset();
}

// function to normalize the user's input of store location name so that the first character is upper case with remaining chars lower case
function properCase(nameString) { // borrowed solution @ https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    // set the entire string to lower case
    nameString = nameString.toLowerCase();
    // return string with the first character made upper case
    return nameString.charAt(0).toUpperCase() + nameString.slice(1);
}

// function to update the sales report if a new store is added via the HTML form
function updateNewStore() {
    // calculate sales for a new store location (last item store[]) with updated grand totals
    calcSales(stores.length-1);
    // insert new store sales data into sales report
    stores[stores.length-1].renderReport();
    // re-render the totals/footer row using the updated totals
    printReportFooter();
}

// function to update an existing store location with new customer data, and recalcutate sales and grand totals
function updateExistingStore(index, newMin, newMax, newAvg) {
    // update store location customer and avg sales values
    stores[index].minCust = newMin;
    stores[index].maxCust = newMax;
    stores[index].avgQty = newAvg;
    // subtract store's previous sales data from the grand totals
    for (let i = 0; i < grandTotals.length; i++){
        grandTotals[i] -= stores[index].sales[i];
    }
    // reset the location's sales[] array to initialize it for re-calcuating sales
    stores[index].sales = [];
    // calculate updated sales data
    calcSales(index);
    // clear existing sales report table-body content to initialize it for re-rendering
    document.getElementById('table-body').innerHTML = '';
    // re-render sales report
    for (let i = 0; i < stores.length; i++){
        // call render method to populate store data in for loop
        stores[i].renderReport();
    }
    // re-render the totals/footer row using the updated grand totals
    printReportFooter();
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
