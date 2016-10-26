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

var firstAndPike = {
  // MIN CUST= 23
  //MAX CUST= 65
  //AVG COOKIE= 6.3
};
var seaTacAirport = {
  // MIN CUST= 3
  //MAX CUST= 24
  //AVG COOKIE= 1.2
};
var seattleCenter = {
  // MIN CUST= 11
  //MAX CUST= 38
  //AVG COOKIE= 3.7
};
var capitolHill = {
  // MIN CUST= 20
  //MAX CUST= 38
  //AVG COOKIE= 2.3
};
var alki = {
  // MIN CUST= 2
  //MAX CUST= 16
  //AVG COOKIE= 4.6
};
