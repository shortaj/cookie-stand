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

var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  sales: [],
  calculator: function(i){
    this.sales[i]= Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookies);
    return this.sales[i];
  },
  renderHTML: function() {
    var sectionHTML = document.createElement('section');
    document.body.appendChild(sectionHTML);
    var h1HTML = document.createElement('h1');
    h1HTML.innerText = this.name;
    sectionHTML.appendChild(h1HTML);
    var ulHTML = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.calculator(i) + ' cookies';
      ulHTML.appendChild(li);
    }
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
      totalSales += this.sales[i];
    }
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ulHTML.appendChild(li);
    sectionHTML.appendChild(ulHTML);
  }
};
var seaTacAirport = {
  // MIN CUST= 3
  //MAX CUST= 24
  //AVG COOKIE= 1.2
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  sales: [],
  calculator: function(i){
    this.sales[i]= Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookies);
    return this.sales[i];
  },
  renderHTML: function() {
    var sectionHTML = document.createElement('section');
    document.body.appendChild(sectionHTML);
    var h1HTML = document.createElement('h1');
    h1HTML.innerText = this.name;
    sectionHTML.appendChild(h1HTML);
    var ulHTML = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.calculator(i) + ' cookies';
      ulHTML.appendChild(li);
    }
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
      totalSales += this.sales[i];
    }
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ulHTML.appendChild(li);
    sectionHTML.appendChild(ulHTML);
  }
};

var seattleCenter = {
  // MIN CUST= 11
  //MAX CUST= 38
  //AVG COOKIE= 3.7
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  sales: [],
  calculator: function(i){
    this.sales[i]= Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookies);
    return this.sales[i];
  },
  renderHTML: function() {
    var sectionHTML = document.createElement('section');
    document.body.appendChild(sectionHTML);
    var h1HTML = document.createElement('h1');
    h1HTML.innerText = this.name;
    sectionHTML.appendChild(h1HTML);
    var ulHTML = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.calculator(i) + ' cookies';
      ulHTML.appendChild(li);
    }
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
      totalSales += this.sales[i];
    }
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ulHTML.appendChild(li);
    sectionHTML.appendChild(ulHTML);
  }
};

var capitolHill = {
  // MIN CUST= 20
  //MAX CUST= 38
  //AVG COOKIE= 2.3
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  sales: [],
  calculator: function(i){
    this.sales[i]= Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookies);
    return this.sales[i];
  },
  renderHTML: function() {
    var sectionHTML = document.createElement('section');
    document.body.appendChild(sectionHTML);
    var h1HTML = document.createElement('h1');
    h1HTML.innerText = this.name;
    sectionHTML.appendChild(h1HTML);
    var ulHTML = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.calculator(i) + ' cookies';
      ulHTML.appendChild(li);
    }
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
      totalSales += this.sales[i];
    }
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ulHTML.appendChild(li);
    sectionHTML.appendChild(ulHTML);
  }
};
var alki = {
  // MIN CUST= 2
  //MAX CUST= 16
  //AVG COOKIE= 4.6
  name: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  sales: [],
  calculator: function(i){
    this.sales[i]= Math.floor((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.avgCookies);
    return this.sales[i];
  },
  renderHTML: function() {
    var sectionHTML = document.createElement('section');
    document.body.appendChild(sectionHTML);
    var h1HTML = document.createElement('h1');
    h1HTML.innerText = this.name;
    sectionHTML.appendChild(h1HTML);
    var ulHTML = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.calculator(i) + ' cookies';
      ulHTML.appendChild(li);
    }
    var totalSales = 0;
    for (i = 0; i < this.sales.length; i++) {
      totalSales += this.sales[i];
    }
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ulHTML.appendChild(li);
    sectionHTML.appendChild(ulHTML);
  }
};
firstAndPike.calculator();
firstAndPike.renderHTML();
seaTacAirport.calculator();
seaTacAirport.renderHTML();
seattleCenter.calculator();
seattleCenter.renderHTML();
capitolHill.calculator();
capitolHill.renderHTML();
alki.calculator();
alki.renderHTML();
