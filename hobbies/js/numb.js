


//Global Javascript Object Number
// Create a variable to hold the number that will be used
var originalNumber = 3.2666667;
// Create a variable to hold a message that will be shown on the page
var msg2 = '<h2>Length of the video</h2><p>' + originalNumber + ' mins</p>';
// Round the number to 3 decimal places and add it to the msg variable
msg2 += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + ' mins</p>';
// Round the number to a precisely 3 digits and add it to the msg variable
msg2 += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + ' mins</p>';

// Create a variable called el to hold the element whose id attribute has a value of info
var el2 = document.getElementById('info2');
// Write the message into that element
el2.innerHTML = msg2;




