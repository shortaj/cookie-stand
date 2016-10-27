'use strict'

/*
Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
----------------|------------|------------|-------------------
1st and Pike    |      23    |     65     |        6.3
SeaTac Airport  |      3     |     24     |        1.2
Seattle Center  |      11    |     38     |        3.7
Capitol Hill    |      20    |     38     |        2.3
Alki            |      2     |     16     |        4.6

These numbers are simply Pat's estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we'll want the ability to update these numbers for each location, and to add/remove locations. But we'll not build all of that today. **Make sure to make each location is its own JavaScript object**.
*/
//Starting off Objects
// There are 5 locations, we need 5 objects that have the properties of CookieSales and several functions. CookieSales should be Math function that uses the initial data. It will be an RNG using the limits defined by location then multiplied by the average cookie/sales.
//Then we need to loop this function 14 times 6am-8pm. generating unique cookie sales for each hour.
//Finally we have make a function that adds all cookie sales at the bottom.
//
//HTML Generation
// The HTML currently does not have the body, h1, ul, or li tags we need. We must create them inside JS.
// To do this we must Document.create tag the body, h1, ul, and li. Fill each one with data as we go. Then append them to the Document in their proper locations.
//-----------------------------------------------------------------------------------------------------------------
//
// var sectionHTML = document.createElement('section');
// var h1HTML = document.createElement('h1');
// var ulHTML = document.createElement('ul');
// var liHTML = document.createElement('li');
//
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var table = document.createElement('table');
var tr = document.createElement('tr');
// var td = document.createElement('td');
function tableCreator () {
  document.body.appendChild(table);
  table.appendChild(tr);
  var td = document.createElement('td');
  td.innerText = ' ';
  tr.appendChild(td);
  for (var i = 0; i < hours.length; i++) {
    td = document.createElement('td')
    td.innerText = hours[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.innerText = 'Total Sales';
  tr.appendChild(td);
}
tableCreator();
function Store(name, minCust, maxCust, avgCookies) {
  this.name= name;
  this.minCust= minCust;
  this.maxCust= maxCust;
  this.avgCookies= avgCookies;
  this.sales= [];
  this.calculator= function(i){
    this.sales[i]= Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookies);
    return this.sales[i];
  };
  this.renderHTML= function() {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerText = this.name;
    tr.appendChild(td);
    for (var i = 0; i <= hours.length; i++) {
      td = document.createElement('td');
      td.innerText = this.calculator(i);
      tr.appendChild(td);
    }
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
      totalSales += this.sales[i];
    }
    td.innerText = totalSales + ' cookies';
    tr.appendChild(td);
    table.appendChild(tr);
  }
  this.calculator();
  this.renderHTML();
}
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

firstAndPike;
seaTac;
seattleCenter;
capitolHill;
alki;
// 1st and Pike    |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center  |      11    |     38     |        3.7
// Capitol Hill    |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6
