console.log('Hey There!!');

var firstname = 'Leela Aditya';
var age = 27;

var fullage = true;
console.log(fullage);

//Goals
/* This is a lifetime goal */
var lastName, job, relStat, isMarried;
job = 'UI Dev'
console.log(job);

//Variable Mutations
var firstName = 'Aditya';
age = 'twenty seven'
relStat = 'single';
married = false;

//Type Coercion
//console.log(firstName + ' Mut V and the age:' + age + " " + relStat);

//Alerts and Prompts + Inputs
//alert(firstName + ' \'s age:' + age + ' and ' + 'Is Married: ' + married);
lastname = prompt('what is aditys last name?');

console.log(firstname + ' ' + lastname + '...He is -' +age + '- years old');

//Operators
var now, birthYear, legalAge;
//var date = new Date(); //Squeeze this into next line
now = (new Date()).getFullYear();
birthYear = 1993;
legalAge = 21;
fullage = now - birthYear >= legalAge;
//..Read about Operator Precedence in link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(fullage);


//Basix Challenge:
//Adityas BMI past vs now.
var yr, y16, y18, y20, hght, bm1, bm2, bm3, leanest;
var leanYear = false;
hght = 1.78;
yr = prompt(`What is ${lastname} age in last 3 years - Comma seperated please`);
const yrclc = yr.split(',');

// y16 = prompt('Whats Adis weight (KGs) in 2016 is...' );
// y18 = prompt('Whats Adis weight in 2018 is...' );
// y20 = prompt('Whats Adis weight in 2020 is...' );

bm1 = yrclc[0]/(Math.pow(hght,2)); //Not as fast in all browsers
bm2 = yrclc[1]/(hght*hght); //Fastest
bm3 = yrclc[2]/(hght**2); //ES6

leanest = Math.min(bm1,bm2,bm3);
console.log('leanest = ',leanest);

if (leanest === bm3){
    leanYear = true;
    console.log('lean year : 2020, with BMI of ..'+bm3)
} else if (leanest === bm2) {
    console.log('This years is leanest? ' + leanYear+' & lean year : unknown');
} else {
    console.log('This years is leanest? ' + leanYear+' & lean year : unknown');
}

//Terenary & Switch