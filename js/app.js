'use strict';

let seattle = {
    locName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgQty: 6.3,
    sales: [],
    getSales: function(){
        return Math.floor(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let tokyo = {
    locName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgQty: 1.2,
    sales: [],
    getSales: function(){
        return Math.floor(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let dubai = {
    locName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgQty: 3.7,
    sales: [],
    getSales: function(){
        return Math.floor(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let paris = {
    locName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgQty: 2.3,
    sales: [],
    getSales: function(){
        return Math.floor(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

let lima = {
    locName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgQty: 4.6,
    sales: [],
    getSales: function(){
        return Math.floor(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgQty);
    }
};

//let locations = [seattle, tokyo, dubai, paris, lima];
let locations = [seattle]
let hrsOpen = ['6am','7am','8am','9am','10m','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

console.log(seattle);
console.log(seattle.getSales());

for (let i = 0; i < locations.length; i++){

    // let report = document.getElementById(locations[i].locName);

    for (let j =- 0; j < hrsOpen.length; j++){

        locations[i].sales.push(locations[i].getSales());

        // let hourSales = document.createElement('li');
        // hourSales.innerText = hrsOpen[j] + ': ' + locations[i].getSales() + ' cookies';
        // report.appendChild(hourSales);

    }

}

console.log(seattle.sales);