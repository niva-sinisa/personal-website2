// Create variables and assign their values
//data type: boolean (+3) 
var yes;
var no;
var number;

//data type: numeric (+3) 
number=2;

no = false;
yes = true;

// Get the element that has an id of stock
var elno = document.getElementById('no');
var elyes = document.getElementById('yes');
// Set class name with value of inStock variable
elno.className = no;
elyes.className=yes;

var el = document.getElementById('number');
el.textContent = number + 'yrs'; // involve the concatenation string operator (+) in your code (+5)




// Each of your objects must contain at least one property (+3)
function Hobbies(name, endYear, startYear) {
  this.name = name;
  this.endYear = endYear;
  this.startYear = startYear;

  
//method (+3) without parameters in your object(s).
  this.numberofYears = function() { 
    return this.endYear - this.startYear;
  };

//method (+3) with parameters in your object(s).
  this.add1 = function(ans){
    return ans + 1;
  };
}


 //Create multiple objects (+4) based on the constructor notation method.

// Create two hotel objects
var hob1 = new Hobbies('Dance', 2022 ,2004 );
var hob2 = new Hobbies('Art', 2022, 2010);


// Update the HTML for the page
var details1 = hob1.name + ' Years: ';
    details1 += hob1.numberofYears() + ' updated to: '+ hob1.add1(hob1.numberofYears()) ;

var elHob1 = document.getElementById('hob1');
elHob1.textContent = details1;

var details2 = hob2.name + ' Years: ';
    details2 += hob2.numberofYears() + ' updated to: '+ hob2.add1(hob2.numberofYears()) ;
var elHob2 = document.getElementById('hob2');
elHob2.textContent = details2;





//Using event listeners to bind a function with parameters (+12)



var elUsername = document.getElementById('email');   // Username input
var elMsg      = document.getElementById('feedback');   // Error msg element

function checkUsername(minLength) {                     // Declare function
  if (elUsername.value.length < minLength) {            // If username too short
    // Set the error message
    elMsg.innerHTML = '**Enail must be ' + minLength + ' characters or more**';
  } else {                                             // Otherwise
    elMsg.innerHTML = '';                              // Clear msg
  }
}

elUsername.addEventListener('blur', function() {        // When it loses focus
  checkUsername(5);                                     // Pass argument here
}, false); 