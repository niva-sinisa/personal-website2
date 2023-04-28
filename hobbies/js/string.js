//Global Javascript Object String(+4)

// Create a variable called saying to hold the string that will be used
var saying = 'Graphic Design';
// Create a variable called msg to hold a message that will be shown on the page
// Convert the string to uppercase and add it to the msg variable
var msg = '<b>uppercase</b>:-'  + ' ' + saying.toUpperCase()  + ' | ';
// Convert the string to lowercase and add it to the msg variable
msg += '<b>lowercase</b>:-'  + ' ' + saying.toLowerCase()  + ' | ';
// Find the character with an index of 12 in the string and add it to the msg variable
msg += '<b>character index: 12</b>:-'  + ' ' + saying.charAt(12)  + ' | ';
// Find the characters with an index number in the 8-14 range in the string and add it to the msg variable
msg += '<b>character index: 8-14</b>:-'  + ' ' + saying.substring(8, 14) + ' | ';
// Find the first instance of 'de' in the string and replace it with a 'd' character and add it to the msg variable
msg += '<b>replace</b>:-'  + ' ' + saying.replace('ap', '**') + ' ';

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
// Write the message into that element
el.innerHTML = msg;






// // ADDING ITEMS TO START AND END OF LIST
// var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

// // First, add a new item to the start of the list (+3)
// // ADD NEW ITEM START OF LIST
// var newItemFirst = document.createElement('li');                   // Create element
// var newTextFirst = document.createTextNode('Photography ');                // Create text node
// newItemFirst.appendChild(newTextFirst);                            // Add text node to element
// list.insertBefore(newItemFirst, list.firstChild);                   // Add element to list

// // Then, remove the last item in the list (+3)
// var last = document.getElementsByTagName('li')[4]; 
// list.removeChild(last);


// // Finally, update the text and markup of the second item with innerHTML property (+4)

// // Store the first list item in a variable
// var secItem = document.getElementById('two');

// // Get the content of the first list item
// var itemContent = secItem.innerHTML;

// // Update the content of the first list item so it is a link 
// secItem.innerHTML = 'view' + '<a href="https://www.instagram.com/happyfeet.arts/">' + '<em>' +itemContent+ '<em>'+ '</a>';


// var listItems = document.querySelectorAll('li');                   // All <li> elements

// // Set a new class attribute value (the attribute should already exist in your HTML code) on all the items of the list (+4
// // ADD A CLASS OF COOL TO ALL LIST ITEMS
// var i;                                                             // Counter variable
// for (i = 0; i < listItems.length; i++) {                           // Loop through elements
//   listItems[i].className = 'cool';                                 // Change class to cool
// }

// // Add the number of list items in the end of the introduction sentence (+3)
// // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// var heading = document.querySelector('h2');                        // h2 element
// var headingText = heading.firstChild.nodeValue;                    // h2 text
// var totalItems = listItems.length;                                 // No. of <li> elements
// var newHeading =  headingText + ' <span>' + totalItems + '</span>:'; // Content
// heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup

