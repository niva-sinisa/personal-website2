//  Define several (at least 3 (+3)) tasks/functionalities that you would provide to enhance 
// the usability and interactivity of your website, and then follow the following three steps 
// to design/implement each of the functionalities
// (a) define the goal
// (b) design the script (i.e., using flowchart, or pseudocode)
// (c) code each step using JavaScript and test




// Create a separate folder (+2) (i.e. “js”) to hold all your JavaScript files, while linking them 
//with your HTML code by using a <script> tag.




var today = new Date();
var hourNow = today.getHours();
var greeting; //data type: string (+3) 



if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!'; 
}


function updateMessage() { 
var elGreet = document.getElementById('hi'); 
elGreet.textContent = greeting;
} 
updateMessage();

//global JavaScript object math, date(+4)
// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Get the year this year
var year = today.getFullYear();
// Set the date that the company was established
var est = new Date('Feb 21, 2000 15:45:55');
// Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = (difference / 31556900000); 

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('age');
// Write the message into that element.
elMsg.textContent = Math.floor(difference) + ' years old';



//Decisions: involve at least one decision (i.e., either if or switch statement) (+4)

var pass = 50;      // Pass mark
var score = 75;    // Current score
var msg;            // Message

// Select message to write based on score
if (score > pass) {
  msg = 'Congratulations, you have been granted access to me page!';
} else {
  msg = 'Have another go!';
}

var el = document.getElementById('access');
el.textContent = msg;


//  use an array(s) (+5) to implement at least a certain functionality of 
// your project;

// Create an array and assign it values.
var word; 
word = ['button', 'icon', 'option'];

// Show the first item from the array.
var el = document.getElementById('word');
el.textContent = word[0];