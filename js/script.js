// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict";

/**
 * This function calculates the pay for museum admisstion 
 */
function calculate () {
  
  // user age input
  let userage = parseFloat(document.getElementById('Uage').value);
  let days = (document.getElementById('days').value);
  let price = ""
  
  // If statments for admisstion fee
  if ((userage <=5) || (userage>=95)) {
   
    price = "Free."
   
 }
  else if (((userage >=12) && (userage<=21)) || ((days == "Thursday") || (days == "Tusday"))) {
     price = "Discounted price."
  }
   
  else {
    price = "Regular price."
}

  // output discount
  document.getElementById('movie-display').innerHTML = price 

}
 