
// Loops: code at least one loop (+8)

var hours = [9, 5, 8];      // Array of scores
var arrayLength = hours.length;// Items in array
var roundNumber = 0;            // Current round
var ans = '';                   // Message

// Loop through the items in the array
for (var i = 0; i < arrayLength; i++) {

  // Arrays are zero based (so 0 is round 1)
  // Add 1 to the current round
  roundNumber = (i + 1);

  // Write the current round to message
  ans += 'Number of Hours taken by artpiece ' + roundNumber + ': ';

  // Get the score from the scores array
  ans += hours[i] + ' <br/>';
}

document.getElementById('artHrs').innerHTML = ans;


// Each of your objects must contain at least one property

var art = new Object();

art.name ='Art1';
art.Year="2016";
art.current = "2022";

//method (+3) without parameters in your object(s).
art.numberofYears = function(){
  return this.current - this.Year;
};

var details1 = art.name + ' has been ' ;
details1 += art.numberofYears() + ' years old'
var elArt1 = document.getElementById('art1');
elArt1.textContent = details1;




