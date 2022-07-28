'use strict';

let seattle = {
    cityName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgQty: 6.3,
    getSales: function(minCust, maxCust){
        return Math.floor(Math.random() * (minCust - maxCust + 1) + minCust );
    }
};

let tokyo = {
    cityName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgQty: 1.2,
};

let dubai = {
    cityName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgQty: 3.7,
};

let paris = {
    cityName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgQty: 2.3,
};

let lima = {
    cityName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgQty: 4.6,
};

console.log(seattle);

for (let i =- 0; i < faveFoods.length; i++){
    // step 1 
    let li1 = document.createElement('li');
    // step 2
    li1.innerText = faveFoods[i];
    // step 3
    list.appendChild(li1);