'use strict'

var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var header = document.createElement('header');
document.body.appendChild(header);
var div = document.createElement('div');
header.appendChild(div);
var table = document.createElement('table');
var tr = document.createElement('tr');
tr.setAttribute('id', 'tableTop');
var forms = document.createElement('form');
document.body.appendChild(forms);
var sectionData = document.createElement('section');
sectionData.setAttribute('id', 'data');
document.body.appendChild(sectionData);
var sectionTotals = document.createElement('section');
sectionTotals.setAttribute('id', 'totals');
document.body.appendChild(sectionTotals);
var lastTable = document.createElement('table');
lastTable.setAttribute('id', 'lastTr');
sectionTotals.appendChild(lastTable);

var inputConstructor = function(itype, id, iname , step){
  var input = document.createElement('input');
  input.setAttribute('type', itype);
  input.setAttribute('name', iname);
  input.setAttribute('id', id);
  input.setAttribute('step', step);
  forms.appendChild(input);
  var br = document.createElement('br');
  forms.appendChild(br);
}

function brRender(labelText) {
  var label = document.createElement('label');
  label.innerText = labelText;
  forms.appendChild(label);
  var br = document.createElement('br');
  forms.appendChild(br);
}

var nameInput = function(itype, id, iname) {
  var name = document.createElement('input');
  name.setAttribute('type', itype);
  name.setAttribute('name', iname);
  name.setAttribute('id', id);
  forms.appendChild(name);
  var br = document.createElement('br');
  forms.appendChild(br);
}

brRender('Store Name:');
nameInput('text', 'name', 'storename');
brRender('Minimum Customers:');
inputConstructor('number', 'minimum', 'mincust', '1');
brRender('Maximum Customers:');
inputConstructor('number', 'maximum', 'maxcust', '1');
brRender('Average Cookie Sales:');
inputConstructor('number', 'average', 'avgcookies', '0.1');
brRender('');

var input = document.createElement('input');
input.setAttribute('type', 'submit');
input.setAttribute('value', 'Submit!');
input.setAttribute('id', 'btn');
forms.appendChild(input);
var inputName = document.getElementById('name');
var inputMini = document.getElementById('minimum');
var inputMax = document.getElementById('maximum');
var inputAvg = document.getElementById('average');
var btn = document.getElementById('btn')
btn.addEventListener('click', function(event){
  event.preventDefault();
  if (userCheck) {
    clearValues();
    alert('Numbers please.')
  } else {
    console.log(inputMini.value);
    var userStore = new Store(inputName.value, (parseInt(inputMini.value)), (parseInt(inputMax.value)), (parseFloat(inputAvg.value)));
    clearValues();
    userStore;
    redo();
  }
});
function redo () {
  document.getElementById('lastTr').deleteRow(0);
  hourlyTotals();
}
function clearValues() {
  inputName.value = '';
  inputMini.value = '';
  inputMax.value = '';
  inputAvg.value = '';
}
var numberCheck = function(type) {
  return isNaN(parseInt(type)) === false;
}

var userCheck = (numberCheck(inputMini.value) || numberCheck(inputMax.value) || numberCheck(inputAvg.value));

function hourTable() {
  for (var i = 0; i < hours.length; i++) {
    var td = document.createElement('td')
    td.innerText = hours[i];
    tr.appendChild(td);
  }
}


function tableCreator () {
  sectionData.appendChild(table);
  table.appendChild(tr);
  var td = document.createElement('td');
  td.innerText = ' ';
  tr.appendChild(td);
  hourTable();
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
    td.setAttribute('class', 'storeNames');
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
  };
  this.storeArray= function() {
    allStores.push(this);
  }
  this.storeArray();
  this.calculator();
  this.renderHTML();
}
function hourlyTotals() {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.setAttribute('id', 'hourlyTotals');
  td.innerText = 'Hourly Totals';
  lastTable.appendChild(tr);
  tr.appendChild(td);
  for (var i = 0; i < hours.length; i++) {
    var td = document.createElement('td');
    td.innerText = hourCalc(i);
    tr.appendChild(td);
  }
  function grandTotal() {
    var td = document.createElement('td');
    td.setAttribute('id', 'gTotal');
    var gtotal = 0;
    for(var i = 0; i < hours.length; i++) {
      gtotal += hourCalc(i);
    }
    td.innerText = gtotal + 'cookies';
    tr.appendChild(td);
  }
  grandTotal();
}
var hourCalc = function (i) {
  var total = 0;
  for(var j = 0; j <allStores.length; j++) {
    total += allStores[j].sales[i];
  }
  return total;
}
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
for (var i = 0; i < allStores.length; i++) {
  allStores[i];
}
hourlyTotals();
