/* Created by: Titus diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-assignment-6-html/sw.js", {
    scope: "/ICS2O-assignment-6-html/",
  })
}

/**
 * Input.
 */

 const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("image").innerHTML =
    '<img src="' + 
      jsonData.image + 
      '" alt="API fox image" ' +
      '>'
  } catch (err) {
    console.log(err)
  }
}

getImage("https://randomfox.ca/floof/")
