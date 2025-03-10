

var quotient=1;

quotient++;


console.log(quotient)

quotient--;
 quotient ++;
 
console.log(quotient)


var myNum=87;

myNum=myNum+5;

console.log(myNum)

var ourDecimal=30.4;

console.log(ourDecimal)

var product;

product=ourDecimal*10.5;

console.log(product)


var remainder;

remainder=5%10;

console.log(remainder)


//Compound Assignment with Augmented Addition

let x = 10;
x += 5;  // Equivalent to x = x + 5;
console.log(x);

//Compound Assignment with Augmented Subtraction

let y = 50;
y -= 10;  //y=y-10
console.log(y);


//Escaping Literal Quotes in Strings

var str="I am a \' double quotes"



var str1="First Line:This is JS Course \nClass 1 about the \"Basics of JS\" \nWeek 1 "

console.log(str1)


//Quoting Strings with Single Quotes


//Escape Sequences in Strings

/*
First Line:This is JS Course 
Class 1 about the 'Basics of JS"
Week 1

\'-----single quote
\" ------ double quotes
\\ ------ backslash
\n ------ display a new line
\r ---- return
\t ----- insert a tab
\b -----insert a backspace

*/
var a;
var b;

a="My Name is Najiyya"
b="I am a Software Engineer"
var c;

c=a+b;

console.log(c)
//Concatenating Strings with PLUS (+) Operator

myStr="This is the start"+"This is the end";

console.log(myStr)


var ourStr="I come first";

ourStr+="I come second";

console.log(ourStr)



//appending variables to strings


//you can append variables to string with this "+=" operator, 


var firstName= "Bob";
var lastName="David";

firstName+=lastName;

var someAdjective="worthwhile";
var mystr="Learning to code";


mystr+=someAdjective;

//find length of string

var firstNamelength=0;
var myName="JohnHoppkins";

firstNamelength=myName.length;

var mynum1=456789;

var mynumLength=mynum1.length;

//Bracket Notation to find first character in a string

var Firstcharacteroffirstname="";

Firstcharacteroffirstname=firstName[0];


//String Immutability
//string are immutable which means they can't be altered once created
//this means individual character can't be changed

var mystr5="Hello Corld";

mystr5[6]="W"; //WILL THROW ERROR BECAUSE OF THE IMMUTABILITY OF THE STRINGS (you can change the whole word)..

mystr5="Hello World!";

//Bracket Notation to find NTH Character in String
//you can find second, third, fourth or any position inside the string like [1],[3] etc..

var firstName3="Ada";

var lastletterofFirstName=firstName3[firstName3.length-1];

//Bracket Notation to find Nth-to-last character in string....
//3rd last,4th last, 5th last etc letter

var thirdToLastLetterofFirstName=firstName3[firstName3.length-3];  //it will give 3th last letter..
var secondToLastLetterofFirstName=firstName3[firstName3.length-2];  //it will give 2th last letter..


//FUNCTIONS IN JAVASCRIPT

function myfunc(var1,var2){

    var result="";

    result+="The"+var1+"is my fav animal but"+var2+"is my most fav";


    return result;

}

console.log(myfunc("dog","cat"));

console.log(myfunc("cow","sheep"));



//ARRAY IN JAVASCRIPT (Storing multiple values in Arrays)

//array allows you to store several pieces of data in one place...
//always starts with a bracket and end with a bracket...

var ourArray=["Najiyya",123];

//Nested Arrays...or Multidimensional Array

var array1=[[123,"najia"],[234,"najiyya"]];





